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
