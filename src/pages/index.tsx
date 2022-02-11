import type { NextPage } from 'next'
import { Button, Box, Footer, Baseboard, Header, Profile } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Box width="50px" height="100px">
        Olá mundo
      </Box>
      <Footer width="250px" height="20px">
        ZE POVINHO FICA PUT@
      </Footer>
      <Baseboard width="" height="">
        OLA MUNDO
      </Baseboard>
      <Header width="" height="">
        2
      </Header>
      <Button background="green">Teste Batata</Button>
    </div>
  )
}

export default Home
