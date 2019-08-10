import React from "react";
import { navigateTo } from "gatsby-link";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const EmailSignupForm = () => {

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  var signupHeadline = ""
  
  var handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  var handleSubmit = e => {
    e.preventDefault();
    signupHeadline = "You're all set!"
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };  

    return (
      <div>
        <h4 className="signupHeadline">{signupHeadline}</h4>
        <form
          name="emailSignupForm"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="emailSignupForm" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
               email:<br />
              <TextField type="email" name="email" onChange={handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    );
}
export default EmailSignupForm
