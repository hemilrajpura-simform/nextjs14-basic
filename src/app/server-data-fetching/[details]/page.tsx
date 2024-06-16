import React from "react";

const fetchUser = async (currentUser) => {
  try {
    const apiRes = await fetch(`http://dummyjson.com/users/${currentUser}`);
    const result = await apiRes.json();
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

const userDetails = async ({ params }) => {
  const currentUserDetails = await fetchUser(params.details);
  console.log(currentUserDetails);

  return (
    <div>
      <h1>User Details</h1>
      <br />
      <br />
      <h2>{currentUserDetails.id}</h2>
      <h2>{currentUserDetails.firstName}</h2>
      <h2>{currentUserDetails.lastName}</h2>
    </div>
  );
};

export default userDetails;
