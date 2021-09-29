import { createStore } from 'redux';
import { Provider } from 'react-redux';


import postReducer from './components/postReducer';
const store = createStore(postReducer);
<Provider store={store}></Provider>