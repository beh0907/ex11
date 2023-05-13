// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_5y3Le7tX2omgN2tRd0pQE2_ymZvQP14",
  authDomain: "inha-react-study.firebaseapp.com",
  databaseURL: "https://inha-react-study-default-rtdb.firebaseio.com",
  projectId: "inha-react-study",
  storageBucket: "inha-react-study.appspot.com",
  messagingSenderId: "813310543189",
  appId: "1:813310543189:web:01bc075b0c1ebe0efc5bdc",
  measurementId: "G-SJ95FKFV9K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);