import type { NextPage } from 'next'
import { Main } from 'next/document'
import Head from 'next/head'
import s from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main />
    </div>
  )
}

export default Home