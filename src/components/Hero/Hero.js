import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Njenga Karori<br/>
        Front-End Developer
      </SectionTitle>
      <SectionText>
        Hello. My name is Njenga Karori and I'm a front-end developer with a passion for designing and creating beautiful websites and mobile applications.
      </SectionText>
      <Button onClick={() => window.location = 'https://gmail.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;