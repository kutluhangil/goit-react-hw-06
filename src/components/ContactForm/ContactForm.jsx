import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      }),
    );
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field name="name" placeholder="Name" />
        <Field name="number" placeholder="Number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
