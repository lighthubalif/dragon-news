import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center flex-col ">
      <h2 className="font-bold text-5xl text-purple-700">Page Not Found</h2>
      <p className="text-red-300 py-4">
        Sorry, the page you're looking for doesn't exist.
      </p>
<Link href="/">
      <button className="btn btn-primary">Back to Home</button>
    </Link>
    </div>
  );
};

export default NotFound;
