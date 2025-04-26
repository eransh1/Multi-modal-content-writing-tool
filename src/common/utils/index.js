import { BLOCK_HTML } from "../constants";

export const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
  };

export const handleFontSizeChange = (e, setFontSize) => {
    const size = e.target.value;
    setFontSize(size);
    execCommand("fontSize", size);
  };

 export const handleFontNameChange = (e, setFontName) => {
    const name = e.target.value;
    setFontName(name);
    execCommand("fontName", name);
  };


export  const insertBlock = (type, editorRef) => {
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
    }
  };