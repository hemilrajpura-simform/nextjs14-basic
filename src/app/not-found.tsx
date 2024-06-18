import React from "react";

const notFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-500">
          Sorry, the page you are looking for could not be found.
        </p>
      </div>
    </div>
  );
};

export default notFound;
