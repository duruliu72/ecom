import { apiUrl } from "../config.json";
import axios from "axios";
// Action
export const LOAD_BANNER = "LOAD_BANNER";
// Action Creator
export const fetchBanners = () => {
  return (dispatch, getState) => {
    axios
      .get(apiUrl + "/public/get/banner")
      .then(({ data: json }) => {
        dispatch({
          type: LOAD_BANNER,
          payload: [],
        });
      })
      .catch((ex) => {
        console.log("fetchBanner_ex", ex);
      });
  };
};
// Reducer
const initialState = {
  banners: [{ x: "jhgjhgs" }],
};
const BannerReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOAD_BANNER:
      return {
        ...state,
        banners: action.payload,
      };
    default:
      return state;
  }
};

export default BannerReducer;
export const getBanners = (state) => {
  return state.bannerState.banners;
};
