/*=============================================== Pokemon Service ===============================================*/

import { http } from "./http-common"
import { SERVER_PATHS } from "routes"
import type { ApiResponse, Pokemon } from "types"

class PokemonService {
    allPokemon = (): ApiResponse<Array<Pokemon>> => {
        return http.get(`${SERVER_PATHS.ALL_POKEMON}?offset=20`)
    }
    pokemonById = (id: string, region?: string): ApiResponse<Pokemon> => {
        return http.get(SERVER_PATHS.POKEMON_BY_ID(id, region))
    }
    allGeneration = (): ApiResponse<any> => {
        return http.get(SERVER_PATHS.ALL_GENERATION)
    }
    generationByGen = (gen: number): ApiResponse<any> => {
        return http.get(SERVER_PATHS.GENERATION_BY_GEN(gen))
    }
    allTypes = (): ApiResponse<any> => {
        return http.get(SERVER_PATHS.ALL_TYPES)
    }
    typeByName = (type: string, secondType?: string): ApiResponse<any> => {
        return http.get(SERVER_PATHS.TYPE_BY_NAME(type, secondType))
    }
}

export const pokemonService = new PokemonService()
