export class Car {

  constructor(mke, mdl) {
    this.make = mke;
    this.model = mdl;
  }

  getMake() {
    return this.make;
  }

  setMake(make) {
    this.make = make;
  }

  getModel() {
    return this.model;
  }

  setModel(model) {
    this.model = model;
  }

  toString() {
    return `${this.make} ${this.model}`;
  }
}