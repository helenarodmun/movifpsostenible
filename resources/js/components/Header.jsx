import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import texts from "../textos/es.json";
import { useForm } from "@inertiajs/react";

function Header() {
  // useForm es un helper diseñado para formularios
    const { data, setData, post, processing, errors } = useForm({
        origin: "",
        destination: "",
        date: "",
    });
    function submit(e) {
        e.preventDefault();
        // post puede recibir un parametro de parametros donde puedes complementar la funcion con mas funciones, en este caso, si se hace bien el post se sube la data a la consola
        post(
            "/search",
            {
                onSuccess: () => {
                    console.log(data);
                },
            },
            data
        );
    }
    return (
        <header className="masthead">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="text-center text-white">
                            {/* Page heading*/}
                            <h1 className="mb-5">{texts.Where}</h1>
                            <form
                                method="POST"
                                onSubmit={submit} // aqui se llama a la funcion que queremos que se ejecute cuando mandamos el form
                                className="form-subscribe"
                                id="contactForm"
                            >
                                <div className="row">
                                    {/* Departure */}
                                    <div
                                        className="col"
                                        style={{ flex: "1.5 0 0%" }}
                                    >
                                        <input
                                            className="form-control form-control-lg"
                                            id="departure"
                                            name="origin"
                                            value={data.origin} // el valor del imput lo sacara del constructor 
                                            onChange={(e) => // si cambia el valor se seteara el valor nuevo en el constructor
                                                setData(
                                                    "origin",
                                                    e.target.value
                                                )
                                            }
                                            type="text"
                                            placeholder={texts.Leaving}
                                        />
                                        <div className="invalid-feedback text-white">
                                            {"{"}
                                            {"{"} __('Departure is required.'){" "}
                                            {"}"}
                                            {"}"}
                                        </div>
                                        <div className="invalid-feedback text-white">
                                            {"{"}
                                            {"{"} __('Departure is not valid.'){" "}
                                            {"}"}
                                            {"}"}
                                        </div>
                                    </div>
                                    {/* Destination */}
                                    <div
                                        className="col"
                                        style={{ flex: "1.5 0 0%" }}
                                    >
                                        <input
                                            className="form-control form-control-lg"
                                            id="destination"
                                            name="destination"
                                            value={data.destination}
                                            onChange={(e) =>
                                                setData(
                                                    "destination",
                                                    e.target.value
                                                )
                                            }
                                            type="text"
                                            placeholder={texts.Going}
                                        />
                                        <div className="invalid-feedback text-white">
                                            {"{"}
                                            {"{"} __('Destination is required.'){" "}
                                            {"}"}
                                            {"}"}
                                        </div>
                                        <div className="invalid-feedback text-white">
                                            {"{"}
                                            {"{"} __('Destination is not
                                            valid.') {"}"}
                                            {"}"}
                                        </div>
                                    </div>
                                    {/* Date*/}
                                    <div
                                        className="col"
                                        style={{ flex: "1 0 0%" }}
                                    >
                                        <input
                                            className="form-control form-control-lg"
                                            id="date"
                                            name="date"
                                            value={data.date}
                                            onChange={(e) =>
                                                setData("date", e.target.value)
                                            }
                                            type="date"
                                        />
                                        <div className="invalid-feedback text-white">
                                            {"{"}
                                            {"{"} __('Date is required.') {"}"}
                                            {"}"}
                                        </div>
                                        <div className="invalid-feedback text-white">
                                            {"{"}
                                            {"{"} __('Date is not valid.') {"}"}
                                            {"}"}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <button
                                            className="btn btn-primary btn-lg "
                                            id="submitButton"
                                            type="submit"
                                        >
                                            {texts.Submit}
                                        </button>
                                    </div>
                                </div>
                                <div className="row" style={{}}></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

if (document.getElementById("header")) {
    const Index = ReactDOM.createRoot(document.getElementById("header"));

    Index.render(
        <React.StrictMode>
            <Header />
        </React.StrictMode>
    );
}
