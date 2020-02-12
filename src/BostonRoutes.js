import React from "react";
import useFetchSuspense from "./useFetchSuspense";

export default function BostonRoutes() {
  const data = useFetchSuspense("https://api-v3.mbta.com/routes");
  return (
    <div>
      {data.data.map(route => (
        <ul>
          <li key={route.id}>{route.attributes.long_name}</li>
        </ul>
      ))}
    </div>
  );
}
