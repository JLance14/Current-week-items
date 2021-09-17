import axios from "axios";
import itemFetchingService from "./item-fetching-service";

jest.mock('axios');

describe('fetchFromCurrentWeek', () => {
    const response = {
        data: {
            currentItems: [
                {
                    id: "111",
                    deliveryWeek: "2021-09-05",
                    metadata: "",
                    item: {
                        displayName: "",
                        metaData: "",
                        category: "",
                        status: ""
                    }
                },
                {
                    id: "112",
                    deliveryWeek: "2021-09-12",
                    metadata: "",
                    item: {
                        displayName: "",
                        metaData: "",
                        category: "",
                        status: ""
                    }
                },
                {
                    id: "113",
                    deliveryWeek: "2021-09-12",
                    metadata: "",
                    item: {
                        displayName: "",
                        metaData: "",
                        category: "",
                        status: ""
                    }
                }
            ]
        }
    }
    it('should fetch items from current week', async () => {
        (axios.get as jest.Mock).mockReturnValue(response)
        const result = await itemFetchingService.fetchFromCurrentWeek();
        expect(result).toEqual(response.data.currentItems);
    })
})