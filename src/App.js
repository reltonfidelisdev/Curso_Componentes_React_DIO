import Item from './components/Item';
import Card from './components/Card';
const App = () => {
  return(
    <>
    <h1>Minha primeira aplicação com React</h1>
    <p>Curso focado em componentização com React</p>
    <ul>
      <Item>Texto</Item>
      <Item>Texto</Item>
      <Item>Texto</Item>
      <Item>Texto</Item>
    </ul>
    <Card />
    </>
  )
}

export default App;