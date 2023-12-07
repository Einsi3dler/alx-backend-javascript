export default class HolbertonCourse {
    constructor(name, length, students) {
      if (typeof name !== 'string')
      {
        throw new TypeError("Name must be a string")
      }
      if (typeof length !== 'number' || Number.isNaN(name))
      {
        throw new TypeError("Length must be a number")
      }
      if (!(Array.isArray(students) && students.every(element => typeof element === 'string')))
      {
        throw new TypeError("Students must be an array of strings")
      }

      this._name = name;
      this._length = length;
      this._students = students;
    }
  
    get name() {
      return this._name;
    }
  
    set name(x) {
      if (typeof x !== 'string') {
        throw new TypeError('Name must be a string');
      } else {
        this._name = x;
      }
    }
  
    get length() {
      return this._length;
    }
  
    set length(x) {
      if (typeof x !== 'number' || Number.isNaN(x)) {
        throw new TypeError('Length must be a number');
      } else {
        this._length = x;
      }
    }
  
    get students() {
      return this._students;
    }
  
    set students(x) {
      if (Array.isArray(x) && x.every(element => typeof element === 'string')) {
        this._students = x;
      } else {
        throw new TypeError('Students must be an array of strings');
      }
    }
  }
  