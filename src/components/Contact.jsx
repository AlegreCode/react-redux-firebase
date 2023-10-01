import React, { useState } from "react";

export const Contact = ({ data }) => {
  const [edit, setEdit] = useState(false);

  const [contact, setContact] = useState({
    id: data.id,
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    phone: data.phone
  });

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSave = () => {
    // Aquí puedes realizar la lógica para guardar los cambios
    console.log("Contacto actualizado:", contact);
    toggleEdit(); // Cambiar el modo de edición
  };

  const renderContactDetails = () => {
    return (
      <tr key={contact.id}>
        <th scope="row">{contact.id}</th>
        <td>{contact.firstname}</td>
        <td>{contact.lastname}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
        <td>
          <button className="btn btn-sm btn-success" onClick={toggleEdit}>
            EDITAR
          </button>
          <button className="btn btn-sm btn-danger">BORRAR</button>
        </td>
      </tr>
    );
  };

  const renderEditForm = () => {
    return (
      <tr key={contact.id}>
        <th scope="row">{contact.id}</th>
        <td>
          <input
            type="text"
            name="firstname"
            className="form-control form-control-sm"
            value={contact.firstname}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="lastname"
            className="form-control form-control-sm"
            value={contact.lastname}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="email"
            className="form-control form-control-sm"
            value={contact.email}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="phone"
            className="form-control form-control-sm"
            value={contact.phone}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <button className="btn btn-sm btn-danger" onClick={toggleEdit}>
            CANCELAR
          </button>
          <button className="btn btn-sm btn-primary" onClick={handleSave}>
            GUARDAR
          </button>
        </td>
      </tr>
    );
  };

  return edit ? renderEditForm() : renderContactDetails();
};
