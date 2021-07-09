import axios from 'axios';

const profileUser = `../profile.json`;

export const getUserProfile =() => {
    return axios.get(profileUser);
};

// export const updateUserProfile =() => {
//     return axios.get(profileUser);
// };

// export const getProfile =() => {
//     return axios.get(`${profileUser}/${firstName}-${lastName}`);
// };