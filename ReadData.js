import React from "react";

const ReadData = ({ input, handleEditClick }) => {
  return (
    <tr>
      <td>{input.firstName}</td>
      <td>{input.lastName}</td>
      <td>{input.email}</td>
      <td>{input.contact}</td>
      <td>{input.alternate}</td>
      <td>{input.password}</td>
      <td>{input.date}</td>
      <td>{input.url}</td>
      <td>{input.code}</td>
      <td>{input.address}</td>
      <td>{input.search}</td>
      <td>
        <button type="button" onClick={(event) => handleEditClick(event, input)} >Edit</button>
      </td>
    </tr>
  );
};

export default ReadData;