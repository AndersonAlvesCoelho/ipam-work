import { combineReducers } from 'redux';
import office from './office.reducers';

const rootReducer = combineReducers({
    office,
});

export default rootReducer;
