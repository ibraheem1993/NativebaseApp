import axios from 'axios';

export const BaseUrl =() => {

    axios.defaults.baseURL = 'http://www.rncourseproject.com/app';
}