import React from 'react'
import { Container } from 'reactstrap'

function NoMatches(props) {
  return (
    <Container>
      <h1 style={{ textAlign: "center", marginTop: "5%" }}>No Matches Yet</h1>
      <p style={{textAlign: "center"}}>
        Be sure to check back soon, and tell your peers. The more people using CarTool the better it works.
      </p>
    </Container>
  )
}

export default NoMatches