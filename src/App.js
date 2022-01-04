import { useState } from 'react'
import { Formik, Form } from 'formik'
import Input from './componentes/Input'
import Boton from './componentes/Boton'
import Contenedor from './componentes/Contenedor'
import Seccion from './componentes/Seccion'
import Balance from './componentes/Balance'

const compoundInterest = (deposito, contribucion, anhos, interes) => {
  let total = deposito

  for (let i = 0; i < anhos; i++) {
    total = (total + contribucion) * (interes + 1)
  }

  return Math.round(total)
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const App = () => {
  const [balance, setBalance] = useState('')
  const handleSumit = ({ deposito, contribucion, anhos, interes }) => {
    const val = compoundInterest(Number(deposito), Number(contribucion), Number(anhos), Number(interes))
    setBalance(formatter.format(val))
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
            <Input name="deposito" label="Depositó Inicial" />
            <Input name="contribucion" label="Contribución anual" />
            <Input name="anhos" label="Años" />
            <Input name="interes" label="Interés estimado" />
            <Boton type='submit' >Calcular</Boton>
          </Form>
        </Formik>
        {balance !== '' ? <Balance>Balance final: {balance}</Balance> : null}
      </Seccion>
    </Contenedor>
  )
}

export default App;
