import styled from 'styled-components'
import { Blue } from '@/styles/Color'
import { Title } from '@/styles/Title'
import { DialogLabel } from '../Dialog/DialogGrid'

export const Popup = styled.div`
    width: 500px;
    background-color: white;
    position: fixed;
    top: 75px;
    z-index:11;
    max-height: calc(100% - 100px);
    left: calc(50% - 250px);
    display: flex;
    flex-direction: column;
`

export const PopupContent = styled.div`
    overflow: auto;
    min-height: 100px;
    padding: 0px 40px;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
`
export const ConfirmButton = styled(Title)`
    margin: 10px;
    color: white;
    height: 20px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 200px;
    cursor: pointer;
    background-color: ${Blue};
    ${({ disabled }) => disabled &&
        `
        opacity: .5;
        background-color: grey;
        pointer-events:none;
    `}
`

export const PopupFooter = styled.div`
    box-shadow: 0px 2px 20px 0px grey;
    height: 60px;
    display: flex;
    justify-content: center;
`

export const PopupShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0px;
    background-color: black;
    opacity: 0.7;
    z-index:11;
`

export const PopupBanner = styled.div`
    min-height: 200px;
    margin-bottom: 20px;
    ${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)};
    background-position: center;
    background-size: cover;
`

export const PopupBannerName = styled(DialogLabel)`
    top: ${({ img }) => (img ? `100px` : `20px`)};
    font-size: 30px;
    padding: 5px 40px;

`