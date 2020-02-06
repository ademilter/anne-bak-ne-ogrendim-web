import React, { useEffect } from 'react'
import 'trix'

function Editor({ onChange = () => {} }) {
  const trixInput = React.createRef()

  useEffect(() => {
    const editor = trixInput.current.editor
    editor.deactivateAttribute('bold')

    // load localStore
    const cacheEditorState = localStorage['EDITOR_STATE']
    if (cacheEditorState) {
      editor.loadJSON(JSON.parse(cacheEditorState))
    }

    // change trigger
    trixInput.current.addEventListener('trix-change', () => {
      // save localStore
      localStorage['EDITOR_STATE'] = JSON.stringify(editor)
      onChange(editor)
    })
  }, [])

  return (
    <div className="editor">
      <input type="hidden" id="trix" />
      <trix-editor placeholder="Hello" input="trix" ref={trixInput} />
    </div>
  )
}

export default Editor
