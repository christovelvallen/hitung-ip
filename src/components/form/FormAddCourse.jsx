import {
	FormControl,
	FormLabel,
	Input,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	Button,
	VStack,
	HStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useCourseState } from '../../contexts';

const FormAddCourse = ({ onClose }) => {
	const [title, setTitle] = useState('');
	const [sks, setSks] = useState(3);
	const [score, setScore] = useState(4);

	const { state, dispatch } = useCourseState();

	const handleSubmit = e => {
		e.preventDefault();

		const setCourse = {
			id: +new Date(),
			title: title,
			sks: Number(sks),
			score: Number(score),
		};

		dispatch({
			type: 'ADD_COURSE',
			payload: state.courses.concat(setCourse),
		});

		Swal.fire({
			position: 'center',
			icon: 'success',
			text: 'Matakuliah Berhasil di tambahkan',
			showConfirmButton: false,
			timer: 800,
			iconColor: 'lightblue',
		});

		onClose();
	};

	return (
		<form onSubmit={handleSubmit}>
			<VStack mt="-2">
				<FormControl bg="white" p="2" borderRadius="lg" isRequired>
					<FormLabel fontSize="sm">Matakuliah</FormLabel>
					<Input
						onChange={e => setTitle(e.target.value)}
						placeholder="Nama Matakuliah"
					/>
				</FormControl>

				<FormControl bg="white" p="2" borderRadius="lg" isRequired>
					<FormLabel fontSize="sm">SKS (max 20)</FormLabel>
					<NumberInput
						onChange={value => setSks(value)}
						defaultValue={sks}
						max={20}
						min={0}
					>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>

				<FormControl bg="white" p="2" borderRadius="lg" isRequired>
					<FormLabel fontSize="sm">Nilai</FormLabel>
					<Select onChange={e => setScore(e.target.value)} defaultValue={score}>
						<option value={4}>A</option>
						<option value={3}>B</option>
						<option value={2}>C</option>
						<option value={1}>D</option>
						<option value={0}>E</option>
					</Select>
				</FormControl>

				<HStack w="full" pt="2" justify="end">
					<Button
						fontSize="sm"
						borderRadius="lg"
						colorScheme="blue"
						type="submit"
					>
						SIMPAN
					</Button>
					<Button
						fontSize="sm"
						borderRadius="lg"
						variant="ghost"
						color="red.500"
						onClick={onClose}
					>
						Close
					</Button>
				</HStack>
			</VStack>
		</form>
	);
};

export default FormAddCourse;
