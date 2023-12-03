import React from "react";
import Link from "next/link";
const Form = ({ type, table, postData, setPostData, submitting }) => {
  console.log(table);
  console.log(table);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://127.0.0.1:5000/${table}s/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...postData }),
    });
    const data = await response.json();
    console.log(data);
    window.location.href = `/${table}`;
  };
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type}</span> {table}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-1 w-full max-w-3xl flex flex-col gap-6 glassmorphism"
      >
        {/* New Patient */}
        {/* Name  */}
        {table === "patient" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Name
            </span>
            <input
              value={postData.name}
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
              placeholder="name"
              required
              className="form_input"
            />
          </label>
        )}

        {/* dob  */}
        {table === "patient" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Date of birth
            </span>
            <input
              value={postData.date_of_birth}
              onChange={(e) =>
                setPostData({ ...postData, date_of_birth: e.target.value })
              }
              placeholder="1/1/2000"
              required
              className="form_input"
            />
          </label>
        )}

        {/* contact info  */}
        {table === "patient" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Contact info
            </span>
            <input
              value={postData.contact_info}
              onChange={(e) =>
                setPostData({ ...postData, contact_info: e.target.value })
              }
              placeholder="08123456789"
              required
              className="form_input"
            />
          </label>
        )}

        {/* contact info  */}
        {table === "patient" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Emergency info
            </span>
            <input
              value={postData.emergency_contact}
              onChange={(e) =>
                setPostData({ ...postData, emergency_contact: e.target.value })
              }
              placeholder="08123456789"
              required
              className="form_input"
            />
          </label>
        )}

        {/* Gender */}
        {table === "patient" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Gender
            </span>
            <input
              value={postData.gender}
              onChange={(e) =>
                setPostData({ ...postData, gender: e.target.value })
              }
              placeholder="Male or Female"
              required
              className="form_input"
            />
          </label>
        )}

        {/* Address  */}
        {table === "patient" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Address
            </span>
            <input
              value={postData.address}
              onChange={(e) =>
                setPostData({ ...postData, address: e.target.value })
              }
              placeholder="Enter address"
              required
              className="form_input"
            />
          </label>
        )}
        {/* insurance info */}
        {table === "patient" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Insurance info
            </span>
            <input
              value={postData.insurance_info}
              onChange={(e) =>
                setPostData({ ...postData, insurance_info: e.target.value })
              }
              placeholder="Enter address"
              required
              className="form_input"
            />
          </label>
        )}

        {table === "patient" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Medical history
            </span>
            <textarea
              value={postData.medical_history}
              onChange={(e) =>
                setPostData({ ...postData, medical_history: e.target.value })
              }
              placeholder="Write your prompt here... "
              required
              className="form_textarea"
            />
          </label>
        )}

        {/* New Drug */}
        {/* Name  */}
        {table === "drug" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Name
            </span>
            <input
              value={postData.name}
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
              placeholder="name"
              required
              className="form_input"
            />
          </label>
        )}

        {/* Classification  */}
        {table === "drug" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Classification
            </span>
            <input
              value={postData.classification}
              onChange={(e) =>
                setPostData({ ...postData, classification: e.target.value })
              }
              placeholder="Enter drug classifpication"
              required
              className="form_input"
            />
          </label>
        )}

        {/* Form  */}
        {table === "drug" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Form
            </span>
            <input
              value={postData.form}
              onChange={(e) =>
                setPostData({ ...postData, form: e.target.value })
              }
              placeholder="Enter form"
              required
              className="form_input"
            />
          </label>
        )}

        {/* Dosage */}
        {table === "drug" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Dosage
            </span>
            <input
              value={postData.dosage}
              onChange={(e) =>
                setPostData({ ...postData, dosage: e.target.value })
              }
              placeholder="Enter drug dosage"
              required
              className="form_input"
            />
          </label>
        )}

        {/* freq of use */}
        {table === "drug" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Frequency of use
            </span>
            <input
              value={postData.freq_of_use}
              onChange={(e) =>
                setPostData({ ...postData, freq_of_use: e.target.value })
              }
              placeholder="Enter frequency of use"
              required
              className="form_input"
            />
          </label>
        )}
        {/* Route of administration*/}
        {table === "drug" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Route of administration
            </span>
            <input
              value={postData.route_of_administration}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  route_of_administration: e.target.value,
                })
              }
              placeholder="Enter route of administration"
              required
              className="form_input"
            />
          </label>
        )}

        {/* New Treatment Plan */}
        {/* Start Date  */}
        {table === "treatment" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Start date
            </span>
            <input
              value={postData.start_date}
              onChange={(e) =>
                setPostData({ ...postData, start_date: e.target.value })
              }
              placeholder="1/1/2000"
              required
              className="form_input"
            />
          </label>
        )}

        {/* End Date  */}
        {table === "treatment" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              End date
            </span>
            <input
              value={postData.end_date}
              onChange={(e) =>
                setPostData({ ...postData, end_date: e.target.value })
              }
              placeholder="1/1/2000"
              required
              className="form_input"
            />
          </label>
        )}

        {/* Counselor ID */}
        {table === "treatment" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Counselor ID
            </span>
            <input
              value={postData.counselor_id}
              onChange={(e) =>
                setPostData({ ...postData, counselor_id: e.target.value })
              }
              placeholder="Enter counselor ID"
              required
              className="form_input"
            />
          </label>
        )}

        {/* Medication prescribed */}
        {table === "treatment" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Medication prescribed
            </span>
            <input
              value={postData.medication_prescribed}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  medication_prescribed: e.target.value,
                })
              }
              placeholder="Enter medication prescribed"
              required
              className="form_input"
            />
          </label>
        )}

        {/* Treatment progress */}
        {table === "treatment" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Treatment progress
            </span>
            <input
              value={postData.treatment_progress}
              onChange={(e) =>
                setPostData({ ...postData, treatment_progress: e.target.value })
              }
              placeholder="Enter treatment progress"
              required
              className="form_input"
            />
          </label>
        )}

        {/* New lab results */}
        {/* Date  */}
        {table === "labtest" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Date
            </span>
            <input
              value={postData.date_of_test}
              onChange={(e) =>
                setPostData({ ...postData, date_of_test: e.target.value })
              }
              placeholder="1/1/2000"
              required
              className="form_input"
            />
          </label>
        )}

        {/* type_of_test  */}
        {table === "labtest" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Type of test
            </span>
            <input
              value={postData.type_of_test}
              onChange={(e) =>
                setPostData({ ...postData, type_of_test: e.target.value })
              }
              placeholder="Enter drug type of test"
              required
              className="form_input"
            />
          </label>
        )}

        {/* substance_detected  */}
        {table === "labtest" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Substance detected
            </span>
            <input
              value={postData.substance_detected}
              onChange={(e) =>
                setPostData({ ...postData, substance_detected: e.target.value })
              }
              placeholder="Enter substance detected"
              required
              className="form_input"
            />
          </label>
        )}

        {/* Concentration levels */}
        {table === "labtest" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Concentration levels
            </span>
            <input
              value={postData.concentration_levels}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  concentration_levels: e.target.value,
                })
              }
              placeholder="Enter concentration levels"
              required
              className="form_input"
            />
          </label>
        )}

        {/* Test result */}
        {table === "labtest" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Test_result
            </span>
            <input
              value={postData.test_result}
              onChange={(e) =>
                setPostData({ ...postData, test_result: e.target.value })
              }
              placeholder="Enter test result"
              required
              className="form_input"
            />
          </label>
        )}
        {/* Patient id */}
        {table === "labtest" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Patient ID
            </span>
            <input
              value={postData.patient_id}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  patient_id: e.target.value,
                })
              }
              placeholder="Enter patient ID"
              required
              className="form_input"
            />
          </label>
        )}

        {/* New Incident */}
        {/* Name  */}
        {table === "incident" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Date and time
            </span>
            <input
              value={postData.date_and_time}
              onChange={(e) =>
                setPostData({ ...postData, date_and_time: e.target.value })
              }
              placeholder="1/1/2000 12:00am"
              required
              className="form_input"
            />
          </label>
        )}

        {/* Location */}
        {table === "incident" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Location
            </span>
            <input
              value={postData.location}
              onChange={(e) =>
                setPostData({ ...postData, location: e.target.value })
              }
              placeholder="Enter location"
              required
              className="form_input"
            />
          </label>
        )}

        {/* individuals_involved  */}
        {table === "incident" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Individuals involved
            </span>
            <input
              value={postData.individuals_involved}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  individuals_involved: e.target.value,
                })
              }
              placeholder="Enter individuals involved"
              required
              className="form_input"
            />
          </label>
        )}

        {/* Response actions taken */}
        {table === "incident" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Response actions taken
            </span>
            <input
              value={postData.response_actions_taken}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  response_actions_taken: e.target.value,
                })
              }
              placeholder="Enter response actions taken"
              required
              className="form_input"
            />
          </label>
        )}

        {/* Patient ID  */}
        {table === "incident" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Patient ID
            </span>
            <input
              value={postData.patient_id}
              onChange={(e) =>
                setPostData({ ...postData, patient_id: e.target.value })
              }
              placeholder="Enter patient ID"
              required
              className="form_input"
            />
          </label>
        )}
        {/* Outcome */}
        {table === "incident" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Outcome
            </span>
            <input
              value={postData.outcome}
              onChange={(e) =>
                setPostData({ ...postData, outcome: e.target.value })
              }
              placeholder="Enter outcome"
              required
              className="form_input"
            />
          </label>
        )}

        {table === "incident" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Description
            </span>
            <textarea
              value={postData.description}
              onChange={(e) =>
                setPost({ ...post, description: e.target.value })
              }
              placeholder="Write your description here... "
              required
              className="form_textarea"
            />
          </label>
        )}

        {/* Recovery  */}
        {/* Date  */}
        {table === "recovery" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Assessment date
            </span>
            <input
              value={postData.date_of_assessment}
              onChange={(e) =>
                setPostData({ ...postData, date_of_assessment: e.target.value })
              }
              placeholder="1/1/2000"
              required
              className="form_input"
            />
          </label>
        )}

        {/* mental_health  */}
        {table === "recovery" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Mental health
            </span>
            <input
              value={postData.mental_health}
              onChange={(e) =>
                setPostData({ ...postData, mental_health: e.target.value })
              }
              placeholder="Enter mental health status"
              required
              className="form_input"
            />
          </label>
        )}

        {/* physical_health  */}
        {table === "recovery" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Physical health
            </span>
            <input
              value={postData.physical_health}
              onChange={(e) =>
                setPostData({ ...postData, physical_health: e.target.value })
              }
              placeholder="Enter physical health status"
              required
              className="form_input"
            />
          </label>
        )}

        {/* support_system */}
        {table === "recovery" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Support system
            </span>
            <input
              value={postData.support_system}
              onChange={(e) =>
                setPostData({ ...postData, support_system: e.target.value })
              }
              placeholder="Enter support system"
              required
              className="form_input"
            />
          </label>
        )}

        {/* relapse_history */}
        {table === "recovery" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Relapse history
            </span>
            <input
              value={postData.relapse_history}
              onChange={(e) =>
                setPostData({ ...postData, relapse_history: e.target.value })
              }
              placeholder="Enter relapse history"
              required
              className="form_input"
            />
          </label>
        )}
        {/* Patient id */}
        {table === "recovery" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Patient ID
            </span>
            <input
              value={postData.patient_id}
              onChange={(e) =>
                setPostData({
                  ...postData,
                  patient_id: e.target.value,
                })
              }
              placeholder="Enter patient ID"
              required
              className="form_input"
            />
          </label>
        )}

        {/* New Counselor */}
        {/* Name  */}
        {table === "counselor" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Name
            </span>
            <input
              value={postData.name}
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
              placeholder="Enter name"
              required
              className="form_input"
            />
          </label>
        )}

        {/* specialization */}
        {table === "counselor" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Specialization
            </span>
            <input
              value={postData.specialization}
              onChange={(e) =>
                setPostData({ ...postData, specialization: e.target.value })
              }
              placeholder="Enter specialization"
              required
              className="form_input"
            />
          </label>
        )}

        {/* contact info  */}
        {table === "counselor" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Contact info
            </span>
            <input
              value={postData.contact_info}
              onChange={(e) =>
                setPostData({ ...postData, contact_info: e.target.value })
              }
              placeholder="08123456789"
              required
              className="form_input"
            />
          </label>
        )}

        {/* Schedule */}
        {table === "counselor" && (
          <label>
            <span className="font-satosh font-semibold text-base text-gray-700">
              Schedule
            </span>
            <input
              value={postData.schedule}
              onChange={(e) =>
                setPostData({ ...postData, schedule: e.target.value })
              }
              placeholder="Enter schedule"
              required
              className="form_input"
            />
          </label>
        )}

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            {" "}
            Cancel
          </Link>
          <div>
            {/* <Link href={`/${table}`} className="text-gray-500 text-sm"> */}
            <button
              type="submit"
              disabled={(e) => {
                handleSubmit(e);
              }}
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            >
              Submit
            </button>
            {/* </Link> */}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
