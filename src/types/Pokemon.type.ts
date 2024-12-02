/*=============================================== Pokemon type ===============================================*/

export type Pokemon = {
    id: number
    pokedexId: number
    name: string
    image: string
    sprite: string
    slug: string
    stats: {
        HP: number
        attack: number
        defense: number
        special_attack: number
        special_defense: number
        speed: number
    }
    apiTypes: Array<{
        name: string
        image: string
    }>
    apiGeneration: number
    apiResistances: Array<{
        name: string
        damage_multiplier: number
        damage_relation: string
    }>
    resistanceModifyingAbilitiesForApi: Array<{ name: string; slug: string }>
    apiEvolutions: Array<{ name: string; pokedexId: number }>
    apiPreEvolution: string
    apiResistancesWithAbilities: Array<{
        name: string
        damage_multiplier: number
        damage_relation: string
    }>
}
