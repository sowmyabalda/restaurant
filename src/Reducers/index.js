import { combineReducers } from "redux";
import tablereducer from "./tableReducer";
import filterreducer from "./filterReducer";
import orderreducer from "./orderReducer";

const reducer = combineReducers({
    tablereducer: tablereducer,
    filterreducer: filterreducer,
    orderreducer: orderreducer
})
export default reducer;