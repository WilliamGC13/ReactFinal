import React from "react"
import Table from 'react-bootstrap/Table';

function Members() {
  return (
    <Table striped bordered hover size='sm'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Member since</th>
          <th>Phone </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Samuel </td>
          <td>Smith</td>
          <td>@sam.smith</td>
          <td>8/19/15</td>
          <td>617-787-4000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Teddy </td>
          <td>Bear</td>
          <td>@tj.smooth</td>
          <td>8/28/15</td>
          <td>506-222-4333</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Harriott </td>
          <td>Potter</td>
          <td>@HP.twitter</td>
          <td>9/1/15</td>
          <td>617-984-2733</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Kermit </td>
          <td>The Frog</td>
          <td>@green</td>
          <td>8/29/15</td>
          <td>978-312-4390</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Slim </td>
          <td>Shady</td>
          <td>@tats</td>
          <td>8/17/15</td>
          <td>508-312-6790</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Members;