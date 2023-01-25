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
	HStack,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useCourseState } from '../../contexts';

const FormUpdateCourse = ({ onClose }) => {
	const { state, dispatch } = useCourseState();
	const { updCourse } = state;

	const [title, setTitle] = useState(updCourse.title);
	const [sks, setSks] = useState(updCourse.sks);
	const [score, setScore] = useState(updCourse.score);

	const handleSubmit = e => {
		e.preventDefault();

		const setCourse = {
			title: title,
			sks: Number(sks),
			score: Number(score),
		};

		dispatch({
			type: 'ADD_COURSE',
			payload: state.courses.map(c =>
				c.id === updCourse.id ? { ...c, ...setCourse } : c
			),
		});

		Swal.fire({
			position: 'center',
			icon: 'success',
			text: 'Matakuliah Berhasil di edit',
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
					<FormLabel>Matakuliah</FormLabel>
					<Input
						onChange={e => setTitle(e.target.value)}
						defaultValue={title}
						placeholder="Kalkulus"
					/>
				</FormControl>

				<FormControl bg="white" p="2" borderRadius="lg" isRequired>
					<FormLabel>SKS (max 20)</FormLabel>
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
					<FormLabel>Nilai</FormLabel>
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

export default FormUpdateCourse;
