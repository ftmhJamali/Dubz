export const UseFormatPhoneNumberLogin = (number) => {
  if (number) {
    const raw = number.replace(/\D/g, "");
    let formatted = raw.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
    if (raw.length < 7) {
      formatted = raw.replace(/(\d{3})(\d{0,3})/, "$1 $2");
    }
    return formatted;
  }
};
export const UseFormatPhoneNumberOTP = (number) => {
  return number.replace(/^(\+98)(\d{3})(\d{3})(\d{4})$/, "$1 $2 $3 $4");
};
