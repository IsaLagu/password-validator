//Iteración 1 - Validación de contraseña básica
import { expect, test, describe } from "vitest";
import { isValidPassword } from "./isValidPassword";

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
