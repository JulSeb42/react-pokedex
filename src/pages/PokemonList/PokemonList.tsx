/*=============================================== PokemonList ===============================================*/

import { useState, useEffect } from "react"
import { usePaginatedData, Paginator, Grid } from "@julseb-lib/react"
import { pokemonService } from "api"
import { Page, PokemonCard } from "components"
import { ListSkeleton } from "./Skeleton"
import type { Pokemon } from "types"

export const PokemonList = () => {
    const [pokemon, setPokemon] = useState<undefined | Array<Pokemon>>(
        undefined
    )
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        pokemonService
            .allPokemon()
            .then(res => {
                setPokemon(res.data.slice(1))
                setTimeout(() => setLoading(false), 1000)
            })
            .catch(err => {
                setLoading(false)
                throw new Error(err)
            })
    }, [])

    const { paginatedData, totalPages } = usePaginatedData<Pokemon>(
        pokemon as Array<Pokemon>,
        20
    )

    return (
        <Page title="Pokemon List">
            <Grid col={4} gap="s">
                {loading ? (
                    <ListSkeleton />
                ) : (
                    paginatedData.map(pokemon => (
                        <PokemonCard
                            key={pokemon.pokedex_id}
                            pokemon={pokemon}
                        />
                    ))
                )}
            </Grid>

            <Paginator totalPages={totalPages} />
        </Page>
    )
}
