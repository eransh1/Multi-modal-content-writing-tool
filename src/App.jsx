import RichTextEditor from './components/organisms/RichTextEditor'
import './index.css'

function App() {

  return (
    <div className='w-screen h-screen flex flex-col gap-8 p-2'>
    <h1 className='text-2xl font-medium text-center'>Text Editor</h1>
    <RichTextEditor/>
    </div>
  )
}

export default App
