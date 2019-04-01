/*
 * Update Movie so it subclasses Media.
 * Add a property, imdbId which maps on to mediaId
 * Make that property required as well
 *
 */

export class Movie {
  constructor( config ) {
    let required = [ 'title', 'year' ];
    let additional = [ 'director', 'writer', 'genre' ];
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

  get author() {
    return this.director;
  }

  set author(author) {
    this.director = author;
  }

  toString() {
    return `${this.title} by ${this.author}`;
  }

}