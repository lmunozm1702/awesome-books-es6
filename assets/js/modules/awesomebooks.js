class AwesomeBooks {
  constructor(
    awesomeBooks = [],
    awesoneBooks2 = JSON.parse(localStorage.getItem('awesomeBooks')) || [],
  ) {
    this.awesomeBooks = awesomeBooks;
    this.awesomeBooks2 = awesoneBooks2;
    this.id = 0;
  }

  renderBooks() {
    this.awesomeBooks2.forEach((book) => {
      this.addBook(book, '.books-content');
    });
  }

  addBook(Book, booksDiv) {
    this.id += 1;
    Book.id = this.id;


    this.awesomeBooks.push(Book);

    const singleBook = document.createElement('div');
    singleBook.classList.add('single-book');
    singleBook.id = `Book${Book.id}`;
    document.querySelector(booksDiv).appendChild(singleBook);

    const titleDiv = document.createElement('div');
    titleDiv.textContent = `'${Book.title}' by  ${Book.author}`;
    singleBook.appendChild(titleDiv);

    const buttonDiv = document.createElement('i');
    buttonDiv.className = ('fa-solid fa-trash-can');
    buttonDiv.id = `button_${Book.id}`;
    buttonDiv.onclick = () => {
      this.removeBook(Book.id);
    };
    singleBook.appendChild(buttonDiv);
    this.addToLocalStorage();
  }

  addToLocalStorage() {
    localStorage.setItem('awesomeBooks', JSON.stringify(this.awesomeBooks));
  }

  removeBook(id) {
    this.awesomeBooks = this.awesomeBooks.filter(
      (book) => book.id.toString() !== id.toString(),
    );
    document.querySelector(`#Book${id}`).remove();
    this.addToLocalStorage();
  }
}

export default AwesomeBooks;