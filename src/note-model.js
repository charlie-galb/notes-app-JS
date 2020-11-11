class Note{

  constructor(string, noteID){
    this._content = string;
    this._id = noteID;
  };

  get content(){
    return this._content;
  };

  get id(){
    return this._id;
  }

}
