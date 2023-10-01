
export const NewContactForm = () => {
    return (
        <>
            <form action="">
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" name="firstname" className="form-control" placeholder="First name" aria-label="First name"/>
                    </div>
                    <div className="col">
                        <input type="text" name="lastname" className="form-control" placeholder="Last name" aria-label="Last name"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" name="phone" className="form-control" placeholder="Phone number" aria-label="Phone number"/>
                    </div>
                    <div className="col">
                        <input type="text" name="email" className="form-control" placeholder="E-mail" aria-label="E-mail"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-end">
                        <button className="btn btn-primary">GUARDAR</button>
                    </div>
                </div>
            </form>
        </>
    )
}
