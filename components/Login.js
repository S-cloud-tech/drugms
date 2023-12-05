"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Login = (setLogged) => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState({});
  return (
    <div>
      <label>
        <span className="font-satosh font-semibold text-base text-gray-700">
          Username
        </span>
        <input
          value={posts.name}
          onChange={(e) => setPosts({ ...posts, name: e.target.value })}
          placeholder="Enter username"
          required
          className="form_input"
        />
      </label>

      <label>
        <span className="font-satosh font-semibold text-base text-gray-700">
          Password
        </span>
        <input
          type="password"
          value={posts.date_of_birth}
          placeholder="Enter password"
          onChange={(e) =>
            setPosts({ ...posts, date_of_birth: e.target.value })
          }
          required
          className="form_input"
        />
      </label>
      <div>
        <button
          type="submit"
          onClick={() => {
            setLogged.setLogged((prev) => !prev);
          }}
          className="px-5 py-1.5 text-sm mt-2 bg-primary-orange rounded-full text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
