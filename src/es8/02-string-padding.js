// RELLENAR UNA STRING O STRING PADDING

/*Consiste en rellenar un string agreando en este ejemplo con otro string al inicio o al final del que necesitamos rellenar.

Este recibe dos paramatros:*/

// EL METODO PADSTART (Rellena al inicio)

'abc'.padStart(10) // "       abc" 
'abc'.padStart(10, "foo") // "foofoofabc" En palabras mas sencillas la palabra 'abc', tiene 3 elementos o caracteres, con la palabra 'foo', se va a rellenear desde el inico de la palabra 'abc', hasta completar en total 10 caracteres.
'abc'.padStart(6,"123465") // "123abc"
'abc'.padStart(8, "0") // "00000abc"
'abc'.padStart(1) // "abc"


// METODO PADEND (Rellena al final)

'abc'.padEnd(10) // "abc       "
'abc'.padEnd(10, "foo") // "abcfoofoof"
'abc'.padEnd(6, "123456") // "abc123"
'abc'.padEnd(1) // "abc"




