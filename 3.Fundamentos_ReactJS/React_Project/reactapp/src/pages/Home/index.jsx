import './style.css';
import {Card} from '../../components/Card'

export function Home() {
  return (
    <div className='container'>
    <h1>Lista de Presença</h1>
    <input type="text" placeholder="Digite um nome..." />
    <button type="button">Adicionar</button>

    <Card name="Caio" time="10:13:44"/>
    <Card name="Rodrigo" time="09:23:45"/>
    <Card name="Ana" time="12:26:15"/>
    
    </div>
  )
}
