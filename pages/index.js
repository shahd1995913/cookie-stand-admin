import Footer from '../componants/Footer'


import Header from '../componants/Header'

import Head from 'next/head'


import Main from '../componants/Main'




export default function Home() {

  return (
    <div className="">
      <Head>
     
        <title>Cookie Stand Admin</title>
     
        <link rel="icon" href="/favicon.ico" />
       </Head>

        <Header />

        <Main />


    </div>
  )
}