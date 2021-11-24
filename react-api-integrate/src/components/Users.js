import axios from "axios";
import { useAsync } from "react-async";
import { useState } from "react";
import User from "./User";

// userAsync에서 Promise에 결과를 바로 data 담기 때문에, response에서 data를 추출하여 반환
const getUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

const Users = () => {
  const [userId, setUserId] = useState(null);
  const { data: users, error, loading, run } = useAsync({ deferFn: getUsers });

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!users) return <button onClick={run}>불러오기</button>;

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
      <button onClick={run}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
};

export default Users;
