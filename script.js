const myLibrary=[];
function Book(name,author,pageNumber,read){
    this.name=name;
    this.author=author;
    this.pageNumber=pageNumber;
    this.read=read;
    this.id=crypto.randomUUID();
}
function addBookToLibrary(name,author,pageNumber,read){
    let newBook=new book(name,author,pageNumber,read)
    myLibrary.push(newBook);
}

