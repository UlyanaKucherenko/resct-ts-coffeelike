import styled from 'styled-components';

const Wrap = styled.div`
  margin: 0 auto;
  width: 480px;
  padding: 32px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 2px 4px 8px #6b728040;
  text-align: center;
`;
const Logo = styled.h2`
  padding: 16px 18px 5px;
  margin-bottom: 16px;
`;

const Title = styled.h2`
  font-weight: bolder;
  font-size: 28px;
  color: #6366f1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export { Wrap, Logo, Form, Title };
