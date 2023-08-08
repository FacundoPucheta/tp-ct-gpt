//Los tests de esta function ya están creados, debes crear la function a partir de ellos utilizando a ChatGPT.

function buscarPalabra(texto, palabra) {
  // Tu implementación aquí
  if (!texto) return [];
  if (!palabra) return [];
  texto = texto.toLowerCase();
  palabra = palabra.toLowerCase();

  const result = [];

  const start = texto.indexOf(palabra);
  if (start === -1) return result;
  const final = start + palabra.length;
  result.push(start, final);

  return result;
}

console.log(buscarPalabra("La casa es bonita y la casa es grande", "casa"));

module.exports = buscarPalabra;
