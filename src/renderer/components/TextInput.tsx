// import React from 'react'
// import TextField from 'formik-material-ui'
// import { capitalize } from '../utils/fp'
// import { has } from 'ramda'
// import classNames from 'classnames'

// export const TextInput = ({
//   fieldName,
//   fieldLabel,
//   values,
//   type,
//   placeholder,
//   classes,
//   errors,
//   touched,
//   disabled,
//   onChange,
//   onBlur,
//   className,
// }) => {

//   const getFieldId = x => `${x}-input`

//   return (
//     <span className="text-input-wrapper">
//       <TextField
//         fullWidth
//         type={type || 'text'}
//         name={fieldName}
//         id={getFieldId(fieldName)}
//         label={!fieldLabel ? '' : (fieldLabel || capitalize(fieldName))}
//         value={values[fieldName] || ''}
//         autoComplete={capitalize(fieldName)}
//         margin="normal"
//         variant="filled"
//         disabled={disabled || false}
//         inputProps={{
//           'aria-label': 'Description',
//         }}
//         InputLabelProps={{
//           shrink: false,
//         }}
//         // placeholder={placeholder || ''}
//         onChange={onChange}
//         onBlur={onBlur}
//         className={classNames(
//           classes.textField,
//           has(fieldName, errors) && has(fieldName, touched)
//             ? `text-input error`
//             : `text-input`,
//           type,
//           className,
//         )}
//       />
//     </span>
//   )
// }

// export default TextInput
