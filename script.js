const myLibrary=[];
function book(name,author,pageNumber,read){
    this.name=name;
    this.author=author;
    this.pageNumber=pageNumber;
    this.read=read;
    this.id=crypto.randomUUID()
}

