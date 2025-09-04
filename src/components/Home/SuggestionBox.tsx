import UserCard from './UserCard'
import SuggestionFooter from './SuggestionFooter'
// import { useSelector } from 'react-redux'
import { Link } from '@tanstack/react-router';

const SuggestionBox = () => {

//   const { profilePic } = useSelector(state => state?.userData);


  return (
    <div className='w-[35%]'>
      <div className='w-[20rem] px-4 my-10'>
        {/* <UserCard id={"muhammad.khawar.577"} imgUrl={import.meta.env.VITE_API_URL + profilePic} user={true} /> */}
        <UserCard id={"muhammad.khawar.577"} imgUrl={"/assets/images/profile.png"} user={true} />
        <div className='flex my-6 justify-between'>
          <h3 className='text-[0.9rem] text-gray-400'>Suggested for you</h3>
          <Link to={"/"} className='text-sm font-semibold'>See All</Link>
        </div>
        <UserCard id1={"muhammad.khawar.577"} imgUrl={"/assets/images/profile.png"} user={false} />
        <UserCard id1={"muhammad.khawar.577"} imgUrl={"/assets/images/profile.png"} user={false} />
        <UserCard id1={"muhammad.khawar.577"} imgUrl={"/assets/images/profile.png"} user={false} />
        <UserCard id1={"muhammad.khawar.577"} imgUrl={"/assets/images/profile.png"} user={false} />
        <UserCard id1={"muhammad.khawar.577"} imgUrl={"/assets/images/profile.png"} user={false} />
        <SuggestionFooter />
      </div>
    </div>
  )
}

export default SuggestionBox