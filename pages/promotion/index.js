import React from 'react'
import Layout from '../../components/layout/Layout'
import PromotionLists from '../../components/promotion/PromotionLists'
import { mm, playfair } from '../../config/font'
import { promotionItems } from '../../data/promotions'

const Promotions = () => {
    return (
        <Layout
            title='Promotions'
            description=''
        >
            <div className='2xl:container px-5 mx-auto py-20'>
                <div className='flex flex-col items-center justify-center mb-16'>
                    <h2 className={`${playfair.className} font-bold text-[30px] text-black mb-5`}>
                        Promotions
                    </h2>
                    <p className={`${mm.className} text-[20px] text-black/80 text-center w-[600px] max-w-full leading-[1.7em]`}>
                        လူကြီးမင်းတို့ရဲ့ လုပ်ငန်းကို Shwe Sine Tann website တွင် ကြေညာ
                        လိုပါက ‌အခုပဲ ဆက်သွယ်စုံစမ်း မေးမြန်းလိုက်ပါ
                    </p>
                </div>
                <PromotionLists posts={promotionItems} />
            </div>
        </Layout>
    )
}

export default Promotions
