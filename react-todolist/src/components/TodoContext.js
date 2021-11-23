import { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: "프로젝트 생성하기",
    done: true,
  },
  {
    id: 2,
    text: "컴포넌트 스타일링하기",
    done: true,
  },
  {
    id: 3,
    text: "Context 만들기",
    done: false,
  },
  {
    id: 1,
    text: "기능 구현하기",
    done: false,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhadnled action type: ${action.type}`);
  }
};

// Context 생성
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
// NextId를 관리하기 위한 context
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

// Custom hook이 TodoProvider 내부에 렌더링 되어 있지 않을 때 에러를 발생시키도록 수정
// Custonm hook
export function useTodoState() {
  const content = useContext(TodoStateContext);
  if (!content) throw new Error("Cannot find TodoProvider");
  return content;
}

// Custom hook
export function useTodoDispatch() {
  const content = useContext(TodoDispatchContext);
  if (!content) throw new Error("Cannot find TodoProvider");
  return content;
}

// Custom hook
export function useTodoNextId() {
  const content = useContext(TodoNextIdContext);
  if (!content) throw new Error("Cannot find TodoProvider");
  return content;
}
