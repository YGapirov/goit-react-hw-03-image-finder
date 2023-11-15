import { Formik, Form, Field } from "formik";

import css from "./Searchbar.module.css";
// import {
//   StyledForm,
//   StyledField,
//   StyledButton,
//   StyledBtnLabel,
//   SearchBar,
// } from "./Searchbar.styled";

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className={css.Header}>
      <Formik
        initialValues={{
          query: "",
        }}
        onSubmit={(values, actions) => {
          onSubmit(values.query); //передаємо значення квері додавши до валуе квері
          actions.resetForm();
        }}
      >
        <Form className={css.searchForm}>
          <button className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>
          <Field
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};
