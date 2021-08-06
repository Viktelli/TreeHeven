import { StyledButton } from './styles';

export default function Button(props) {
  return ( 
    <StyledButton>
      {props.children}
    </StyledButton>
  )
}