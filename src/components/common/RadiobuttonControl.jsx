import React from 'react'

const RadiobuttonControl = (props) => {
  return (
    <>
          <input type="radio" name={props.name} value={props.value} />
    </>
  )
}
export default RadiobuttonControl;