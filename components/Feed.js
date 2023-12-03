"use client";
import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  const handleDelete = (e) => {
    console.log(e);
  };
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post.id}
          post={post}
          handleTagClick={handleTagClick}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

const Feed = (table) => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  // console.log(table);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchData = async () => {
      // console.log(table);
      const response = await fetch(`http://127.0.0.1:5000/${table.table}/`);
      const dataa = await response.json();
      console.log(dataa);
      // setData(dataa[Object.keys(dataa)]);
      console.log(dataa[Object.keys(dataa)]);
      setData(dataa[Object.keys(dataa)]);
    };

    fetchData();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search....."
          value={searchText}
          //   onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={data} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
