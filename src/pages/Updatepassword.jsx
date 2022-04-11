import React from 'react'

function Updatepassword() {
    return (
        <section className="address-wrap-new pass">
            <div className="address-header">
                <h5>update password</h5>
            </div>
            <div className="delivery-panel">
                <form >
                    <div className="row-form flex-d">
                        <div className="form-control mb-0">
                            <label>email</label>
                            <input type="text" className="txt-control" placeholder='enter your email' />
                        </div>
                        <div className="text-code">sent verification code</div>
                    </div>
                    <div className="row-form">
                        <div className="form-control">
                            <label>verification code</label>
                            <input type="text" className="txt-control" placeholder='enter verification code' />
                        </div>
                    </div>
                    <div className="row-form">
                        <div className="form-control">
                            <label>new password</label>
                            <input type="password" className="txt-control" placeholder='enter verification code' />
                        </div>
                    </div>
                    <div className="row-form">
                        <div className="form-control">
                            <label>confirm paasword</label>
                            <input type="password" className="txt-control" placeholder='enter verification code' />
                        </div>
                    </div>
                    <div className="btn-wrap">
                        <button className="btn primary outline form">cancel</button>
                        <button className="btn primary form" type='submit'>save</button>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default Updatepassword