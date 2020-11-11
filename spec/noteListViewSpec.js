(function(exports){
  var nl = new NoteList();
  nl.addNote('test string with more than 20 chars');
  nl.addNote('another test string');
  var noteListView = new NoteListView(nl);

  function hasNoteList() {
    assert.isTrue(noteListView.noteList === nl.list);
  };

  function canReturnHTML() {
    console.log(noteListView.createHTML())
    assert.isTrue(noteListView.createHTML() === "<ul><li><a id='0' href='#notes/0'>test string with mor...</a></li><li><a id='1' href='#notes/1'>another test string...</a></li></ul>");
  }

  function canReturnHTMLwithNoNotes() {
    var nl2 = new NoteList();
    var nlw = new NoteListView(nl2);
    assert.isTrue(nlw.createHTML() === "<ul></ul>")
  }

  hasNoteList();
  canReturnHTML();
})(this);
