import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
border-radius: 50px;
background: ${({ primary }) => (primary ? '#01BF71' : '#1E1E1E')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#1E1E1E' : '#fff')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
font-family: Imported,sans-serif;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
transition: all 0.2s ease-in-out;
background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
}
`

export const RaisedButton = styled(Link)`

  //-webkit-appearance: button;
  //-webkit-writing-mode: horizontal-tb !important;
  //text-rendering: auto;
  //color: buttontext;
  //letter-spacing: normal;
  //word-spacing: normal;
  //text-transform: none;
  //text-indent: 0px;
  //text-shadow: none;
  //display: inline-block;
  //text-align: center;
  //align-items: flex-start;
  //cursor: default;
  //background-color: buttonface;
  //box-sizing: border-box;
  //margin: 0em;
  //font: 400 11px system-ui;
  //padding: 1px 7px 2px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(1, 191, 113) rgb(1, 191, 113) rgb(1, 191, 113);
  border-image: initial;

  border-radius: 50px;
  background: ${({primary}) => (primary ? 'rgba(1,191,113,0)' : '#1E1E1E')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#1E1E1E' : '#FBEAF1')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: 2px;
  //border: 2px;
  cursor: pointer;
  display: flex;
  font-family: Imported, sans-serif;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#FBEAF1')};
  }
`