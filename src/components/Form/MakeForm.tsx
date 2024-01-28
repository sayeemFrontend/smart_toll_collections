import React, { Ref, useRef } from 'react'
import { AnyObject } from '../apis/api_types'

export const Input = (props) => {
  const { label = '', onChange, ...restParams } = props
  const { data = [], headerClass = '' } = restParams?.options || {}
  const errorElementRef = useRef()

  return (
    <>
      {label && <label>{label}</label>}
      {props.type === 'select' ? (
        <select name={props.name} className={headerClass}>
          {data?.map((op, i) => (
            <option key={op.label + i} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          onChange={(e) => onChange && onChange(e, errorElementRef)}
          {...restParams}
          className="border border-secondary-600"
        />
      )}
      <p className="inline-block" ref={errorElementRef}></p>
    </>
  )
}

export default function MakeForm({
  formFields = {},
  handleSubmit = (formValues: AnyObject) => {
    console.log(formValues)
  },

  handleChange = (e: React.MouseEvent, errorElementRef: Ref<React.ReactElement>) => {
    console.log(e, errorElementRef)
  },
}) {
  const keys = Object.keys(formFields)

  const handleAction = (e) => {
    e.preventDefault()
    const { elements } = e.target
    const formData = {}
    keys.forEach((name) => {
      formData[name] = elements[name].value
    })
    handleSubmit(formData)
  }

  // const handleChange = (e, errorElementRef) => {
  //   const { value } = e.target;
  //   errorElementRef.current.innerText = value ? 'ok' : 'error';
  // };

  return (
    <form onSubmit={handleAction}>
      {keys?.map((it) => (
        <div key={it} className="my-10">
          <Input onChange={handleChange} name={it} {...formFields[it]} />
        </div>
      ))}
      <button type="submit">Save</button>
    </form>
  )
}

//call by

// const formState = {
//   first_name: { type: 'text', error: '', required: true },
//   last_name: { type: 'number', min: '10', step: '2' },
//   email: {
//     type: 'select',
//     error: '',
//     options: {
//       data: [
//         { label: 'None', value: null },
//         { label: 'lab2', value: '3' },
//         { label: 'lab3', value: '4' },
//         { label: 'lab4', value: '344' },
//       ],
//     },
//   },
//   password: { type: 'text', error: '' },
// };
// const handleCh = (e, errorElementRef) => {
//   const { value } = e.target;
//   errorElementRef.current.innerText = value ? 'ok' : 'error';
// };
//  <MakeForm handleChange={handleCh} formFields={formState} handleSubmit={(values) => console.log(values)} />;
