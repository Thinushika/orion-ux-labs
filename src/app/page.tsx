import Image from 'next/image'
import styles from '../styles/page.module.css'

export default function Home() {
  return (
    <main className={`container-fluid p-0 m-0`}>
      <div className={`d-flex justify-content-center align-items-center min-h-100vh bg-color-yellow`}>
        <h1>Welcome to ORION UX LABS</h1>
      </div>
    </main>
  )
}
