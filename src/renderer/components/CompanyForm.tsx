// Render Prop
import React from 'react'
import { Formik, Form, Field, ErrorMessage, InjectedFormikProps } from 'formik';
// import TextInput from './TextInput'
import { TextField } from 'formik-material-ui'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
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
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100%',
    },
    formControl: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100%',
      minWidth: 220,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
)

// type CompanyFormProps = {
//   initialValues: object;
//   onSubmitForm(this: void): () => this;
// }

interface FormValues {
  name: string;
  nameShort: string;
  phone_primary: string;
  phone_secondary: string;
  phone_tertiary: string;
  email_primary: string;
  email_secondary: string;
  website_primary: string;
  website_secondary: string;
  // social!: {
  //   github: string;
  //   gitlab: string;
  //   bitbucket: string;
  //   linkedin: string;
  // };
  address_street: string;
  address_city: string;
  address_state: string;
  address_zip: string;
  business_type: string;
  business_type_state: string;
  // contact_primary_first_name: string;
  // contact_primary_last_name: string;
  // contact_primary_email: string;
  // contact_primary_role: string;
}

interface FormProps {
  // login?: string;
  onSubmitForm?: any
}

const CompanyForm: React.SFC<InjectedFormikProps<FormProps, FormValues>> = (props: FormProps) => {
  const {
    onSubmitForm
  } = props

  const classes = useStyles()
  const [state, setState] = React.useState<{ age: string | number; name: string }>({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

  const handleChange = (name: keyof typeof state) => (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (

  <div>
    <h2>Create New Company</h2>
    <Formik
      initialValues={{
        name: '',
        nameShort: '',
        phone_primary: '',
        phone_secondary: '',
        phone_tertiary: '',
        email_primary: '',
        email_secondary: '',
        website_primary: '',
        website_secondary: '',
        // social!: {
        //   github: '',
        //   gitlab: '',
        //   bitbucket: '',
        //   linkedin: '',
        // };
        address_street: '',
        address_city: '',
        address_state: '',
        address_zip: '',
        business_type: '',
        business_type_state: '',
        // contact_primary_first_name: '',
        // contact_primary_last_name: '',
        // contact_primary_email: '',
        // contact_primary_role: '',
      }}
      validate={values => {
        const errors = {}
        // if (!values.email) {
        //   errors.email = 'Required'
        // } else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = 'Invalid email address'
        // }
        return errors
      }}
      onSubmit={onSubmitForm}
    >
      {({ isSubmitting }) => (
        <Form>
             {/* <TextInput
            fieldName="test"
            fieldLabel="Showroom test"
            placeholder="Enter showroom test"
            values={values}
            classes={classes}
            onChange={handleChange}
            onBlur={handleBlur}    \
            errors={errors}
            touched={touched}
          /> */}
          <Grid container spacing={3}>

            {/* NAME */}
            <Grid item sm={12} md={6}>
              <Field
                type="text"
                name="name"
                label="Company Legal Name"
                // defaultValue="Default Value"
                helperText="The full legal name of the company which will be used all legal documents."
                margin="normal"
                variant="outlined"
                required

                className={classes.textField}
                component={TextField}
              />

              <ErrorMessage name="name" component="div" />
            </Grid>

            {/* shortname */}
            <Grid item sm={12} md={6}>
              <Field
                type="text"
                name="nameShort"
                label="Short name"
                // defaultValue="Default Value"
                helperText="A short abbreviated name"
                margin="normal"
                variant="outlined"
                required

                className={classes.textField}
                component={TextField}
              />

              <ErrorMessage name="nameShort" component="div" />
            </Grid>

            {/* phone_primary */}
            <Grid item sm={12} md={6}>
              <Field
                type="text"
                name="phone_primary"
                label="Phone Number"
                // defaultValue="Default Value"
                helperText=""
                margin="normal"
                variant="outlined"

                className={classes.textField}
                component={TextField}
              />

              <ErrorMessage name="phone_primary" component="div" />
            </Grid>

            {/* phone_secondary */}
            <Grid item sm={12} md={6}>
              <Field
                type="text"
                name="phone_secondary"
                label="Phone Number"
                // defaultValue="Default Value"
                helperText=""
                margin="normal"
                variant="outlined"

                className={classes.textField}
                component={TextField}
              />

              <ErrorMessage name="phone_secondary" component="div" />
            </Grid>

            {/* phone_tertiary */}
            <Grid item sm={12} md={6}>
              <Field
                type="text"
                name="phone_tertiary"
                label="Phone Number"
                // defaultValue="Default Value"
                helperText=""
                margin="normal"
                variant="outlined"

                className={classes.textField}
                component={TextField}
              />

              <ErrorMessage name="phone_tertiary" component="div" />
            </Grid>

            {/* email_primary */}
            <Grid item sm={12} md={6}>
              <Field
                type="email"
                name="email_primary"
                label="Company Primary Email"
                // defaultValue="Default Value"
                helperText="The primary email which will recieve important documents."
                margin="normal"
                variant="outlined"
                required

                className={classes.textField}
                component={TextField}
              />
              <ErrorMessage name="email_primary" component="div" />
            </Grid>

            {/* email_secondary */}
            <Grid item sm={12} md={6}>
              <Field
                type="email"
                name="email_secondary"
                label="Company Primary Email"
                // defaultValue="Default Value"
                helperText="The primary email which will recieve important documents."
                margin="normal"
                variant="outlined"

                className={classes.textField}
                component={TextField}
              />
              <ErrorMessage name="email_secondary" component="div" />
            </Grid>
          </Grid>

          {/* website_primary */}
          <Grid item sm={12} md={6}>
            <Field
              type="text"
              name="website_primary"
              label="Website (primary)"
              // defaultValue="Default Value"
              helperText=""
              margin="normal"
              variant="outlined"

              className={classes.textField}
              component={TextField}
            />

            <ErrorMessage name="website_primary" component="div" />
          </Grid>

          {/* website_secondary */}
          <Grid item sm={12} md={6}>
            <Field
              type="text"
              name="website_secondary"
              label="Website (secondary)"
              // defaultValue="Default Value"
              helperText=""
              margin="normal"
              variant="outlined"

              className={classes.textField}
              component={TextField}
            />

            <ErrorMessage name="website_secondary" component="div" />
          </Grid>



          <Grid container spacing={3}>
            {/* Street */}
            <Grid item sm={12} md={10}>
              <Field
                type="text"
                name="address_street"
                label="Company Primary Address Street"
                // defaultValue="Default Value"
                helperText="The primary company address street name."
                margin="normal"
                variant="outlined"

                className={classes.textField}
                component={TextField}
              />
              <ErrorMessage name="address_street" component="div" />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            {/* City */}
            <Grid item sm={12} md={6}>
              <Field
                type="text"
                name="address_city"
                label="City"
                // defaultValue="Default Value"
                helperText="The primary company address city name."
                margin="normal"
                variant="outlined"

                className={classes.textField}
                component={TextField}
              />
              <ErrorMessage name="address_city" component="div" />
            </Grid>

            {/* State */}
            <Grid item sm={12} md={3}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                  State
                </InputLabel>
                <Select
                  native
                  // value={state.age}
                  // onChange={handleChange('state')}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: 'address_state',
                    id: 'outlined-state-native-simple',
                  }}
                >
                  <option value="" />
                  {states.map((v, i) => (
                    <option key={`${i}-${v.name}`} value={v.name}>{v.name}</option>
                  ))}
                </Select>
                <FormHelperText>Some important helper text</FormHelperText>
              </FormControl>
              <ErrorMessage name="address_state" component="div" />
            </Grid>

            {/* zip */}
            <Grid item sm={12} md={3}>
              <Field
                type="text"
                name="address_zip"
                label="Zip"
                // defaultValue="Default Value"
                helperText="The primary company address zip code."
                margin="normal"
                variant="outlined"

                className={classes.textField}
                component={TextField}
              />
              <ErrorMessage name="address_zip" component="div" />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            {/* State */}
            <Grid item sm={12} md={6}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                  Business Type
                </InputLabel>
                <Select
                  native
                  // value={state.age}
                  // onChange={handleChange('state')}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: 'business_type',
                    id: 'outlined-state-native-simple',
                  }}
                >
                  <option value="" />
                  {businessTypes.map((v, i) => (
                    <option key={`${i}-${v.name}`} value={v.name}>{v.name}</option>
                  ))}
                </Select>
                <FormHelperText>Some important helper text</FormHelperText>
              </FormControl>
              <ErrorMessage name="business_type" component="div" />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            {/* contact first name */}
            <Grid item sm={12} md={6}>
              <Field
                type="text"
                name="contact_primary_first_name"
                label="First Name"
                // defaultValue="Default Value"
                helperText="The primary company contact."
                margin="normal"
                variant="outlined"

                className={classes.textField}
                component={TextField}
              />
              <ErrorMessage name="contact_primary_first_name" component="div" />
            </Grid>

            {/* contact last name */}
            <Grid item sm={12} md={6}>
              <Field
                type="text"
                name="contact_primary_last_name"
                label="Last Name"
                // defaultValue="Default Value"
                helperText="The primary company contact."
                margin="normal"
                variant="outlined"

                className={classes.textField}
                component={TextField}
              />
              <ErrorMessage name="contact_primary_last_name" component="div" />
            </Grid>
          </Grid>

          <Grid container spacing={3}>

            {/* contact email */}
            <Grid item sm={12} md={6}>
              <Field
                type="email"
                name="contact_primary_email"
                label="Email"
                // defaultValue="Default Value"
                helperText="The primary company contact."
                margin="normal"
                variant="outlined"

                className={classes.textField}
                component={TextField}
              />
              <ErrorMessage name="contact_primary_email" component="div" />
            </Grid>

            {/* Role */}
            <Grid item sm={12} md={6}>
              <Field
                type="text"
                name="contact_primary_role"
                label="Role"
                // defaultValue="Default Value"
                helperText="The primary company contact role."
                margin="normal"
                variant="outlined"

                className={classes.textField}
                component={TextField}
              />
              <ErrorMessage name="contact_primary_role" component="div" />
            </Grid>

          </Grid>


          <Grid container spacing={3}>
            {/* Role */}
            <Grid item sm={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  </div>
)}

export default CompanyForm
