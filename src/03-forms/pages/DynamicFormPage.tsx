import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";

const initialValues: { [x: string]: any } = {};
const requieredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("This field is required");
    }

    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Must be at least ${(rule as any).value || 2} characters`
      );
    }

    if (rule.type === "email") {
      schema = schema.email("Email is not valid");
    }

    requieredFields[input.name] = schema;
  }
}

const validationSchema = Yup.object({ ...requieredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select a option</option>
                    {options?.map((option) => (
                      <option key={option.id} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              return null;
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
