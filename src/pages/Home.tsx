import { Postcard, Storybar, SuggestionBox } from "../components/exports"

const Home = () => {
  return (
    <div className="flex justify-between">
      <div className='w-[65%] flex flex-col items-center py-8'>
        <Storybar />
        {/* {data?.map((index, iter) => {
          return <PostCard key={iter} userId={index.user.id} userImage={index.user.profilePic} savedp={index.savedBy.includes(_id)} likedp={index.likedBy.includes(_id)} postId={index._id} caption={index.caption} img={index.imgPath} likes={index.likes} timePosted={index.timePosted} verified={index.verified} comments={index.comments.length} viewerId={_id} />
        })} */}
        <Postcard userId={"Hello123"} userImage={"/assets/images/profile.png"} savedp={true} likedp={true} postId={1235} caption={"fddfv dfdfvdf"} img={[{path:'/assets/images/profile.png',originalname:"gdgdfg"}]} likes={21} timePosted={123124334534} verified={true} comments={0} />
        <Postcard userId={"Hello123"} userImage={"/assets/images/profile.png"} savedp={true} likedp={true} postId={1235} caption={"fddfv dfdfvdf"} img={[{path:'/assets/images/profile.png',originalname:"gdgdfg"}]} likes={21} timePosted={123124334534} verified={true} comments={0} />
        <Postcard userId={"Hello123"} userImage={"/assets/images/profile.png"} savedp={true} likedp={true} postId={1235} caption={"fddfv dfdfvdf"} img={[{path:'/assets/images/profile.png',originalname:"gdgdfg"}]} likes={21} timePosted={123124334534} verified={true} comments={0} />
        <Postcard userId={"Hello123"} userImage={"/assets/images/profile.png"} savedp={true} likedp={true} postId={1235} caption={"fddfv dfdfvdf"} img={[{path:'/assets/images/profile.png',originalname:"gdgdfg"}]} likes={21} timePosted={123124334534} verified={true} comments={0} />
      </div>
      <SuggestionBox />
    </div>
  )
}

export default Home