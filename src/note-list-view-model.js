class NoteListView {
  constructor(noteList) {
    this.noteList = noteList.list;
  }

  createHTML() {
    let htmlStr = "";

    for(let i = 0; i < this.noteList.length; i++) {
        htmlStr += `<li><a id='${this.noteList[i].id}' href='#notes/${this.noteList[i].id}'>${this.noteList[i].content.slice(0, 20)}...</a></li>`;
    };

    htmlStr = "<ul>" + htmlStr + "</ul>";
    return htmlStr;
  }
}
