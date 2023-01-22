import React from 'react'
import Layout from '../components/layout/Layout'
import { playfair } from '../config/font'
import { HiPhone } from 'react-icons/hi'
import { IoIosMail } from 'react-icons/io'
import { FaMapMarkerAlt } from 'react-icons/fa'
import ContactForm from '../components/form/ContactForm'
import ReportForm from '../components/form/ReportForm'

const Contact = () => {

    const [headTab , setHeadTab] = React.useState('contact')
    const [state , setState] = React.useState({
        name: '',
        email: '',
        report_email: '',
        phone: '',
        message: '',
        description: ''
    })
    const [loading , setLoading] = React.useState(false)

    const contactSubmit = e => {
        e.preventDefault()

        setLoading(true)
    }

    const reportSubmit = e => {
        e.preventDefault()

        setLoading(true)
    }

    return (
        <Layout
            title='Contact Us'
            description='This is ...'
        >
            <div className='2xl:container px-5 mx-auto py-10 md:py-20'>
                <div className='flex flex-col items-center justify-center mb-10'>
                    <div className='mb-5'>
                        <button
                            onClick={() => {
                                setHeadTab('contact')
                            }}
                            className={`pb-1.5 font-bold mr-3 border-b-2 text-[24px] ${playfair.className} ${headTab === 'contact' ? 'border-100 text-100' : 'border-transparent text-black/60'}`}
                        >
                            Contact Us
                        </button>
                        <button
                            onClick={() => {
                                setHeadTab('report')
                            }}
                            className={`pb-1.5 font-bold ml-3 border-b-2 text-[24px] ${playfair.className} ${headTab === 'report' ? 'border-100 text-100' : 'border-transparent text-black/60'}`}
                        >
                            Report
                        </button>
                    </div>
                    <p className='text-black/80 text-[14px] font-light'>
                        We are here for you. How can we help?
                    </p>
                </div>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 bg-400 rounded py-10 px-5 sm:px-10'>
                        <h1 className={`${playfair.className} text-[30px] font-bold text-white mb-2`}>
                            Get in touch
                        </h1>
                        <p className='text-white text-[14px] font-light'>
                            Support that cares. Available all day, every day.
                        </p>
                        <div className='mt-10'>
                            <div className='flex flex-row mb-10'>
                                <div className='h-[60px] w-[60px] flex items-center justify-center bg-[#DEA702] rounded px-4'>
                                    <HiPhone size={30} />
                                </div>
                                <div className='ml-5 sm:ml-10'>
                                    <h1 className={`${playfair.className} text-[18px] font-bold text-white mb-2`}>
                                        Phone Number
                                    </h1>
                                    <p className='text-white text-[14px] font-light'>
                                        09-123123123 , 09-123456789
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row mb-10'>
                                <div className='h-[60px] w-[60px] flex items-center justify-center bg-[#DEA702] rounded px-4'>
                                    <IoIosMail size={30} />
                                </div>
                                <div className='ml-5 sm:ml-10'>
                                    <h1 className={`${playfair.className} text-[18px] font-bold text-white mb-2`}>
                                        Email
                                    </h1>
                                    <p className='text-white text-[14px] font-light'>
                                        info@shwesinetann.com
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <div className='h-[60px] w-[60px] flex items-center justify-center bg-[#DEA702] rounded px-4'>
                                    <FaMapMarkerAlt size={30} />
                                </div>
                                <div className='ml-5 sm:ml-10'>
                                    <h1 className={`${playfair.className} text-[18px] font-bold text-white mb-2`}>
                                        Address
                                    </h1>
                                    <p className='text-white text-[14px] font-light'>
                                        No.94, Shwe Bon Tha (lower block),<br />
                                        Yangon, Myanmar
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2 md:pl-10 pt-10 md:pt-0'>
                        {
                            headTab === 'contact' ? (
                                <ContactForm 
                                    state={state} 
                                    setState={setState}
                                    submit={contactSubmit}
                                    loading={loading}
                                />
                            ) : (
                                <ReportForm 
                                    state={state} 
                                    setState={setState}
                                    submit={reportSubmit}
                                    loading={loading}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
