import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	Center,
	Icon,
} from '@chakra-ui/react';
import FormUpdateCourse from '../form/FormUpdateCourse';
import { RxUpdate } from 'react-icons/rx';

const ModalUpdateCourse = ({ isOpen, onClose }) => {
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
				<ModalOverlay />
				<ModalContent mx="4" pb="2" bg="gray.50" borderRadius="xl">
					<ModalHeader>
						<Center>
							<Icon mr="2" as={RxUpdate} /> MATAKULIAH
						</Center>
					</ModalHeader>
					<ModalBody>
						<FormUpdateCourse onClose={onClose} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalUpdateCourse;
