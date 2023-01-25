import React from 'react';
import {
	Button,
	HStack,
	Stack,
	Text,
	useDisclosure,
	Icon,
	Link,
} from '@chakra-ui/react';
import { useCourseState } from './contexts';
import TableCourse from './components/table/TableCourse';
import ModalAddCourse from './components/modal/ModalAddCourse';
import Swal from 'sweetalert2';
import {
	AiFillPlusCircle,
	AiFillCheckCircle,
	AiFillGithub,
} from 'react-icons/ai';

const App = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { state, dispatch } = useCourseState();

	const handleResult = () => {
		const totalScore = state.courses.reduce(
			(acc, course) => course.sks * course.score + acc,
			0
		);
		const totalSks = state.courses.reduce((acc, course) => course.sks + acc, 0);
		const results = totalScore / totalSks;
		const result = results.toFixed(2);

		Swal.fire({
			icon:
				state.courses.length === 0
					? 'error'
					: result < 2.0
					? 'warning'
					: 'success',
			title:
				state.courses.length === 0
					? `Anda Belum Menambahkan Matakuliah`
					: `IP KAMU ${result}`,
			text:
				state.courses.length === 0
					? null
					: result > 3.5 && result <= 4.0
					? 'Dengan Pujian'
					: result > 2.75 && result <= 3.5
					? 'Sangat Memuaskan'
					: result >= 2.0 && result <= 2.75
					? 'Memuaskan'
					: null,
			confirmButtonColor: '#3182ce',
			confirmButtonText: 'Close',
		});
	};

	const handleReset = () => dispatch({ type: 'RESET_COURSE' });

	return (
		<>
			<Stack p="4" w={{ base: 'full', lg: '800px' }} mx="auto">
				<HStack py="2" align="center" justify="space-between">
					<Text fontSize="3xl" fontWeight="bold" color="gray.700">
						HITUNG IP
					</Text>
					<Link href="https://github.com/christovelvallen" isExternal>
						<AiFillGithub size="35px" />
					</Link>
				</HStack>

				{state.courses.length !== 0 ? <TableCourse /> : null}

				<HStack py="2" justify={{ base: 'center', md: 'start' }}>
					{state.courses.length === 0 ? (
						<Text fontSize="xs" fontWeight="semibold" color="gray.600">
							Silahkan menambahkan matakuliah
						</Text>
					) : (
						<Text fontSize="xs" fontWeight="semibold" color="gray.600">
							Silahkan klik matakuliah yang akan diedit
						</Text>
					)}
				</HStack>

				<HStack justify={{ base: 'center', md: 'start' }}>
					<Button onClick={onOpen} fontSize="sm" colorScheme="blue">
						<Icon mr="2" as={AiFillPlusCircle} /> MATAKULIAH
					</Button>
					<Button onClick={handleResult} fontSize="sm">
						<Icon mr="2" color="blue.500" as={AiFillCheckCircle} /> CEK IP
					</Button>
					<Button onClick={handleReset} fontSize="sm">
						RESET
					</Button>
				</HStack>
			</Stack>

			<ModalAddCourse isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default App;
