const myLibrary=[];
let displayedBooks=[]
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
    displayBooks(myLibrary,read)
}
function displayBooks(array,read){
    let content=document.querySelector(".content");
    array.map((book)=>{
    if(displayedBooks.includes(book)){
        return
    }
    else{
        displayedBooks.push(book);    
        let item=document.createElement('div');
        let title=document.createElement('div');
        let basicInfo=document.createElement('div');
        let author=document.createElement('div');
        let page=document.createElement('div');
        let readButton=document.createElement('button');
        let deleteBtn=document.createElement('button');
        deleteBtn.textContent="Delete";
        deleteBtn.className="deleteBtn";
        deleteBtn.addEventListener("click",()=>{
            item.remove()
        })
    if(read=="yes"){
        readButton.textContent="Read"
    }
    else{
        readButton.textContent="Not Read"
        readButton.style.cssText="background-color: red"
    }
    readButton.className='readButton'
    readButton.addEventListener("click",()=>{
        if(readButton.textContent=="Read"){
            readButton.textContent="Not Read"
            readButton.style.cssText="background-color: red";
        }
        else{
            readButton.textContent="Read"
            readButton.style.cssText="background-color: rgb(18, 248, 18)";
        }
    })
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
    item.appendChild(deleteBtn)
    content.appendChild(item);
    }  
   })
}
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "yes");
addBookToLibrary("1984", "George Orwell", 328, "no");
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, "yes");
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, "no");
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 309, "yes");
displayBooks(myLibrary)
let addButton=document.querySelector(".addButton");
let popUp=document.querySelector(".popup");
addButton.addEventListener("click",handleClick)
function handleClick(){
    popUp.classList.add("openPop")
}
let submitBtn=document.querySelector("#submitBtn")
submitBtn.addEventListener("click",()=>{
    let title=document.querySelector("#title").value;
    let author=document.querySelector("#author").value;
    let pages=document.querySelector("#pages").value;
    let readOrNot=document.querySelector('input[name="bookRead"]:checked').value;
    addBookToLibrary(title,author,pages,readOrNot);
    popUp.classList.remove("openPop");
    clearInputField()
})
function clearInputField(){
    document.querySelector("#title").value=""
    document.querySelector("#author").value=""
    document.querySelector("#pages").value=""
    document.querySelector('input[name="bookRead"]:checked').value=""
}
let cancelBtn=document.querySelector("#cancel");
cancelBtn.addEventListener("click",()=>{
    popUp.classList.remove("openPop");
})

