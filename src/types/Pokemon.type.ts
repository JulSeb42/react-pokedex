/*=============================================== Pokemon type ===============================================*/

type PokemonType = {
    name: string
    image: string
}

type PokemonTalent = {
    name: string
    tc: boolean
}

type PokemonResistances = {
    name: string
    multiplier: number
}

type PokemonEvolution = {
    pokedex_id: number
    name: string
    condition: string
}

type PokemonForme = {
    region: string
    name: {
        fr: string
        en: string
        jp: string
    }
}

export type Pokemon = {
    pokedex_id: number
    generation: number
    category: string
    name: {
        fr: string
        en: string
        jp: string
    }
    sprites: {
        regular: string
        shiny: string
        gmax: string
    }
    types: Array<PokemonType>
    talents: Array<PokemonTalent>
    stats: {
        hp: number
        atk: number
        def: number
        spe_atk: number
        spe_def: number
        vit: number
    }
    resistances: Array<PokemonResistances>
    evolution: {
        pre: Array<PokemonEvolution> | null
        next: Array<PokemonEvolution> | null
        mega: Array<PokemonEvolution> | null
    }
    height: string
    weight: string
    egg_groups: Array<string>
    sexe: {
        male: number
        female: number
    }
    catch_rate: number
    level_100: number
    formes: Array<PokemonForme> | null
}
