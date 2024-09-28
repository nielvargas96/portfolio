import { useContext } from 'react';

import StickyCursorContext from '../../context/StickyCursorContext';

export default function StickyCursorWrapper({ text, img, shape, children, ...otherProps }) {
	const { setShowStickyCursor, stickyText, stickyDefault, setStickyText, setImg, setShape } =
		useContext(StickyCursorContext);

	return (
		<div
			{...otherProps}
			onMouseEnter={() => {
				if (text) setStickyText([text, stickyDefault]);
				if (img) setImg(img);
				if (shape) setShape(shape);
				setShowStickyCursor(true);
			}}
			onMouseLeave={() => {
				if (text) setStickyText([stickyDefault, stickyDefault]);
				if (img) setImg('');
				if (shape) setShape('');
				setShowStickyCursor(false);
			}}>
			{children}
		</div>
	);
}
