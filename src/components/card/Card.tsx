import React, { ReactElement } from 'react'
import type { Album } from '../../models'
import styled from 'styled-components'

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
        <Artist>
          <span>{props.album.artist}</span>
        </Artist>
        <AlbumName>
          <span>{props.album.name}</span>
        </AlbumName>
      </Info>
    </Root>
  )
}

const Artist = styled.p`
  height: 50%;
  display: flex;
  flex-direction: column;
  margin-block-end: 0.5em;
  text-align: center;
  justify-content: flex-end;
`

const AlbumName = styled.p`
  height: 50%;
  display: flex;
  flex-direction: column;
  margin-block-start: 0.5em;
  text-align: center;
  justify-content: flex-start;
`

const Cover = styled.div<{ uri: string }>`
  margin: 8px 0 0 8px;

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
  right: 16px;
  bottom: 16px;
  left: 0;
`
const Info = styled.div<{ color: string }>`
  color: ${(props) => props.theme.gray[9]};
  background-color: ${(props) => props.color};

  position: absolute;
  top: 0;
  right: 16px;
  bottom: 16px;
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
      transition: all 0.5s ease-out;
      top: 8px;
      right: 0;
      bottom: 0;
      left: 8px;
    }

    ${Info} {
      transition: all 0.5s ease-out;
      top: 8px;
      right: 0;
      bottom: 0;
      left: 8px;
      opacity: 1;
    }

    ${Cover} {
      transition: all 0.5s ease-out;
      margin: 0 16px 16px 0;
    }
  }
`
