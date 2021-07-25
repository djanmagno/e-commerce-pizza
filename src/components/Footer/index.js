import React from 'react';
import { 
    FaFacebook, 
    FaInstagram, 
    FaLinkedin, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa';

import {
    FooterContainer,
    FooterBundle,
    SocialMedia,
    SociaMediaBundle,
    SocialLogo,
    SocialIcons,
    SocialIconsLink
} from './FotterElements';

// import { Container } from './styles';

function Footer() {
  return (
      <FooterContainer>
          <FooterBundle>
              <SocialMedia>
                  <SociaMediaBundle>
                      <SocialLogo to="/">Pizza Hot</SocialLogo>
                      <SocialIcons>
                          <SocialIconsLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                            <FaFacebook/>
                          </SocialIconsLink>

                          <SocialIconsLink href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                            <FaInstagram/>
                          </SocialIconsLink>

                          <SocialIconsLink href="/" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                            <FaYoutube/>
                          </SocialIconsLink>

                          <SocialIconsLink href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                            <FaTwitter/>
                          </SocialIconsLink>

                          <SocialIconsLink href="/" target="_blank" aria-label="Linkedin" rel="noopener noreferrer">
                            <FaLinkedin/>
                          </SocialIconsLink>
                          
                      </SocialIcons>
                  </SociaMediaBundle>
              </SocialMedia>
          </FooterBundle>
      </FooterContainer>
  );
}

export default Footer;