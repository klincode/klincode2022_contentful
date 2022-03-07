import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
const Box1 = (props) => {
	const [isAnimating, setIsAnimating] = useState(true)
	return (
		<div className="box-container">
			<motion.div
				onClick={() => setIsAnimating(!isAnimating)}
				className="box"
				animate={{ x: isAnimating ? '50vw' : 0, opacity: 1, duration: 10000, rotate: isAnimating ? 90 : 0 }}
				initial={{ opacity: 0.6 }}
				transition={{
					type: 'spring', // physics
					// stiffness: 200, //how spring works  default 100
					duration: 5,
					damping: 8, //slower
					// delay: 1,
				}}
			></motion.div>
		</div>
	)
}

export default Box1
