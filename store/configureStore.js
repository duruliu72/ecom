import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import reduecr from "./reducer";
const middlewareEnhancer = applyMiddleware(thunk);
export default function makeStore() {
  return createStore(reduecr, middlewareEnhancer);
}
export const wrapper = createWrapper(makeStore);
