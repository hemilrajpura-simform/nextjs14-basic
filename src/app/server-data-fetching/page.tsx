import Link from "next/link";
import React from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  // Add other properties as needed
};

const fetchUsers = async () => {
  try {
    const apiRes = await fetch("http://dummyjson.com/users");
    const result = await apiRes.json();
    return result.users;
  } catch {
    throw new Error("Error");
  }
};

const ServerSideDataFetching = async () => {
  const users: User[] = await fetchUsers();

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
