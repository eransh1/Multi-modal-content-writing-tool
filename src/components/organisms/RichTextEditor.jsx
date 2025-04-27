import { useEffect, useRef, useState } from "react";
import Toolbar from "../molecules/Toolbar";
import {
  execCommand,
  handleFontNameChange,
  handleFontSizeChange,
  handleKeyDown,
  insertBlock,
  redo,
  saveSnapshot,
  undo
} from "../../common/utils";

const withEditorContext = (fn, context) => {
  return (...args) => fn({ ...context, ...args[0] });
};

const RichTextEditor = () => {
  const editorRef = useRef(null);
  const [fontSize, setFontSize] = useState("3");
  const [fontName, setFontName] = useState("Arial");

  const undoStack = useRef([]);
  const redoStack = useRef([]);
  const lastSnapshot = useRef(null);

  const editorContext = { editorRef, lastSnapshot, undoStack, redoStack };

  useEffect(() => {
    withEditorContext(saveSnapshot, editorContext)({});
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <Toolbar
        fontName={fontName}
        handleFontNameChange={(e) =>
          withEditorContext(handleFontNameChange, editorContext)({ e, setFontName })
        }
        fontSize={fontSize}
        handleFontSizeChange={(e) =>
          withEditorContext(handleFontSizeChange, editorContext)({ e, setFontSize })
        }
        execCommand={(command, value = null) =>
          withEditorContext(execCommand, editorContext)({ command, value })
        }
        insertBlock={(type) =>
          withEditorContext(insertBlock, editorContext)({ type })
        }
        undo={() =>
          withEditorContext(undo, editorContext)({})
        }
        redo={() =>
          withEditorContext(redo, editorContext)({})
        }
      />

      {/* Editable Area */}
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onKeyDown={(e) =>
          withEditorContext(handleKeyDown, editorContext)({ e })
        }
        onInput={() =>
          withEditorContext(saveSnapshot, editorContext)({})
        }
        className="border rounded p-4 min-h-[300px] focus:outline-none prose prose-sm max-w-none list-disc list-inside"
      >
        <p>Start editing here...</p>
      </div>
    </div>
  );
};

export default RichTextEditor;
