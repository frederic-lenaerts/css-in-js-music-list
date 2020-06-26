import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'

import type { Album } from 'models'

export interface CardProps {
  color: string
  album: Album
}

export default function Card(props: CardProps): ReactElement {
  return (
    <Root key={props.album.artist + props.album.name}>
      {/**
       * Show info while the cover image is not (yet) loaded
       */}
      <Info color={props.color}>
        <Artist>
          <span>{props.album.artist}</span>
        </Artist>
        <AlbumName>
          <span>{props.album.name}</span>
        </AlbumName>
      </Info>
      <Cover uri={props.album.cover} />
      {/**
       * Fade in info on hover
       */}
      <Info color={props.color} reveal>
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

const Root = styled.div`
  position: relative;
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

  ${Root}:hover & {
    transition: all 0.5s ease-out;
    margin: 0 16px 16px 0;
  }
`

const Info = styled.div<{ color: string; reveal?: boolean }>`
  color: ${(props) => props.theme.gray[9]};
  background-color: ${(props) => props.color};
  padding: 16px;

  position: absolute;
  top: 0;
  right: 16px;
  bottom: 16px;
  left: 0;

  ${(props) =>
    props.reveal &&
    css`
      opacity: 0;
      z-index: 20;
    `}

  ${Root}:hover & {
    transition: all 0.5s ease-out;
    top: 8px;
    right: 0;
    bottom: 0;
    left: 8px;
    opacity: 1;
  }
`

const Artist = styled.p`
  height: 50%;
  margin-block-start: 0;
  margin-block-end: 0;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const AlbumName = styled.p`
  height: calc(50% - 1em);
  margin-block-start: 1em;
  margin-block-end: 0;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
