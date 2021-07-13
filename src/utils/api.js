import axios from 'axios';

const profileUser = `../profile.json`;

export const getUserProfile =() => {
    return axios.get(profileUser);
};

const userLicenses = `http://345vy.mocklab.io/licenses`;

export const getAllLicenses =() => {
    return axios.get(userLicenses);
    
};

const userEducation = `http://345vy.mocklab.io/education`;

export const getAllEdu =() => {
    return axios.get(userEducation);
    
};

const userCerts = `http://345vy.mocklab.io/certifications`;

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