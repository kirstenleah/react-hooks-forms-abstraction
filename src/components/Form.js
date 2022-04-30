import React, { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  // function handleFirstNameChange(event) {
  //   setFirstName(event.target.value);
  // }

  // function handleLastNameChange(event) {
  //   setLastName(event.target.value);
  // }

  // return (
  //   <form>
  //     <input type="text" onChange={handleFirstNameChange} value={firstName} />
  //     <input type="text" onChange={handleLastNameChange} value={lastName} />
  //     <button type="submit">Submit</button>
  //   </form>
  // );
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  })
  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value,
  //   })
  // }
  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.value,
  //   })
  // }
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form>
      <input 
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleLastNameChange}
        />
        <input 
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
        />
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form;
