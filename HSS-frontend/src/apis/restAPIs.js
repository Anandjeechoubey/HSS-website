import axios from "axios";

const API_BASE_URL = "http://65.1.107.108/api/";
//const API_BASE_URL = "http://localhost:8000/api/";

//Home
export const GetAnnouncements = () =>
  axios.get(`${API_BASE_URL}home/announcements`);
export const GetNews = () => axios.get(`${API_BASE_URL}home/news`);
export const GetPhdAwarded = () => axios.get(`${API_BASE_URL}home/phd_awarded`);

// People
export const GetFacultyList = () =>
  axios.get(`${API_BASE_URL}people/faculties`);
export const GetStudentList = () => axios.get(`${API_BASE_URL}people/students`);
export const GetStaffList = () => axios.get(`${API_BASE_URL}people/staff`);

// Events
export const GetConfWS = () =>
  axios.get(`${API_BASE_URL}events/conf-workshops-presentations`);
export const GetAwards = () => axios.get(`${API_BASE_URL}events/awards`);
export const GetTalks = () => axios.get(`${API_BASE_URL}events/talks`);

// Others
export const GetResearch = () => axios.get(`${API_BASE_URL}research`);
export const GetAcads = () => axios.get(`${API_BASE_URL}acads`);
export const GetCommittees = () => axios.get(`${API_BASE_URL}committees`);

/*
 * Notes
    - acad api broken
    - news api empty
    - phd_awarded: no email
    - research API mei no link
    - research mei show more btn usage
    - loading and error screen UI
    - footer links
    - courses API pending
    - overall content sanity (after hosting)
    - credits
*/
