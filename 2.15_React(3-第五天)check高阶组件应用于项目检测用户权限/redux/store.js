//创建store,applyMiddleware()用于redux配合thunk操作异步，让你包装 store 的 dispatch 方法来达到你想要的目的
import {createStore,applyMiddleware} from 'redux'
import reducer from './reducers'//汇总之后的reducers
import thunk from 'redux-thunk';//用于操作异步
import {composeWithDevTools} from 'redux-devtools-extension';//用于调试redux开发工具

export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));

