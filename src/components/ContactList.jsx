import { Contact } from "./Contact"

const data = [{
    id: 1,
    firstname: 'Mark',
    lastname: 'Otto',
    phone: '3323233',
    email: 'info@email.com.ar'
},{
    id: 2,
    firstname: 'Jacob',
    lastname: 'Thornton',
    phone: '3323233',
    email: 'info@email.com.ar'
},{
    id: 3,
    firstname: 'Larry',
    lastname: 'Bird',
    phone: '3323233',
    email: 'info@email.com.ar'
}]

export const ContactList = () => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                { data.map(contact => (
                    <Contact key={contact.id} data={contact} />
                )) }
            </tbody>
        </table>
    )
}