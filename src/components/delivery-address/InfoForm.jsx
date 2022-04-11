import React from 'react'

function InfoForm() {
  return (
    <form >
        <div className="row-form">
          <div className="form-control">
            <label>full name</label>
            <input type="text" className="txt-control" placeholder='john ' />
          </div>
          <div className="form-control">
            <label>last name</label>
            <input type="text" className="txt-control" placeholder='Doe' />
          </div>
        </div>
        <div className="row-form">
          <div className="form-control">
            <label>email</label>
            <input type="text" className="txt-control" placeholder='test@email.com' />
          </div>
          <div className="form-control">
            <label>phone</label>
            <input type="text" className="txt-control" placeholder='390664220484' />
          </div>
        </div>
        
        <div className="btn-wrap">
            <button className="btn primary outline form">cancel</button>
            <button className="btn primary form" type='submit'>save</button>
        </div>
      </form>
  )
}

export default InfoForm