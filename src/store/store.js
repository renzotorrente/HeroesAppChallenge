import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import authreducer from '../components/auth/Authreducer';  
import HeroReducer from './reducers/heroreducer';

var reducers = combineReducers({
heroereducer:HeroReducer,
authreducer: authreducer,
}
);
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);