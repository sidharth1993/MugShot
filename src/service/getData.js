import axios from 'axios';

export default function getData () {
    return axios.get('data.json').then(response=>{
            return response.data;
        });
}

