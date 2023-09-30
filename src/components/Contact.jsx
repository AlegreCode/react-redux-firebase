import { useRef } from "react"
import { useState } from "react"

export const Contact = ({ data }) => {
    const [edit, setEdit] = useState(false)

    const [contact, setContact] = useState({
        id: data.id,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone
    })

    const editHandle = () => {
        setEdit(!edit)
    }

    const inputHandle = (e) => {
        setContact({
           ...contact,
            [e.target.name]: e.target.value
        })
    }

    const saveHandle = () => {
        console.log(contact)
        setEdit(!edit)
    }

    if (!edit) {
        return (
            <tr key={contact.id}>
                <th scope="row">{contact.id}</th>
                <td>{contact.firstname}</td>
                <td>{contact.lastname}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>
                    <button className="btn btn-sm btn-success" onClick={editHandle}>EDITAR</button>
                    <button className="btn btn-sm btn-danger">BORRAR</button>
                </td>
            </tr>
        )
    }else{
        return (
            <tr key={data.id}>
                <th scope="row">{contact.id}</th>
                <td><input type="text"
                            name="firstname"
                            className="form-control form-control-sm" 
                            value={contact.firstname}
                            onChange={inputHandle}/></td>
                <td><input type="text"
                            name="lastname"
                            className="form-control form-control-sm" 
                            value={contact.lastname}
                            onChange={inputHandle}/></td>
                <td><input type="text"
                            name="email"
                            className="form-control form-control-sm" 
                            value={contact.email}
                            onChange={inputHandle}/></td>
                <td><input type="text"
                            name="phone"
                            className="form-control form-control-sm" 
                            value={contact.phone}
                            onChange={inputHandle}/></td>
                <td>
                    <button className="btn btn-sm btn-danger" onClick={editHandle}>CANCELAR</button>
                    <button className="btn btn-sm btn-primary" onClick={saveHandle}>GUARDAR</button>
                </td>
            </tr>
        )
    }
}