import React from 'react'
import{FaFacebook,FaYoutube,FaTwitter} from 'react-icons/fa'
import { FooterContainer,FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,FooterLinkTitle,FooterLink, SocialMedia,SocialMediaWrap,SocialLogo,
WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                                <FooterLink to= "/signin"> About RCOS </FooterLink>
                                <FooterLink to= "/signin"> Contact Us </FooterLink>
                                <FooterLink to= "/signin"> Find Us </FooterLink>
                                <FooterLink to= "/signin"> How to contribute </FooterLink>
                                <FooterLink to= "/signin"> Terms of Service </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                                <FooterLink to= "/signin"> About RCOS </FooterLink>
                                <FooterLink to= "/signin"> Contact Us </FooterLink>
                                <FooterLink to= "/signin"> Find Us </FooterLink>
                                <FooterLink to= "/signin"> How to contribute </FooterLink>
                                <FooterLink to= "/signin"> Terms of Service </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                                <FooterLink to= "/signin"> About RCOS </FooterLink>
                                <FooterLink to= "/signin"> Contact Us </FooterLink>
                                <FooterLink to= "/signin"> Find Us </FooterLink>
                                <FooterLink to= "/signin"> How to contribute </FooterLink>
                                <FooterLink to= "/signin"> Terms of Service </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us</FooterLinkTitle>
                                <FooterLink to= "/signin"> About RCOS </FooterLink>
                                <FooterLink to= "/signin"> Contact Us </FooterLink>
                                <FooterLink to= "/signin"> Find Us </FooterLink>
                                <FooterLink to= "/signin"> How to contribute </FooterLink>
                                <FooterLink to= "/signin"> Terms of Service </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to= '/'>
                            soc!al
                        </SocialLogo>
                        <WebsiteRights>
                            soc!al ⓒ {new Date().getFullYear()} -  
                             All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href = "/" target = "_blank"
                            aria-label = "Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href = "/" target = "_blank"
                            aria-label = "Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href = "/" target = "_blank"
                            aria-label = "Twitter ">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
