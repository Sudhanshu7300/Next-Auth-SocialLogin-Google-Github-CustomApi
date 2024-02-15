async function userList() {
  let data: any = await fetch("https://dummyjson.com/users");
  data = await data.json();

  return data.users;
}
export default async function Products() {
  let users = await userList();
  return (
    <h2>
      {users.map((item: any, index: number) => (
        <div key={index}> {item?.username}</div>
      ))}
    </h2>
  );
}
