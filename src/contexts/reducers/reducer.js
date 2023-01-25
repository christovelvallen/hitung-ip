const ADD_COURSE = 'ADD_COURSE';
const UPDATE_COURSE = 'UPDATE_COURSE';
const RESET_COURSE = 'RESET_COURSE';

export const initialState = {
	courses: [],
	updCourse: null,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case ADD_COURSE:
			return {
				...state,
				courses: action.payload,
			};
		case UPDATE_COURSE:
			return {
				...state,
				updCourse: action.payload,
			};
		case RESET_COURSE:
			return {
				courses: [],
				updCourse: null,
			};

		default:
			return state;
	}
};
