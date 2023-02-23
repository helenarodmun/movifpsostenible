import Travel from "../components/Travel";


//Este componente muestra una tabla con todos los viajes y utiliza el componente Travel para mostrar cada uno de ellos.
const Travels = ({ travels }) => {
    return (
        <div>
            <h1>Viajes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Origen</th>
                        <th>Destino</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Asientos</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {travels.map(travel => (
                        <Travel key={travel.id} travel={travel} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Travels;