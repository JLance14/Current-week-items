import { ReactWrapper, ShallowWrapper } from 'enzyme';

export const findByDataTestId = (wrapper : ShallowWrapper<any> | ReactWrapper<any>, dataTestId : string) =>
wrapper.findWhere((el: { prop: (arg0: string) => string }) => el.prop('data-testid') === dataTestId);