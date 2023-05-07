let booksList = [];

let addBookBtn = document.getElementById("add_book");
let showBooksBtn = document.getElementById("show_books");
let booksListElement = document.querySelector(".books-list");

addBookBtn.addEventListener("click", () => {
  let newBookInput = document.getElementById("book_name");
  let newBookName = newBookInput.value;
  booksList.push(newBookName);
  newBookInput.value = ""
  alert(`ספר ${newBookName} התווסף בהצלחה`)
});

function showBooks() {
  booksListElement.innerHTML = "";
  booksListElement.style.margin = "20px 0 0 0 ";
  for (let i = 0; i < booksList.length; i++) {
    let book = document.createElement("h5");
    book.innerHTML = booksList[i];
    booksListElement.appendChild(book);
  }
}
