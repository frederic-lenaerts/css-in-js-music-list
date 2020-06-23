import React, { ReactElement } from 'react'
import type { Album } from '../../models'
import styled, { css } from 'styled-components'

export interface CardProps {
  color: string
  album: Album
}

export default function Card(props: CardProps): ReactElement {
  return (
    <Root key={props.album.artist + props.album.name}>
      <Background color={props.color} />
      <Cover uri={props.album.cover}></Cover>
      <Info color={props.color}>
        <Artist>{props.album.artist}</Artist>
        <AlbumName>{props.album.name}</AlbumName>
      </Info>
    </Root>
  )
}

const Artist = styled.p``

const AlbumName = styled.p``

const Cover = styled.div<{ uri: string }>`
  margin: 5px 0 0 5px;

  &:after {
    position: relative;
    z-index: 10;
    content: '';
    background-image: url(${(props) => props.uri});
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    padding-bottom: 100%;
  }
`

const Background = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};

  position: absolute;
  top: 0;
  right: 5px;
  bottom: 5px;
  left: 0;
`
const Info = styled.div<{ color: string }>`
  color: ${(props) => props.theme.gray[9]};
  background-color: ${(props) => props.color};

  position: absolute;
  top: 0;
  right: 5px;
  bottom: 5px;
  left: 0;

  opacity: 0;
  z-index: 20;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Root = styled.div`
  position: relative;

  &:hover {
    ${Background} {
      transition: all 0.5s ease-out 0.1s;
      top: 5px;
      right: 0;
      bottom: 0;
      left: 5px;
    }

    ${Info} {
      transition: all 0.5s ease-out 0.1s;
      top: 5px;
      right: 0;
      bottom: 0;
      left: 5px;
      opacity: 1;
    }

    ${Cover} {
      transition: all 0.5s ease-out;
      margin: 0 5px 5px 0;
    }
  }
`
