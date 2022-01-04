import styled from 'styled-components'
import { Formik, Form } from 'formik'
import Input from './componentes/Input'
import Boton from './componentes/Boton'

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
  const handleSumit = () => {

  }
  return (

    <Contenedor>
      <Seccion>
        <Formik
          initialValues={{
            deposito: '',
            contribucion: '',
            anhos: '',
            interes: '',
          }}

          onSubmit={handleSumit}
        >
          <Form>
            <Input name="deposito" label="Depositó Inicial"/>
            <Input name="contribucion" label="Contribución anual"/>
            <Input name="anhos" label="Años"/>
            <Input name="interes" label="Interés estimado"/>
            <Boton>Calcular</Boton>
          </Form>
        </Formik>
      </Seccion>
    </Contenedor>
  )
}

export default App;
