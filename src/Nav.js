import React from "react";
import { Link } from "@reach/router";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/calc">Calculations</Link>
    </nav>
  );
}
