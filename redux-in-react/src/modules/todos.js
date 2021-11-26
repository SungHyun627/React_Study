// 액션 타입 선언
const ADD_TODO = "todo/ADD_TODO";
const TOGGLE_TODO = "todo/TOGGLE_TODO";

// 액션 생성함수 선언
// todo 데이터에서 사용할 id
let nextId = 1;

export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

// 초기상태 선언
// reducer의 초기상태가 꼭 객체일 필요는 없다.
// {id : 1, text: '예시', done: false }와 같은 객체를 배열안에 넣을 예정
const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
