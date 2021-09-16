import { CurrentWeekItemsList } from './CurrentWeekItemsList';
import {shallow, ShallowWrapper} from "enzyme";
import itemFetchingService from "../../services/item-fetching-service";
import {findByDataTestId} from "../../utils/testUtils";
import React from "react";

jest.mock("../../services/item-fetching-service")

const emptyItems = [] as any;

const dummyItems = [
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
]

describe('CurrentWeekItemsList', () => {
    let wrapper = {} as any;
    describe('given a list of items', () => {
        beforeEach(() => {
            (itemFetchingService.fetchFromCurrentWeek as jest.Mock).mockReturnValue(dummyItems)
            wrapper = createComponent();
        })
        it('should display items', () => {
            const listTitle = findByDataTestId(wrapper, 'itemCard')
            expect(listTitle).not.toHaveLength(0);
        });
    });

    describe('given an empty list of items', () => {
        beforeEach(() => {
            (itemFetchingService.fetchFromCurrentWeek as jest.Mock).mockReturnValue(emptyItems)
            wrapper = createComponent();
        })
        it('should not display any item', () => {
            const listTitle = findByDataTestId(wrapper, 'itemCard')
            expect(listTitle).toHaveLength(0);
        });
    });
})

const createComponent = (): ShallowWrapper => shallow(<CurrentWeekItemsList  classes={{} as any}/> )

export {};