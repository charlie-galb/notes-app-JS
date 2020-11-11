(function(exports){
  var noteList = new NoteList();

  function noteListHasArray() {
    assert.isTrue(noteList.list.length === 0);
  };

  function noteListCanStoreNote() {
    noteList.addNote('testing');
    noteList.addNote('testing too');
    assert.isTrue(noteList.list[0].content === 'testing');
    assert.isTrue(noteList.list[1].content === 'testing too');
  };

  function noteListCanAddID() {
    assert.isTrue(noteList.list[0].id === 0);
    assert.isTrue(noteList.list[1].id === 1);
  };

  noteListHasArray();
  noteListCanStoreNote();
  noteListCanAddID();
})(this);
