import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MySelect } from "../components/MySelect";
import { MyTextInput } from "../components/MyTextInput";
import "../styles/styles.css";

export const FormikAbstractationPage = () => {
  return (
    <div>
      <h1>Formik Abstractation Page</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          terms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            .required("Required")
            .oneOf(
              ["designer", "development", "product", "other"],
              "Invalid Job Type"
            ),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Name"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="LastName"
            />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
            />

            <MySelect label="Job Type" name="jobType" as="select">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </MySelect>
            <ErrorMessage name="jobType" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditons
            </label>
            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
