import { User } from "@prisma/client"
import Advertisements from "../Advertisements"
import BirthDays from "./BirthDays"
import FriendRequest from "./FriendRequest"
import UserInfoCard from "./UserInfoCard"
import UserMediaCard from "./UserMediaCard"

const RightMenu = ({user}: {user?: User }) => {
  
  return (
    <div className="flex flex-col gap-6 "> 
    {user ? (
      <>
        <UserInfoCard user={user}/>
        <UserMediaCard user = {user}/>
      </>
    ) : null}
      <FriendRequest/>
      <BirthDays/>
      <Advertisements size="md"/>
    </div>
  )
}

export default RightMenu
