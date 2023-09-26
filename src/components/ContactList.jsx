export const ContactList = () => {
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>3323233</td>
                        <td>info@email.com.ar</td>
                        <td>
                            <button className="btn btn-sm btn-success me-2">Editar</button>
                            <button className="btn btn-sm btn-danger">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>3232323</td>
                        <td>info@email.com.ar</td>
                        <td>
                            <button className="btn btn-sm btn-success me-2">Editar</button>
                            <button className="btn btn-sm btn-danger">Borrar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}