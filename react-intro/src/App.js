import { useRef, useReducer, useMemo, useCallback } from "react";
import "./App.css";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./hooks/useInputs";

const countActiveUser = (users) => {
  console.log("활성 사용자 count");
  return users.filter((user) => user.active).length;
};

const initialState = {
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};

const App = () => {
  const name = "react";
  const style = {
    backgroundColor: "red",
    color: "aqua",
    fontSize: 24,
    padding: "1rem",
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
  }, [username, email, reset]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUser(users), [users]);

  return (
    <Wrapper>
      {/* 조건부 렌더링 isSpecial */}
      {/* props 값 설정을 생략한 True */}
      <Hello name={name} color="red" isSpecial={true} />
      <Hello color="pink" />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      <Counter />
      <InputSample />
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </Wrapper>
  );

  // useState 이용하여 state관리
  // const [inputs, setInputs] = useState({
  //   username: "",
  //   email: "",
  // });
  // const { username, email } = inputs;

  // // 상태 관리
  // const onChange = useCallback((e) => {
  //   const { name, value } = e.target;
  //   setInputs((inputs) => ({
  //     ...inputs,
  //     [name]: value,
  //   }));
  // }, []);

  // const [users, setUsers] = useState([
  //   {
  //     id: 1,
  //     username: "velopert",
  //     email: "public.velopert@gmail.com",
  //     active: true,
  //   },
  //   {
  //     id: 2,
  //     username: "tester",
  //     email: "tester@example.com",
  //     active: false,
  //   },
  //   {
  //     id: 3,
  //     username: "liz",
  //     email: "liz@example.com",
  //     active: false,
  //   },
  // ]);

  // const nextId = useRef(4);

  // const onCreate = useCallback(() => {
  //   const user = {
  //     id: nextId.current,
  //     username,
  //     email,
  //   };
  //   // 불변성을 유지하면서 배열에 항목 추가하는 법
  //   // 1. spread 2. concat
  //   setUsers((users) => users.concat(user));

  //   // concat 함수 이용법
  //   // setUsers(users.concat(user));

  //   setInputs({
  //     username: "",
  //     email: "",
  //   });
  //   nextId.current += 1;
  // }, [username, email]);

  // const onRemove = useCallback((id) => {
  //   // 배열에서 항목을 제거할 때 filter 내장 함수 사용
  //   setUsers((users) => users.filter((user) => user.id !== id));
  // }, []);

  // const onToggle = useCallback((id) => {
  //   setUsers((users) =>
  //     users.map((user) =>
  //       user.id === id ? { ...user, active: !user.active } : user
  //     )
  //   );
  // }, []);

  // // 비효율적인 리렌더링을 방지하고자 useMemo 사용
  // // deps 배열이 바뀌면 등록한 함수를 호출하여 재연산 / 아니면 원래 값 재사용
  // const count = useMemo(() => countActiveUser(users), [users]);
};

export default App;
