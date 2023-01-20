import React from 'react'
import Layout from '../components/layout/Layout'

const About = () => {
    return (
        <Layout
            title='About'
            description='This is about'
        >
            <div className={`h-[100vh] min-h-[600px] bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white`}>
                About
            </div>
        </Layout>
    )
}

export default About
