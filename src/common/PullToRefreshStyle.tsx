import styled from "styled-components";
import { css } from "styled-components";

export const Wrapper = styled.div``;

export const Head = styled.div`
    overflow: hidden;
    position: relative;
    background: #fff;
`;

export const HeadContent = styled.div<{ height: number }>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .loader {
        font-size: 1rem;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        position: relative;
        text-indent: -9999em;
        color: #000;
        animation: mulShdSpin 1.1s infinite ease;
        transform: translateZ(0);
    }
    @keyframes mulShdSpin {
        0%,
        100% {
            box-shadow: 0em -2.6em 0em 0em #000,
                1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
                2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
                1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
                0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
                -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
                -2.6em 0em 0 0em rgba(255, 255, 255, 0.5),
                -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
        }
        12.5% {
            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7),
                1.8em -1.8em 0 0em #000,
                2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
                1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
                0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
                -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
                -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
                -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
        }
        25% {
            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5),
                1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7),
                2.5em 0em 0 0em #000,
                1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
                0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
                -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
                -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
                -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
        }
        37.5% {
            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
                1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5),
                2.5em 0em 0 0em rgba(255, 255, 255, 0.7),
                1.75em 1.75em 0 0em #000,
                0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
                -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
                -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
                -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
        }
        50% {
            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
                1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
                2.5em 0em 0 0em rgba(255, 255, 255, 0.5),
                1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7),
                0em 2.5em 0 0em #000,
                -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
                -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
                -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
        }
        62.5% {
            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
                1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
                2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
                1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5),
                0em 2.5em 0 0em rgba(255, 255, 255, 0.7),
                -1.8em 1.8em 0 0em #000,
                -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
                -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
        }
        75% {
            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
                1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
                2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
                1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
                0em 2.5em 0 0em rgba(255, 255, 255, 0.5),
                -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7),
                -2.6em 0em 0 0em #000,
                -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
        }
        87.5% {
            box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
                1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
                2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
                1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
                0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
                -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5),
                -2.6em 0em 0 0em rgba(255, 255, 255, 0.7),
                -1.8em -1.8em 0 0em #000;
        }
    }

    ${({ height }) => css`
        height: ${height}px;
    `}
`;
