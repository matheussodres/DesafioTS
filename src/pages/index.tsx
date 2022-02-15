import type { NextPage } from 'next'
import { Button, Box, Footer, Baseboard, Header, Profile } from '../components'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Box width="50px" height="100px">
          Olá mundo
        </Box>

        <Baseboard width="" height="">
          OLA MUNDO
        </Baseboard>
        <Header width="" height="">
          2
        </Header>
        <Profile width="" height="">
          Teste040
        </Profile>
      </div>
      <Button background="green">Teste Batata</Button>
      <Footer width="250px" height="20px">
        DYING LIGHT 2 É UMA MERDA
      </Footer>
      <img
        src="https://files.slack.com/files-pri/T03KSJ7LX-F03286L2L76/exorcistabug-catolico.png"
        width={500}
        height={500}
        alt="Teste"
      />
    </>
  )
}

export default Home
