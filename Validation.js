import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import "./Table.css";
import ReadData from "./ReadData";
import Edit from "./Edit";

const Validation = () => {
  const [inputs, setInputs] = useState(data);
  const [addFormData, setAddFormData] = useState({
    firstName:"",lastName:"",email:"",contact:"",alternate:"",
    password:"",date:"",url:"",code:"",address:"",search:"",
  });

  const [editFormData, setEditFormData] = useState({
    firstName:"",lastName:"",email:"",contact:"",alternate:"",
    password:"",date:"",url:"",code:"",address:"",search:"",
  });

  const [editId, setEditId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newInput = {
      id: nanoid(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      email: addFormData.email,
      contact: addFormData.contact,
      alternate: addFormData.alternate,
      password: addFormData.password,
      date: addFormData.date,
      url: addFormData.url,
      code: addFormData.code,
      address: addFormData.address,
      search: addFormData.search,
    };

    const newInputs = [...inputs, newInput];
    setInputs(newInputs);
    
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedInput = {
      id: editId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      email: editFormData.email,
      contact: editFormData.contact,
      alternate: editFormData.alternate,
      password: editFormData.password,
      date: editFormData.date,
      url: editFormData.url,
      code: editFormData.code,
      address: editFormData.address,
      search: editFormData.search,
    };

    const newInputs = [...inputs];

    const index = inputs.findIndex((input) => input.id === editId);

    newInputs[index] = editedInput;

    setInputs(newInputs);
    setEditId(null);
  };

  const handleEditClick = (event, input) => {
    event.preventDefault();
    setEditId(input.id);

    const formValues = {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      contact: input.contact,
      alternate: input.alternate,
      password: input.password,
      date: input.date,
      url: input.url,
      code: input.code,
      address: input.address,
      search: input.search,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditId(null);
  };

  return (
    <div className="app-container">
    <h1 align="center">Form</h1>
     <form onSubmit={handleAddFormSubmit}>
     <table className="table1" align="center">
     <tr>
        <td>FirstName:</td>
        <td><input type="text" name="firstName" required="required" onChange={handleAddFormChange}/></td>
     </tr><br></br>
    <tr>
        <td>LastName:</td>
        <td><input type="text" name="lastName" required="required" onChange={handleAddFormChange}/></td>
    </tr><br></br>
    <tr>
        <td>Email:</td>
        <td><input type="email" name="email" required="required" onChange={handleAddFormChange}/></td>
    </tr><br></br>
    <tr>
        <td>Contact Number:</td>
        <td><input type="tel" name="contact" required="required" onChange={handleAddFormChange}/></td> 
    </tr><br></br>
    <tr>
        <td>Alternate Number:</td>
        <td><input type="tel" name="alternate" required="required" onChange={handleAddFormChange}/></td> 
    </tr><br></br>
    <tr>
        <td>Password:</td>
        <td><input type="password" name="password" required="required" onChange={handleAddFormChange}/></td>       
    </tr><br></br>
    <tr>
        <td>Date of Birth:</td>
        <td><input type="date" name="date" required="required" onChange={handleAddFormChange}/></td>         
    </tr><br></br>
    <tr>
        <td>Url:</td>
        <td><input type="url" name="url" required="required" onChange={handleAddFormChange}/></td>         
    </tr><br></br>
    <tr>
        <td>EMP Code:</td>
        <td><input type="number" name="code" required="required" onChange={handleAddFormChange}/></td>         
    </tr><br></br>
    <tr>
        <td>Address</td>
        <td><textarea name="address" required="required" rows="5" cols="21" onChange={handleAddFormChange}></textarea></td>
    </tr><br></br>
    <tr>
        <td>Search:</td>
        <td><input type="search" name="search" required="required" onChange={handleAddFormChange}/></td>         
    </tr><br></br>

        <button type="submit">Submit</button>
        <button type="reset">Reset</button>

        </table>
      </form><br></br><br></br>
     
      <form onSubmit={handleEditFormSubmit}>
        <table align="center">
          <thead>
            <tr className="table2">
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Alternate Number</th>
              <th>Password</th>
              <th>Date of Birth</th>
              <th>Url</th>
              <th>EMP Code</th>
              <th>Address</th>
              <th>Search</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table3">
            {inputs.map((input) => (
              <Fragment>
                {editId === input.id ? (
                  <Edit
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadData
                    input={input}
                    handleEditClick={handleEditClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

    </div>
  );
};

export default Validation;


