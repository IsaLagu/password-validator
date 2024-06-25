// Iteración 2 - Errores múltiples
export function checkPassword(password) {
  let errors = [];

  if (!isValidLength(password)) {
    errors.push("The password is not greater than 8 characters");
  }

  if (!hasLowercase(password)) {
    errors.push("The password must contain at least one lowercase letter");
  }
  if (!hasUppercase(password)) {
    errors.push("The password must contain at least one uppercase letter");
  }
  if (!hasNumber(password)) {
    errors.push("The password must contain at least one number");
  }
  if (!isAlphanumeric(password)) {
    errors.push("The password must be alphanumeric");
  }
  return errors.length > 0 ? errors.join("\n") : "Your password is correct";
}

export function isValidLength(password) {
  return password.length > 8;
}

export function hasUppercase(password) {
  const regex = /[A-Z]/g;
  return password.match(regex) ? true : false;
}

export function hasLowercase(password) {
  const regex = /[a-z]/g;
  return password.match(regex) ? true : false;
}

export function hasNumber(password) {
  const numberPattern = /\d+/g;
  return password.match(numberPattern) ? true : false;
}

export function isAlphanumeric(password) {
  const regex = /^[a-z0-9]+$/i;
  return password.match(regex) ? true : false;
}
