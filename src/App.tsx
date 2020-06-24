import React from 'react'
import styled, { css } from 'styled-components'
import { Header } from './components/header'
import data from './assets/data.json'
import { Genre } from './models'
import { Card } from './components/card'
import theme from './theme'

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
      <Header color={color}>
        <Title>{selectedGenre.name}</Title>
        <Navigation>
          <Menu>
            {data.map((genre, index) => (
              <MenuItem
                key={genre.name}
                role="button"
                onClick={() => onClick(genre, colors[index])}
                selected={selectedGenre === genre}
              >
                {genre.name}
              </MenuItem>
            ))}
          </Menu>
        </Navigation>
      </Header>
      <Body>
        {selectedGenre.albums.map((album) => (
          <Card key={album.artist + album.name} album={album} color={color} />
        ))}
      </Body>
    </>
  )
}

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5vmin;
  padding: 5vw;
`

const Title = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
  text-transform: uppercase;
  margin: -0.5em 0 -1em;
  padding: 1em 1em 0.5em;
`

const Navigation = styled.nav`
  width: 100%;
  display: inline-flex;
  justify-content: flex-end;
`

const Menu = styled.ul`
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  display: flex;
  margin-right: 4em;
`

const MenuItem = styled.li<{ selected: boolean }>`
  padding: 1em 2em;
  text-transform: uppercase;
  ${(props) =>
    props.selected &&
    css`
      background-color: ${props.theme.gray[9]};
      color: ${props.theme.gray[0]};
    `}
`
