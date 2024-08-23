import { Snippet } from "next/font/google"
import Cabecalho from "../components/Cabecalho"
import Link from "next/link"
import { Alert, Container } from "react-bootstrap"
export default function Fundamentos() {

    return (
        <>
            <Cabecalho />

            <Container>

                <Alert>
                    Error 404
                </Alert>


            </Container>

            <h1>Fundamentos</h1>
            <p>Sucesso</p>
            <Link href="/">Página Principal</Link><br />
        </>
    )
}

