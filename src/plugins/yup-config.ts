import * as yup from 'yup';

const validationMessages = {
  mixed: {
    required: 'Field is required',
  },
  string: {
    // eslint-disable-next-line no-template-curly-in-string
    min: 'This field must be at least ${min} characters',
    // eslint-disable-next-line no-template-curly-in-string
    max: 'This field must be at most ${max} characters',
    email: 'Please enter valid email',
  },
  number: {
    positive: 'This field must be greater than 0',
  },
};

yup.setLocale(validationMessages);

export default yup;
