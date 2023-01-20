import React from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from './use-dimensions'
import { MenuToggle } from './MenuToggle'
import Navbar from './Navbar'

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 100% 30px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(0px at 100% 30px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}

const Menu = ({ onClick, visible }) => {
    const [isOpen, toggleOpen] = useCycle(false, true)
    const containerRef = React.useRef(null)
    const { height } = useDimensions(containerRef)

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
            <motion.div 
                className='fixed bg-100 inset-0' 
                variants={sidebar} 
            />

            <Navbar visible={visible} />

            <MenuToggle 
                toggle={() => {
                    toggleOpen()
                    onClick()
                }} 
            />
        </motion.nav>
    )
}

export default Menu
