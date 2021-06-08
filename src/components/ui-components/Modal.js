import { useContext } from 'react';
import { uiControlContext } from 'utils/providers/uiControlProvider';
import { Closer as ModalClose } from 'components/Drawer';
import { HeadingFour, Typography } from './Typography';

function Modal({ title, children, action = false }) {
	const { closeModal } = useContext(uiControlContext);

	return (
		<>
			<ModalClose action={action ? action : closeModal} />
			<Typography as={HeadingFour} casing="upper" align="left" margin="0 0 1.5rem 0">
				{title}
			</Typography>
			{children}
		</>
	);
}

export default Modal;
