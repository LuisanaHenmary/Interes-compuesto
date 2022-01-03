import styled from 'styled-components'

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`

const Seccion = styled.section`
  background-color: #eee;
  border-top: solid 2px palevioletred;
  padding: 20px 25px;
  width: 500px;
  box-shadow: 0px 2px 3px rgba(0,0,0,0.3);
`

const App = () => {
  return (

    <Contenedor>
      <Seccion>
        HOLA MUNDO
      </Seccion>
    </Contenedor>
  )
}

export default App;
