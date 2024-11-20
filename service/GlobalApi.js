import axios from 'axios'

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`  //we are using this bearer api key so that no one other than us can access the data
    }
})

const CreateNewResume = (data) => axiosClient.post('/user-resumes',data);

const GetUserResumes = (userEmail) => axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail);

const UpdateResumeDetail = (id, data) => axiosClient.put('/user-resumes/'+id,data)

export default{
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail
}