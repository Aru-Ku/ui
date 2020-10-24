import { forwardRef } from "react";
import styled from 'styled-components';

interface Props  {
  Icon: any;
  color?: string;
  id?: string;
  size?: number;
}

const Wrapper = styled.div`
  color: ${props => props.color};
`

const Icon = forwardRef((props: Props, ref?: any) => {
  const {Icon, color = `black`, id, size = 21} = props;

  return (
    <Wrapper color={color} id={id} ref={ref}>
      <Icon size={size} />
    </Wrapper>
  )
})


export default Icon;