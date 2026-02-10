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
    let item=document.createElement('div');
    let title=document.createElement('div');
    let basicInfo=document.createElement('div');
    let author=document.createElement('div');
    let page=document.createElement('div');
    let readButton=document.createElement('button');
    readButton.textContent="Read"
    readButton.className='readButton'
    title.textContent=book.name;
    title.className='title'
    author.textContent="Author: "+book.author;
    page.textContent="page: "+book.pageNumber;
    basicInfo.className='basicInfo'
    basicInfo.appendChild(author);
    basicInfo.appendChild(page);
    item.className="items";
    item.appendChild(title)
    item.appendChild(basicInfo);
    item.appendChild(readButton)
    content.appendChild(item);
   })
}
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, false);
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309, true);
displayBooks(myLibrary)
