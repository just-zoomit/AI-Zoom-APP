import React from 'react'
import Card from '../Card'
import styled from 'styled-components'
import Navbar from '../Navbar'

const Container = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`


function Home() {
  return (
    <>
    <Navbar />
    <Container>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </Container>
    </>
  )
}

export default Home