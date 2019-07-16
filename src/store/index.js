import { combineReducers, createStore } from 'redux'

// actions.js
export const storeName = name => ({
    type: 'STORE_NAME'
});

export const clearName = () => ({
    type: 'CLEAR_NAME',
});

// reducers.js
export const name = (state = {}, action) => {
    switch (action.type) {
        case 'ACTIVATE_GEOD':
            return action.name;
        case 'CLOSE_GEOD':
            return {};
        default:
            return state;
    }
};

export const reducers = combineReducers({
    name,
});

// store.js
export function configureStore(initialState = {}) {
    const store = createStore(reducers, initialState);
    return store;
}


export const store = configureStore();
