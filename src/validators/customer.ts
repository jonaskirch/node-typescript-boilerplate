import * as yup from 'yup';

const createCustomer = yup.object().shape({
  name: yup.string().required(),
  document: yup.string(),
  email: yup.string(),
});

const updateCustomer = yup.object().shape({
  name: yup.string(),
  document: yup.string(),
  email: yup.string(),
});

export { createCustomer, updateCustomer };
