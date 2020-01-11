import React, { useState } from 'react';

import '../index.css';

import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function DevForm() {

  const [gender, setGender]          = useState("Female");
  const [workStatus, setWorkStatus]  = useState("Other");
  const [state, setState]            = useState({});

  (
    () => {
      // console.log("gender       -->", gender);  
      // console.log("workStatus   -->", workStatus);  
    }
  )()
  
  const handleInput = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setState({
      ...state, 
      [event.target.name]: value
    });
  } // handleInput

  const handleGender = event => {
    setGender(event.target.value);
  }

  const handleWorkStatus = event => {
    setWorkStatus(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      gender,
      phone: state.phone,
      country: state.country,
      city: state.city,
      workStatus,
      company: state.company,
      position: state.position,
      stack: state.stack,
    };

    /* const displayData = (formData) => {
      const formFields = document.getElementById("formFields");
      for (let key in state) {
        formFields.innerHTML += key + ' --> ' + state[key] + '<br/>'
      }
      console.log(formFields);
    } */

    console.log("\ndata   -->", data);

    Object.assign(state, data);
    
    console.log("\nstate   -->", state);

    // displayData(state);
    
  } // handleSubmit

  return (
    <form onSubmit={ handleSubmit } method="POST" autoComplete="on">

      <div className="input-field">
        <TextField
          id="firstName"
          className="input-field"
          value={ state.firstName }
          onChange={ handleInput }
          label="First Name"
          name="firstName"
          placeholder="John"
          type="text"
          multiline
        /><br/>
      </div>

      <div className="input-field">
        <TextField
          id="lastName"
          value={ state.lastName }
          onChange={ handleInput }
          label="Last Name"
          name="lastName"
          placeholder="Doe"
          type="text"
          multiline
        /><br/>
      </div>
      
      <div className="input-field">
        <TextField
          id="email"
          className="input-field"
          value={ state.email }
          onChange={ handleInput }
          label="Email"
          name="email"
          placeholder="johndoe@email.com"
          type="email"
          multiline
        /><br/><br/>
      </div>

      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender" value={gender} onChange={ handleGender }>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male"   control={<Radio />} label="Male" />
          <FormControlLabel value="other"  control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl><br/>

      <div className="input-field">
        <TextField
          id="phone"
          className="input-field"
          value={ state.phone }
          onChange={ handleInput }
          label="Phone"
          name="phone"
          placeholder="+2540700101010"
          type="tel"
          multiline
        /><br/>
      </div>

      <div className="input-field">
        <TextField
          id="country"
          className="input-field"
          value={ state.country }
          onChange={ handleInput }
          label="Country"
          name="country"
          placeholder="Kenya"
          type="text"
          multiline
        /><br/>
      </div>

      <div className="input-field">
        <TextField
          id="city"
          className="input-field"
          value={ state.city }
          onChange={ handleInput }
          label="City"
          name="city"
          placeholder="Nairobi"
          type="text"
          multiline
        /><br/><br/>
      </div>

      <FormControl component="fieldset">
        <FormLabel component="legend">Work Status</FormLabel>
        <RadioGroup aria-label="Work Status" name="workStatus" value={workStatus} onChange={ handleWorkStatus }>
          <FormControlLabel value="Employed" control={<Radio />} label="Employed" />
          <FormControlLabel value="Self employed" control={<Radio />} label="Self employed" />
          <FormControlLabel value="Unemployed" control={<Radio />} label="Unemployed" />
          <FormControlLabel value="Seeking employment" control={<Radio />} label="Seeking employment" />
          <FormControlLabel value="Other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl><br/>

      <div className="input-field">
        <TextField
          id="company"
          className="input-field"
          value={ state.company }
          onChange={ handleInput }
          label="Company"
          name="company"
          placeholder="My Employer Ltd"
          type="text"
          multiline
        /><br/>
      </div>

      <div className="input-field">
        <TextField
          id="position"
          className="input-field"
          value={ state.position }
          onChange={ handleInput }
          label="Position"
          name="position"
          placeholder="Senior Developer"
          type="text"
          multiline
        /><br/>
      </div>

      <div className="input-field">
        <TextField
          id="stack"
          className="input-field"
          value={ state.stack }
          onChange={ handleInput }
          label="Stack"
          name="stack"
          placeholder="JavaScript, Flask"
          type="text"
          multiline
        /><br/><br/>
      </div>

      <input type="submit" value="Submit" />

      <div id="formFields"></div>

    </form>
  ); // return
} // DevForm
