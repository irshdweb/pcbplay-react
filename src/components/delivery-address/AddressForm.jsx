import React from 'react'

const addressForm = ({sendDataToParent}) => {
  return (
    <>
      <form onSubmit={sendDataToParent}>
        <div className="row-form">
          <div className="form-control">
            <label>full name</label>
            <input type="text" className="txt-control" placeholder='Saint Marco 14, Rome, Rome, Nomentano ' />
          </div>
          <div className="form-control">
            <label>phone number</label>
            <input type="text" className="txt-control" placeholder='390664220484' />
          </div>
        </div>
        <div className="row-form">
          <div className="form-control">
            <label>address line 1</label>
            <input type="text" className="txt-control" placeholder='Saint Marco 14, Rome, Rome, Nomentano ' />
          </div>
          <div className="form-control">
            <label>address line 2</label>
            <input type="text" className="txt-control" placeholder='Saint Marco 14, Rome, Rome, Nomentano ' />
          </div>
        </div>
        <div className="row-form">
          <div className="form-control">
            <label>city</label>
            <input type="text" className="txt-control" placeholder='bevery hills' />
          </div>
          <div className="form-control">
            <label>state</label>
            <input type="text" className="txt-control" placeholder='florida' />
          </div>
        </div>
        <div className="row-form">
          <div className="form-control">
            <label>country</label>
            <select className="txt-control select">
              <option value="Japan">Japan</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <div className="form-control">
            <label>zip code</label>
            <input type="text" className="txt-control" placeholder='559944' />
          </div>
        </div>
        <div className="btn-wrap">
            <button className="btn primary outline form">cancel</button>
            <button className="btn primary form" type='submit'>save</button>
        </div>
      </form>
    </>
  )
}

export default addressForm