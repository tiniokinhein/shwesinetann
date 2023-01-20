import React from 'react'
import { Rating } from 'react-simple-star-rating'
import { MdStars } from 'react-icons/md'
import { AiOutlineSend } from 'react-icons/ai'
import ProgressBar from '@ramonak/react-progress-bar'
import { playfair } from '../../config/font'

const ReviewLayout = ({ p, users }) => {

    const [rating, setRating] = React.useState(0)
    const [review , setReview] = React.useState('')
    const [loading , setLoading] = React.useState(false)

    const reviewSubmit = e => {
        e.preventDefault()

        setLoading(true)
    }

    const progressLayout = num => (
        <ProgressBar 
            completed={num} 
            isLabelVisible={false}
            bgColor={'#6219B4'}
            baseBgColor={'#00000033'}
            height='5px'
            borderRadius='5px'
            className='w-full'
        />
    )

    const numFormat = num => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
        }

        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
        }

        return num
    }

    return (
        <div className='pb-5'>
            <div className='flex flex-wrap mb-10'>
                <div className='w-full lg:w-1/3 pr-0 lg:pr-3'>
                    <div className='mt-0 lg:mt-5 flex flex-wrap'>
                        <div className='pr-7'>
                            <div className='flex flex-row items-center'>
                                <MdStars size={30} className='text-400' />
                                <h4 className='text-[30px] text-400 font-bold ml-1.5'>
                                    4.8
                                </h4>
                            </div>
                            <p className='text-[16px] text-black/60 font-normal'>
                                250 reviews
                            </p>
                        </div>
                        <div className='grow'>
                            <div className='flex flex-wrap justify-between mb-1'>
                                <div className='flex items-center w-[70px] min-w-[70px]'>
                                    <span className='text-[12px] text-black/60'>
                                        Very good
                                    </span>
                                </div>
                                <div className='pr-3 flex items-center grow'>
                                    {progressLayout(100)}
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-[10px] text-black/50 w-[30px]'>
                                        {numFormat(20000000)}
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-wrap justify-between mb-1'>
                                <div className='flex items-center w-[70px] min-w-[70px]'>
                                    <span className='text-[12px] text-black/60'>
                                        Good
                                    </span>
                                </div>
                                <div className='pr-3 flex items-center grow'>
                                    {progressLayout(70)}
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-[10px] text-black/50 w-[30px]'>
                                        {numFormat(40)}
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-wrap justify-between mb-1'>
                                <div className='flex items-center w-[70px] min-w-[70px]'>
                                    <span className='text-[12px] text-black/60'>
                                        Normal
                                    </span>
                                </div>
                                <div className='pr-3 flex items-center grow'>
                                    {progressLayout(30)}
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-[10px] text-black/50 w-[30px]'>
                                        {numFormat(30)}
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-wrap justify-between mb-1'>
                                <div className='flex items-center w-[70px] min-w-[70px]'>
                                    <span className='text-[12px] text-black/60'>
                                        Bad
                                    </span>
                                </div>
                                <div className='pr-3 flex items-center grow'>
                                    {progressLayout(15)}
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-[10px] text-black/50 w-[30px]'>
                                        {numFormat(10)}
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-wrap justify-between'>
                                <div className='flex items-center w-[70px] min-w-[70px]'>
                                    <span className='text-[12px] text-black/60'>
                                        Very bad
                                    </span>
                                </div>
                                <div className='pr-3 flex items-center grow'>
                                    {progressLayout(0)}
                                </div>
                                <div className='flex items-center'>
                                    <span className='text-[10px] text-black/50 w-[30px]'>
                                        {numFormat(0)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-2/3 pl-0 lg:pl-3 my-5 lg:my-0'>
                    <div className='border rounded-xl p-3'>
                        <div className='flex flex-row items-center justify-between'>
                            <p className={`${playfair.className} text-[14px] text-black/90`}>
                                Rating
                            </p>

                            <div>
                                <Rating
                                    onClick={(rate) => setRating(rate)}
                                    initialValue={rating}
                                    size={25}
                                    transition
                                    showTooltip
                                    tooltipArray={[
                                        'Very bad',
                                        'Bad',
                                        'Normal',
                                        'Good',
                                        'Very good'
                                    ]}
                                    tooltipDefaultText='Your rating'
                                    tooltipClassName='w-[70px] !bg-transparent !rounded-0 !text-[10px] !text-black/80 !text-right !p-0 font-normal'
                                    fillColor='#6219B4'
                                    SVGstrokeColor='#6219B4'
                                    SVGclassName='inline-block'
                                />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <textarea 
                                rows={5}
                                value={review}
                                onChange={e => setReview(e.target.value)}
                                placeholder='Please write review. tell us more.'
                                className='p-4 bg-500 text-black text-[12px] font-normal border rounded-lg w-full'
                                style={{
                                    resize: 'none'
                                }}
                            />
                        </div>
                        
                        {
                            review.length >= 3 && (
                                <div className='mt-2 text-right'>
                                    <button
                                        className={`relative text-500 rounded-lg border border-transparent px-4 py-2 bg-400 transition-all ${!loading && 'hover:text-400 hover:border-400 hover:bg-transparent hover:transition-all'}`}
                                        onClick={reviewSubmit}
                                        disabled={loading ? true : false}
                                    >
                                        {
                                            loading ? (
                                                <span className=''>
                                                    <svg aria-hidden="true" className="inline w-5 h-5 animate-spin text-white/30 fill-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                    </svg>
                                                </span>
                                            ) : <AiOutlineSend size={20} />
                                        }
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

            {
                users.length ? (
                    <div className='flex flex-wrap -mx-3'>
                        {
                            users.map((p,i) => (
                                <div key={p.id} className='w-full sm:w-1/2 md:w-1/3 p-3'>
                                    <div className='p-5 bg-500/50 border rounded-lg'>
                                        <div className='flex flex-row mb-5'>
                                            <img 
                                                alt=''
                                                src={p.profile}
                                                className='min-w-[64px] h-[64px] rounded-full'
                                            />

                                            <div className='ml-3 grow flex flex-col xl:flex-row xl:items-end xl:justify-between'>
                                                <div>
                                                    <h4 className='text-[14px] text-black/90 font-bold'>
                                                        {p.name}
                                                    </h4>
                                                    <p className='text-[12px] text-black/60 my-1'>
                                                        {p.date}
                                                    </p>
                                                </div>
                                                <div>
                                                    <Rating
                                                        iconsCount={Number(p.rate)}
                                                        allowHover={false}
                                                        size={22}
                                                        readonly
                                                        transition
                                                        SVGclassName='text-400'
                                                        emptyClassName='!flex flex-row'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <p
                                            className='text-black/90 text-[14px]'
                                            dangerouslySetInnerHTML={{
                                                __html: p.comment
                                            }} 
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default ReviewLayout
