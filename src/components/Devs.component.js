import React, { useState } from "react";
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp';
import Icon from "@material-ui/core/Icon";
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

import devsList from "../models/dataStore.model";

function Devs() {
  
  /* Dev Model

  "id": string
  "firstName": string
  "lastName": string
  "userName": string
  "gender": radio ->> string
  "age": number
  "email": email
  "phoneNumber": string
  "picture": url
  "country": string
  "city": string
  "employed":> boolean
  "company": string
  "techStack": array
  "position": string
  "createdAt": date
  */

  function editItem (dev) {
    alert("Edit mode activated!");
    console.log(dev);
  }

  function deleteItem (dev) {
    alert("Deletion detected!");
    console.log(dev);
  }

  function addItem () {
    alert("Add item..");
  }

  return (
    <div>
      <div className="devs-title">
        <PeopleAltSharpIcon
        color="secondary" 
        style={{ fontSize: 45 }}
        />
        <h1>DEVELOPERS</h1>
      </div>
      
      <table className="table table-striped table-dark" style={{"width": "100%"}}>
        <thead className="bg-info">
          <tr>
            <th>F_NAME</th>
            <th>L_NAME</th>
            <th>EMAIL</th>
            <th>SEX</th>
            <th>PHONE #</th>
            <th>COUNTRY</th>
            <th>CITY</th>
            <th>EMPLOYED</th>
            <th>COMPANY</th>
            <th>POSITION</th>
            <th>STACK</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        {devsList &&
          devsList.map(dev => {
            return (
              <tbody key={dev.email}>
                <tr>
                  <td>{(dev.firstName[0].toUpperCase())+(dev.firstName.substr(1))}</td>
                  <td>{(dev.lastName[0].toUpperCase())+(dev.lastName.substr(1))}</td>
                  <td>{dev.email}</td>
                  <td className="center-scoped">{(dev.gender[0].toUpperCase())}</td>
                  <td>{dev.phoneNumber}</td>
                  <td>{dev.country}</td>
                  <td>{dev.city}</td>
                  <td className="center-scoped">{dev.employed ? <CheckIcon /> : <ClearIcon />}</td>
                  <td>{dev.company}</td>
                  <td>{dev.position}</td>
                  <td>{dev.techStack}</td>
                  <td 
                    className="mutations-edit" 
                    onClick={() => editItem(dev)}
                  ><EditIcon style={{ "color": "yellow" }}/></td>
                  <td 
                    className="mutations-del" 
                    onClick={() => deleteItem(dev)}
                  ><DeleteForeverIcon color="secondary"/></td>
                </tr>
              </tbody>
            ); // return
          })}
      </table>
      <div>
        Add a developer<br/>
        <Icon  
          className="mutations-add" 
          onClick={() => addItem()} 
          color="primary" 
          style={{ fontSize: 80 }}
        >add_circle</Icon>
      </div>
    </div>
  ); // return
} // Devs

export default Devs;

