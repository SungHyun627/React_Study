import axios from "axios";
import { useAsync } from "react-async";

const getUser = async ({ id }) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
};

const User = ({ id }) => {
  const {
    data: user,
    loading,
    error,
  } = useAsync({ promiseFn: getUser, id, watch: id });

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
};

export default User;
