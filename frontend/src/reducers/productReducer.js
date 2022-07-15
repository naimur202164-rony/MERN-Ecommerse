import {
  ALL_PORDUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    // This case used to send requested in the backend
    case ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    // this code is used to load data from api
    case ALL_PORDUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
      };
    case ALL_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Single Product
export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    // This case is using request for data store
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    // This case is used to store product details
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
      // When we need to clear error we used this command
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
