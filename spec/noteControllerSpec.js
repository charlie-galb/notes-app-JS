(function(exports){
  var noteController = new NoteController();

  function canBeInstantiated() {
    assert.isTrue(noteController);
  }

  function canReplaceHTML() {
    testAppDiv = document.getElementById('app');
    noteController.insertHTML();
    assert.isTrue(testAppDiv.innerHTML === '<ul><li><a id="0" href="#notes/0">Favourite drink: sel...</a></li><li><a id="1" href="#notes/1">Test link...</a></li></ul>');
  }

  function canListenForHashChanges() {
    let link = document.getElementById('0')
    // console.log(document.getElementById('0'))
    // console.log(document.getElementById('1'))
    document.getElementById('1').click();
    link.click();
    // console.log(window.location)
    assert.isTrue(window.location.hash === '#notes/0')
  }

  function canUpdateContentAccordingToHashChange() {
    let link = document.getElementById('0');
    document.getElementById('1').click();
    link.click();
    // let content = document.getElementById('app');
    console.log("UPDATED1")
    setTimeout(function() { console.log("content: " + document.getElementById('app').innerHTML) }, 3000)
    setTimeout(function() { assert.isTrue(document.getElementById('app').innerHTML === '<p>Favourite drink: seltzer</p>')}, 7000);
  }

  canBeInstantiated();
  canReplaceHTML();
  // canListenForHashChanges();
  canUpdateContentAccordingToHashChange();
})(this);
