class NoteList {
  constructor() {
    this._list = [];
  }

  get list() {
    return this._list;
  }

  addNote(string){
    let noteID = this._list.length
    let note = new Note(string, noteID);
    this._list.push(note);
  }
}
