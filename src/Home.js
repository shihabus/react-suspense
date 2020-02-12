import React, { Suspense } from "react";
import BostonRoutes from "./BostonRoutes";

const LoadingData = () => <div>Loading data...</div>;

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Suspense fallback={<LoadingData />}>
        <BostonRoutes />
      </Suspense>
    </div>
  );
}
