import http from '../utils/request';

export const getDate = () => {
    return http.get('/home/getDate')
}