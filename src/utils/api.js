import axios from 'axios';

const profileUser = `../profile.json`;

export const getUserProfile =() => {
    return axios.get(profileUser);
};
//** Mock Server API
// const userLicenses = `http://345vy.mocklab.io/licenses`;

// ** Local Dev API
// const userLicenses = ` http://localhost:3000/licenses`;

// ** Demo API
const userLicenses = ` http://10.0.0.127:3000/licenses`;

export const getAllLicenses =() => {
    return axios.get(userLicenses);
    
};
//** Mock Server API
// const userEducation = `http://345vy.mocklab.io/education`;

// ** Local Dev API
// const userEducation = `http://localhost:3000/education`;

// ** Demo API
const userEducation = `http://10.0.0.127:3000/education`;


export const getAllEdu =() => {
    return axios.get(userEducation);
    
};
//** Mock Server API
// const userCerts = `http://345vy.mocklab.io/certifications`;

// ** Local Dev API
// const userCerts = `http://localhost:3000/certifications`;\

// ** Demo API
const userCerts = `http://10.0.0.127:3000/certifications`;
export const getAllCerts =() => {
    return axios.get(userCerts);
    
};



// export const updateUserProfile =() => {
//     return axios.get(profileUser);
// };

// export const getProfile =() => {
//     return axios.get(`${profileUser}/${firstName}-${lastName}`);
// };
// https://2e38fa83-e1e9-4f0e-9361-b7a10aa18c0a.mock.pstmn.io