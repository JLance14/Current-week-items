import axios from 'axios';
import { baseURL } from "../utils/utils";

export default class ItemFetchingService {

    static fetchFromCurrentWeek = async () => {
        const result = await axios.get(`${baseURL}/current-week-items`)
        return result.data.currentItems;
    }
}
