// @ts-ignore
import Parallax from 'react-rellax';
// @ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';

import Section from '../Section';
import Content from '../Content';
import H2 from '../H2';
import P from '../P';
import Col from '../Col';
import { styles } from '../../constants';

const Intro = () => {
  return (
    <Section
      bgColor={styles.darkLight}
      color={styles.primaryColor}
      padding="80px 0 70px"
    >
      <Parallax speed={-10}>
        <Content direction="row">
          <Col
            flex
            style="margin: 0 108px 0 0;"
            mStyle="margin: 0 0 92px; align-items: center;"
          >
            <img src="/static/img-token-vision.svg" />
          </Col>
          <Col flex style="justify-content: center;">
            <ScrollAnimation animateOnce animateIn="fadeInUp">
              <H2 margin="0 0 30px;" mStyle="margin: 0 0 15px;">
                Transport Layer driven via Token
              </H2>
              <P mStyle="text-align: left;" sStyle="text-algin: left;">
                Token Economics are fundamentally new ways of incentivizing
                human behavior, The main task in mechanism design is to specify
                a mechanism that incentivizes rational agents to behave in
                certain ways, based upon their private information, that lead to
                socially desired outcomes.
              </P>
            </ScrollAnimation>
          </Col>
        </Content>
        <style jsx>{`
          img {
            width: 100%;
            max-width: 446px;
          }

          @media only screen and (max-width: 1024px) {
          }

          @media only screen and (max-width: 554px) {
          }
        `}</style>
      </Parallax>
    </Section>
  );
};

export default Intro;
