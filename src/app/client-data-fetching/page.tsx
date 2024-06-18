"use client";

import React, { useEffect, useState } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

const ClientSideDataFetching = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const apiRes = await fetch("http://dummyjson.com/users");
      const result = await apiRes.json();
      setIsLoading(false);
      setUsers(result.users);
    } catch {
      throw new Error("Error");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users);
  return (
    <div>
      <h1>Client Side Data Fetching</h1>
      {isLoading && <h1>Loading...</h1>}
      {users && users.map((user) => <p>{user.firstName}</p>)}
    </div>
  );
};

export default ClientSideDataFetching;
