/*
 * Book represents a book. It should have these properties
 * author: string
 * title: string
 * isbn: string
 * edition: number
 * pageCount: number
 *
 * Author, title, and isbn are required
 *
 * Add a toString() method to print it out easily.
 */
export class Book{
  constructor(author,title,isbn,edition){
  this.author = author;
  this.title = title;
  this.isbn = isbn;
  this.edition = edition;
  
}
getAuthor(){
  return this.author;

}
setAuthor(){
  this.author=author;
}

getTitle(){
  return this.title;
}

setTitle(){
  this.title=title;
}
getIsbn(){
  return this.isbn;

}
setIsbn(){
  this.isbn=isbn;
}
getEdition(){
  return this.edition;

}
setEdition(){
  this.edition=edition;
}
toString(){
  return `${this.title} ${this.author} ${this.isbn} ${this.edition}`;
}
}