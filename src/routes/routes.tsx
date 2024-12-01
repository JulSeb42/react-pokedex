/*=============================================== Routes ===============================================*/

// import { Navigate } from "react-router-dom"
import { PATHS } from "routes"
import { Homepage } from "pages/Homepage/Homepage"
import { NotFound } from "pages/NotFound"
import { PokemonList } from "pages/PokemonList"
/* Prepend import - DO NOT REMOVE */

type Route = {
    path: string
    element: JSX.Element
}

const redirects: Array<Route> = [
    // {
    //     path: "",
    //     element: <Navigate to="" />,
    // },
]

export const routes: Array<Route> = [
    { path: PATHS.ROOT, element: <Homepage /> },
    { path: "*", element: <NotFound /> },

    { path: PATHS.POKEMON_LIST, element: <PokemonList /> },
    /* Prepend route - DO NOT REMOVE */

    ...redirects,
]
