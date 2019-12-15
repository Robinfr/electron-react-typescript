// Render Prop
import React from 'react'
// import { Formik, Form, Field, ErrorMessage, InjectedFormikProps } from 'formik';
// import TextInput from './TextInput'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
// import { TextField } from 'formik-material-ui'
// import FormHelperText from '@material-ui/core/FormHelperText'
// import FormControl from '@material-ui/core/FormControl'
// import InputLabel from '@material-ui/core/InputLabel'
// import Select from '@material-ui/core/Select'

import states from '../fixtures/states'
import businessTypes from '../fixtures/business_types'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { object } from 'prop-types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }),
)

// type CustomerFormProps = {
//   initialValues: object;
//   onSubmitForm(this: void): () => this;
// }

// interface FormValues {
//   name: string;
//   email: string;
//   address_street: string;
//   address_city: string;
//   address_state: string;
//   address_zip: string;
//   business_type: string;
//   contact_primary_first_name: string;
//   contact_primary_last_name: string;
//   contact_primary_email: string;
//   contact_primary_role: string;
// }

// interface FormProps {
//   // login?: string;
//   onSubmitForm?: any
// }

const CompanyList = (props: any) => {
  const {
    companies
  } = props

  const classes = useStyles()
  // const [state, setState] = React.useState<{ age: string | number; name: string }>({
  //   age: '',
  //   name: 'hai',
  // });
  return (
    <div>
      <ul>
        {companies.map((company: any) => (
          <li>{ company.name }</li>
        ))}
      </ul>
    </div>
  )
}

//   const inputLabel = React.useRef<HTMLLabelElement>(null);
//   const [labelWidth, setLabelWidth] = React.useState(0);
//     React.useEffect(() => {
//       setLabelWidth(inputLabel.current!.offsetWidth);
//     }, []);

//   const handleChange = (name: keyof typeof state) => (
//     event: React.ChangeEvent<{ value: unknown }>,
//   ) => {
//     setState({
//       ...state,
//       [name]: event.target.value,
//     });
//   };

//   return (

//   <div>
//     <h2>Create New Customer</h2>
//     <Formik
//       initialValues={{
//         name: '',
//         email: '',
//         address_street: '',
//         address_city: '',
//         address_state: '',
//         address_zip: '',
//         business_type: '',
//         contact_primary_first_name: '',
//         contact_primary_last_name: '',
//         contact_primary_email: '',
//         contact_primary_role: '',
//       }}
//       validate={values => {
//         const errors = {}
//         // if (!values.email) {
//         //   errors.email = 'Required'
//         // } else if (
//         //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         // ) {
//         //   errors.email = 'Invalid email address'
//         // }
//         return errors
//       }}
//       onSubmit={onSubmitForm}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//              {/* <TextInput
//             fieldName="test"
//             fieldLabel="Showroom test"
//             placeholder="Enter showroom test"
//             values={values}
//             classes={classes}
//             onChange={handleChange}
//             onBlur={handleBlur}    \
//             errors={errors}
//             touched={touched}
//           /> */}
//           <Grid container spacing={3}>

//             {/* NAME */}
//             <Grid item sm={12} md={6}>
//               <Field
//                 type="text"
//                 name="name"
//                 label="Customer Legal Name"
//                 // defaultValue="Default Value"
//                 helperText="The full legal name of the customer which will be used all legal documents."
//                 margin="normal"
//                 variant="outlined"
//                 required

//                 className={classes.textField}
//                 component={TextField}
//               />

//               <ErrorMessage name="name" component="div" />
//             </Grid>

//             {/* Email */}
//             <Grid item sm={12} md={6}>
//               <Field
//                 type="email"
//                 name="email"
//                 label="Customer Primary Email"
//                 // defaultValue="Default Value"
//                 helperText="The primary email which will recieve important documents."
//                 margin="normal"
//                 variant="outlined"
//                 required

//                 className={classes.textField}
//                 component={TextField}
//               />
//               <ErrorMessage name="email" component="div" />
//             </Grid>
//           </Grid>

//           <Grid container spacing={3}>
//             {/* Street */}
//             <Grid item sm={12} md={10}>
//               <Field
//                 type="text"
//                 name="address_street"
//                 label="Customer Primary Address Street"
//                 // defaultValue="Default Value"
//                 helperText="The primary customer address street name."
//                 margin="normal"
//                 variant="outlined"
//                 required

//                 className={classes.textField}
//                 component={TextField}
//               />
//               <ErrorMessage name="address_street" component="div" />
//             </Grid>
//           </Grid>

//           <Grid container spacing={3}>
//             {/* City */}
//             <Grid item sm={12} md={6}>
//               <Field
//                 type="text"
//                 name="address_city"
//                 label="City"
//                 // defaultValue="Default Value"
//                 helperText="The primary customer address city name."
//                 margin="normal"
//                 variant="outlined"
//                 required

//                 className={classes.textField}
//                 component={TextField}
//               />
//               <ErrorMessage name="address_city" component="div" />
//             </Grid>

//             {/* State */}
//             <Grid item sm={12} md={3}>
//               <FormControl variant="outlined" className={classes.formControl}>
//                 <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
//                   State
//                 </InputLabel>
//                 <Select
//                   native
//                   // value={state.age}
//                   // onChange={handleChange('state')}
//                   labelWidth={labelWidth}
//                   inputProps={{
//                     name: 'address_state',
//                     id: 'outlined-state-native-simple',
//                   }}
//                 >
//                   <option value="" />
//                   {states.map((v, i) => (
//                     <option key={`${i}-${v.name}`} value={v.name}>{v.name}</option>
//                   ))}
//                 </Select>
//                 <FormHelperText>Some important helper text</FormHelperText>
//               </FormControl>
//               <ErrorMessage name="address_state" component="div" />
//             </Grid>

//             {/* zip */}
//             <Grid item sm={12} md={3}>
//               <Field
//                 type="text"
//                 name="address_zip"
//                 label="Zip"
//                 // defaultValue="Default Value"
//                 helperText="The primary customer address zip code."
//                 margin="normal"
//                 variant="outlined"
//                 required

//                 className={classes.textField}
//                 component={TextField}
//               />
//               <ErrorMessage name="address_zip" component="div" />
//             </Grid>
//           </Grid>

//           <Grid container spacing={3}>
//             {/* State */}
//             <Grid item sm={12} md={6}>
//               <FormControl variant="outlined" className={classes.formControl}>
//                 <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
//                   Business Type
//                 </InputLabel>
//                 <Select
//                   native
//                   // value={state.age}
//                   // onChange={handleChange('state')}
//                   labelWidth={labelWidth}
//                   inputProps={{
//                     name: 'business_type',
//                     id: 'outlined-state-native-simple',
//                   }}
//                 >
//                   <option value="" />
//                   {businessTypes.map((v, i) => (
//                     <option key={`${i}-${v.name}`} value={v.name}>{v.name}</option>
//                   ))}
//                 </Select>
//                 <FormHelperText>Some important helper text</FormHelperText>
//               </FormControl>
//               <ErrorMessage name="business_type" component="div" />
//             </Grid>
//           </Grid>

//           <Grid container spacing={3}>
//             {/* contact first name */}
//             <Grid item sm={12} md={6}>
//               <Field
//                 type="text"
//                 name="contact_primary_first_name"
//                 label="First Name"
//                 // defaultValue="Default Value"
//                 helperText="The primary customer contact."
//                 margin="normal"
//                 variant="outlined"
//                 required

//                 className={classes.textField}
//                 component={TextField}
//               />
//               <ErrorMessage name="contact_primary_first_name" component="div" />
//             </Grid>

//             {/* contact last name */}
//             <Grid item sm={12} md={6}>
//               <Field
//                 type="text"
//                 name="contact_primary_last_name"
//                 label="Last Name"
//                 // defaultValue="Default Value"
//                 helperText="The primary customer contact."
//                 margin="normal"
//                 variant="outlined"
//                 required

//                 className={classes.textField}
//                 component={TextField}
//               />
//               <ErrorMessage name="contact_primary_last_name" component="div" />
//             </Grid>
//           </Grid>

//           <Grid container spacing={3}>

//             {/* contact email */}
//             <Grid item sm={12} md={6}>
//               <Field
//                 type="email"
//                 name="contact_primary_email"
//                 label="Email"
//                 // defaultValue="Default Value"
//                 helperText="The primary customer contact."
//                 margin="normal"
//                 variant="outlined"
//                 required

//                 className={classes.textField}
//                 component={TextField}
//               />
//               <ErrorMessage name="contact_primary_email" component="div" />
//             </Grid>

//             {/* Role */}
//             <Grid item sm={12} md={6}>
//               <Field
//                 type="text"
//                 name="contact_primary_role"
//                 label="Role"
//                 // defaultValue="Default Value"
//                 helperText="The primary customer contact role."
//                 margin="normal"
//                 variant="outlined"
//                 required

//                 className={classes.textField}
//                 component={TextField}
//               />
//               <ErrorMessage name="contact_primary_role" component="div" />
//             </Grid>

//           </Grid>


//           <Grid container spacing={3}>
//             {/* Role */}
//             <Grid item sm={12}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 color="primary"
//                 disabled={isSubmitting}>
//                 Submit
//               </Button>
//             </Grid>
//           </Grid>
//         </Form>
//       )}
//     </Formik>
//   </div>
// )}

export default CompanyList
