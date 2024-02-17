import {MessageEditor} from "./MessageEditor2/MessageEditor.tsx";

function App() {
  return (
    <div style={{
      backgroundColor: 'red',
      marginTop: 'calc(100vh - 100px)',
      overflow: 'hidden',
    }}>
      <MessageEditor />
    </div>
  )
}

export default App
