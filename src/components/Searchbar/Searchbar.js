import { Formik } from "formik";
import {
  StyledForm,
  StyledField,
  StyledButton,
  StyledBtnLabel,
} from "./Searchbar.styled";

export const Searchbar = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        query: "",
      }}
      onSubmit={(values, actions) => {
        onSubmit(values);
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
  );
};
