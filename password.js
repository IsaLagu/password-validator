//Iteración 1 - Validación de contraseña básica
export function isValidPassword(password) {
  return (
    isValidLength(password) &&
    hasUppercase(password) &&
    hasLowercase(password) &&
    hasNumber(password) &&
    isAlphanumeric(password)
  );
}

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

//Iteración 3 - Estrategia de validación
export function checkValidPassword(password) {
  let numErrors = 0;

  if (!isValidLength(password)) {
    numErrors++;
  }

  if (!hasUppercase(password)) {
    numErrors++;
  }

  if (!hasLowercase(password)) {
    numErrors++;
  }

  if (!hasNumber(password)) {
    numErrors++;
  }

  if (!isAlphanumeric(password)) {
    numErrors++;
  }

  return numErrors <= 1
    ? "Your password is correct"
    : "The password must be greater than 8 characters, must contain at least one uppercase letter, one lowercase letter, one number and must be alphanumeric";
}
