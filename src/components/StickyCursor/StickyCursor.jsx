import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import './StickyCursor.scss';
import StickyCursorContext from '../../context/StickyCursorContext';
import useMousePosition from '../../hooks/useMousePosition';

function StickyCursor({ stickyElement, children }) {
	const { motionX, motionY } = useMousePosition();
	const { showStickyCursor, stickyText, img, shape } = useContext(StickyCursorContext);

	return (
		<motion.div
			className='sticky-cursor-circle'
			style={{
				x: motionX,
				y: motionY,
			}}
			initial={{ scale: 0 }}
			animate={{
				scale: showStickyCursor ? 1 : 1,
				width: showStickyCursor ? '300px' : '10px',
				height: showStickyCursor
					? (shape === 'circle' ? '300px' : '350px')
					: '10px',
				top: showStickyCursor ? '-175px' : '-5px',
				left: showStickyCursor ? '-150px' : '-5px',
				borderRadius: shape === 'circle' ? '300px' : '10px',
				transition: { type: 'tween', ease: 'backOut', duration: 0.5 },
			}}
		>
			<AnimatePresence>
				{img
					&&
					<motion.img
						initial={{
							opacity: 0
						}}
						animate={{
							opacity: 1,
							transition: {
								duration: .275,
								ease: [0.76, 0, 0.24, 1],
							}
						}}
						exit={{
							opacity: 1
						}}
						className={`${shape === 'circle' && 'circle'} img-sticky`} src={img} width={250} />}

			</AnimatePresence>

			{stickyText && <span className='text-sticky'>{stickyText}</span>}


		</motion.div>
	);
}

export default StickyCursor;
