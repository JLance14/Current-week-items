import axios from 'axios';

const baseURL = 'http://localhost:8080';

export default class ItemFetchingService {

    static fetchFromCurrentWeek = async () => {
        return await axios.get(`${baseURL}/current-week-items`)
    }
}
