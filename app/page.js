"use client";
import Dashboard from "@components/Dashboard";
import Login from "@components/Login";
import React, { useState } from "react";

export const Home = () => {
  const [loggedIn, setLogged] = useState(false);
  return (
    // <section className="w-full flex-center flex-col">
    // <Feed />
    //
    <div>
      {!loggedIn && (
        <div className="mt-1 w-full max-w-3xl flex flex-col gap-6 glassmorphism">
          <Login setLogged={setLogged} />
        </div>
      )}
      {loggedIn && <Dashboard />}
    </div>
    // <Home />
    // </section>
  );
};

export default Home;
