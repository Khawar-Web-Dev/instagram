import { X } from "lucide-react";
// import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";

type UserCardProps = {
    user?: boolean,
    id?: string,
    id1?: string,
    search?: boolean,
    imgUrl: string,
}


const UserCard = ({user,search,imgUrl}:UserCardProps) => {

  // const {id,name,profilePic} = useSelector((state):any => state.userData);
  const [userImage, setuserImage] = useState("");

  useEffect(() =>{
      // if(user) setuserImage(import.meta.env.VITE_API_URL+profilePic);
      // else setuserImage(imgUrl)
      setuserImage(imgUrl);
  })

  return (
    <div className='flex items-center justify-between my-4'>
        <img src={userImage} className='rounded-full w-[2.6rem]' alt="User Profile" />
        <div className='mx-3 w-full'>
            {/* <h2 className={`${user? "text-[0.9rem]":"text-[0.86rem]"} font-semibold`}>{user? id:id1}</h2> */}
            <h2 className={`${user? "text-[0.9rem]":"text-[0.86rem]"} font-semibold`}>{'user? id:id1'}</h2>
            {/* <h5 className={`${user? "text-[0.84rem]":"text-[0.8rem]"} text-gray-400`}>{user? name:"Suggested for you"}</h5> */}
            <h5 className={`${user? "text-[0.84rem]":"text-[0.8rem]"} text-gray-400`}>{"Suggested for you"}</h5>
        </div>
        {!search && <button className='text-[0.8rem] text-blue-500'>{user? "Switch":"Follow"}</button>}
        {search && <X className='text-2xl cursor-pointer' />}
    </div>
  )
}

export default UserCard