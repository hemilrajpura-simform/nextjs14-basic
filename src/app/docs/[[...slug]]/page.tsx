import React from "react";

const page = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug?.length === 1) {
    return (
      <div>
        Viewing docs for feature <u>{params.slug[0]} </u>
      </div>
    );
  } else if (params.slug?.length === 2) {
    return (
      <div>
        Viewing docs for feature <u>{params.slug[0]}</u> and concept{" "}
        <u>{params.slug[1]} </u>
      </div>
    );
  }
  return <div>Docs Home Page</div>;
};

export default page;
