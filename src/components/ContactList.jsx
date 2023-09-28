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

    
        const render = data.map((contact) => {
            return (
                <tr key={contact.id}>
                    <th scope="row">{contact.id}</th>
                    <td>{contact.firstname}</td>
                    <td>{contact.lastname}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.email}</td>
                    <td>
                        <button className="btn btn-sm btn-success me-2">Editar</button>
                        <button className="btn btn-sm btn-danger">Borrar</button>
                    </td>
                </tr>
            )
        })

    return (
        <>
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
                    { render}
                </tbody>
            </table>
        </>
    )
}