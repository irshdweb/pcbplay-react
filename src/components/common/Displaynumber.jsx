import React,{useState} from 'react'
import Top from '../../assets/images/icons/top.png';
import Bottom from '../../assets/images/icons/bottom.png';

export const Displaynumber = () => {
  const [count, setCount]= useState(1)
  return (
    <>
        <div className="num-box">
            <div className="num">
                {count}
            </div>
            <div className="arrows">
                <img src={Top} alt="" onClick={()=>setCount(count + 1)}/>
                <img src={Bottom} alt="" onClick={()=>count !== 1 ? setCount(count - 1):setCount(1)}/>
            </div>
        </div>
    </>
  )
}
export default Displaynumber;