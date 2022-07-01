import React from 'react'
import firebase from './firebase'
import Facebook from "../img/facebook1.png";
import { FcGoogle } from "react-icons/fc";
import {AiFillApple} from "react-icons/ai"
import Email from "../img/email.png"
import CrossIcon from "../img/cross.png"
import "./login.css";
import LoginFirstPasge from "./LoginFirstPage";


class Main extends React.Component {

//   google = () => {
//     window.open("http://localhost:5000/auth/google", "_self");
//   };

//    facebook = () => {
//     window.open("http://localhost:5000/auth/facebook", "_self");
//   };
//    Crossicon = () =>{
//     window.open("LoginFirstPasge", "_self")
//   }
//   continueButton = document.getElementsByClassName("continue_button");
//   continue = () =>{
//     window.open("continueButton");
//   }



  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
//   configureCaptcha = () =>{
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//       'size': 'invisible',
//       'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         this.onSignInSubmit();
//         console.log("Recaptca varified")
//       },
//       defaultCountry: "IN"
//     });
//   }
//   onSignInSubmit = (e) => {
//     e.preventDefault()
//     this.configureCaptcha()
//     const phoneNumber = "+91" + this.state.mobile
//     // console.log(phoneNumber)
//     const appVerifier = window.recaptchaVerifier;
//     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//         .then((confirmationResult) => {
//           window.confirmationResult = confirmationResult;
//           console.log("OTP has been sent")
//           // ...
//         }).catch((error) => {
//           console.log("SMS not sent")
//         });
//   }
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
          <button type="submit">Submit</button>
        </form>
        <span>Haven't received a code?</span><a href="#">More options</a>
       </div>
        </div>
    )
  }
}
export default Main
