import { useRouter } from 'next/router'
import React from 'react'
import AddressLists from '../../components/cart/AddressLists'
import BackCartHeader from '../../components/cart/BackCartHeader'
import CartProgress from '../../components/cart/CartProgress'
import Checkout from '../../components/cart/Checkout'
import PaymentLists from '../../components/cart/PaymentLists'
import ProductLists from '../../components/cart/ProductLists'
import UserOrderInfo from '../../components/cart/UserOrderInfo'
import Layout from '../../components/layout/Layout'


const data = [
    {
        name: 'Pay with <br />KBZ Pay',
        logo: '/assets/payment/kpay.png',
        short: 'KBZ Pay'
    },
    {
        name: 'Pay with <br />MPU',
        logo: '/assets/payment/mpu.png',
        short: 'MPU'
    },
    {
        name: 'Pay with <br />Wave Pay',
        logo: '/assets/payment/wavepay.png',
        short: 'Wave Pay'
    },
    {
        name: 'Cash',
        logo: '/assets/payment/cash.png',
        short: 'Cash'
    }
]

const CheckoutPage = () => {

    const [state , setState] = React.useState('product')
    const [comment , setComment] = React.useState('')
    const [cnCode , setCnCode] = React.useState('')
    const [selectPay , setSelectPay] = React.useState({
        name: 'Cash',
        logo: '/assets/payment/cash.png',
        short: 'Cash'
    })
    const [addressStatus , setAddressStatus] = React.useState({
        delivery: {},
        billing: {}
    })
    const router = useRouter()

    const checkoutSubmit = e => {
        e.preventDefault()

    }

    return (
        <Layout
            title='Check Out'
            description=''
        >
            <div className='2xl:container px-5 mx-auto py-10'>
                <BackCartHeader 
                    link={() => {
                        if(state === 'payment') {
                            setState('address')
                        } else if(state === 'address') {
                            setState('product')
                        } else if(state === 'checkout') {
                            setState('payment')
                        } else if(state === 'product') {
                            router.push('/')
                        }
                    }} 
                />
                {
                    state !== 'checkout' && (
                        <CartProgress
                            state={state} 
                            setState={setState} 
                        />
                    )
                }
                
                <div className={`flex flex-wrap ${state === 'checkout' && 'mt-16'}`}>
                    <div className='w-full md:w-1/3 order-first md:order-last pl-0 md:pl-5'>
                        {state === 'checkout' && <div className='h-[44px]' />}

                        <UserOrderInfo state={state} />

                        {state === 'checkout' && (
                            <button 
                                onClick={checkoutSubmit}
                                className='w-full mt-5 rounded-lg bg-400 px-5 py-3 text-[14px] text-500 transition-all hover:bg-100 hover:transition-all'
                            >
                                Payment
                            </button>

                        )}
                    </div>

                    <div className='w-full md:w-2/3 order-last md:order-first mt-5 md:mt-0'>
                        {state === 'product' && 
                            <ProductLists 
                                setState={setState} 
                            />
                        }
                        {state === 'address' && 
                            <AddressLists 
                                state={state} 
                                setState={setState} 
                                addressStatus={addressStatus} 
                                setAddressStatus={setAddressStatus} 
                            />
                        }
                        {state === 'payment' && 
                            <PaymentLists 
                                state={state} 
                                setState={setState} 
                                comment={comment}
                                setComment={setComment}
                                cnCode={cnCode}
                                setCnCode={setCnCode}
                                selectPay={selectPay}
                                setSelectPay={setSelectPay}
                                data={data}
                            />
                        }
                        {state === 'checkout' && 
                            <Checkout 
                                state={state}
                                comment={comment}
                                selectPay={selectPay}
                                addressStatus={addressStatus}
                            />
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CheckoutPage
