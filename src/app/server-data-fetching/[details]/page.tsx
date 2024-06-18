import React from "react";

const fetchUser = async (currentUser: number) => {
  try {
    const apiRes = await fetch(`http://dummyjson.com/users/${currentUser}`);
    const result = await apiRes.json();
    return result;
  } catch {
    throw new Error("Error");
  }
};
type Params = {
  details: number;
};

type UserDetailsProps = {
  params: Params;
};

const userDetails = async ({ params }: UserDetailsProps) => {
  const currentUserDetails = await fetchUser(params.details);

  return (
    <div className="container mx-auto mt-8 flex justify-center items-center">
      <div className="bg-gray-200 p-8 rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 hover:text-gray-900">
          User Details
        </h1>
        <div className="bg-white p-4 shadow rounded-lg">
          <img
            src={currentUserDetails.image}
            alt="User"
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <p className="text-lg font-semibold text-gray-800">
            ID: {currentUserDetails.id}
          </p>
          <p className="text-lg font-semibold text-gray-800">
            First Name: {currentUserDetails.firstName}
          </p>
          <p className="text-lg font-semibold text-gray-800">
            Last Name: {currentUserDetails.lastName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default userDetails;
