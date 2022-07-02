import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBu6Zk546eKD8PUMX8fTHIRZWDfJQldmlQ",
  authDomain: "airbnb-otp.firebaseapp.com",
  projectId: "airbnb-otp",
  storageBucket: "airbnb-otp.appspot.com",
  messagingSenderId: "113157390765",
  appId: "1:113157390765:web:06fc2bb2a3428bd5b7a124"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
