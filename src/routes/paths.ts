/*=============================================== Paths ===============================================*/

export const PATHS = {
    ROOT: "/",
    POKEMON_LIST: "/pokemon",
    POKEMON: (id = ":id") => `/pokemon/${id}`,
    GENERATIONS: "/generations",
    TYPES: "/types",
    /* Prepend path - DO NOT REMOVE */
}

export const SERVER_PATHS = {
    ALL_POKEMON: "/pokemon",
    POKEMON_WITH_LIMIT: (limit: number) =>
        `${SERVER_PATHS.ALL_POKEMON}/limit/${limit}`,
    POKEMON_BY_ID: (id: string) => `${SERVER_PATHS.ALL_POKEMON}/${id}}`,
    POKEMON_BY_NAME: (name: string) => `${SERVER_PATHS.ALL_POKEMON}/${name}`,
    POKEMON_BY_GENERATION: (gen: string) => `${SERVER_PATHS}/generation/${gen}`,
    ALL_TYPES: "/types",
    POKEMON_BY_TYPES: (type: string) =>
        `${SERVER_PATHS.ALL_POKEMON}/type/${type}`,
    POKEMON_MULTI_TYPES: (type1: string, type2: string) =>
        `${SERVER_PATHS.ALL_POKEMON}/types/${type1}/${type2}`,
    POKEMON_BY_WEAKNESS: (weakness: string) =>
        `${SERVER_PATHS.ALL_POKEMON}/type/weakness/${weakness}`,
    POKEMON_BY_DOUBLE_WEAKNESS: (weakness: string) =>
        `${SERVER_PATHS.ALL_POKEMON}/type/double-weakness/${weakness}`,
    POKEMON_BY_RESISTANCE: (resistance: string) =>
        `${SERVER_PATHS.ALL_POKEMON}/type/resistance/${resistance}`,
    POKEMON_BY_DOUBLE_RESISTANCE: (resistance: string) =>
        `${SERVER_PATHS.ALL_POKEMON}/type/double-resistance/${resistance}`,
    POKEMON_BY_IMMUNITY: (immunity: string) =>
        `${SERVER_PATHS.ALL_POKEMON}/type/immunity/${immunity}`,
}
