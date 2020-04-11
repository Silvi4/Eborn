import { createStore } from 'redux';
import { ebornReducer } from './reducers';

const initialState = {
    hiddenCart: false,
    cartProducts: []
}
// Almacenamiento de nuestro estado
const store = createStore(
    ebornReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION_&& window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;