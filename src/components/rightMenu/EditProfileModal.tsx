import React, { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import { User } from '@prisma/client'

interface EditProfileModalProps {
  user: User
  onClose: () => void
}

interface CropArea {
  x: number
  y: number
  width: number
  height: number
}

interface Point {
  x: number
  y: number
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ user, onClose }) => {
  const [formData, setFormData] = useState({
    username: user.username || '',
    description: user.description || '',
    city: user.city || '',
    school: user.school || '',
    work: user.work || '',
    website: user.website || ''
  })

  // Image preview states
  const [coverPreview, setCoverPreview] = useState<string | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  
  // Cropping states
  const [showCropper, setShowCropper] = useState(false)
  const [cropImage, setCropImage] = useState<string | null>(null)
  const [cropType, setCropType] = useState<'cover' | 'avatar'>('avatar')
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<CropArea | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'cover' | 'avatar') => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const result = event.target?.result as string
        setCropImage(result)
        setCropType(type)
        setShowCropper(true)
      }
      reader.readAsDataURL(file)
    }
  }

  const onCropComplete = useCallback((croppedArea: CropArea, croppedAreaPixels: CropArea) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const createCroppedImage = useCallback(async (
    imageSrc: string,
    pixelCrop: CropArea
  ): Promise<string> => {
    const image = new Image()
    image.src = imageSrc
    
    return new Promise((resolve) => {
      image.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')!
        
        canvas.width = pixelCrop.width
        canvas.height = pixelCrop.height
        
        ctx.drawImage(
          image,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        )
        
        resolve(canvas.toDataURL('image/jpeg', 0.8))
      }
    })
  }, [])

  const handleCropSave = useCallback(async () => {
    if (!cropImage || !croppedAreaPixels) return

    try {
      const croppedImage = await createCroppedImage(cropImage, croppedAreaPixels)
      
      if (cropType === 'cover') {
        setCoverPreview(croppedImage)
      } else {
        setAvatarPreview(croppedImage)
      }
      
      setShowCropper(false)
      setCropImage(null)
    } catch (error) {
      console.error('Error cropping image:', error)
    }
  }, [cropImage, croppedAreaPixels, cropType, createCroppedImage])

  const handleCropCancel = () => {
    setShowCropper(false)
    setCropImage(null)
    setCrop({ x: 0, y: 0 })
    setZoom(1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    try {
      const res = await fetch('/api/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: user.id,
          ...formData,
          avatar: avatarPreview, // URL of uploaded profile picture
          cover: coverPreview     // URL of uploaded cover picture
        })
      })
  
      const data = await res.json()
  
      if (data.success) {
        console.log('Updated user:', data.user)
        onClose()
      } else {
        console.error(data.error)
      }
    } catch (err) {
      console.error('Update failed:', err)
    }
  }
  

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (showCropper) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-lg mx-4 h-[600px] flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              Crop {cropType === 'cover' ? 'Cover' : 'Profile'} Image
            </h3>
            <button 
              onClick={handleCropCancel}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          
          <div className="relative flex-1 bg-gray-100 rounded-lg overflow-hidden">
            <Cropper
              image={cropImage || ''}
              crop={crop}
              zoom={zoom}
              aspect={cropType === 'cover' ? 16/9 : 1}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              cropShape={cropType === 'avatar' ? 'round' : 'rect'}
            />
          </div>
          
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zoom
              </label>
              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div className="flex gap-3">
              <button onClick={handleCropCancel} className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors" >  Cancel  </button>
              <button  onClick={handleCropSave}  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"> Save Crop </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50" onClick={handleBackdropClick}>
      <div className="bg-white rounded-lg p-6 w-full max-w-xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Edit Profile</h2>
          <button  onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl" >× </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Cover Photo and Profile Picture Section */}
          <div className="relative mb-6">
            {/* Cover Photo */}
            <div className="w-full h-32 justify-center bg-gray-200 rounded-md overflow-hidden">
              <img src={coverPreview || user.cover || '/default-cover.jpg'} alt="Cover" className="w-full h-full object-cover" />
            </div>
            <label className="absolute top-2 right-2 bg-[#d2f8ab] px-2 py-1 text-sm rounded cursor-pointer hover:transition-transform hover:scale-110 duration-300"> Change Cover
              <input type="file"  name="coverPicture"  accept="image/*"  className="hidden"  onChange={(e) => handleImageChange(e, 'cover')}/>
            </label>

            {/* Profile Picture */}
            <div className="absolute -bottom-8 left-40 md:left-55">
              <div className="relative w-20 h-20">
                <img  src={avatarPreview || user.avatar || '/default-avatar.jpg'}  alt="Profile"  className="w-20 h-20 rounded-full border-4 border-white object-cover"/>
                <label className="absolute bottom-0 right-0 bg-white/80 p-1 rounded-full cursor-pointer hover:bg-white">
                  ✎
                  <input  type="file"  name="profilePicture"  accept="image/*"  className="hidden"  onChange={(e) => handleImageChange(e, 'avatar')}/>
                </label>
              </div>
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input type="text"   name="username"   value={formData.username}   onChange={handleInputChange}   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"   required />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea name="description" value={formData.description} onChange={handleInputChange} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about yourself..." />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Where do you live?"/>
          </div>

          {/* School */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              School
            </label>
            <input type="text" name="school" value={formData.school} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Which school did you attend?"/>
          </div>

          {/* Work */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Work
            </label>
            <input  type="text"  name="work"  value={formData.work}  onChange={handleInputChange}  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder="Where do you work?" />
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website
            </label>
            <input  type="url"  name="website"  value={formData.website}  onChange={handleInputChange}  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"  placeholder="https://yourwebsite.com" />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors" >Cancel</button>
            <button type="submit" className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors" >   Save Changes </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfileModal