import Footer from '../componants/Footer'


import Header from '../componants/Header'

import Head from 'next/head'


import Main from '../componants/Main'

import LoginForm from '../componants/LoginForm'

import { useAuth } from '../contexts/auth'


export default function Home() {

  const { user, login, logout } = useAuth();

  return (
    <div className="">
      <Head>
     
        <title>Cookie Stand Admin</title>
     
        <link rel="icon" href="/favicon.ico" />
       </Head>

        <Header />

        {user? <Main /> : <LoginForm/> }




    </div>
  )
}