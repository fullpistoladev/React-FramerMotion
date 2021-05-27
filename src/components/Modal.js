import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const backdrop = {
    visible: { opacity: 1},
    hidden: {opacity: 0}
}

const Modal = ({ showModal, setShowModal }) => {

    return (
        <AnimatePresence exitBeforeEnter>
            { showModal && (
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="modal">
                        <p>Want to make another pizza?</p>
                        <Link to="/">
                            <button>Start Again</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )

}

export default Modal;