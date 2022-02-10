import type { NextPage } from 'next'
import { Button, Box } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Box width="50px" height="100px">
        Olá mundo
      </Box>
      <Button background="green">Teste Batata</Button>
    </div>
  )
}

export default Home
