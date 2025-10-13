import React from 'react'

function Form() {
  return (
    <form className="ui-form">
      <div className="field">
        <label>First Name</label>
        <input type="text" placeholder="First Name" />
      </div>

      <div className="field">
        <label>Last Name</label>
        <input type="text" placeholder="Last Name" />
      </div>

      <div className="checkbox">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">I agree to the Terms and Conditions</label>
      </div>
 <button type="submit" className="submit-btn">Submit</button>
    </form>
  )
}

export default Form