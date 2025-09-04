import axios from 'axios';
import { useState } from 'react'
import toast from 'react-hot-toast';

type PostContextProps = {
    setcontextMenu: React.Dispatch<React.SetStateAction<boolean>>,
    contextMenu: boolean,
    postId: number
}

const PostContext = ({ setcontextMenu, contextMenu , postId}: PostContextProps) => {

  const [confirmation, setconfirmation] = useState<boolean>();


  const deletePost = async () => {
    await axios.delete(import.meta.env.VITE_API_URL + `files/deletepost/${postId}`, {
      withCredentials: true,
    })
    .then((res)=>{
      toast.success(res.data.message,{
        duration: 3000,
        position: 'top-right',
      })
      setconfirmation(false)
      setcontextMenu(false)
    })

  }

  return (
    <div onClick={() => setcontextMenu(false)} className='absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-30 z-20'>
      <div className={`w-full h-full flex justify-center items-center ${contextMenu ? "sticky" : ""}`}>
        {
          !confirmation &&
          <div onClick={(e) => e.stopPropagation()} className='bg-light-grey w-1/6 py-4 flex flex-col items-center rounded-lg'>
            <button onClick={() => setconfirmation(true)} className='py-2 border-y-[1px] w-full border-gray-700 text-red-500'>Delete Post</button>
          </div>
        }
        {
          confirmation &&
          <div onClick={(e) => e.stopPropagation()} className='bg-light-grey w-1/4 py-4 flex flex-col items-center rounded-lg'>
            <p className='text-lg my-2'>Are you sure you want to delete your post?</p>
            <div className='w-full flex justify-around'>
              <button onClick={() => deletePost()} className='py-2 text-lg text-red-500'>Yes</button>
              <button onClick={() => setconfirmation(false)} className='py-2 text-lg'>No</button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default PostContext