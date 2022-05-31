import React from "react";

const Edit = ({editFormData,handleEditFormChange,handleCancelClick}) => {
  return (
    <tr>
      <td>
        <input type="text" required="required" name="firstName" value={editFormData.firstName}
        onChange={handleEditFormChange} />
      </td>
      <td>
        <input type="text" required="required" name="lastName" value={editFormData.lastName}
        onChange={handleEditFormChange} />
      </td>
      <td>
        <input type="email" required="required" name="email" value={editFormData.email}
        onChange={handleEditFormChange} />
      </td>
      <td>
        <input type="tel" required="required" name="contact" value={editFormData.contact}
        onChange={handleEditFormChange} />
      </td>
      <td>
        <input type="tel" required="required" name="alternate" value={editFormData.alternate}
        onChange={handleEditFormChange} />
      </td>
      <td>
        <input type="password" required="required" name="password" value={editFormData.password} 
        onChange={handleEditFormChange} />
      </td>
      <td>
        <input type="date" required="required" name="date" value={editFormData.date}
        onChange={handleEditFormChange} />
      </td>
      <td>
        <input type="url" required="required" name="url" value={editFormData.url}
        onChange={handleEditFormChange} />
      </td>
      <td>
        <input type="code" required="required" name="code" value={editFormData.code}
        onChange={handleEditFormChange} />
      </td>
      <td>
        <textarea  required="required" name="address" value={editFormData.address}
        onChange={handleEditFormChange} />
      </td>
      <td>
        <input type="search" required="required" name="search" value={editFormData.search}
        onChange={handleEditFormChange} />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default Edit;