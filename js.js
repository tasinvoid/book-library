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
    return `${this.title} was written by ${
      this.author
    },number of pages in this book - ${this.pages} , ${
      this.read ? "Already Read" : "Not read yet"
    }`;
  };
}
function getBookData() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let checkbox = document.getElementById("readStat");
  let read;
  if (checkbox.checked) {
    read = true;
  } else {
    read = false;
  }
  addBookToLibrary(title, author, pages, read);
  displayBook(myLibrary);
}
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);

  myLibrary.push(book);
  console.log(myLibrary);
}
function handleDelete(x) {
  console.log(x);
  myLibrary.forEach((book, index) => {
    if (book.id == x) {
      myLibrary.splice(index, 1);
    }
  });
  displayBook(myLibrary);
}
function handleToggle(id) {
  console.log(id);
  myLibrary.forEach((book) => {
    if (`${book.id}` == id) {
      console.log("id");
      if (book.read) {
        book.read = false;
      } else {
        book.read = true;
      }
    }
  });
}
displayBook(myLibrary);
function displayBook(Books) {
  let booksContainer = document.getElementById("booksContainer");
  booksContainer.innerHTML = "";
  Books.forEach((book) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card bg-base-100 w-96 shadow-sm");
    card.innerHTML = `  <div class="card-body" >
          <h2 class="card-title">Title:${book.title}</h2>
          <h2 class="card-title">Author:${book.author}</h2>

          <p>
          ${book.info()}
          </p>
          <div class="card-actions justify-between items-center py-3">
            <input type="checkbox" class="toggle" onclick="handleToggle(dataset.id2)" data-id2=${
              book.id
            }/>
            <button onclick='handleDelete(dataset.id)' data-id=${book.id} 
            class="btn btn-error">Delete</button>
          </div>
        </div>`;
    booksContainer.appendChild(card);
  });
}
