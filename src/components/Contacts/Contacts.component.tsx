'use client';

import { ContactsForm } from '@/types/contacts.type';
import contactsSchema from '@/validations/form.validation';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';

import CONTENT from '../../../public/data/contacts.json';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper.component';
import Container from '../Container/Container.component';
import Field from '../Field/Field.component';
import TextArea from '../Field/TextArea.component';
import Title from '../Title/Title.component';

const Contacts = () => {
  const { text, pictures } = CONTENT;
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      interested: '',
      message: '',
    },
    resolver: yupResolver(contactsSchema),
  });

  const onSubmit = (data: ContactsForm) => {
    console.log('log submit');
    console.log(data);
  };
  return (
    <Container sx="container pb-[120px]">
      <Title>{text.title}</Title>
      <div className="w-full flex gap-[30px] justify-center lg:justify-between">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-[10px] max-w-[391px]"
        >
          <Field
            type="text"
            name="name"
            control={control}
            placeholder="Name"
          />
          <Field
            type="text"
            name="phone"
            control={control}
            placeholder="Phone Number*"
          />
          <Field
            type="email"
            name="email"
            control={control}
            placeholder="E-Mail*"
          />
          <Field
            type="text"
            name="interested"
            control={control}
            placeholder="Interested In"
          />
          <TextArea
            control={control}
            name="message"
            placeholder="Message*"
            wrapperClassName="mb-[77px] resize-none"
          />
          <ButtonWrapper wrapperClassName="max-lg:m-auto">
            <button
              type="submit"
              className="block w-full max-lg:w-screen min-h-[71px]"
            >
              Send
            </button>
          </ButtonWrapper>
        </form>
        <div className="relative w-full h-[369px] hidden lg:block">
          <Image
            src={pictures.desktop}
            fill
            alt="a man with cell phone"
          />
        </div>
      </div>
    </Container>
  );
};

export default Contacts;
