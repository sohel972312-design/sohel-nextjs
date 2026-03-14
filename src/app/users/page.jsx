async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users");
  return res.json();
}

export default async function userPage() {
  const users = await getUsers();

  return (
    <div>
      {users.map((user) => (
        <div className="text-white mb-3" key={user.cid}>
          <h2>{user.fname}</h2>
          <p>{user.phone}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}