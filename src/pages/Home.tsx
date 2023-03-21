export function Home(){
    return <>
    <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="well well-sm"><center>
                <form className="form-horizontal" method="post">
                    <fieldset>
                        <legend className="text-center header">Crear nuevo producto</legend>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                            <div className="col-md-8">
                                <input id="fname" name="name" type="text" placeholder="Nombre producto" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                            <div className="col-md-8">
                                <input id="lname" name="name" type="text" placeholder="Precio producto" className="form-control"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                            <div className="col-md-8">
                                <input id="email" name="email" type="file" placeholder="Email Address" className="form-control"/>
                            </div>
                        </div>



                        <div className="form-group">
                            <div className="col-md-12 text-center">
                                <button type="submit" className="btn btn-primary btn-lg">Crear</button>
                            </div>
                        </div>
                    </fieldset>
                </form></center>
            </div>
        </div>
    </div>
</div></>
}