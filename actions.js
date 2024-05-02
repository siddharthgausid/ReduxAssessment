export const SUBMIT_FORM = 'SUBMIT_FORM';

export const submitForm = (formData) => ({
  type: SUBMIT_FORM,
  payload: formData,
});
