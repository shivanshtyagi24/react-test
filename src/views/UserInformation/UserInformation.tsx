import * as React from 'react';
import {
  Box,
  Container,
} from "@mui/material";
import Form from './Form';
import ReactLogo from './../../assets/images/ReactLogo.png'

const leftContainerStyles= {
  width: '50%',
  display: 'flex',
  flexGrow: '0',
  flexShrink: '0',
  alignItems: 'center',
  justifyContent: 'center', 
  backgroundColor: '#00608b', 
  flexDirection: 'column' 
}
const rightContainerStyles = {
  width: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const titleStyles = { 
  color: '#fff',
  fontSize: '2rem'
}

const mainContainerStyles = { 
  display: 'flex',
  height: '100%',
  width: '100%',
  padding: '0px'
}


const UserInformation: React.FC = () => {

  return (
    <Container sx={mainContainerStyles} disableGutters maxWidth={false}>
      <Box sx={leftContainerStyles}>
        <img src={ReactLogo} alt="application-logo" />
        <div style={titleStyles}>React Application</div>
      </Box>
      <Box sx={rightContainerStyles} mx={4}>
        <Box sx={{ width: '100%' }}>
          <Form />
        </Box>
      </Box>
    </Container>
  );
}

export default UserInformation;
