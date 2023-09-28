export const Contact = ({ contact }) => {
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
}