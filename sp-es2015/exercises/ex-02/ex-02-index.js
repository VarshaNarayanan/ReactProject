/*
 * In this exercise, you will build two classes: Book, and Movie
 * The files (Book.js and Movie.js) have already been created for you in this
 * folder. Edit each one in turn and then return here.
 *
 * Now that you have Book.js and Movie.js, import them here, then create several
 * instances of Books and Movies to test them out
 *
 * Go to http://localhost:8000/exercises to see your code in action.
 */
import {dlog} from './dlog';
 import {Book} from './Book';

console.log('Books');
let educated = new Book( { title: 'Educated', author:'Tara Westover'});

let starWars = new Movie({title: 'Star Wars', director: 'George Lucas', writer: 'George Lucas'});

dlog('Book'+Educated);
dlog('Movies'+starWars);