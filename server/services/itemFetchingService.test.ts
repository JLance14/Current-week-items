import axios from 'axios';
import itemFetchingService from "./itemFetchingService";

jest.mock('axios');

describe('itemFetchingService', () => {
    describe('given a list of items', () => {
        const response = {
            data: {
                result: {
                    weekItems: [
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
                    ]}
            }
        }

        const items = response.data.result.weekItems

        describe('fetchAll', () => {
            it('should fetch all of them', async () => {
                (axios.get as jest.Mock).mockReturnValue(response)
                const result = await itemFetchingService.fetchAll();
                expect(result).toEqual(items);
            })
        })

        describe('fetchFromCurrentWeek', () => {
            const currentWeekItems = [
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
            ];
            it('should only fetch items from the current week', async () => {
                (axios.get as jest.Mock).mockReturnValue(response)
                const result = await itemFetchingService.fetchFromCurrentWeek();
                expect(result).toEqual(currentWeekItems);
            })
        })
    })
})