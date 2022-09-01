import React from 'react'
import {useRouter} from 'next/router'
import VideoPlayer from '../../components/VideoPlayer';

const VideoPage = () => {
    const router = useRouter();
    const {id} = router.query;
  return (
    <VideoPlayer id={id} />
  )
}

export const getServerSideProps = async (context) =>{
    return{
        props: {query: context.query}
    }
}

export default VideoPage