
const myLibrary = [
    new book("Agile Developer", "Venkit Subramanian", 190),
    new book("Pragmatic PRogrammer", "Andrew Hunt", 200),
];

function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read=read;
}

function addToLibrary(Book) {
    myLibrary.push(Book);
    displayBooks();
}

function displayBooks() {
    const booklist = document.getElementById('bookinfo')
    bookinfo.innerHTML = ''

    myLibrary.forEach((Book, index) => {

        const bookcard = document.createElement('div')
        bookcard.classList.add('book-card')

        bookcard.innerHTML = `
        <p><strong>${Book.title}</strong></p>
        <p>by ${Book.author}</p>
        <p>${Book.pages} pages</p>
        <br>
        <button id="remove" onclick="removeBook(${index})">Remove</button>
        `;
        booklist.appendChild(bookcard)
    });
}


function removeBook(index) {
    myLibrary.splice(index, 1)
    displayBooks();
}


document.querySelector('#bookForm').addEventListener("submit", (e)=>{
    e.preventDefault();


    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    // read=read.value
    console.log(title);

    const newBook = new book(title, author, pages);
    addToLibrary(newBook);
})

const b=new book("Agile Developer", "Venkit Subramanian", 190)
myLibrary.push(b)
displayBooks();



