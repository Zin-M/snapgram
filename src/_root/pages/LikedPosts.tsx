import GridPostList from "@/components/shared/GridPostList"
import Loader from "@/components/shared/Loader"
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations"

const LikedPosts = () => {
  const {data:currentUser} = useGetCurrentUser()
  if(!currentUser){
    return (
      <div className="flex-center w-full h-full">
          <Loader/>
      </div>
    )
  }
  return (
    <>
      {currentUser.liked.lenght === 0 && (
        <p className="text-light-4">
          No liked postes
        </p>
      )}
      <GridPostList posts={currentUser.liked} showStats={false}/>
    </>
  )
}

export default LikedPosts