import { Card } from 'components/card'
import { Genre } from 'models'
import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import theme from 'theme'

import data from './data.json'

const colors = [theme.yellow[3], theme.green[3], theme.cyan[3], theme.pink[3]]

export default function App() {
  const [selectedGenre, setSelectedGenre] = React.useState(data[0])
  const [color, setColor] = React.useState(colors[0])

  function onClick(genre: Genre, color: string) {
    setColor(color)
    setSelectedGenre(genre)
  }

  return (
    <>
      <Header background={color}>
        <Title>{selectedGenre.name}</Title>
        <Navigation>
          <Menu>
            {data.map((genre, index) => (
              <MenuItem
                key={genre.name}
                role="button"
                onClick={() => onClick(genre, colors[index])}
                color={colors[index]}
                isSelected={selectedGenre === genre}
              >
                {genre.name}
              </MenuItem>
            ))}
          </Menu>
        </Navigation>
      </Header>
      <Body key={selectedGenre.name}>
        {selectedGenre.albums.map((album) => (
          <Card key={album.artist + album.name} album={album} color={color} />
        ))}
      </Body>
    </>
  )
}

const Header = styled.div<{ background: string }>`
  background: ${(props) => props.background};
`

const fadeIn = keyframes`
   0% {opacity: 0;}
   100% {opacity: 1;}
`

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
  padding: 3rem;
  animation: ${fadeIn} 0.5s cubic-bezier(1, 0, 0, 1) forwards;
`

const Title = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
  text-transform: uppercase;
  margin: -0.5em 0 -1em;
  padding: 1em 1em 0;
`

const Navigation = styled.nav`
  width: 100%;
  display: inline-flex;
  justify-content: flex-end;
  z-index: 20;
`

const Menu = styled.ul`
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  display: flex;
  margin-right: 3em;
`

const MenuItem = styled.li<{ isSelected: boolean; color: string }>`
  padding: 1em 2em;
  text-transform: uppercase;
  cursor: pointer;
  ${(props) =>
    props.isSelected &&
    css`
      background-color: ${props.theme.gray[9]};
      color: ${props.color};
    `}
`
