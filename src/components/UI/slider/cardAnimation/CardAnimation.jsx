import {AnimatePresence, motion} from "framer-motion";

const CardAnimation = ({children, isInView, isLeft}) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{x: -100}}
                /*style={{
                    transform: isInView ? "none" :
                        isLeft ? "translateX(-100px)" : "translateX(100px)",
                    transition: "all 0.1s ease-out"
                }}*/
                animate={{translateX: 40}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default CardAnimation;