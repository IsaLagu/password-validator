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
