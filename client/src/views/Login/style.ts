import { styled } from '../../lib/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 50px;
  background: ${props => props.theme.black};
`

export const LoginButton = styled.button`
  background: ${props => props.theme.green};
  color: ${props => props.theme.white};
  font-size: 17px;
  border: none;
  height: 50px;
  border-radius: 25px;
  padding: 0px 50px;
  cursor: pointer;
`
