
import {Media} from './Media';
export class Book extends Media {
  constructor( config ) {
    super( config );
    let required = [ 'author', 'title', 'isbn' ];
    let additional = [ 'edition', 'pageCount' ];
    for ( let x = 0; x < required.length; x++ ) {
      let propName = required[ x ];
      if ( !config[ propName ] ) {
        this[ propName ] = '[Default' + propName + ']';
      } else {
        this[ propName ] = config[ propName ];
      }
    }

    for ( let y = 0; y < additional.length; y++ ) {
      let propName = additional[ y ];
      if ( config[ propName ] ) {
        this[ propName ] = config[ propName ];
      }
    }
  }

  get isbn() {
    return this.mediaId;
  }

  set isbn( isbn ) {
    this.mediaId = isbn;
  }

  toString() {
    return `${this.title} by ${this.author} (ISBN: ${this.mediaId})`;
  }

}