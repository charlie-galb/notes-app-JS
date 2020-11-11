class NoteController {
  constructor(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteList.addNote("Favourite drink: seltzer");
    this.noteList.addNote("Test link");
    this.noteListView = new NoteListView(this.noteList);
  }

  insertHTML() {
    var str = this.noteListView.createHTML();
    var appDiv = document.getElementById('app');
    appDiv.innerHTML = str;
  };
};

  function setHashChangeEventListener() {
    console.log('whatever')
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    console.log('noteforcurrentpage')
    showNote(getNoteFromUrl());
  };

  function getNoteFromUrl() {
    console.log('notefromurl')
    return window.location.hash.split("/")[1];
  };

  function showNote(noteID) {
    console.log(document.getElementById(noteID).innerHTML)
    document.getElementById('app').innerHTML = `<p>${nc.noteList.list[noteID].content}</p>`
  };

var nc = new NoteController();
nc.insertHTML();
setHashChangeEventListener();
