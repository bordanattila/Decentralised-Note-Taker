import List "mo:base/List";

actor ReactNote {
    
  public type Note = {
    title: Text;
    content: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();

  public func createNote(titleText: Text, contentText: Text) {

    let newNote: Note = {
      title = titleText;
      content = contentText;
    };

    notes := List.push(newNote, notes);

  };

  public query func readNotes(): async [Note] {
    return List.toArray(notes);
  };

  public func removeNotes(id: Nat) {
     let front = List.take(notes, id);
     let back = List.drop(notes, id +  1);
     notes := List.append(front, back);
  }

};
