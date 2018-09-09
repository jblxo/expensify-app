import authReducer from '../../reducers/auth';

test('should set default state', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({});
});

test('should set uid for login', () => {
    const uid = 'oiaa54156a9f98wefafw';
    
    const action = {
        type: 'LOGIN',
        uid
    };

    const state = authReducer({}, action);
    expect(state).toEqual({
        uid
    });
});

test('should clear uid for logout', () => {
    const uid = 'oiaa54156a9f98wefafw';
    
    const action = {
        type: 'LOGOUT'
    };

    const state = authReducer({uid}, action);
    expect(state).toEqual({});
});