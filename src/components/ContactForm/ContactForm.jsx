import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaUser, FaPhone } from "react-icons/fa";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  // 1️⃣ Form doğrulama şeması
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters")
      .required("Number is required"),
  });

  // 2️⃣ Form submit fonksiyonu
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.fieldWrapper}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <div className={styles.inputContainer}>
            <span className={styles.icon}><FaUser /></span>
            <Field name="name" id="name" className={styles.input} placeholder="Name" />
          </div>
          <ErrorMessage name="name" component="span" className={styles.error} />
        </div>

        <div className={styles.fieldWrapper}>
          <label htmlFor="number" className={styles.label}>Number</label>
          <div className={styles.inputContainer}>
            <span className={styles.icon}><FaPhone /></span>
            <Field name="number" id="number" className={styles.input} placeholder="Number" />
          </div>
          <ErrorMessage name="number" component="span" className={styles.error} />
        </div>

        <button type="submit" className={styles.button}>Add contact</button>
      </Form>
    </Formik>
  );
}
