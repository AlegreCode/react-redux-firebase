import { NewContactForm } from "./components/NewContactForm"

function App() {

  return (
    <>
      <main className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='display-1 text-center'>AGENDA</h1>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <NewContactForm />
            <hr />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
