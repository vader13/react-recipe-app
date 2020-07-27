import React, { useState } from "react";

function Filter(props) {
  // const [vegan, setVegan] = useState(false);
  function handleChange(e) {
    props.setCuisine(e.target.value);
  }

  // function handleCheck() {
  //   setVegan(prev => {
  //     return !prev;
  //   });
  //   props.setDiet(vegan);
  // }
  return (
    <div className="dropdown">
      <label>Select Region:</label>
      <select onChange={handleChange} class="form-control">
        <option selected="selected" value=""></option>
        <option value="African">African</option>
        <option value="American">American</option>
        <option value="British">British</option>
        <option value="Cajun">Cajun</option>
        <option value="Caribbean">Caribbean</option>
        <option value="Chinese">Chinese</option>
        <option value="Eastern European">Eastern European</option>
        <option value="European">European</option>
        <option value="French">French</option>
        <option value="German">German</option>
        <option value="Greek">Greek</option>
        <option value="Indian">Indian</option>
        <option value="Irish">Irish</option>
        <option value="Italian">Italian</option>
        <option value="Japanese">Japanese</option>
        <option value="Jewish">Jewish</option>
        <option value="Korean">Korean</option>
        <option value="Latin American">Latin American</option>
        <option value="Mediterranean">Mediterranean</option>
        <option value="Mexican">Mexican</option>
        <option value="Middle Eastern">Middle Eastern</option>
        <option value="Nordic">Nordic</option>
        <option value="Southern">Southern</option>
        <option value="Spanish">Spanish</option>
        <option value="Thai">Thai</option>
        <option value="Vietnamese">Vietnamese</option>
      </select>
      {/* <input type="checkbox" onChange={handleCheck} name="vegan"></input> */}
      {/* <label for="vegan">Vegan</label> */}
    </div>
  );
}

export default Filter;
