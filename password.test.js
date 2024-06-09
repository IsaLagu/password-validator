//Iteración 1 - Validación de contraseña básica
import { expect, test, describe } from "vitest";
import { isValidPassword, checkPassword, checkValidPassword } from "./password";

describe("isValidPassword", () => {
  test("should return true if password is valid", () => {
    expect(isValidPassword("mariOneta87")).toBe(true);
  });

  test("should return false if password is not valid", () => {
    expect(isValidPassword("Maria2")).toBe(false);
    expect(isValidPassword("MARIPOSA1")).toBe(false);
    expect(isValidPassword("cuadrado2")).toBe(false);
    expect(isValidPassword("Pastanaga")).toBe(false);
    expect(isValidPassword("cosmoUniverso-+2")).toBe(false);
  });
});

describe("checkPassword", () => {
  test("should return 'Your password is correct' if password is valid", () => {
    expect(checkPassword("mariOneta87")).toBe("Your password is correct");
  });

  test("should return error strings if password is not valid", () => {
    expect(checkPassword("Maria2")).toBe("The password is not greater than 8 characters");
    expect(checkPassword("MARIPOSA1")).toBe("The password must contain at least one lowercase letter");
    expect(checkPassword("cuadrado2")).toBe("The password must contain at least one uppercase letter");
    expect(checkPassword("Pastanaga")).toBe("The password must contain at least one number");
    expect(checkPassword("cosmoUniverso-+2")).toBe("The password must be alphanumeric");
    expect(checkPassword("cosmo")).toBe(
      "The password is not greater than 8 characters\nThe password must contain at least one uppercase letter\nThe password must contain at least one number"
    );
  });
});

describe("checkValidPassword", () => {
  test("should return 'Your password is correct' if password is valid", () => {
    expect(checkValidPassword("mariOneta87")).toBe("Your password is correct");
    expect(checkValidPassword("mariOneta")).toBe("Your password is correct");
    expect(checkValidPassword("marioneta87")).toBe("Your password is correct");
    expect(checkValidPassword("MARIONETA87")).toBe("Your password is correct");
    expect(checkValidPassword("MArIA87")).toBe("Your password is correct");
  });

  test("should return error strings if password is not valid", () => {
    expect(checkValidPassword("Maria")).toBe(
      "The password must be greater than 8 characters, must contain at least one uppercase letter, one lowercase letter, one number and must be alphanumeric"
    );
    expect(checkValidPassword("MARIPOSA")).toBe(
      "The password must be greater than 8 characters, must contain at least one uppercase letter, one lowercase letter, one number and must be alphanumeric"
    );
    expect(checkValidPassword("cuadrado")).toBe(
      "The password must be greater than 8 characters, must contain at least one uppercase letter, one lowercase letter, one number and must be alphanumeric"
    );
    expect(checkValidPassword("universo-+2")).toBe(
      "The password must be greater than 8 characters, must contain at least one uppercase letter, one lowercase letter, one number and must be alphanumeric"
    );
  });
});
