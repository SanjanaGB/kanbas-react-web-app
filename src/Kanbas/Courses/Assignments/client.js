import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-app-cwwu.onrender.com/api/courses";

const ASSIGNMENTS_URL = "https://kanbas-node-server-app-cwwu.onrender.com/api/assignments";
export const removeAssignment = async (assignmentId) => {
    const response = await axios
        .delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
    return response.data;
};


export const updateOrCreateAssignment = async (courseId, assignment) => {
    console.log(assignment);
    const response = await axios.put(
        `${COURSES_URL}/${courseId}/assignments/${assignment._id}`,
        assignment
    );
    return response.data;
};


export const findAssignmentsForCourse = async (courseId) => {
    const response = await axios
        .get(`${COURSES_URL}/${courseId}/assignments`);
    return response.data;
};

export const fetchSingleAssignment = async (assignmentId) => {
    const response = await axios.
    get(`${ASSIGNMENTS_URL}/${assignmentId}`);
    return response.data;
};


