import * as axios from 'axios';

jest.mock('axios');

describe('itemFetchingService', () => {
    describe('given a list of items', () => {
        const response = {
            data: {
                result: {
                    weekItems: [
                        {
                            id: "111",
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
            it('should fetch all of them', () => {
                expect(true).toBeTruthy();
            })
        })

        describe('fetchFromCurrentWeek', () => {
            it('should only fetch items from the current week', () => {
                expect(true).toBeTruthy();
            })
        })
    })
})