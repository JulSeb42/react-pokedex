/*=============================================== Pokemon Service ===============================================*/

import { http } from "./http-common"
import { SERVER_PATHS } from "routes"
import type { ApiResponse, Pokemon } from "types"

class PokemonService {
    allPokemon = (): ApiResponse<Array<Pokemon>> => {
        return http.get(`${SERVER_PATHS.ALL_POKEMON}`)
    }
}

export const pokemonService = new PokemonService()
