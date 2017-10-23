import React from 'react';
import { shallow } from 'enzyme';
import ConfirmRemoveModal from '../../components/ConfirmRemoveModal';

let startRemoveExpense, history, wrapper;

beforeEach(() => {
    history = { push: jest.fn() };
    wrapper = shallow(<ConfirmRemoveModal
        confirmDelete={true}
        history={history}
    />);
});

test('should render ConfirmRemoveModal correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

// Missing: 'should handle onCancel' and 'should handle onConfirm'
// test('should handle onCancel', () => {
//     wrapper.find({ name: 'removeCancelButton' }).simulate('click');
//     expect(wrapper.state('confirmDelete')).toBe(false);
// });