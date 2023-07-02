import React from 'react'
import { useField } from "formik";

function MyTextInput({ label, ...props }) {
    const [field, meta] = useField(props);
  return (
    <div className='input'>
      <label htmlFor={props.id || props.name}>{label}</label>
      {!props.as ? <input  className='custom-input'
                {...field} {...props} />
                : <textarea  className='custom-input msg'
                    {...field} {...props}></textarea>
            }
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </div>
  )
}

export default MyTextInput