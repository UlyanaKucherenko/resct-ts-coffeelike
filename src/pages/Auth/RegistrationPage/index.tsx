import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RTextField } from 'components/Form/RTextField';
import { RButton } from 'components/Form/RButton';
import { useDispatch } from 'react-redux';
import { auth as authModule } from 'store/auth';
import { defaultValues, schema, IFormValues } from './config';
import { Logo, Form, Title, Wrap } from './styled';

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm<IFormValues>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const fakerFormData = () => {
    const email = `${(Math.random() + 1).toString(36).substring(8)}@gmail.com`;
    const password = (Math.random() + 1).toString(36).substring(2);
    console.log(email, password);
    return { email, password };
  };

  const onSubmit = async (data: IFormValues) => {
    console.log('data', data);
    const dataFaker = fakerFormData();
    console.log('dataFaker=>', dataFaker);
    dispatch(authModule.thunks.authRegistration(dataFaker));
  };

  return (
    <Wrap>
      <Title>Create an Account</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <RTextField
          label="email"
          name="email"
          control={control}
          fullWidth
        />
        <RTextField
          label="password"
          name="password"
          control={control}
          fullWidth
        />
        <RButton type="submit">BTN</RButton>
      </Form>
    </Wrap>
  );
}
