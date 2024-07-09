import Container from '@/components/Container/Container.component';
import PageWrapper from '@/components/PageWrapper/PageWrapper.component';
import React from 'react';

const page = () => {
  return (
    <Container>
      <div className="container m-auto pt-[63px]">
        <PageWrapper
          title="COMPANY"
          underTitle="Certifications"
          wrapperClassName="h-screen flex items-stretch"
        >
          <li></li>
        </PageWrapper>
      </div>
    </Container>
  );
};

export default page;
