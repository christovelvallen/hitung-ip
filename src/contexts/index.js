import { createContext, useContext, useReducer } from 'react';
import { reducer, initialState } from './reducers/reducer';

export const CourseContext = createContext();
export const useCourseState = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<CourseContext.Provider value={{ state, dispatch }}>
			{children}
		</CourseContext.Provider>
	);
};
