import { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  // 3가지 상태(요청의 결과(user), 로딩 상태, 에러) 관리
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        //   요청 시작 시 users,error 초기화, lading => true
        setUsers(null);
        setLoading(true);
        setError(null);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        // 데이터 받고
        setUsers(response.data);
      } catch (e) {
        // Error 발생
        setError(e);
      }
      setLoading(false);
    };

    // fetchUser함수 실행
    fetchUsers();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!users) return null;

  return (
    // User 배열 랜더링
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
  );
};

export default Users;
