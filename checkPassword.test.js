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
