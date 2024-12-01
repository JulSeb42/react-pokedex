/*=============================================== Homepage Skeleton ===============================================*/

import styled from "styled-components"
import { COLORS_LIGHT, SkeletonCard, generateNumbers } from "@julseb-lib/react"

export const ListSkeleton = () => {
    return generateNumbers(0, 19).map(n => (
        <StyledSkeleton
            key={n}
            className="SkeletonCard"
            height={110}
            width="100%"
            border={{ width: 1 }}
            borderRadius="m"
            isShiny
        />
    ))
}

const StyledSkeleton = styled(SkeletonCard)`
    & > .Shine {
        background-color: ${COLORS_LIGHT.GRAY_100};
    }
`
