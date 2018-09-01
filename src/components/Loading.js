import styled, { keyframes } from 'styled-components'

const LOADING_SIZE = '150px'
const BACKGROUND_COLOR = 'rgba(0, 0, 0, .3)'

const rotating = keyframes`
    0% {
        transform: translate(-50%, -50%) rotate(0);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`

const Loading = styled.div`
    animation: ${rotating} 2s cubic-bezier(1, .2, .5, 1) infinite;
    background: ${BACKGROUND_COLOR};
    border: 5px solid #fdfdfd;
    border-left-color: #0099cc;
    border-radius: 100%;
    box-shadow: 0 0 0 999999px ${BACKGROUND_COLOR};
    height: ${LOADING_SIZE};
    left: 50%;
    position: fixed;
    top: 50%;
    width: ${LOADING_SIZE};
`

export default Loading
