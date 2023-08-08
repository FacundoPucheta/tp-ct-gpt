const esPalindromo = require("../Ejercicio 01");

describe("01 - JavaScript", () => {
  // Aquí van tus tests
  it("La función debe devolver true si el string ingresado es un palíndromo", () => {
    const demo = "Hola loh";
    const demo2 = "Giraffarig";
    expect(esPalindromo(demo)).toBe(true);
    expect(esPalindromo(demo2)).toBe(true);
  });
  it("La función debe devolver false si el string ingresado no es un palíndromo", () => {
    const demo = "Hola 23loh";
    const demo2 = "Giraffar11ig";
    expect(esPalindromo(demo)).toBe(false);
    expect(esPalindromo(demo2)).toBe(false);
  });
  it("Si el string ingresado está vacío debe devolver true", () => {
    const demo = "";
    expect(esPalindromo(demo)).toBe(true);
  });
  it("Si el string es palíndromo, aunque esté escrito todo con mayúsculas, debe devolver true", () => {
    const demo = "GIRAFFARIG";
    expect(esPalindromo(demo)).toBe(true);
  });
  it("Si el valor ingresado a la función no es de tipo string, debe devovler un error que diga 'Se esperaba una cadena de texto como argumento'", () => {
    const demo = 123;
    expect(()=>esPalindromo(demo)).toThrowError("Se esperaba una cadena de texto como argumento");
  });
});
