import Book from './modules/books.js';
import AwesomeBooks from './modules/awesomebooks.js';
import setCurrentTime from './modules/setCurrentTime.js';
import setNavBar from './modules/setNavBar.js';

setNavBar();

setInterval(() => {
  document.querySelector('#date_time').textContent = setCurrentTime();
}, 1000);

const myLibrary = new AwesomeBooks();
myLibrary.renderBooks();

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', () => {
  const newBook = new Book(document.querySelector('#title').value, document.querySelector('#author').value);
  myLibrary.addBook(newBook, '.books-content');
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
});
