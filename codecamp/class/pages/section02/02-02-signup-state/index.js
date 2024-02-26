import { useState } from "react";

export default function SignupSatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignup(event) {
    //1 검증
    if (email.includes("@") === false) {
      setEmailError("이메일이 올바르지 않습니다 '@'가 없음");
    } else {
      //2 백엔드에 보내주기

      //3 성공하면 알림 보여주기
      alert("회원가입됨");
    }
  }
  return (
    <div>
      이메일 : <input type="text" onChange={onChangeEmail} />
      <div>{emailError} </div>
      비밀번호 :<input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
