import React, {useState} from 'react';
import eye from '../../assets/images/eye.svg';

const Password = (props) => {
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [active, setActive] = useState(false);

  const passFocus =()=>{
    setActive(true);
  }

  const passBlur =()=>{
    setActive(false);
  }
  return (
    <>
      <div className={`password-wrap ${active ? "focus" : ""}`}>
          <input 
            type={isRevealPwd ? "text" : "password"} 
            name="" 
            onFocus={passFocus}
            onBlur={passBlur}
            defaultValue={props.value}/>
          <img 
            src={isRevealPwd ? eye : eye} alt="" 
            onClick={() => setIsRevealPwd(prevState => !prevState)}
            />
      </div>
    </>
  )
}

export default Password;
