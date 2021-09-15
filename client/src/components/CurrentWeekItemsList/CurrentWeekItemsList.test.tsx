import { shallow } from 'enzyme';
import { findByDataTestId } from '../../utils/testUtils';
import CurrentWeekItemsList from './CurrentWeekItemsList';

describe('CurrentWeekItemsList', () => {
    describe('menu title', () => {
        it('should display list title', () => {
            const wrapper = shallow(<CurrentWeekItemsList />);
            const listTitle = findByDataTestId(wrapper, 'list-title')
            expect(listTitle.text()).toBe('Current week items');
        });
    });
})

export {};