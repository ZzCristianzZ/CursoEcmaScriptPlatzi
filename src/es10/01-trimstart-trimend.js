// ELIMINAR ESPACION EN BLANCO DE LOS STRINGS

/* - El método trim elimina los     espacios en blanco al inicio y al final.
- El método trimStart o trimLeft elimina los espacios al inicio.
- El método trimEnd o trimRight elimina los espacios al final.
*/

const saludo = "      hola      "
const result1 = saludo.trim()
const result2 = saludo.trimStart()
const result3 = saludo.trimEnd()

result1 // 'hola'
result2 // 'hola      '
result3 // '      hola'