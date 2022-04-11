import React from 'react'

export const Alert = (props) => {
  return (
    <>
        <div className={`alert-box ${props.type}`}>
            {props.message}
        </div>
    </>
  )
}
export default Alert;