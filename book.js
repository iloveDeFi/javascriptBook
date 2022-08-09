export class Book {
  constructor(title,author,description,pages,currentPage,read)
  {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
  }

  readBook(page){
    if(page < 1 || page > this.pages)
    return 0;
    
   


    if(page > 0 && page < this.pages){
    this.currentPage = page;
    return 1;
    }


    if(page === this.pages){
    this.currentPage = page;
    this.read = true;
    return 1;
    }
  }
}

  var livre1 = new Book('BookA', 'AuthorA', 'descriptionA', 300, 22, false);
  var livre2 = new Book('BookB', 'AuthorB', 'descriptionB', 600, 44, false);
  var livre3 = new Book('BookC', 'AuthorC', 'descriptionC', 900, 66, false);
  

export const books = [livre1,livre2,livre3];
