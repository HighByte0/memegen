import React, { useState } from "react";

export default function Form() {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email:"",
    comment:"",
    isfriend:true,
    sex:"",
    favcol:"",
   

  });
  console.log(formdata.favcol)

  function handleSUB(event) {
    const {name,value,type,checked}=event.target
    setformdata((prevdata) => ({
      ...prevdata,

      [name]: type==="checked"? checked : value,
    
    }));
  }

  return (
    <form className="formdata"> 
      <input
        type="text"
        placeholder="Enter your first name"
        name="firstname"
        onChange={handleSUB}
        value={formdata.firstname}
      />
      <input
        type="text"
        placeholder="Enter your last name"
        name="lastname"
        onChange={handleSUB}
        value={formdata.lastname}
      />
      <input
        type="text"
        placeholder="Enter your last name"
        name="email"
        onChange={handleSUB} value={formdata.email}
      />
      <textarea onChange={handleSUB}
        value={formdata.comment}
        name="comment" />

        <input type="checkbox" 
        name="isfriend"
        onChange={handleSUB}/>
        <fieldset>
       
        <input type="radio" id="male" name="sex" value="male" checked={formdata.sex==="male"}  onChange={handleSUB}/>
        <label htmlFor="male">   Male
        
        </label>
        

    
        <input type="radio" id="female" name="sex" value="female"  checked={formdata.sex==="female"} onChange={handleSUB}/>
        
        <label htmlFor="female">  Female
        </label>

    
        <input type="radio" id="other" name="sex" value="other" checked={formdata.sex==="other"}  onChange={handleSUB}/>
        <label htmlFor="other"> Other
        </label>
        <label>
        Favorite Color:
        <select id="favcol" name="favcol"  onChange={handleSUB}>
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          {/* Add more color options as needed */}
        </select>
      </label>
      <br />
     

        </fieldset>
   
        
        
      <button type="submit">Submit</button>
    </form>
  );
}
