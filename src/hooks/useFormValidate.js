import { useState } from "react";

export function useFormValidate(formValidations) {
  const [errors, setErrors] = useState({});
  const [validations, setValidations] = useState(formValidations);

  function addRule(fieldName, rule) {
    if (!validations[fieldName]) {
      validations[fieldName] = [];
    }
    setValidations({
      ...validations,
      [fieldName]: [...validations[fieldName], rule],
    });
  }

  function validate(formValues) {
    setErrors({});
    const formErrors = {};
    Object.keys(validations).forEach((fieldName) => {
      const rules = validations[fieldName];
      if (!rules.length) {
        return;
      }
      const value = formValues[fieldName];
      validateField(value, fieldName, rules, formErrors);
    });
    const hasError = Object.keys(formErrors).length === 0;
    setErrors(formErrors);
    return hasError;
  }

  function validateField(value, fieldName, rules, formErrors) {
    rules.forEach((rule) => validateRule(value, fieldName, rule, formErrors));
  }

  function validateRule(value, fieldName, rule, formErrors) {
    switch (rule.type) {
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          addError(
            formErrors,
            fieldName,
            rule.message || "Enter a valid email address!"
          );
        }
        break;

      case "required":
        if (value === undefined || value === null || value === "") {
          addError(
            formErrors,
            fieldName,
            rule.message || "Please fill the field!"
          );
        }
        break;
      case "minLength":
        if (typeof value === "string" && value.length < rule.minLength) {
          addError(
            formErrors,
            fieldName,
            rule.message ||
              `The field must be least ${rule.minLength} characters!`
          );
        }
      case "maxLength":
        if (typeof value === "string" && value.length > rule.maxLength) {
          addError(
            formErrors,
            fieldName,
            rule.message ||
              `The field must be maximum ${rule.maxLength} characters!`
          );
        }
      case "letter":
        if (!new RegExp(/^[A-Za-zışçüğöİŞÇÜÖ\s]*$/).test(value)) {
          addError(
            formErrors,
            fieldName,
            rule.message || "Please only use letters!"
          );
        }
        break;
      default:
        break;
    }
  }

  function addError(errors, fieldName, message) {
    if (!errors[fieldName]) {
      errors[fieldName] = [];
    }
    errors[fieldName].push(message);
  }

  return [validate, errors, addRule];
}
