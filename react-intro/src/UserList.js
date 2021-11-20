import React, { useEffect, useContext } from "react";
import { UserDispatch } from "./App";

// Component 리렌더링 방지
const User = React.memo(({ user }) => {
  // useEffect 안에서 사용하는 상태나, props가 있다면, useEffect의 deps에 넣어준다.
  useEffect(() => {
    console.log(user);
  });

  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => {
          dispatch({ type: "TOGGLE_USER", id: user.id });
        }}
      >
        {user.username}
      </b>

      <span>({user.email}) </span>
      <button
        onClick={() => {
          dispatch({
            type: "REMOVE_USER",
            id: user.id,
          });
        }}
      >
        삭제
      </button>
    </div>
  );
});

const UserList = ({ users }) => {
  // users 배열을 App.js로 이동시켜 props를 통해 받기
  return (
    <div>
      {/* 배열을 렌더링 할 때에는 고유한 key값을 사용하는 것이 중요하다 */}
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}{" "}
      Cannot read properties of undefined (reading 'createContext')
    </div>
  );
};

export default React.memo(UserList);
