import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import { connect } from "react-redux";
import { actionToken } from "../../auth/Authactions";
import styles from "./loginstyles.module.css";
function LoginScreen({ actionToken }) {
  return (
    <div className={styles.form_screen}>
    <div className="row justify-content-center ">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={( values, { setFieldError }) => {
        //en el caso de que se dispare ActionLoggedFalse generará un msg error 
        return actionToken(values.username, values.password).catch((resp) => {   
        setFieldError("username", resp.errormessage);
        
          });
        }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "ingrese su correo";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.username)) {
            errors.username = "enter a valid email";
          }
          if (!values.password) {
            errors.password = "enter your password";
          } else if (values.password.length < 3) {
            errors.password = "password must be longer than 3 characters";
          }
          return errors;
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form className="form col-4  align-items-center " id={styles.formbox}>
            <div class="mb-3 mt-3">
              <label  class="form-label" id={styles.form_label}>
              Email address
              </label>
             <p><ErrorMessage
                className={styles.form_error}
                name="username"
                component="p"
              /></p> 
              <Field
                type="email"
                id={ errors.username ? styles.input_err : styles.inputform}
                aria-describedby="emailHelp"
                name="username"
                className= "form-control" 
                
              ></Field>
            </div>
            <div class="mb-4">
              <label  class="form-label " id={styles.form_label}>
                Password
              </label>
              <p><ErrorMessage
                className={styles.form_error}
                name="password"
                component="p"
              /></p>
              <Field
                type="password"
                id={errors.password ? styles.input_err : styles.inputform}
                name="password"
                className= "form-control"
                
              ></Field>
            </div>
            <button
              className="btn"
              id={styles.btn_submit}
              type="submit"
              disabled={isSubmitting}
            
            >
             Sing in
            </button>
          </Form>
        )}
      </Formik>
      </div>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state.authreducer.logged
  };
};

export default connect(mapStateToProps, { actionToken })(LoginScreen);
