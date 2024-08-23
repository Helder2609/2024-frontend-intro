'use client'
import Pagina from "../components/Pagina"

import { Container, Nav, Navbar } from "react-bootstrap"
export default function Objetos() {

    const carros = [
        { marca: 'GM', modelo: 'Corsa', cor: 'Rosa', foto: '' },
        { marca: 'GM', modelo: 'Chevette', cor: 'Branco', foto: ''},
        { marca: 'GM', modelo: 'Celta', cor: 'Preto', foto: ''},
        { marca: 'VW', modelo: 'Fusca', cor: 'Rosa', foto: ''},
        { marca: 'GM', modelo: 'Cobalt', cor: 'Rosa', foto: ''},
    ]
    

    return (
        <Pagina titulo="Objetos">
            {carros.map(item => (
                <p>{item.modelo}</p>
            ))}

        </Pagina>
    )
}
