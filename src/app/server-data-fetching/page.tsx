import Link from "next/link";
import React from "react";

const fetchUsers = async () => {
  try {
    const apiRes = await fetch("http://dummyjson.com/users");
    const result = await apiRes.json();
    return result.users;
  } catch (e) {
    throw new Error(e);
  }
};

const ServerSideDataFetching = async () => {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Server Side Data Fetching</h1>
      {users &&
        users.map((user) => (
          <Link href={`/server-data-fetching/${user.id}`}>
            <p>{user.firstName}</p>
          </Link>
        ))}
    </div>
  );
};

export default ServerSideDataFetching;
