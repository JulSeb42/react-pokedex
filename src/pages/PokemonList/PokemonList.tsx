/*=============================================== PokemonList ===============================================*/

import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { usePaginatedData, Paginator, Grid } from "@julseb-lib/react"
import { pokemonService } from "api"
import { Page, PokemonCard } from "components"
import { AsidePokeList } from "./Aside"
import { ListSkeleton } from "./Skeleton"
import type { Pokemon } from "types"

export const PokemonList = () => {
    const [pokemon, setPokemon] = useState<undefined | Array<Pokemon>>(
        undefined
    )
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()

    const search = searchParams.get("pokemon")

    useEffect(() => {
        pokemonService
            .allPokemon()
            .then(res => {
                if (search) {
                    setPokemon(
                        res.data.filter(p =>
                            p.name.toLowerCase().includes(search.toLowerCase())
                        )
                    )
                } else {
                    setPokemon(res.data)
                }

                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                throw new Error(err)
            })
    }, [search])

    const { paginatedData, totalPages } = usePaginatedData<Pokemon>(
        pokemon as Array<Pokemon>,
        20
    )

    return (
        <Page title="Pokemon List" aside={<AsidePokeList />}>
            <Grid col={4} gap="s">
                {loading ? (
                    <ListSkeleton />
                ) : (
                    paginatedData.map(pokemon => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))
                )}
            </Grid>

            <Paginator totalPages={totalPages} />
        </Page>
    )
}
