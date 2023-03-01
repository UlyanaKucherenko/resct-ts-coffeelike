import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RTextField } from 'components/Form/RTextField';
import { RButton } from 'components/Form/RButton';
import { useDispatch, useSelector } from 'react-redux';
import { auth as authModule } from 'store/auth';
import { RLoadingOverlay } from 'components/RLoadingOverlay';
import { status } from 'utils/const';
import { defaultValues, schema, IFormValues } from './config';
import { Logo, Form, Title, Wrap } from './styled';

export default function SingInPage() {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm<IFormValues>({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const loginStatus = useSelector(authModule.selectors.loginStatus);

  const onSubmit = async (data: IFormValues) => {
    dispatch(authModule.thunks.authLogin(data));
  };
  const signInWithGoogle = async () => {
    dispatch(authModule.thunks.authLoginWithGoogle());
  };

  return (
    <Wrap>
      <RLoadingOverlay isVisible={loginStatus === status.PENDING} />
      <Logo>Logo</Logo>
      <Title>LOGIN</Title>
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
        <RButton
          type="submit"
          fullWidth
        >
          Login
        </RButton>
      </Form>
      <div>
        <button
          type="button"
          onClick={signInWithGoogle}
        >
          Google
        </button>
      </div>
    </Wrap>
  );
}
