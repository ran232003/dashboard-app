import React from "react";
import Header from "../../components/Header";
import "../Screens.css";
import * as yup from "yup";
import { Formik } from "formik";
import { Button, TextField, useTheme } from "@mui/material";
import { tokens } from "../../theme";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};
const validationSchema = yup.object({
  firstName: yup.string().required("Mandatory Field"),
  lastName: yup.string().required("Mandatory Field"),
  email: yup
    .string()
    .email("email address incorect")
    .required("Mandatory Field"),
  contact: yup
    .string()
    .required("Mandatory Field")
    .min(5, "number to short")
    .max(20),
  address1: yup.string().required("Mandatory Field"),
  address2: yup.string(),
});

const Form = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="dashboardMain">
      <Header title="CREATE USER" subTitle="Create New User Profile" />
      <Formik
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form">
              <TextField
                className="input"
                id="filled-basic"
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                InputLabelProps={{
                  style: { color: colors.greenAccent[300] },
                }}
              />
              <TextField
                className="input"
                sx={{ ml: "10px" }}
                id="filled-basic"
                InputLabelProps={{
                  style: { color: colors.greenAccent[300] },
                }}
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
              />
              <TextField
                sx={{ marginTop: "20px" }}
                InputLabelProps={{
                  style: { color: colors.greenAccent[300] },
                }}
                className="input"
                id="filled-basic"
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <TextField
                sx={{ ml: "10px", marginTop: "20px" }}
                InputLabelProps={{
                  style: { color: colors.greenAccent[300] },
                }}
                className="input"
                id="filled-basic"
                variant="filled"
                type="text"
                label="Contact"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
              />
              <TextField
                sx={{ marginTop: "20px" }}
                InputLabelProps={{
                  style: { color: colors.greenAccent[300] },
                }}
                className="input"
                id="filled-basic"
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
              />
              <TextField
                sx={{ ml: "10px", marginTop: "20px" }}
                InputLabelProps={{
                  style: { color: colors.greenAccent[300] },
                }}
                className="input"
                id="filled-basic"
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
              />
            </div>
            {/* handleBlur, handleChange fumctions that works from formik
                name="firstName" need to be match to the field name
                error={!!touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
              if touch and error at same time
            */}

            <div>
              <Button
                sx={{
                  backgroundColor: colors.grey[500],
                  marginTop: "20px",
                  ":hover": { backgroundColor: colors.greenAccent[400] },
                }}
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
