import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let startRemoveExpense, startEditExpense, history, wrapper;

beforeEach(() => {
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    startEditExpense = jest.fn();
    wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expenses[2]} />);
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should remove expense', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});