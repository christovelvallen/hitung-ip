import { Td, Tr } from '@chakra-ui/react';
import { useCourseState } from '../../contexts';

const TableCourseList = ({ openModal }) => {
	const { state, dispatch } = useCourseState();
	const { courses } = state;

	const handleCourse = item => {
		openModal();
		dispatch({ type: 'UPDATE_COURSE', payload: item });
	};

	return (
		<>
			{courses.map(course => (
				<Tr
					onClick={() => handleCourse(course)}
					key={course.id}
					_hover={{ bg: 'gray.100', cursor: 'pointer' }}
				>
					<Td>{course.title}</Td>
					<Td>{course.sks}</Td>
					<Td>
						{course.score === 4
							? 'A'
							: course.score === 3
							? 'B'
							: course.score === 2
							? 'C'
							: course.score === 1
							? 'D'
							: course.score === 0
							? 'E'
							: course.score}
					</Td>
				</Tr>
			))}
		</>
	);
};

export default TableCourseList;
