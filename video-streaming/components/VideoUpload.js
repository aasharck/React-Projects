import React, { useState } from 'react'
import axios from 'axios';

const VideoUpload = () => {
    const [file, setFile] = useState();
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [submiting, setSubmitting] = useState(false)

    async function handleSubmit(){
        const data = new FormData()
        if(!file) return;
        setSubmitting(true);
        data.append('file', file);
        const config = {
            onUploadProgress: function (progressEvent) {
                const percentComplete = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setProgress(percentComplete);
            },
        }
        try{    
            await axios.post('/api/videos', data, config)
        }catch(err){
            setError(err.message);
            console.log(err);
        } finally{
            setSubmitting(false)
            setProgress(0)
        }
    }

    function handleSetFile(event){
        const files = event.target.files;

        if(files?.length){
            setFile(files[0])
        }

    }
  return (
    <div>
        {error && <p>{error}</p>}
        {submiting && <p>{progress}%</p>}
        <form action='POST'>
            <div>
                <label>File</label>
                <input type='file' id='file' accept='.mp4' onChange={(e) => handleSetFile(e)} />
            </div>
        </form>
        <button onClick={() => handleSubmit()}>Upload Video</button>
    </div>
  )
}

export default VideoUpload