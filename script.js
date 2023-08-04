
//global variables
let modal = document.querySelector('.modal-holder')
let addBookButton = document.querySelector('.add-book-button')
// Book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return this.title + 'by' + this.author + ',' + this.pages + 'pages,' + this.read
    }

}
//LIBRARY
let myLibrary = [];

//setting up variables to make appending child divs easier
const cardContainer = document.querySelector('.card-container')
const allTitles = document.querySelectorAll('.book-title')
function createDivs() {
}
//Take book from library array and display it as a card

function addBookToLibrary() {
    for (i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i] !== myLibrary[myLibrary.length - 1]) {

        } else {
            book = document.createElement('div')
            book.id = [i] + book
            let bookId = book.id

            bookTitle = document.createElement('div')
            bookAuthor = document.createElement('div')
            bookPages = document.createElement('div')

            bookRead = document.createElement('div')
            bookRead2 = document.createElement('button')
            bookRead3 = document.createElement('button')
            bookRead3.addEventListener('click', () => {
            document.getElementById(bookId).remove()
            })
            bookRead4 = document.createElement('div')

            bookRead.classList.add('book-buttons');
            bookRead2.classList.add('read-status')
            bookRead3.classList.add('delete-book')
    
            
            book.classList.add('book');

            bookTitle.textContent = myLibrary[i].title
            bookTitle.classList.add('book-title')

            bookAuthor.textContent = "By" + ' ' + myLibrary[i].author
            bookAuthor.classList.add('book-author')

            bookPages.textContent = myLibrary[i].pages + ' ' + 'Pages'
            bookPages.classList.add('book-pages')

            bookRead3.innerText = "Delete"

              
            if (myLibrary[i].read === false) {
                bookRead2.innerText = "Not Read"
                bookRead2.classList.add('read-status-3');
                bookRead4.textContent = "Incomplete"
            } else {
                bookRead2.innerText = "Read"
                bookRead2.classList.add('read-status-2')
                bookRead4.textContent = "Complete"
            }
             
            cardContainer.appendChild(book);
            book.append(bookTitle, bookAuthor, bookPages, bookRead)
            bookRead.append(bookRead2, bookRead3)
        }
    }
}

//make button open popup form
addBookButton.addEventListener('click', () => {
    modal.style.display = "block";
})

//code to close popup form
modal.addEventListener('click', (e) => {
    if (e.target !== modal)
        return;

    modal.style.display = "none";

})
//function to get input and push it to array
let addBookForm = document.getElementById('add-book-form')
addBookForm.addEventListener('submit', () => {
    event.preventDefault()
    let tempTitle = document.getElementById("Title").value
    let tempAuthor = document.getElementById("Author").value
    let tempPages = document.getElementById("Pages").value
    let tempRead = document.getElementById("readStatus").checked
    console.log(tempRead);
    console.log(tempTitle);
    let tempBook = new Book(tempTitle, tempAuthor, tempPages, tempRead)
    myLibrary.push(tempBook)
    modal.style.display = "none";
    addBookForm.reset();
    addBookToLibrary();



})
// Change Button Styles On Click
cardContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('read-status-3')) {
        e.target.classList.remove('read-status-3')
        e.target.classList.add('read-status-2')
        e.target.textContent = "Read"
    } else if (e.target.classList.contains('read-status-2')) {
        e.target.classList.remove('read-status-2')
        e.target.classList.add('read-status-3')
        e.target.textContent = "Not Read"
    } 
})
