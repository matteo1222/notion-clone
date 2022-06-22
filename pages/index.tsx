import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { renderBlocks } from '../utils/renderBlocks'

const Home: NextPage = () => {
  const [blocks, setBlocks] = useState([
    {
      id: uuidv4(),
      type: 'paragraph',
      paragraph: {
        richText: [
          { text: 'hello word', annotations: { bold: false, italic: false }, link: null },
          { text: 'hello XD', annotations: { bold: true, italic: false }, link: null }
        ]
      }
    },
  ])
  return (
    <div className={styles.container}>
      <Head>
        <title>Notion Clone</title>
        <meta name="description" content="Notion Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col items-center min-h-screen pt-40 text-neutral-900'>
        {/* Container */}
        <div className='max-w-full w-2/3'>
          {/* Title */}
          <h1
            contentEditable
            placeholder='Untitled'
            className='text-4xl outline-none cursor-text font-bold title-placeholder'
          ></h1>
          <div className="p-3"></div>
          {/* Page Content */}
          <div className='border-2 p-2'>
            {renderBlocks(blocks)}
          </div>
        </div>
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
