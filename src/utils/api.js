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
// const userLicenses = ` http://10.103.0.98:3000/activelicenses`;

// export const getAllLicenses =() => {
//     return axios.get(userLicenses);
    
// };
//** Mock Server API
// const userEducation = `http://345vy.mocklab.io/education`;

// ** Local Dev API
// const userEducation = `http://localhost:3000/education`;

// ** Demo API
// const userEducation = `http://10.103.0.98:3000/education`;
// export const getAllEdu =() => {
//     return axios.get(userEducation);
    
// };

//** Mock Server API
// const userCerts = `http://345vy.mocklab.io/certifications`;

// ** Local Dev API
// const userCerts = `http://localhost:3000/certifications`;\

// ** Demo API
// const userCerts = `http://10.103.0.98:3000/activecertifications`;
// export const getAllCerts =() => {
//     return axios.get(userCerts);
    
// };


// ** Demo API
// const missingCerts = `http://10.103.0.98:3000/missingcertifications`;
// export const getAllMissingCerts =() => {
//     return axios.get(missingCerts);
    
// };
// ** Public Demo API

const userEducation = `https://my-json-server.typicode.com/onestaffmed/compliance-ccvwzn/education`;
export const getAllEdu =() => {
    return axios.get(userEducation);
    
};
const missingCerts = `https://my-json-server.typicode.com/onestaffmed/compliance-ccvwzn/missingCertifications`;
export const getAllMissingCerts =() => {
    return axios.get(missingCerts);
    
};
const loadLicense = `https://my-json-server.typicode.com/onestaffmed/compliance-ccvwzn/activelicenses`;
export const masterLicenses = () => {
    return axios.get(loadLicense);
};

const userLicenses = ` https://my-json-server.typicode.com/onestaffmed/compliance-ccvwzn/activelicenses`;

export const getAllLicenses =() => {
    return axios.get(userLicenses);
    
};
const expiredLicense = `https://my-json-server.typicode.com/onestaffmed/compliance-ccvwzn/expiredlicenses`;
export const allExpiredLicenses = () => {
    return axios.get(expiredLicense);
};

const userCerts = `https://my-json-server.typicode.com/onestaffmed/compliance-ccvwzn/activeCertifications`;
export const getAllCerts =() => {
    return axios.get(userCerts);
    
};
// const loadLicense = `http://10.103.0.98:3000/activelicenses`;
// export const masterLicenses = () => {
//     return axios.get(loadLicense);
// };


// const expiredLicense = `http://10.103.0.98:3000/expiredlicenses`;
// export const allExpiredLicenses = () => {
//     return axios.get(expiredLicense);
// };


// export const updateUserProfile =() => {
//     return axios.get(profileUser);
// };

// export const getProfile =() => {
//     return axios.get(`${profileUser}/${firstName}-${lastName}`);
// };
// https://2e38fa83-e1e9-4f0e-9361-b7a10aa18c0a.mock.pstmn.io