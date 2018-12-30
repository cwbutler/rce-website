import React from 'react';
import './index.scss';

class SubmitSection extends React.PureComponent {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  render() {
    return (
      <div id="submit-section">
        <div className="wrap">
          <div id="header">
            <h1 className="main">Heart Attacks Happen Every Day, <br /> But They Don’t Have To</h1>
            <h1 className="primary-color">Invest Early to Save Early</h1>
          </div>

          <form>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.changeValue('name')}
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.changeValue('email')}
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.changeValue('phone')}
              placeholder="Phone Number"
              required
            />


            <button type="submit" name="sumbit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  isDisabled = () => !Boolean(this.state.name) || !Boolean(this.state.email) || !Boolean(this.state.phone);

  changeValue = (key) => (event) => this.setState({ [key]: event.target.value });
}

export default SubmitSection;
