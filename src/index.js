const titleInput = document.getElementById("book-title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const imgUploader = document.getElementById("img-uploader");
const imgPreview = document.getElementById("img-preview-div");
const registerBtn = document.getElementById("register-book");
const addNewBookBtn = document.getElementById("new-book-btn");
const addNewBookWindow = document.getElementById("new-book-window");
const noBooksMsg = document.getElementById("no-books-message");
const closeWindow = document.getElementById("close-window-btn");
let bookList = [];
renderPage();

function hide(element) {
  element.classList.add("hide");
}

function show(element) {
  element.classList.remove("hide");
}

function renderPage() {
  imgUploader.onchange = function () {
    const imgSrc = URL.createObjectURL(imgUploader.files[0]);
    if (imgSrc) {
      imgPreview.innerHTML = `<img src="${imgSrc}" class="img-preview">`;
    } else {
      imgPreview.innerHTML = "";
    }
  };

  if (!imgUploader.files[0]) {
    imgPreview.innerHTML = `<img src="https://www.boldstrokesbooks.com/assets/bsb/images/book-default-cover.jpg" class="img-preview">`;
  }

  let bookListHtml = "";
  bookList.forEach((book, index) => {
    let readText = "";
    let readStatusBtn = "";
    if (book.haveRead) {
      readText = "Read";
      readStatusBtn = "Unmark Read";
    } else {
      readText = "Not read";
      readStatusBtn = "Mark as Read";
    }

    bookListHtml += `
      <div class="book center">
        <div class="delete" data-identificator="${index}"><img class="close-icon" src="https://flaticons.net/custom.php?i=4B6hOMcQIDIoInIN0ho6gOWfl&format=png"></div>
        <img src="${book.coverImg}" class="cover-img full-width">
        <h4>${book.title} - ${book.author}</h4>
        <p>${book.pages} pages <br> ${readText}</p>
        <button class="read-status full-width" data-identificator="${index}">${readStatusBtn}</button>
      </div>
    `;
  });

  document.getElementById("my-books").innerHTML = bookListHtml;

  document.querySelectorAll(".read-status").forEach((btn, index) => {
    btn.addEventListener("click", (event) => {
      const bookIndex = btn.getAttribute("data-identificator");
      bookList[bookIndex].haveRead = !bookList[bookIndex].haveRead;
      renderPage();
    });
  });

  document.querySelectorAll(".delete").forEach((btn, index) => {
    btn.addEventListener("click", (event) => {
      const bookIndex = btn.getAttribute("data-identificator");
      bookList.splice(bookIndex, 1);
      renderPage();
    });
  });

  if (bookList.length > 0) {
    hide(noBooksMsg);
  } else {
    show(noBooksMsg);
  }
}

function cleanPage() {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  imgUploader.value = "";
  imgPreview.innerHTML = "";
  hide(addNewBookWindow);
}

function haveRead() {
  let haveRead = null;
  let HaveReadBtn = document.querySelectorAll('input[name="read"]');
  if (HaveReadBtn[0].checked) {
    haveRead = true;
  } else {
    haveRead = false;
  }
  return haveRead;
}

function Book(title, author, pages, coverImg, haveRead) {
  this.coverImg = coverImg;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.haveRead = haveRead;
}

function createNewBook() {
  const coverImg = URL.createObjectURL(imgUploader.files[0]);
  const book = new bookFactory(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    coverImg,
    haveRead()
  );
  bookList.push(book);
  cleanPage();
  renderPage();
}

registerBtn.addEventListener("click", function () {
  const inputs = document.querySelectorAll("input");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value) {
      isValid = false;
    }
  });

  if (isValid) {
    createNewBook();
    console.log(bookList);
  }
});

addNewBookBtn.addEventListener("click", function () {
  show(addNewBookWindow);
});

closeWindow.addEventListener("click", function () {
  hide(addNewBookWindow);
});
