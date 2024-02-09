import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const AboutMe = () => {
  //   const userData = useLoaderData();
  const data = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/users/${data.email}`);

      if (!response.ok) {
        alert("Something Went Wrong");
      } else {
        const res = await response.json();
        setUserData(res);
      }
    };

    fetchData();
  });

  return (
    <>
      <p>{userData.user_id}</p>
      <p>{userData.email}</p>
    </>
  );
};

export default AboutMe;

// export async function loader() {
//   const response = await fetch("https://localhost:8080/:{id}/:{email}");

//   if (!response.ok) {
//     alert("Something Went Wrong");
//   } else {
//     return response;
//   }
// }
