import styled from "styled-components";
import { MdLinkedCamera } from "react-icons/md"

const Wrapper = styled.div`
  text-align: center;  
`;

const AppHeader = styled.header`
//   background-color: #282c34;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Header = () => {
    return(
    <Wrapper >
        <AppHeader >
         <div>
             <MdLinkedCamera size={100} />
         </div>
        </AppHeader>
    </Wrapper>
    )
}

export default Header