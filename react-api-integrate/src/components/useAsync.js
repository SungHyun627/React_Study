import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: false,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: false,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// 특정 버튼을 눌렀을 때에만 데이터를 요청하기위해 skip variable 설정
const useAsync = (callback, deps = [], skip = false) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    if (skip) return;
    fetchData();
  }, deps);

  return [state, fetchData];
};

export default useAsync;
