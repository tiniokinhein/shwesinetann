import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children , title , description }) => {

    const [navVisible , setNavVisible] = React.useState(false)
    const router = useRouter()

    const navClick = () => {
        if(navVisible) {
            setNavVisible(false)
            document.body.classList.remove('overflow-y-hidden')
        } else {
            setNavVisible(true)
            document.body.classList.add('overflow-y-hidden')
        }
    }

    return (
        <>
            <Head>
                <title>
                    {router.pathname === '/' ? 'Shwe Sine Tann' : title + ' - Shwe Sine Tann'}
                </title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header 
                onClick={navClick} 
                visible={navVisible}
            />
            {children}
            <Footer />
        </>
    )
}

export default Layout
