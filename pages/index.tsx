import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Notion Clone</title>
        <meta name="description" content="Notion Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col items-center min-h-screen pt-40'>
        {/* Title */}
        <div className='max-w-full w-2/3'>
          <h1
            contentEditable
            placeholder='Untitled'
            className='text-4xl outline-none cursor-text title-placeholder'
          ></h1>
        </div>
        {/* Page Content */}
      </main>

      <footer className='flex justify-center item-center p-4 border-t'>
        <a
          href="https://twitter.com/matteolululu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <span className='text-sky-500 ml-1'>
            @matteolululu
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
