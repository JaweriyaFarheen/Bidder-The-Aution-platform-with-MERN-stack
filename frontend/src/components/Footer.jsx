import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant='body1' textAlign={'center'}>
        &copy; 2025 BIDDER
      </Typography>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  color: #fff;
  padding: 1rem;
  background-color:rgb(26, 41, 151);
  margin-top: auto;
`;
