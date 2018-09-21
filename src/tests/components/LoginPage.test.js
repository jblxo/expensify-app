import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let wrapper, startLogin;

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin} />)
});

test('should render LoginPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on Google button click', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(startLogin).toHaveBeenCalled();
});

test('should call startLogin on Facebook button click', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(startLogin).toHaveBeenCalled();
});

test('should call startLogin on Twitter button click', () => {
    wrapper.find('button').at(2).simulate('click');
    expect(startLogin).toHaveBeenCalled();
});

test('should call startLogin on GitHub button click', () => {
    wrapper.find('button').at(3).simulate('click');
    expect(startLogin).toHaveBeenCalled();
});