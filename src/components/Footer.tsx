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
  const link = (text: string, url: string) => (
    <Link href={url} rel="noopener noreferrer">
      {text}
    </Link>
  );

  return (
    <StyledFooter>
      © {link(Bannerify)} 2021 \n A {link(Vansh Choudhary)} Production
    </StyledFooter>
  );
};

export default React.memo(Footer);
