export const validations = {
  fullname: [
    { type: 'required' },
    { type: 'letter'},
    { type: 'minLength', minLength: 4},
    { type: 'maxLength', maxLength: 60},
  ],
  country: [
    { type: 'required' },
    { type: 'letter'},
    { type: 'minLength', minLength: 2},
    { type: 'maxLength', maxLength: 40},
  ],
  city: [
    { type: 'required' },
    { type: 'letter'},
    { type: 'minLength', minLength: 2},
    { type: 'maxLength', maxLength: 40},
  ],
  mail: [
    { type: 'required' },
    { type: 'email'},
  ],
}