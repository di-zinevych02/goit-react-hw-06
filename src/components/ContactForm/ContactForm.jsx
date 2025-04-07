import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice"
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useId } from 'react';
const initialValues = {
    name: "", 
    number: ""
  };
  const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required") .matches(/^\d{3}-\d{2}-\d{2}$/, 'Number Format: 123-45-67')
});

const ContactForm = () => {
    const dispatch = useDispatch();
    const fieldId = useId();
    //Функція handleSubmit реалізована для обробки подання форми, включаючи додавання нового контакту та скидання форми.
    const handleSubmit= (values, actions) => {
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
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
        >
            <Form className={css.form}>
                <div className={css.group}>
                    <label htmlFor={'${fieldId}-name'}>Name</label>
                    <Field className={css.input} type="text" name="name" id={'${fieldId}-name'}/>
                    <ErrorMessage className={css.error} name="name" component="span"/>
                </div>

                <div className={css.group}>
                    <label htmlFor={'${fieldId}-number'}>Number</label>
                    <Field className={css.input} type="number" name="number" id={'${fieldId}-number'}/>
                    <ErrorMessage className={css.error} name="number" component="span"/>
                </div>
                <button className={css.btnadd} type="submit">Add contact</button>
            </Form>

        </Formik>
    );
};
export default ContactForm;