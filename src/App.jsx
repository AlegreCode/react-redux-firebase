import { ContactList } from "./components/ContactList"
import { NewContactForm } from "./components/NewContactForm"

function App() {

  return (
    <>
      <main className='container'>
        <div className='row'>
          <div className='col-12 col-lg-8 mx-auto'>
            <h1 className='display-2 text-center'>AGENDA</h1>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-8 mx-auto'>
            <h2 className="display-5 text-center">Nuevo contacto</h2>
            <NewContactForm />
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-8 mx-auto'>
            <h2 className="display-5 text-center">Contactos</h2>
            <ContactList />
            <hr />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
