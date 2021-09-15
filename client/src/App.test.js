import { shallow } from 'enzyme';
import App from './App';
import CurrentWeekItemsList from './components/CurrentWeekItemsList/CurrentWeekItemsList';

describe('App', () => {
  it('should render CurrentWeekItemsList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists(<CurrentWeekItemsList />));
  })
})