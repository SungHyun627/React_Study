import { useState } from "react";
import { useUsersState, useUsersDispatch, getUsers } from "./UsersContext";
import User from "./User";

const Users = () => {
  const [userId, setUserId] = useState(null);
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const { data: users, loading, error } = state.users;
  const fetchData = () => {
    getUsers(dispatch);
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!users) return <button onClick={fetchData}>불러오기</button>;

  return (
    <>
      {/*User 배열 랜더링 */}
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      {/* 버튼을 사용하여 다시 불러오기 */}
      <button onClick={fetchData}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
};
export default Users;
