'use client'
import Pagina from "../components/Pagina"

import { Container, Nav, Navbar } from "react-bootstrap"
export default function Array() {

    const carros = ['Corsa ', 'Chevette ', 'Celta ', 'Fusca ', 'Cobalt']

    return (
        <Pagina titulo="Página de Array">
            {carros.map(item => (
                <p>{item}</p>
            ))}

            <ul>
                {carros.map(item => (
                    <li>{item}</li>
                ))}
            </ul>


        </Pagina>
    )
}
