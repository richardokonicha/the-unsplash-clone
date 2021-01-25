import styled from "styled-components";
import { MdLinkedCamera } from "react-icons/md"
import  { useState, useEffect }  from 'react'

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

const AppButton = styled.div`
&:hover {
  // background: #682ede;
  backgroud: #D1913C;
  transform: scale(1.2);
}

`;

const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, .65);
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;  
`;

const ModalContainer = styled.div`
background: #fff;
border-radius: 5px;
max-width: 100%;
margin: 50px auto;
padding: 15px;
width: 560px;
`;

const ModalTitle = styled.h3`
font-size: 18px;
font-weight: 600;
margin-bottom: 25px;
`;

const ModalButton = styled.button`
// background: #8c54ff;
background: linear-gradient(to right, #FFD194, #D1913C);
border: 0;
border-radius: 5px;
color: #fff;
cursor: pointer;
font-size: 16px;
font-weight: 600;
margin-bottom: 30px;
padding: 10px 15px;
margin: 10px 15px;
transition: transform 100ms ease-out;

&:hover {
  // background: #682ede;
  backgroud: #D1913C;
  transform: scale(1.2);
}
`;

const ModalForm = styled.div`
position: relative;
display: flex;
flex-direction: column;
background: #f4f6fc;

border-radius: 5px;
color: #2d4284;
font-family: monospace;
padding: 10px 15px;
`;



const ButtonClose = styled.button`
position: absolute;
right: 10px;
`;

const Input = styled.input`
margin: 12px 0px;
padding: 12px 30px;
box-shadow: inset -4px -4px 8px 0 rgba(#fff, 0.8),
            inset 4px 4px 8px 0 rgba(#666, 0.1);
border: none;
border-radius: 8px;
background-color: #f0f0f3;
transition: .2s;

&:focus {
  outline: none;
  background-color: #e7e7ea;
  box-shadow: inset -2px -2px 4px 0 rgba(#fff, 0.8),
            inset 2px 2px 4px 0 rgba(#666, 0.1);
}
`;


const Modal = (props) => {
  const { 
    title, 
    description, 
    splashs, 
    setTitle, 
    setCover, 
    setDescription, 
    newSplash,
    onRequestClose } = props

  console.log(props)
  
  const submit = () => {
    newSplash()
    onRequestClose()
    setCover() 
    setDescription('')
    setTitle('')
  }

	useEffect(() => {
		function onKeyDown(event) {
			if (event.keyCode === 27) {
				onRequestClose();
			}
		}
		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onKeyDown);
		};
	});

	return (
		<ModalBackdrop >
			<ModalContainer >
				<ModalTitle >Add new Image post</ModalTitle>
        <ModalForm>
        <ButtonClose type="button" onClick={onRequestClose}>
					Close X
				</ButtonClose>
            <label>
                <Input type="text" placeholder="Image title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </label>
            <label>
                <Input type="text"  placeholder="Image description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </label>
            <label>
                <Input type="file" placeholder="Image" onChange={(e) => setCover(e.target.files[0])}/>
            </label>
          </ModalForm>
				<ModalButton type="button"  onClick={submit}>
					Upload Image
				</ModalButton>
			</ModalContainer>
		</ModalBackdrop>
	);
};

const Header = (props) => {
  console.log(props)
	const [isModalOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
    
	};

    return(
    <Wrapper >
      	{isModalOpen && <Modal {...props} onRequestClose={toggleModal}/>}
        <AppHeader >
         <div onClick={toggleModal}>
              <p>Upload Image</p>
				  <AppButton>
             <MdLinkedCamera size={100} />
      				{/* <ModalTitle >Upload Image</ModalTitle> */}
				  </AppButton>

         </div>
        </AppHeader>
    </Wrapper>
    )
}

export default Header