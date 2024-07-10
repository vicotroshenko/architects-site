import { InferType, date, number, object, string } from 'yup';

let contactsSchema = object({
  name: string().trim(),
  phone: string()
    .trim()
    .matches(
      /^((((\+[\d\-.]{1,5})?[ \-.]?\d{3})|(\+[\d\-.]{1,5})?[ \-.]?\((\d{3}\)))?[ \-.]?\d{3}[ \-.]?\d{4}\s?(e?x?t?\.?\s?\d{1,7})?)?$/i
    , 'not valid phone number')
    .required(),
  email: string().trim().email().required(),
  interested: string().trim(),
  message: string().trim().required(),
});

export default contactsSchema;
