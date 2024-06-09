//Iteración 1 - Validación de contraseña básica
import { expect, test, describe } from "vitest";
import { checkValidPassword, isValidPassword } from "./password";

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

describe("checkValidPassword", () => {
  test("should return 'Your password is correct' if password is valid", () => {
    expect(checkValidPassword("mariOneta87")).toBe("Your password is correct");
  });

  test("should return error strings if password is not valid", () => {
    expect(checkValidPassword("Maria2")).toBe("The password is not greater than 8 characters");
    expect(checkValidPassword("MARIPOSA1")).toBe("The password must contain at least one lowercase letter");
    expect(checkValidPassword("cuadrado2")).toBe("The password must contain at least one uppercase letter");
    expect(checkValidPassword("Pastanaga")).toBe("The password must contain at least one number");
    expect(checkValidPassword("cosmoUniverso-+2")).toBe("The password must be alphanumeric");
    expect(checkValidPassword("cosmo")).toBe(
      "The password is not greater than 8 characters\nThe password must contain at least one uppercase letter\nThe password must contain at least one number"
    );
  });
});
