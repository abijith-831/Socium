import Advertisements from "./Advertisements"
import BirthDays from "./BirthDays"
import FriendRequest from "./FriendRequest"
import UserInfoCard from "./UserInfoCard"
import UserMediaCard from "./UserMediaCard"

const RightMenu = ({userId}: {userId?: string }) => {
  
  return (
    <div className="flex flex-col gap-6 "> 
    {userId ? (
      <>
        <UserInfoCard userId={userId}/>
        <UserMediaCard userId = {userId}/>
      </>
    ) : null}
      <FriendRequest/>
      <BirthDays/>
      <Advertisements size="md"/>
    </div>
  )
}

export default RightMenu
