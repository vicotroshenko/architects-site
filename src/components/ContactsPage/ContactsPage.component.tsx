import React from 'react';

import ButtonWrapper from '../ButtonWrapper/ButtonWrapper.component';
import Container from '../Container/Container.component';
import Title from '../Title/Title.component';
import UnderTitleText from '../UnderTitleText/UnderTitleText.component';
import Map from './Map.componet';

const ContactsPage = () => {
  return (
    <Container>
      <div className="container m-auto flex flex-wrap justify-between mb-[120px] mt-[3px] items-end gap-y-[30px] gap-x-[70px]">
        <div>
          <div className="mb-[34px]">
            <Title>Contact</Title>
            <UnderTitleText>Information</UnderTitleText>
          </div>
          <div className="mb-[44px]">
            <p
              className="font-bold text-base2 capitalize"
              aria-label="company name"
            >
              Company Name
            </p>
            <p
              className="leading-10"
              aria-label="reside"
            >
              1234 Sample Street Austin Texas 76401
            </p>
          </div>
          <p
            className="font-bold text-base2 capitalize mb-[53px]"
            aria-label="location"
          >
            512.333.2222
          </p>
          <p
            className="mb-[33px]"
            aria-label="email"
          >
            sampleemail@gmail.com
          </p>
          <ButtonWrapper>
            <button
              type="button"
              className="min-w-[71px] w-full uppercase tracking-widest"
            >
              Contact us
            </button>
          </ButtonWrapper>
        </div>
        <Map />
      </div>
    </Container>
  );
};

export default ContactsPage;
