import React, {useState, useContext} from 'react';

import {AlertContext} from '../../helper/AlertContext';

export const Cartbutton = () => {

  const {setAlert} = useContext(AlertContext);

  const[active, setactive]= useState(false);
  const[item, setitem]= useState(1);

  const addtocart = (e)=>{
    setactive(prevState => !prevState);

    !active ? setAlert(true) : setAlert(false);

    setTimeout(() => {
      setAlert(false);
    }, 5000);
  }

  const preventClick = (e)=>{
    e.stopPropagation();
  }

  const remove = ()=>{
      if(item !== 1){
        setitem(item - 1)
      }else{
          setitem(1)
      }
  }

  const add = ()=>{
      setitem(item + 1)
  }
 
  return (
    <>
        <div className="button-wrap" onClick={preventClick}>
            <div className="cart-number">
                <div className="remove" onClick={remove}>-</div>
                {item}
                <div className="add" onClick={add}>+</div>
            </div>
            <div className={`cart-btn ${active?'active': ''}`} onClick={addtocart}>
                {
                    active?'added':'add'
                }
            </div>
        </div>
    </>
  )
}

export default Cartbutton;
