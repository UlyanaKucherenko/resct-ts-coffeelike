import yup from 'plugins/yup-config';

export interface IFormValues {
  email: string;
  password: string;
}

const defaultValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export { defaultValues, schema };
