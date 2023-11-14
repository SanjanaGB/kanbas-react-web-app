import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
    assignments: [],
    assignment: { _id: "id", course: "course", title: "New Assignment", maxScore: "100", dueDate: "2023-03-15", availableFrom: "2023-01-10", availableUntil: "2023-05-15" },
};


const assignmentsSlice = createSlice({
                                     name: "assignments",
                                     initialState,
                                     reducers: {
                                         setAssignments: (state, action) => {
                                             state.assignments = action.payload;
                                         },

                                         deleteAssignment: (state, action) => {
                                             state.assignments = state.assignments.filter(
                                                 (assignment) =>assignment._id !== action.payload
                                             );
                                         },
                                         saveAssignment: (state, action) => {
                                             state.assignments = state.assignments.filter((assignment) =>
                                               assignment._id !== state.assignment._id
                                             );
                                             state.assignments = [
                                                 { ...state.assignment},
                                                 ...state.assignments,
                                             ];

                                         },
                                         setAssignment: (state, action) => {
                                             state.assignment = action.payload;
                                         },
                                     },
                                 });


export const { deleteAssignment,
    saveAssignment, setAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

