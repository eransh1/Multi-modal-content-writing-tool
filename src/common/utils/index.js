import { BLOCK_HTML } from "../constants";

export const execCommand = ({command, value, editorRef,lastSnapshot,undoStack,redoStack}) => {
    document.execCommand(command, false, value);
    saveSnapshot({editorRef,lastSnapshot,undoStack,redoStack});
  };

export const handleFontSizeChange = ({e, setFontSize, editorRef,lastSnapshot,undoStack,redoStack}) => {
    const size = e.target.value;
    setFontSize(size);
    execCommand({command: "fontSize", value: size, editorRef,lastSnapshot,undoStack,redoStack});
  };

 export const handleFontNameChange = ({e, setFontName, editorRef,lastSnapshot,undoStack,redoStack}) => {
    const name = e.target.value;
    setFontName(name);
    execCommand({command: "fontName", value: name, editorRef,lastSnapshot,undoStack,redoStack});
  };


export  const insertBlock = ({type, editorRef, lastSnapshot,undoStack,redoStack}) => {
    const blockHTML = BLOCK_HTML[type];

    if (blockHTML && editorRef.current) {
      const range = window.getSelection().getRangeAt(0);
      const temp = document.createElement("div");
      temp.innerHTML = blockHTML;
      const node = temp.firstChild;
      range.insertNode(node);
      // Move cursor after inserted block
      range.setStartAfter(node);
      range.setEndAfter(node);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      saveSnapshot({editorRef,lastSnapshot,undoStack,redoStack});
    }
  };

  export const saveSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0) return sel.getRangeAt(0).cloneRange();
    return null;
  };

  export const restoreSelection = (range) => {
    if (range) {
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  export const saveSnapshot = ({editorRef,lastSnapshot,undoStack,redoStack}) => {
    if (!editorRef.current) return;
    const html = editorRef.current.innerHTML;
    const selection = saveSelection();
    const snapshot = { html, selection };

    if (!lastSnapshot.current || lastSnapshot.current.html !== html) {
      undoStack.current?.push(snapshot);
      lastSnapshot.current = snapshot;
      redoStack.current = []; // clear redo stack on new change
    }
  };

  export  const undo = ({editorRef,undoStack, redoStack}) => {
    if (undoStack.current.length > 0) {
      const snapshot = undoStack.current.pop();
      redoStack.current.push({
        html: editorRef.current.innerHTML,
        selection: saveSelection(),
      });
      editorRef.current.innerHTML = snapshot.html;
      restoreSelection(snapshot.selection);
    }
  };

  export const redo = ({editorRef,redoStack,undoStack}) => {
    if (redoStack.current.length > 0) {
      const snapshot = redoStack.current.pop();
      undoStack.current.push({
        html: editorRef.current.innerHTML,
        selection: saveSelection(),
      });
      editorRef.current.innerHTML = snapshot.html;
      restoreSelection(snapshot.selection);
    }
  };

  export const handleKeyDown = ({e,editorRef,redoStack,undoStack}) => {
    if (
     (e.ctrlKey || e.metaKey) &&
     (e.key === "y" || (e.shiftKey && e.key === "z"))
   ) {
     e.preventDefault();
     redo({editorRef,redoStack,undoStack});
   }
   if ((e.ctrlKey || e.metaKey) && e.key === "z") {
     e.preventDefault();
     undo({editorRef,redoStack,undoStack});
   }
 };