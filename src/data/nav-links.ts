/*=============================================== NavLinks ===============================================*/

import { PATHS } from "routes"
import type { INavLink } from "types"

export const navLinks: Array<INavLink> = [
    { text: "Home", to: PATHS.ROOT, end: true },
    { text: "All Pokémon", to: PATHS.POKEMON_LIST, end: true },
]
