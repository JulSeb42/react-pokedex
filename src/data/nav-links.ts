/*=============================================== NavLinks ===============================================*/

import { PATHS } from "routes"
import type { INavLink } from "types"

export const navLinks: Array<INavLink> = [
    { text: "Home", to: PATHS.ROOT, end: true },
    { text: "Pokémon", to: PATHS.POKEMON_LIST },
    { text: "Generations", to: PATHS.GENERATIONS },
    { text: "Types", to: PATHS.TYPES },
]
