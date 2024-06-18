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

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && users && (
        <div className="container mx-auto mt-8 flex justify-center items-center">
          <div className="bg-gray-200 p-8 rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-gray-800 hover:text-gray-900 text-center">
              Server Side Data Fetching
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users &&
                users.map((user) => (
                  <div
                    key={user.id}
                    className="bg-white p-4 shadow rounded-lg hover:shadow-lg transition duration-300"
                  >
                    <a href={`/client-data-fetching/${user.id}`}>
                      <span className="block text-lg font-semibold text-gray-800 hover:text-gray-900">
                        {user.firstName}
                      </span>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientSideDataFetching;
