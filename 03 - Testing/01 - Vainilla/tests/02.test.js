const obtenerPosteo = require("../Ejercicio 02");


describe('obtenerPosteo', () => {
  it('Si la función recibe un parámetro que no sea un número del 1 al 100, debe devolver un status 404 y el valor null', async () => {
    const invalidParam = 'Lorem Ipsum';
    const result = await obtenerPosteo(invalidParam);

    expect(result).toBeNull();
    expect(result?.response?.status || (result?.isAxiosError && result?.response?.status)).toBe(404);
  });

  it('Si la función recibe un número del 1 al 100, debe devolver un objeto con las propiedades especificadas', async () => {
    const validParam = 1;
    const result = await obtenerPosteo(validParam);

    // Verificar que el resultado no sea nulo
    expect(result).toBeTruthy();
    expect(result?.status).toBe(200);
    // Verificar que el resultado sea un objeto
    expect(typeof result).toBe('object');

    // Verificar que el resultado tiene las propiedades esperadas
    expect(result).toHaveProperty('userId');
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('title');
    expect(result).toHaveProperty('body');

    // Verificar que las propiedades son del tipo esperado
    expect(typeof result.userId).toBe('number');
    expect(typeof result.id).toBe('number');
    expect(typeof result.title).toBe('string');
    expect(typeof result.body).toBe('string');
  });
});
