import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom";

const EditStudent = () => {
  const { id } = useParams(); // Extract id parameter from URL

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: ""
  });

  //onSubmit handler
  const onSubmit = (studentObject) => {
    axios
      .put(`http://localhost:4000/students/update-student/${id}`, studentObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully updated");
          // Redirect to student list or any other page after successful update
        } else Promise.reject();
      })
      .catch((err) => {
        alert("Something went wrong");
        console.error("Error:", err.response || err.message || err);
      });
  };

  // Load data from server and reinitialize student form
  useEffect(() => {
    axios
      .get(`http://localhost:4000/students/update-student/${id}`)
      .then((res) => {
        const { name, email, rollno } = res.data;
        setFormValues({ name, email, rollno });
      })
      .catch((err) => {
        console.log(err);
        // Handle error
      });
  }, [id]); // Add id to dependency array

  // Return student form
  return (
    <StudentForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
      Update Student
    </StudentForm>
  );
};

export default EditStudent;
