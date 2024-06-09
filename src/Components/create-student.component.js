// src/Components/create-student.component.js
import React, { useState } from "react";
import axios from 'axios';
import StudentForm from "./StudentForm";

const CreateStudent = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    rollno: ''
  });

  const onSubmit = studentObject => {
    console.log('Form submitted with values:', studentObject);
    axios.post('http://localhost:4000/students/create-student', studentObject)
      .then(res => {
        if (res.status === 201 || res.status === 200) {
          alert('Student successfully created');
        } else {
          return Promise.reject();
        }
      })
      .catch(err => {
        alert('Something went wrong');
        if (err && err.response) {
          console.error('Error:', err.response.data || err.response.statusText);
        } else {
          console.error('Error:', err && err.message);
        }
      });
  };

  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Create Student
    </StudentForm>
  );
}

export default CreateStudent;
