import { Platform } from 'react-native';
import {
    createStore,
    applyMiddleWare,
    compose
} from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// have to write reducer functions.
import RootReducer from './Reducers';

const middleware = applyMiddleWare(thunk, promise, logger);

const store = createStore(

    RootReducer,
    compose(
        middleware,
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        }),
    )
);

export default Store;