import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	TableContainer,
	useDisclosure,
} from '@chakra-ui/react';
import ModalUpdateCourse from '../modal/ModalUpdateCourse';
import TableCourseList from './TableCourseList';

const TableCourse = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<TableContainer>
				<Table bg="gray.50" variant="simple" size="sm" borderRadius="xl">
					<Thead>
						<Tr>
							<Th>MATAKULIAH</Th>
							<Th>SKS</Th>
							<Th>NILAI</Th>
						</Tr>
					</Thead>
					<Tbody>
						<TableCourseList openModal={onOpen} />
					</Tbody>
				</Table>
			</TableContainer>

			<ModalUpdateCourse isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default TableCourse;
