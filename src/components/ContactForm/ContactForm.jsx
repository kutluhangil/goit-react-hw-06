import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import * as Yup from "yup";

const schema = Yup.object({
  name: Yup.string().min(3).max(50).required(),
  number: Yup.string().min(3).max(50).required(),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          Name
          <Field name="name" className={css.input} />
          <ErrorMessage name="name" component="div" />
        </label>

        <label>
          Number
          <Field name="number" className={css.input} />
          <ErrorMessage name="number" component="div" />
        </label>

        <button type="submit" className={css.button}>Add contact</button>
      </Form>
    </Formik>
  );
}
