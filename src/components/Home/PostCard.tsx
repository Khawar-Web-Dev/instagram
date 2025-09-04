import './style.css'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react'
import PostContextMenu from './PostContextMenu';
import { Bookmark, Copy, Ellipsis, Heart, MessageCircle, Send } from 'lucide-react';

type PostCardProps = {
    verified: boolean,
    userId: string,
    userImage: string,
    caption: string,
    img: { path: string, originalname: string }[],
    likes: number,
    timePosted: number,
    postId: number,
    likedp: boolean,
    savedp: boolean,
    comments: number,
};



const PostCard = ({ verified, userId, userImage, caption, img, likes, timePosted, postId, likedp, savedp, comments }:PostCardProps) => {

    const [time, setTime] = useState('');
    const [liked, setliked] = useState(likedp)
    const [postLikes, setpostLikes] = useState(likes);
    const [saved, setsaved] = useState(savedp);
    const [comment, setcomment] = useState("");
    const [contextMenu, setcontextMenu] = useState(false);
    const [isLikeLoading, setisLikeLoading] = useState(false);
    const [isSaveLoading, setisSaveLoading] = useState(false);
    

    useEffect(() => {
        const diff = Date.now() - timePosted;

        const timeInHours = Math.floor(diff / (1000 * 60 * 60));
        const timeInDays = Math.floor(timeInHours / 24);

        const displayTime = timeInDays > 0 ? `${timeInDays}d` : `${timeInHours} ${timeInHours > 24 ? '' : 'h'}`;

        setTime(displayTime)
    }, [])

    // const likeUpdate = async (sup:number) => {
    //     setpostLikes((prev:number) => prev + sup)
    //     sup == 1 ? setliked(true) : setliked(false);
    //     // update(postLikes + sup, sup == 1 ? true : false);
    // }

    // const update = async (likes, likedSend:{likes:number,likedSend:boolean}) => {
    //     setisLikeLoading(true)
    //     await axios.get(import.meta.env.VITE_API_URL + `files/likeupdate/${postId}/${likes}/${likedSend}`, {
    //         withCredentials: true,
    //     })
    //     setisLikeLoading(false)
    // }

    // const saveReq = async (state:boolean) => {
    //     setisSaveLoading(true)
    //     await axios.get(import.meta.env.VITE_API_URL + `files/saveupdate/${postId}/${state}`, {
    //         withCredentials: true,
    //     });
    //     setisSaveLoading(false)
    // }

    // const saveHandler = (state:boolean) => {
    //     setsaved(state)
    //     saveReq(state)
    // }

    const commentHandler = async () => {
        if (comment.length > 0) {
            await axios.post(import.meta.env.VITE_API_URL + `files/createcomment`, {
                _id: postId,
                comment
            }, {
                withCredentials: true,
            })
                .then((res) => {
                    if (res.status === 200) {
                        setcomment("");
                        toast.success("Comment Added successfully")
                    }
                })
        }
        else {
            toast.error("Comments Cannot be Empty",
                { duration: 1000 })
        }
    }

    return (
        <div className='w-[28rem] border-b-[1px] h-max pb-5 border-gray-800 my-12'>
            {contextMenu && <PostContextMenu setcontextMenu={setcontextMenu} contextMenu={contextMenu} postId={postId} />}
            <div className='flex justify-between items-center'>
                {/* <img className='w-9 h-9 rounded-full' src={import.meta.env.VITE_API_URL + userImage} alt={userId + ' profile-pic'} /> */}
                <img className='w-9 h-9 rounded-full' src={"/assets/images/profile.png"} alt={userId + ' profile-pic'} />
                <div className='w-full mx-2'>
                    <div className='flex items-center h-4'>
                        <h4 className='text-sm font-semibold'>{userId}</h4>
                        {verified && <img className='w-4 h-4 ml-1' src="/assets/icons/verified.png" alt="verified" />}
                        <span className='text-gray-400 -translate-y-[0.25rem] text-lg mx-1'>.</span>
                        <span className='text-gray-400 text-sm'>{time}</span>
                    </div>
                    <span className='text-[0.8rem]'>Original Audio</span>
                </div>
                <Ellipsis onClick={() => setcontextMenu(!contextMenu)} className='text-xl cursor-pointer' />
            </div>
            <div className='h-[35rem] border-[1px] border-gray-800 rounded-md my-2 flex justify-center items-center relative'>
                <Copy strokeWidth={1} className={`absolute top-4 right-4 text-xl rotate-90 size-[1.35rem] ${img.length > 1 ? "" : "hidden"}`} />
                {/* <img src={import.meta.env.VITE_API_URL + img[0].path} className='h-auto aspect-square' alt={img[0].originalname} /> */}
                <img src={'/assets/images/test.jpg'} className='h-auto aspect-square' alt={img[0].originalname} />
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex my-1'>
                        {/* {!liked && !isLikeLoading && <Heart fill='red' onClick={() => likeUpdate(1)} className='text-3xl -translate-y-[0.15rem] cursor-pointer' />} */}
                        {!isLikeLoading && <Heart fill={liked? 'red':'none'} stroke={liked? 'red':'white'} onClick={() => setliked(!liked)} className='text-3xl -translate-y-[0.15rem] cursor-pointer' />}
                        {isLikeLoading && <div className="spinner"></div>}
                        {/* {liked && !isLikeLoading && <img onClick={() => likeUpdate(-1)} className='w-7 -translate-y-[0.15rem] cursor-pointer mx-[0.05rem] my-[0.05rem]' src={'/assets/icons/liked.svg'} />} */}
                        {/* {liked && !isLikeLoading && <img onClick={() => likeUpdate(-1)} className='w-7 -translate-y-[0.15rem] cursor-pointer mx-[0.05rem] my-[0.05rem]' src={'/assets/icons/liked.svg'} />} */}
                        <MessageCircle strokeWidth={2} className='mx-2 size-[1.35rem] cursor-pointer' />
                        <Send className='cursor-pointer rotate-[15deg] size-[1.25rem]' />
                    </div>
                    {/* {!saved && !isSaveLoading && <img onClick={() => saveHandler(true)} src="/assets/icons/icons8-save.svg" className='cursor-pointer h-7' alt="save icon" />} */}
                    {!isSaveLoading && <Bookmark fill={saved? 'white':'none'} onClick={() => setsaved(!saved)} className='cursor-pointer h-7' />}
                    {isSaveLoading && <div className="spinner"></div>}
                    {/* {saved && !isSaveLoading && <img onClick={() => saveHandler(false)} src="/assets/icons/save-on.svg" className='cursor-pointer h-7' alt="saved icon" />} */}
                </div>
                <span className='text-sm font-semibold'>{postLikes} {postLikes === 1 ? "like" : "likes"}</span>
                <p className='my-1 text-sm line-clamp-2'><span className='font-semibold mr-2'>{userId}</span>{caption}</p>
                <p className='text-gray-400 text-[0.84rem] my-1'>View All {comments} comments</p>
                <div className='flex justify-between focus-within:border-b-[1px] border-b-gray-500'>
                    <input type="text" onChange={(e) => setcomment(e.target.value)} onKeyDown={(e)=> e.key==="Enter"? commentHandler():''} value={comment} placeholder='Add a comment...' className=' bg-transparent w-full outline-none text-[0.84rem]' />
                    <Send onClick={commentHandler} className={`text-xl rotate-45 text-gray-600 ${comment ? "block" : "hidden"} cursor-pointer mx-2 my-1`} />
                </div>
            </div>
        </div>
    )
}

export default PostCard