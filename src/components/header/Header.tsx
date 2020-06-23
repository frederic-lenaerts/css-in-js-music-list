import React, { ReactElement, ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

export interface HeaderProps {
  color: string
  children: ReactNode
}

export default function Header(props: HeaderProps): ReactElement {
  const [backgroundColor, setBackgroundColor] = React.useState(props.color)

  React.useLayoutEffect(() => {
    let backgroundColor = props.color
    return () => setBackgroundColor(backgroundColor)
  }, [props.color])

  return (
    <Container>
      <Background color={backgroundColor} />
      {/**
       * Setting the key property on the styled Highlight component
       * with the color value will link the component lifecycle to that value.
       * When the color changes the old component unmounts,
       * then a new component with the updated color mounts and the animation restarts.
       */}
      <Highlight color={props.color} key={props.color} />
      <WrappedChildren>{props.children}</WrappedChildren>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
`

const Background = styled.div<{ color: string }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.color};
  z-index: 10;
`

const grow = keyframes`
  to {
    right: 0;
  }
`

const Highlight = styled.div<{ color: string }>`
  position: absolute;
  top: 0;
  right: 100%;
  bottom: 0;
  left: 0;
  z-index: 20;
  background-color: ${(props) => props.color};
  animation: ${grow} 0.5s cubic-bezier(1, 0, 0, 1) forwards;
`

const WrappedChildren = styled.div`
  position: relative;
  z-index: 30;
`
