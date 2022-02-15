import type { NextPage } from 'next'
import { Button, Box, Footer, Baseboard, Header, Profile } from '../components'

const Home: NextPage = () => {
  return (
    <div>
      <Box width="50px" height="100px">
        Olá mundo
      </Box>
      <Footer width="250px" height="20px">
        DYING LIGHT 2 É UMA MERDA
      </Footer>
      <Baseboard width="" height="">
        OLA MUNDO
      </Baseboard>
      <Header width="" height="">
        2
      </Header>
      <Profile width="" height="">
        Teste040
      </Profile>
      <Button background="green">Teste Batata</Button>
    </div>
  )
}

export default Home
