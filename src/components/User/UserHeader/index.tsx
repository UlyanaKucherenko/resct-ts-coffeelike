import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Burger, Header } from './styled';
import { auth as authModule } from '../../../store/auth';
import { UserInfoBlock } from './UserInfoBlock';

interface IUserHeaderProps {
  setIsOpened: () => void;
}

export const UserHeader = ({ setIsOpened = () => {} }: IUserHeaderProps) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authModule.thunks.authLogout());
  };
  return (
    <Header>
      <Burger onClick={setIsOpened} />
      <UserInfoBlock />
      <button
        type="button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </Header>
  );
};
