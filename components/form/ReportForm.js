import React from 'react'

const ReportForm = ({ state, setState, submit, loading }) => {
    return (
        <form 
            autoComplete='off'
            onSubmit={submit}
        >
            <div className='flex flex-col mb-5'>
                <label 
                    htmlFor='name'
                    className='text-[14px] text-black/90 mb-3'
                >
                    Name
                </label>
                <input 
                    type='text'
                    id='name'
                    name='name'
                    value={state.name}
                    onChange={e => setState(s => ({
                        ...s,
                        name: e.target.value
                    }))}
                    className='h-[46px] rounded bg-500 text-black text-[14px] px-5'
                    required
                />
            </div>
            <div className='flex flex-col mb-5'>
                <label 
                    htmlFor='report_email'
                    className='text-[14px] text-black/90 mb-3'
                >
                    Report Email
                </label>
                <input 
                    type='email'
                    id='report_email'
                    name='report_email'
                    value={state.report_email}
                    onChange={e => setState(s => ({
                        ...s,
                        report_email: e.target.value
                    }))}
                    className='h-[46px] rounded bg-500 text-black text-[14px] px-5'
                    required
                />
            </div>
            <div className='flex flex-col mb-5'>
                <label 
                    htmlFor='phone'
                    className='text-[14px] text-black/90 mb-3'
                >
                    Phone Number
                </label>
                <input 
                    type='tel'
                    id='phone'
                    name='phone'
                    value={state.phone}
                    onChange={e => setState(s => ({
                        ...s,
                        phone: e.target.value
                    }))}
                    className='h-[46px] rounded bg-500 text-black text-[14px] px-5'
                    required
                />
            </div>
            <div className='flex flex-col mb-5'>
                <label 
                    htmlFor='description'
                    className='text-[14px] text-black/90 mb-3'
                >
                    Description
                </label>
                <textarea
                    rows='3'
                    id='description'
                    name='description'
                    value={state.description}
                    onChange={e => setState(s => ({
                        ...s,
                        description: e.target.value
                    }))}
                    className='rounded bg-500 text-black text-[14px] p-5'
                    style={{
                        resize: 'none'
                    }}
                />
            </div>

            <button 
                disabled={loading ? true : false} 
                className='relative rounded-[10px] px-20 py-3 bg-400 text-white text-[14px] transition-all hover:bg-400/90 hover:transition-all'
            >
                Sent report

                {
                    loading && (
                        <span className='absolute top-1/2 right-1/2 -translate-y-1/2 -mr-[70px]'>
                            <svg aria-hidden="true" className="inline w-5 h-5 animate-spin text-white/30 fill-100" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                        </span>
                    )
                }
            </button>
        </form>
    )
}

export default ReportForm
