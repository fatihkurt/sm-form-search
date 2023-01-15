export const validations = {
  categoryName: [
    { type: "required" },
    { type: "letter" },
    { type: "minLength", minLength: 4 },
    { type: "maxLength", maxLength: 60 },
  ],
}