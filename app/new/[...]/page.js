"use client";
import Form from "@components/Form";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const NewForm = () => {
  const [postData, setPostData] = useState({
    prompt: "",
    tag: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const pathName = usePathname();

  const createPrompt = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    console.log(session);
    //creating prompts
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: postData.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        Router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Form
        type="New"
        table={pathName.split("/")[2]}
        postData={postData}
        setPostData={setPostData}
        submitting={submitting}
        handleSubmit={createPrompt}
      />
    </div>
  );
};

export default NewForm;
