import React, { useState } from 'react';
//checkbox
import CheckIcon from '@mui/icons-material/Check';

export const CheckboxControl = (props) => {
    const [checked, setChecked] = useState(false);
    return (
        <>
            <div className="check-wrap">
                <input type="checkbox" name="" className="checkbox" id={props.id} onChange={() => setChecked(prevState => !prevState)} />
                <label htmlFor={props.id}>
                    {
                        checked ? <CheckIcon /> : null
                    }
                </label>
            </div>
        </>
    )
}

export default CheckboxControl;
