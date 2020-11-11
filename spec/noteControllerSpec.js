(function(exports){
  var noteController = new NoteController();

  function canBeInstantiated() {
    assert.isTrue(noteController);
  }

  function canReplaceHTML() {
    testAppDiv = document.getElementById('app');
    noteController.insertHTML();
    console.log(testAppDiv.innerHTML)
    assert.isTrue(testAppDiv.innerHTML === '<ul><li><a id="0" href="#notes/0">Favourite drink: sel...</a></li><li><a id="1" href="#notes/1">Test link...</a></li></ul>');
  }

  function canListenForHashChanges() {
    let link = document.getElementById('0')
    document.getElementById('1').onClick = () => { return;}
    link.onClick = () => { return;}
    console.log(window.location)
    assert.isTrue(window.location.hash === '#notes/0')
  }

  function canUpdateContentAccordingToHashChange() {
    let link = document.getElementById('0')
    let content = document.getElementById('app')
    link.onClick = () => { return;}
    assert.isTrue(content.innerHTML === '<p>Favourite drink: seltzer</p>')
  }

  canBeInstantiated();
  canReplaceHTML();
  canListenForHashChanges();
  canUpdateContentAccordingToHashChange();
})(this);
