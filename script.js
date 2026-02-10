const myLibrary=[];
function Book(name,author,pageNumber,read){
    this.name=name;
    this.author=author;
    this.pageNumber=pageNumber;
    this.read=read;
    this.id=crypto.randomUUID();
}
function addBookToLibrary(name,author,pageNumber,read){
    let newBook=new Book(name,author,pageNumber,read)
    myLibrary.push(newBook);
}
function displayBooks(array){
   let content=document.querySelector(".content");
   array.map((book)=>{
    let item=document.createElement('div')
    item.textContent=book.name
    item.className="items"
    content.appendChild(item)
   })
}
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309, true);
displayBooks(myLibrary)
