import React from 'react'
import Icon1 from '../../images/social.png'
import Icon2 from '../../images/social.png'
import Icon3 from '../../images/social.png'
import {ServicesContainer,ServicesH1, ServicesWrapper,ServicesCard, ServicesIcon, ServicesH2,ServicesP}from './ServicesElements';
const Services = () => {
    return (

            <ServicesContainer id = "services">
                <ServicesH1>Out Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src = {Icon1}/>
                        <ServicesH2> h2h2h2h2h2h2h2</ServicesH2>
                        <ServicesP>  PPPPPPPPPPPPPP</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src = {Icon2}/>
                        <ServicesH2> h2h2h2h2h2h2h2</ServicesH2>
                        <ServicesP>  PPPPPPPPPPPPPP</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src = {Icon3}/>
                        <ServicesH2> h2h2h2h2h2h2h2</ServicesH2>
                        <ServicesP>  PPPPPPPPPPPPPP</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>        

    )}

export default Services