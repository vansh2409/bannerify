import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-size: 1.2em;
  margin: 8px auto 32px;
  width: 100%;
  text-align: center;
  color: white;
`;

const Link = styled.a`
  color: white;
  font-weight: 600;
  text-decoration: underline;
`;

const Footer = () => {

  );

  return (
    <StyledFooter>
      © Bannerify 2021. All rights reserved \n A Vansh Choudhary Production
    </StyledFooter>
  );
};

export default React.memo(Footer);
