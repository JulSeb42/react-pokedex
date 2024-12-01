/*=============================================== NavLinks ===============================================*/

import { PATHS } from "routes"
import type { INavLink } from "types"

export const navLinks: Array<INavLink> = [
    { text: "Home", to: PATHS.ROOT, end: true },
    { text: "Pokémon", to: PATHS.POKEMON_LIST, end: true },
    { text: "Generations", to: PATHS.GENERATIONS, end: true },
    { text: "Types", to: PATHS.TYPES, end: true },
]
