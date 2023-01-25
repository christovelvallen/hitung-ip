import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	Icon,
	Center,
} from '@chakra-ui/react';
import FormAddCourse from '../form/FormAddCourse';
import { AiFillPlusCircle } from 'react-icons/ai';

const ModalAddCourse = ({ isOpen, onClose }) => {
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
				<ModalOverlay />
				<ModalContent mx="4" pb="2" bg="gray.50" borderRadius="xl">
					<ModalHeader>
						<Center>
							<Icon mr="2" as={AiFillPlusCircle} /> MATAKULIAH
						</Center>
					</ModalHeader>
					<ModalBody>
						<FormAddCourse onClose={onClose} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalAddCourse;
