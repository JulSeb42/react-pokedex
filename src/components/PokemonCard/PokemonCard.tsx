/*=============================================== PokemonCard component ===============================================*/

import { Image, Text } from "@julseb-lib/react"
import { PATHS } from "routes"
import { StyledPokemonCard } from "./styles"
import type { IPokemonCard } from "./types"

export const PokemonCard: FC<IPokemonCard> = ({ pokemon }) => {
    const { name, image, id } = pokemon

    return (
        <StyledPokemonCard
            to={PATHS.POKEMON(id.toString())}
            border={{ width: 1 }}
            borderRadius="m"
            flexDirection="column"
            gap="xs"
            alignItems="center"
        >
            <Image width="50%" src={image} />
            <Text tag="h5" as="p">
                {name}
            </Text>
        </StyledPokemonCard>
    )
}
