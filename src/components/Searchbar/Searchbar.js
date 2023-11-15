import { Formik } from "formik";

import {
  StyledForm,
  StyledField,
  StyledButton,
  StyledBtnLabel,
  SearchBar,
} from "./Searchbar.styled";

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchBar>
      <Formik
        initialValues={{
          query: "",
        }}
        onSubmit={(values, actions) => {
          onSubmit(values.query); //передаємо значення квері додавши до валуе квері
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledButton>
            <StyledBtnLabel>Search</StyledBtnLabel>
          </StyledButton>
          <StyledField
            type="text"
            autoComplete="off"
            name="query"
            placeholder="Search images and photos"
          />
        </StyledForm>
      </Formik>
    </SearchBar>
  );
};
