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
