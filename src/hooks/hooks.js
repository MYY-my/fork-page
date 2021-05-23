import { useReducer, useState, useLayoutEffect, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return windowSize;
};

// const USER = "https://api.github.com/users/USERNAME";
// const REPO = "https://api.github.com/users/USERNAME/repos";
const USER = "https://api.github.com/users/";
const REPO = "https://api.github.com/users/USERNAME/repos";

const defaultState = {
  isError: false,
  isLoading: false,
  response: {},
};

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        response: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};
