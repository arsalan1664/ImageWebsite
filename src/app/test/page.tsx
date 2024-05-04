import React from "react";

function Page() {
  const url = `${process.env.URL}/api/sections`;
  const EncodeURI = encodeURI(url);
  return (
    <div className="m-16 ">
      <div className="mb-5">
        Url :{"  "}
        {url}
      </div>
      <div>
        EncodeURI :{"  "}
        {EncodeURI}
      </div>
    </div>
  );
}

export default Page;
