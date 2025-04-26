import { useRef, useState } from "react";
import Toolbar from "../molecules/Toolbar";
import { execCommand, handleFontNameChange, handleFontSizeChange, insertBlock } from "../../common/utils";

const RichTextEditor = ()=> {
  const editorRef = useRef(null);
  const [fontSize, setFontSize] = useState("3");
  const [fontName, setFontName] = useState("Arial");

  return (
    <div className="max-w-5xl mx-auto">
      {/* Toolbar */}
      <Toolbar
        fontName={fontName}
        handleFontNameChange={(e)=>{handleFontNameChange(e,setFontName)}}
        fontSize={fontSize}
        handleFontSizeChange={(e)=>{handleFontSizeChange(e,setFontSize)}}
        execCommand={execCommand}
        insertBlock={(type)=>{insertBlock(type,editorRef)}}
      />

      {/* Editable Area */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className="border rounded p-4 min-h-[300px] focus:outline-none bg-white prose prose-sm max-w-none list-disc list-inside"
      >
        <p>Start editing here...</p>
      </div>
    </div>
  );
}

export default RichTextEditor