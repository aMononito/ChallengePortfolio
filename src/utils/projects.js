import axios from 'axios';

const getProjects = () => {
const blackFriday = axios.create({
    baseURL: 'https://github.com/Wroofer/Black-Friday'
});

const dogDaze = axios.create({
    baseURL: 'https://github.com/Wroofer/Dog-Daze'
});

const Project1 = axios.create({
    baseURL: 'https://github.com/aMononito/FSF121624-GROUPMVP'
});

const weatherAPI = axios.create({
    baseURL: 'https://github.com/aMononito/weatherAPI'
});

const carCreator = axios.create({
    baseURL: 'https://github.com/aMononito/ChallengeCreateaCar'
});
};

export default {
  getProjects,
};