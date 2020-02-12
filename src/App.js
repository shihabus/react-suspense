import React, { Suspense } from "react";
import { Router } from "@reach/router";
const Nav = React.lazy(() => import("./Nav"));
const Home = React.lazy(() => import("./Home"));
const Calc = React.lazy(() => import("./Calculation"));
// import Nav from "./Nav";

const Loading = () => <nav>Loading nav...</nav>;
const LoadingPage = () => <div>Loading page...</div>;

export default function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Nav />
      </Suspense>
      <Suspense fallback={<LoadingPage />}>
        <Router>
          <Home path="/" />
          <Calc path="/calc" />
        </Router>
      </Suspense>
    </div>
  );
}
