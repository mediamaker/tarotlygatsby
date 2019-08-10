import React from "react";
import { navigateTo } from "gatsby-link";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const EmailSignupForm = () => {
    return (
      <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <p className="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>
      <p>
        <label>Email: <input type="text" name="email" /></label>
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
    );
}
export default EmailSignupForm
