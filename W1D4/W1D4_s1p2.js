/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali DataType in JavaScript sono:
1. Number: è un tipo di dato numerico, può essere intero, decimale e infinito; ma può anche esserci un errore di calcolo, definito NaN (not a number);
2. String: è un tipo di dato alfanumerico, ovvero una sequenza di caratteri delimitati da apici doppi "", singoli '' o backtick ``, può anche essere vuota ("");
3. Boolean: è un tipo di dato logico, può essere solo true o false;
4. Undefined: è un dato senza valore, è stato dichiarato ma potrebbe essere qualsiasi tipo di dato; 
5. Null: è un dato vuoto, la variabile non contiene nulla;
6. BigInt: è un dato che contiene un numero intero molto grande, ovvero che va oltre il valore numerico di tipo "number", 
   viene identificato con la lettera n alla fine del numero dichiarato;
7. Symbol */

/* DataType Number */

const age = 31
console.log(age)
console.log(typeof age)

/* DataType String */

let welcome = "Hello, how are you?"
console.log(welcome)
console.log(typeof welcome)

/* DataType Boolean */

let isLogged = true
console.log(typeof isLogged)

/* DataType Undefined */

let email
console.log(typeof email)

/* DataType Null */

welcome = null
console.log(welcome)

/* DataType Number */

const bigNumber = 9999999999999999999n
console.log(typeof bigNumber)


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto è un gruppo di variabili di tipo chiave-valore che descrive lo stesso dato, esistente nella realtà */

let object = {
    name: 'Divano',
    description: 'in velluto color verde petrolio' ,
    price: 200 + '€',
    isInStock: true,
}
console.log(object)


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const firstNumber = 12
const secondNumber = 20

console.log(firstNumber + secondNumber)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

const x = 12

console.log(x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const name = 'Serena'

console.log(name)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

const thirdNumber = 4

console.log(thirdNumber - x)
console.log(x - thirdNumber)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

const name1 = 'john'
const name2 = 'John'
console.log(name1 !== name2)

const transformedName2 = name2.toLowerCase()

console.log(transformedName2)
console.log(name1 === transformedName2)