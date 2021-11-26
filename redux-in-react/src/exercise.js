import { createStore } from "redux";

// CreateStore는 스토어를 만들어주는 함수
// 리액트는 프로젝트에서 단 하나의 스토어를 만든다.

// 리덕스에서 관리할 상태
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

// 액션타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

// 액션함수 정의
const increase = () => {
  return {
    // 액션 객체에 type값 필수
    type: INCREASE,
  };
};

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  // 액션 안에는 type 외에 필드 추가 가능
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

// 리듀서 만들기
// 액션 생성함수를 통해 만들어지 객체를 참조하여 새로운 상태를 만드는 함수 생서
// 리듀서의 불변성은 유지

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

// 스토어 만들기
const store = createStore(reducer);

// 현재 store 안에 들어있는 상태를 조회
console.log(store.getState());

// 스토어안에 들어있는 상태가 바뀔 때마다 호출되는 listener 함수
const listener = () => {
  const state = store.getState();
  console.log(state);
};

// 구독을 해지하고 싶을 때 호출하는 함수
const unsubscribe = store.subscribe(listener);

// 액션을 dispatch
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "와우" }));
