import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addressData } from '../../data/addressSheet'
import { addBilling } from '../../redux/cart/action'
import Address from './Address'

const BillingAddress = ({ addressStatus, setAddressStatus, setStatus, status, info }) => {

    const [address , setAddress] = React.useState({
        name: '',
        phone: '',
        address: ''
    })
    const [region , setRegion] = React.useState('')
    const [township , setTownship] = React.useState('')
    const { billing: data } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    React.useEffect(() => {
        if(data.length >= 1) {
            setAddress({
                name: data[0]?.name,
                phone: data[0]?.phone,
                address: data[0]?.address
            })
        }
    }, [data])

    const findState = addressData.find((c) => c.name === region)

    const newAddress = e => {
        e.preventDefault()
        
        const data = {
            name: address.name,
            phone: address.phone,
            region,
            township,
            address: `${address.address}, ${township}, ${region}`
        }

        dispatch(addBilling(data))
        setAddressStatus(s => ({
            ...s,
            billing: data
        }))

        setAddress({
            name: '',
            phone: '',
            address: ''
        })
        setRegion('')
        setTownship('')
        setStatus(s => ({
            ...s,
            billing: false
        }))
    }

    const activeAddress = dt => {
        setAddressStatus(s => ({
            ...s,
            billing: dt
        }))
    }

    const inactiveAddress = () => {
        setAddressStatus(s => ({
            ...s,
            billing: {}
        }))
    }

    return (
        <>
            <p className='text-black/50 text-[12px] mt-5 mb-10 font-normal'>
                {info}
            </p>
            <Address 
                posts={data} 
                active={addressStatus.billing}
                onClick={activeAddress}
                unClick={inactiveAddress}
            />
            {
                status.billing ||
                data.length <= 0 ? (
                    <div className=''>
                        <div className='flex flex-wrap items-center py-3 border-b'>
                            <label 
                                htmlFor='name'
                                className='w-full sm:w-1/3 mb-2 sm:mb-0 text-[12px]'
                            >
                                Name
                            </label>
                            <input
                                type='text'
                                id='name'
                                value={address.name}
                                onChange={e => setAddress(s => ({
                                    ...s,
                                    name: e.target.value
                                }))}
                                placeholder='Enter your name'
                                className='w-full sm:w-2/3 bg-500 text-black rounded-lg border px-5 py-3 text-[12px]'
                            />
                        </div>
                        <div className='flex flex-wrap items-center py-3 border-b'>
                            <label 
                                htmlFor='name'
                                className='w-full sm:w-1/3 mb-2 sm:mb-0 text-[12px]'
                            >
                                Phone Number
                            </label>
                            <input
                                type='text'
                                id='phone'
                                value={address.phone}
                                onChange={e => setAddress(s => ({
                                    ...s,
                                    phone: e.target.value
                                }))}
                                placeholder='Enter your phone number'
                                className='w-full sm:w-2/3 bg-500 text-black rounded-lg border px-5 py-3 text-[12px]'
                            />
                        </div>
                        <div className='flex flex-wrap items-center pt-3'>
                            <label 
                                htmlFor='address'
                                className='w-full sm:w-1/3 mb-2 sm:mb-0 text-[12px]'
                            >
                                Address
                            </label>
                            <div className='w-full sm:w-2/3 flex flex-wrap'>
                                <div className='w-2/4 md:w-1/4 pr-3'>
                                    <select
                                        placeholder='Select your state'
                                        value={region}
                                        onChange={e => setRegion(e.target.value)}
                                        className='w-full bg-500 text-black rounded-lg border py-3 px-1.5 text-[12px]'
                                    >
                                        <option>Select your state</option>
                                        {
                                            addressData.map((m,i) => (
                                                <option key={i} value={m.name}>{m.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='w-2/4 md:w-1/4'>
                                    <select
                                        placeholder='Select your township'
                                        value={township}
                                        onChange={e => setTownship(e.target.value)}
                                        className='w-full bg-500 text-black rounded-lg border py-3 px-1.5 text-[12px]'
                                    >
                                        <option>Select your township</option>
                                        {
                                            findState?.townships?.map((m,i) => (
                                                <option key={i} value={m}>{m}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className='w-full md:w-2/4 pl-0 md:pl-3 mt-3 md:mt-0'>
                                    <input
                                        type='text'
                                        id='address'
                                        value={address.address}
                                        onChange={e => setAddress(s => ({
                                            ...s,
                                            address: e.target.value
                                        }))}
                                        placeholder='Enter your address'
                                        className='w-full bg-500 text-black rounded-lg border px-5 py-3 text-[12px]'
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {
                            address.name.length >= 2 &&
                            address.phone.length >= 2 &&
                            address.address.length >= 2 &&
                            region.length >= 2 &&
                            township.length >= 2 ? (
                                <div className='flex flex-wrap items-center pt-3'>
                                    <div className='w-full sm:w-2/3 sm:ml-auto'>
                                        <button 
                                            onClick={newAddress}
                                            className='w-full sm:w-auto rounded-lg bg-400 px-5 py-2 text-[14px] text-500 transition-all hover:bg-100 hover:transition-all'
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            ) : null
                        }
                    </div>
                ) : null
            }
        </>
    )
}

export default BillingAddress
