const myLibrary = [];
function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("Forgot new keyword!!!");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} was written by ${this.author},${this.pages},${this.read}`;
  };
}
function getBookData() {
  console.log("data");
}
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);

  myLibrary.push(book);
}
addBookToLibrary("x", "y", 1, "yes");
addBookToLibrary("a", "a", 2, "yes");
addBookToLibrary("a", "a", 2, "yes");

function displayBook(Books) {
  let booksContainer = document.getElementById("booksContainer");
  Books.forEach((book) => {
    console.log(book);
    let card = document.createElement("div");
    card.setAttribute("class", "card bg-base-100 w-96 shadow-sm");
    card.innerHTML = `  <div class="card-body">
          <h2 class="card-title">Title:${book.title}</h2>
          <h2 class="card-title">Author:${book.author}</h2>

          <p>
          ${book.info()}
          </p>
          <div class="card-actions justify-between items-center py-3">
            <input type="checkbox" checked="checked" class="toggle" />
            <button class="btn btn-error">Delete</button>
          </div>
        </div>`;
    booksContainer.appendChild(card);
  });
}
displayBook(myLibrary);
