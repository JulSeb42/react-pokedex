/*=============================================== Pokemon Service ===============================================*/

import { http } from "./http-common"
import { SERVER_PATHS } from "routes"
import type { ApiResponse, Pokemon, Type } from "types"

class PokemonService {
    allPokemon = (): ApiResponse<Array<Pokemon>> => {
        return http.get(`${SERVER_PATHS.ALL_POKEMON}`)
    }
    allPokemonWithLimit = (): ApiResponse<Array<Pokemon>> => {
        return http.get(`${SERVER_PATHS.POKEMON_WITH_LIMIT}`)
    }
    pokemonById = (id: string): ApiResponse<Pokemon> => {
        return http.get(SERVER_PATHS.POKEMON_BY_ID(id))
    }
    pokemonByName = (name: string): ApiResponse<Pokemon> => {
        return http.get(SERVER_PATHS.POKEMON_BY_NAME(name))
    }
    pokemonByGeneration = (gen: string): ApiResponse<Array<Pokemon>> => {
        return http.get(SERVER_PATHS.POKEMON_BY_GENERATION(gen))
    }
    allTypes = (): ApiResponse<Array<Type>> => {
        return http.get(SERVER_PATHS.ALL_TYPES)
    }
    pokemonByType = (type: string): ApiResponse<Array<Pokemon>> => {
        return http.get(SERVER_PATHS.POKEMON_BY_TYPE(type))
    }
    pokemonByMultiTypes = (
        type1: string,
        type2: string
    ): ApiResponse<Array<Pokemon>> => {
        return http.get(SERVER_PATHS.POKEMON_MULTI_TYPES(type1, type2))
    }
    pokemonByWeakness = (weakness: string): ApiResponse<Array<Pokemon>> => {
        return http.get(SERVER_PATHS.POKEMON_BY_WEAKNESS(weakness))
    }
    pokemonByDoubleWeakness = (
        weakness: string
    ): ApiResponse<Array<Pokemon>> => {
        return http.get(SERVER_PATHS.POKEMON_BY_WEAKNESS(weakness))
    }
    pokemonByResistance = (resistance: string): ApiResponse<Array<Pokemon>> => {
        return http.get(SERVER_PATHS.POKEMON_BY_RESISTANCE(resistance))
    }
    pokemonByDoubleResistance = (
        resistance: string
    ): ApiResponse<Array<Pokemon>> => {
        return http.get(SERVER_PATHS.POKEMON_BY_DOUBLE_RESISTANCE(resistance))
    }
    pokemonByImmunity = (immunity: string): ApiResponse<Array<Pokemon>> => {
        return http.get(SERVER_PATHS.POKEMON_BY_IMMUNITY(immunity))
    }
    generateRandomTeam = (): ApiResponse<Array<Pokemon>> => {
        return http.get(SERVER_PATHS.POKEMON_RANDOM_TEAM)
    }
    generateRandomTeamSuggest = (): ApiResponse<Array<Pokemon>> => {
        return http.get(SERVER_PATHS.POKEMON_RANDOM_TEAM_SUGGEST)
    }
}

export const pokemonService = new PokemonService()
