import { Formik, Form } from 'formik'
import Input from './componentes/Input'
import Boton from './componentes/Boton'
import Contenedor from './componentes/Contenedor'
import Seccion from './componentes/Seccion'

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
