"use client";
import React, { useState } from "react";
import Image from "next/image";
// import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, hanldeEdit }) => {
  const [copied, setCopied] = useState("");
  //   const { data: session } = useSession();
  console.log(post);
  const pathName = usePathname();
  const router = useRouter();
  const handleCopy = () => {
    setCopied(post.prompt);
    console.log(post.address);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };

  const handleDelete = async (e) => {
    const response = await fetch(
      `http://127.0.0.1:5000/${pathName.split("/")[1]}s/delete`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: e.target.id }),
      }
    );
    const data = await response.json();
    console.log(e.target);
    console.log(post.id);
    console.log(response);
    window.location.href = `/${pathName.split("/")[1]}`;
  };
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer ">
          <Image
            // src={post.creator.image}
            src="/assets/images/logo512.png"
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          {pathName.split("/")[1] === "patient" && (
            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                {post.name}
              </h3>
              <p className="font-inter text-sm text-gray-500">
                DOB: {post.date_of_birth}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Gender: {post.gender}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Phone number: {post.contact_info}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Emergency contact: {post.emergency}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Address: {post.address}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Insurance: {post.insurance_info}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Medical history: {post.medical_history}
              </p>
            </div>
          )}

          {pathName.split("/")[1] === "counselor" && (
            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                Name: {post.name}
              </h3>
              <p className="font-inter text-sm text-gray-500">
                Specialization: {post.specialization}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Phone number: {post.contact_info}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Schedule: {post.schedule}
              </p>
            </div>
          )}

          {pathName.split("/")[1] === "drug" && (
            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                {post.name}
              </h3>
              <p className="font-inter text-sm text-gray-500">
                Classification: {post.classification}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Form: {post.form}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Dosage: {post.dosage}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Frequency of use: {post.freq_of_use}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Route of administration: {post.route_of_administration}
              </p>
            </div>
          )}

          {pathName.split("/")[1] === "treatment" && (
            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                {post.id}
              </h3>
              <p className="font-inter text-sm text-gray-500">
                Start date: {post.start_date}
              </p>
              <p className="font-inter text-sm text-gray-500">
                End date: {post.end_date}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Treatment type: {post.treatment_type}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Counselor ID: {post.counselor_id}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Medication prescribed: {post.medication_prescribed}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Treatment progress: {post.treatment_progress}
              </p>
            </div>
          )}

          {pathName.split("/")[1] === "labtest" && (
            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                {post.date_of_test}
              </h3>
              <p className="font-inter text-sm text-gray-500">
                Type: {post.type_of_test}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Substance detected: {post.substance_detected}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Concentration levels: {post.concentration_levels}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Test result: {post.test_result}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Patient id: {post.patient_id}
              </p>
            </div>
          )}

          {pathName.split("/")[1] === "incident" && (
            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                {post.date_and_time}
              </h3>
              <p className="font-inter text-sm text-gray-500">ID: {post.id}</p>
              <p className="font-inter text-sm text-gray-500">
                Location: {post.location}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Description: {post.description}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Individuals_involved: {post.individuals_involved}
              </p>
              <p className="font-inter text-sm text-gray-500">
                response_actions_taken: {post.response_actions_taken}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Patient id: {post.patient_id}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Outcome: {post.outcome}
              </p>
            </div>
          )}

          {pathName.split("/")[1] === "recovery" && (
            <div className="flex flex-col">
              <h3 className="font-satoshi font-semibold text-gray-900">
                {post.id}
              </h3>
              <p className="font-inter text-sm text-gray-500">
                Date of assessment: {post.date_of_assessment}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Mental health: {post.mental_health}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Physical health: {post.physical_health}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Support system: {post.support_system}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Relapse history: {post.relapse_history}
              </p>
              <p className="font-inter text-sm text-gray-500">
                Patient id: {post.patient_id}
              </p>
            </div>
          )}
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <div className="mt-5 flex-center gap-4 border-gray-100 pt-3">
        <p
          id={post}
          className="font-inter text-sm orange_gradient cursor-pointer"
          onClick={(e) => handleDelete(e)}
        >
          Delete
        </p>
      </div>
    </div>
  );
};

export default PromptCard;
