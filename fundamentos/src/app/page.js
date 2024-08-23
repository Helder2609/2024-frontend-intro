import { Alert, Button, Container } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <Button variant="primary">primary</Button>{' '}


      <Cabecalho titulo="Helder" subtitulo="agora vai" cor="danger" />
      <Cabecalho titulo="Frontend" subtitulo="agora vai" />
      <Cabecalho titulo="backend" subtitulo="agora vai" />
      <Cabecalho titulo="React" subtitulo="agora vai" />

      <Link href="/fundamentos">Página Fundamentos</Link><br />

    </main>
  );
}
