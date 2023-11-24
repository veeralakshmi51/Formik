import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
const onSubmit= async (values,actions)=>{
    await new Promise((resolve)=>setTimeout(resolve,1000));
    actions.resetForm();
    console.log(values);
    alert('Form Submitted')
    }
    
const Basicform = () => {
  const { values, handleChange, isSubmitting,handleBlur, errors, handleSubmit, touched } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        cpassword: "",
      },
      validationSchema: basicSchema,
    onSubmit
    });


  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="firstname">Firstname</label>
        <input
          id="firstname"
          value={values.firstname}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Enter Your Firstname"
          className={errors.firstname && touched.firstname ?'input-error':''}
        ></input>
        {errors.firstname && touched.firstname && <p className="error">{errors.firstname}</p>}
        <label htmlFor="lastname">Lastname</label>
        <input
          id="lastname"
          value={values.lastname}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Enter Your Lastname"
          className={errors.lastname && touched.lastname ?'input-error':''}
        ></input>
        {errors.lastname && touched.lastname && <p className="error">{errors.lastname}</p>}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          placeholder="Enter Your Email"
          className={errors.email && touched.email ?'input-error':''}

        ></input>
        {errors.email && touched.email && <p className="error">{errors.email}</p>}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          placeholder="Enter Your Password"
          className={errors.password && touched.password ?'input-error':''}
        ></input>
        {errors.password && touched.password && <p className="error">{errors.password}</p>}
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          id="cpassword"
          value={values.cpassword}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          placeholder="Enter Confirm Password"
          className={errors.cpassword && touched.cpassword ?'input-error':''}
        ></input>
        {errors.cpassword && touched.cpassword && <p className="error">{errors.cpassword}</p>}
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
    </div>
  );
};

export default Basicform;
