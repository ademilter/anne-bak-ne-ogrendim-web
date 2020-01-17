import React, { useEffect } from 'react'
import 'trix'

function Editor({ onChange = () => {} }) {
  const trixInput = React.createRef()

  useEffect(() => {
    trixInput.current.addEventListener('trix-change', event => {
      onChange(event.target.innerHTML)
    })
  }, [])

  return (
    <div className="editor">
      {/*<style dangerouslySetInnerHTML={{ __html: style }} />*/}
      <input type="hidden" id="trix" />
      <trix-editor placeholder="Hello" input="trix" ref={trixInput} />
    </div>
  )
}

export default Editor
