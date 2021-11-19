const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email}) </span>
    </div>
  );
};

const UserList = () => {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ];

  return (
    <div>
      {/* 배열을 렌더링 할 때에는 고유한 key값을 사용하는 것이 중요하다 */}
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
