import * as yup from 'yup';

export const registeredUserValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
});
