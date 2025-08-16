import './App.css'
import { ControlledForm } from './components/ControlledForm'
import { UncontrolledForm } from './components/UncontrolledForm'
import { UsestateFetch } from './components/UsestateFetch'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { toggleControlledForm } from './redux/slices/visibilitySlice'

function App() {
  const dispatch = useAppDispatch()
  const isVisible = useAppSelector(state => state.visibility.isControlledFormVisible)

  const handleClick = () => {
    dispatch(toggleControlledForm())
  }

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
        <button onClick={handleClick} className="bg-blue-500 rounded-md p-2">Change Status</button>
        {isVisible && <ControlledForm/>}
      </div>
      <div className="flex flex-col gap-4 items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
        <UncontrolledForm />
      </div>
      <div className="flex flex-col gap-4 items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
        <UsestateFetch />
      </div>
    </>
  )
}

export default App