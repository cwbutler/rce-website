import React from 'react';
import './index.scss';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import axios from 'axios';
import ConfirmMessage from './confirmMessage';

class SubmitSection extends React.PureComponent {
  state = {
    name: '',
    email: '',
    phone: '',
    comment: '',
    submitted: false
  };

  render() {
    const { classes } = this.props;
    const inputClasses = {
      root: classes.input,
      underline: classes.underline
    };
    const inputLabelClasses = {
      root: classes.label,
      shrink: classes.shrink,
    };
    const formLabelClasses = { focused: classes.focused };
  
    return (
      <div id="submit-section">
        <div className="wrap">
          <div id="header">
            <h1 className="main">Heart Attacks Happen Every Day, <br /> But They Don’t Have To</h1>
            {(!this.state.submitted) ? <h1 className="primary-color">Invest Early to Save Early</h1> : <ConfirmMessage />}
          </div>
          {(!this.state.submitted) && (
            <form onSubmit={this.submit} key="form">
              <TextField
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.changeValue('name')}
                label="Full Name"
                required
                InputProps={{ classes: inputClasses }}
                classes={{ root: classes.root }}
                InputLabelProps={{
                  classes: inputLabelClasses,
                  FormLabelClasses: formLabelClasses
                }}
              />

              <TextField
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.changeValue('email')}
                label="Email Address"
                required
                InputProps={{ classes: inputClasses }}
                classes={{ root: classes.root }}
                InputLabelProps={{
                  classes: inputLabelClasses,
                  FormLabelClasses: formLabelClasses
                }}
              />

              <TextField
                type="tel"
                name="phone"
                value={this.state.phone}
                onChange={this.changeValue('phone')}
                label="Phone Number"
                required
                InputProps={{ classes: inputClasses }}
                classes={{ root: classes.root }}
                InputLabelProps={{
                  classes: inputLabelClasses,
                  FormLabelClasses: formLabelClasses
                }}
              />

              <TextField
                type="text"
                name="comment"
                value={this.state.comment}
                onChange={this.changeValue('comment')}
                label="Comment"
                multiline
                rows={5}
                InputProps={{ classes: inputClasses }}
                classes={{ root: classes.root }}
                InputLabelProps={{
                  classes: inputLabelClasses,
                  FormLabelClasses: formLabelClasses
                }}
              />


              <button type="submit" name="sumbit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  isDisabled = () => !Boolean(this.state.name) || !Boolean(this.state.email) || !Boolean(this.state.phone);

  changeValue = (key) => (event) => this.setState({ [key]: event.target.value });

  submit = (event) => {
    event.preventDefault();

    axios.post('http://34.228.64.81:5557/api/getContactData', {
      email: this.state.email,
      name: this.state.name,
      phone: this.state.phone,
      comment: this.state.comment
    })
    .catch((error) => console.error(error));

    this.setState({ submitted: true })
  }
}

export default withStyles(styles)(SubmitSection);
