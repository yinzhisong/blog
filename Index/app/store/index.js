// // 1. 引入 redux 
// import { createStore } from "redux";



// // 2. reducer 函数
// let defaultState = {
//     headerNavOpen: true
// };
// function reducer (state=defaultState, action){
//     switch (action.type){
//         case "navOpen":
//             return {
//                 ...state,
//                 headerNavOpen: action.diy_boolean
//             };
//         default:
//             return state;
//     }
// }

// // 3. 将 reducer 和 store 进行关联

// let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default store;


// 1. 引入 redux 和 combinReducers 
import { createStore, combineReducers } from "redux";

// 2. 引入 reducers , 加了一个 s 代表多个 reducer
import {reducer as header} from "@/components/Header/Store";
let reducers = combineReducers({
    header
});

// 3. 将 reducer 和 store 进行关联
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;