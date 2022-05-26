import type { NextPage } from 'next'
import Head from 'next/head'
import { Error404 } from '../components/404'
import { Header } from '../layout/Header'
import { Red } from '../stories/Button.stories'
import { WrapOverflow } from '../stories/Stack.stories'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Error404 />
      <Red />
      <WrapOverflow  numberOfChildren={21} key={6} />
      <div className='text-red-200'>sss</div>
    </div>
  )
}

export default Home
