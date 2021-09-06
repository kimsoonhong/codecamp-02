import Firebase from "firebase/app";
import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyAxc-jQzXcW0hpRaWeW3fq8uwR8QLIAEow",
  authDomain: "codecomp-28f89.firebaseapp.com",
  projectId: "codecomp-28f89",
  storageBucket: "codecomp-28f89.appspot.com",
  messagingSenderId: "496929235226",
  appId: "1:496929235226:web:1312e900468b2b4e2b8ca3",
  measurementId: "G-FWSPT4NZ5Y",
};

Firebase.initializeApp(config);
// 최초 한번만 불러오기 가능

export default function Firebasetest() {
  return (
    <div>
      <div></div>
      <div></div>
      <button>로그인하기</button>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
