import { Inter, Playfair_Display } from '@next/font/google'
import localFont from '@next/font/local'

const playfair = Playfair_Display({
    subsets: ['latin']
})

const inter = Inter({
    subsets: ['latin'],
    weight: ['100','200','300','400','500','600','700','800','900']
})

const mm = localFont({
    src: './fonts/MyanmarSagar.ttf',
    variable: '--font-mm'
})

export {
    playfair,
    inter,
    mm
}