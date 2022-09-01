import Head from 'next/head'
import Image from 'next/image'
import VideoUpload from '../components/VideoUpload'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <VideoUpload />
      </main>

      
    </div>
  )
}
