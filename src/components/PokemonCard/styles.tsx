/*=============================================== PokemonCard styles ===============================================*/

import styled from "styled-components"
import { Card, TRANSITIONS } from "@julseb-lib/react"

export const StyledPokemonCard = styled(Card)`
    transform: ${TRANSITIONS.SHORT};

    &:hover {
        transform: scale(1.05);
    }
`

export const Fallback = styled.div`
    width: 50%;
    aspect-ratio: 1;
`
