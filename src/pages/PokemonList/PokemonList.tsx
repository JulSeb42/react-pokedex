/*=============================================== PokemonList ===============================================*/

import { useState, useEffect, Suspense, useMemo } from "react"
import { usePaginatedData, Paginator } from "@julseb-lib/react"
import { pokemonService } from "api"
import { Page, PokemonCard } from "components"
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
            <Suspense>
                {paginatedData?.map(pokemon => (
                    <PokemonCard key={pokemon.pokedex_id} pokemon={pokemon} />
                ))}
                <Paginator totalPages={totalPages} />
            </Suspense>
        </Page>
    )
}
