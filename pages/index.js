import LoginPage from '../src/components/Login'
import { Button } from 'antd';
import styled from 'styled-components';
const StyledButton = styled(Button)`
     color: red;
`
function HomePage() {

  return (
  <div>
    <h3>Test Ant design</h3>
     <StyledButton>Press Me</StyledButton>
    <LoginPage></LoginPage>
  </div>
  )
}

export default HomePage