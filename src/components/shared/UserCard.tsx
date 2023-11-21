import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";

type UserCardProps ={
    user:Models.Document;
}
const UserCard = ({user}:UserCardProps) => {
  const {data:currentUser} = useGetCurrentUser()
  // console.log(currentUser,user)
  return (
    <Link to={`/profile/${user.$id}`} className="user-card min-h-[250px]">
        <img src={user.imageUrl || "/assets/icons/profile.svg"} alt="profile"  className="rounded-full w-14 h-14"/>

        <div className="flex-center flex-col gap-1">
        <p className="base-medium text-light-1 text-center line-clamp-1">
            {user.name}
        </p>
        <p className="small-regular text-light-3 text-center line-clamp-1">
          @{user.username}
        </p>
        </div>
        { currentUser?.$id !== user.$id && (
        <Button type="button" size="sm" className="shad-button_primary px-5">
            Follow 
        </Button>
        )}
        
    </Link>
  )
}

export default UserCard