"use client";
import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  let posts = [
    { _id: 1, name: "patient", len: 2 },
    { _id: 2, name: "drug", len: 2 },
    { _id: 3, name: "counselor", len: 2 },
    { _id: 4, name: "treatment plan", len: 3 },
    { _id: 5, name: "lab results", len: 0 },
    { _id: 6, name: "incident", len: 0 },
    { _id: 6, name: "recovery", len: 0 },
    { _id: 6, name: "facility", len: 0 },
  ];
  return (
    <div className="mt-16 prompt_layout">
      {posts.map((post) => (
        <DashboardCard
          key={post.id}
          post={post}
          // handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

export default Dashboard;
