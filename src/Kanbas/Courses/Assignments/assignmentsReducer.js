import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";


const initialState = {
    assignments: db.assignments,
    defaultAssignment: { _id: "id", course: "course", title: "New Assignment", maxScore: "100", dueDate: "2023-03-15", availableFrom: "2023-01-10", availableUntil: "2023-05-15" },
};


const assignmentsSlice = createSlice({
                                     name: "assignments",
                                     initialState,
                                     reducers: {

                                         deleteAssignment: (state, action) => {
                                             state.assignments = state.assignments.filter(
                                                 (assignment) =>assignment._id !== action.payload
                                             );
                                         },
                                         saveAssignment: (state, action) => {
                                             state.assignments = state.assignments.filter((assignment) =>
                                               assignment._id !== state.defaultAssignment._id
                                             );
                                             state.assignments = [
                                                 { ...state.defaultAssignment},
                                                 ...state.assignments,
                                             ];

                                         },
                                         setAssignment: (state, action) => {
                                             console.log(state.defaultAssignment);
                                             console.log(action.payload);
                                             state.defaultAssignment = action.payload;
                                         },
                                     },
                                 });


export const { deleteAssignment,
    saveAssignment, setAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

