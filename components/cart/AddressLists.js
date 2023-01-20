import React from 'react'
import { useSelector } from 'react-redux'
import { playfair } from '../../config/font'
import BillingAddress from './BillingAddress'
import DeliveryAddress from './DeliveryAddress'
import SelfPickup from './SelfPickup'

const AddressLists = ({ setState , state, addressStatus, setAddressStatus }) => {

    const [choose , setChoose] = React.useState('delivery')
    const [status , setStatus] = React.useState({
        address: false,
        billing: false
    })
    const { billing } = useSelector(state => state.cart)

    const beforeLayout = `before:absolute before:w-[14px] before:h-[14px] before:rounded-full before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-10`

    return (
        <div>
            <div className='rounded-xl border p-5'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='flex flex-row items-center mb-5 md:mb-0'>
                        <button 
                            onClick={() => setChoose('delivery')}
                            className='flex flex-row items-center mr-5'
                        >
                            <span className={`relative mx-auto w-[20px] h-[20px] border border-400 bg-white rounded-full ${beforeLayout} before:${choose === 'delivery' ? 'bg-400' : 'bg-white'}`} />
                            <span className={`text-[16px] ml-2 ${playfair.className} font-bold ${choose === 'delivery' ? 'text-400' : 'text-black/90'}`}>
                                Delivery Address
                            </span>
                        </button>
                        <button 
                            onClick={() => setChoose('self')}
                            className='flex flex-row items-center'
                        >
                            <span className={`relative mx-auto w-[20px] h-[20px] border border-400 bg-white rounded-full ${beforeLayout} before:${choose === 'self' ? 'bg-400' : 'bg-white'}`} />
                            <span className={`text-[16px] ml-2 ${playfair.className} font-bold ${choose === 'self' ? 'text-400' : 'text-black/90'}`}>
                                Self Pickup
                            </span>
                        </button>
                    </div>
                    <button 
                        onClick={() => setStatus(s => ({
                            ...s,
                            address: true
                        }))}
                        className='rounded-lg bg-400 px-5 py-2 text-[14px] text-500 transition-all hover:bg-100 hover:transition-all'
                    >
                        Add Address
                    </button>
                </div>

                {
                    choose === 'delivery' && (
                        <DeliveryAddress
                            info='Delivery to you within 3-5 days.'
                            status={status}
                            setStatus={setStatus}
                            addressStatus={addressStatus}
                            setAddressStatus={setAddressStatus}
                        />
                    )
                }

                {
                    choose === 'self' && (
                        <SelfPickup 
                            info='Delivery to you within 3-5 days.' 
                        />
                    )
                }
            </div>

            <div className='rounded-xl border p-5 mt-5'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='flex flex-row items-center mb-5 md:mb-0'>
                        <span className={`text-[16px] ${playfair.className} font-bold pb-2 border-b border-400 text-400`}>
                            Billing Address
                        </span>
                    </div>
                    {
                        billing.length <= 0 ? (
                            <button 
                                onClick={() => setStatus(s => ({
                                    ...s,
                                    billing: true
                                }))}
                                className='rounded-lg bg-400 px-5 py-2 text-[14px] text-500 transition-all hover:bg-100 hover:transition-all'
                            >
                                Add address
                            </button>
                        ) : (
                            <button 
                                onClick={() => setStatus(s => ({
                                    ...s,
                                    billing: true
                                }))}
                                className='rounded-lg bg-400 px-5 py-2 text-[14px] text-500 transition-all hover:bg-100 hover:transition-all'
                            >
                                Edit address
                            </button>
                        )
                    }
                </div>
                <BillingAddress
                    info='In Billing Address, Billing Address and Delivery address are the same'
                    status={status}
                    setStatus={setStatus}
                    addressStatus={addressStatus}
                    setAddressStatus={setAddressStatus}
                />
            </div>

            <button 
                onClick={() => {
                    setState('payment')
                    window.scrollTo(0,0)
                }}
                className='mt-5 w-[400px] max-w-full text-500 bg-400 rounded-lg py-3 text-[16px] transition-all hover:bg-100 hover:transition-all'
            >
                Continue
            </button>
        </div>
    )
}

export default AddressLists
