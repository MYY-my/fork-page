import { useState, useLayoutEffect } from "react";

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

const getUser = async (query) => {
  const result = await fetch(`https://api.github.com/users/${query}`);
  const user = await result.json();
  return user;
};
const getRepos = async (query) => {
  const result = await fetch(`https://api.github.com/users/${query}/repos`);
  const repos = await result.json();
  return repos;
};
const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  const suspender = promise.then(
    (data) => {
      result = data;
      status = "succes";
    },
    (error) => {
      result = error;
      status = "error";
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if ((status = "success")) {
        return result;
      }
    },
  };
};
export const getData = (query) => {
  return {
    user: wrapPromise(getUser(query)),
    repos: wrapPromise(getRepos(query)),
  };
};
