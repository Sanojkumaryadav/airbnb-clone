import React from 'react'
import "./login.css";
import LoginFirstPasge from "./LoginFirstPage";


class Main extends React.Component {


  submit= () => {
    window.open("http://localhost:3000/LoginFirstPasge", "_self");
  };

  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }

  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      
    }).catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div>

      <div className='otpContainer'>
        <h3>Confirm your number</h3>
        <p>Enter the code we've sent via SMS to your number:</p>
       <form onSubmit={this.onSubmitOTP}>
          <input type="number" name="otp" placeholder="Enter otp number" required onChange={this.handleChange}/>
          <button type="submit" onClick={this.submit} required>Submit</button>
        </form>
        <span>Haven't received a code?</span><a href="#">More options</a>
       </div>
        </div>
    )
  }
}
export default Main
