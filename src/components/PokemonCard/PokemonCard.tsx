/*=============================================== PokemonCard component ===============================================*/

import { Image, Text } from "@julseb-lib/react"
import { PATHS } from "routes"
import { StyledPokemonCard } from "./styles"
import type { IPokemonCard } from "./types"

export const PokemonCard: FC<IPokemonCard> = ({ pokemon }) => {
    const { name, sprites, pokedex_id } = pokemon

    return (
        <StyledPokemonCard
            to={PATHS.POKEMON(pokedex_id.toString())}
            border={{ width: 1 }}
            borderRadius="m"
            flexDirection="column"
            gap="xs"
            alignItems="center"
        >
            <Image width="50%" src={sprites.regular} />
            <Text tag="h5" as="p">
                {name.en}
            </Text>
        </StyledPokemonCard>
    )
}
