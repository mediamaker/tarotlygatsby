import React from "react";
import { navigateTo } from "gatsby-link";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const EmailSignupForm = () => {

  const useStyles = makeStyles(theme => ({
    hidden: {
        display: 'none',
    },
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }))
  
  const classes = useStyles()
  
  const [values, setValues] = React.useState({
    email: '',
    
  });

  const handleChange = email => event => {
    setValues({ ...values, [email]: event.target.value });
  };

    return (
<React.Fragment>
      <h3>Get Started</h3>

      <form className={classes.container} name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <p className={classes.hidden}>
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </p>

      <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
      <p>
        
      <button type="submit">Send</button>


      </p>
    </form>
    </React.Fragment>
    );
}
export default EmailSignupForm