import Head from 'next/head'
import Image from 'next/image'
import VideoUpload from '../components/VideoUpload'
import styles from '../styles/Home.module.css'

export default function Home() {

  const fetchMetadataFromAPI = async () =>{
    try {
      const uri = 'https://api.coolcatsnft.com/cat/1';
      await fetch(`/api/meta?metadataURI=${uri}`)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <VideoUpload />
      </main>
    <button onClick={fetchMetadataFromAPI}>Fewtcgh</button>
      
    </div>
  )
}
