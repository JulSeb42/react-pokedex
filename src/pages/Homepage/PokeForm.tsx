/*=============================================== PokémonForm ===============================================*/

import { useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Flexbox, Form, Input, SPACERS } from "@julseb-lib/react"
import { ButtonPill } from "components"
import { PATHS } from "routes"
import type { LibValidationStatus } from "@julseb-lib/react/types"

export const PokeForm = () => {
    const navigate = useNavigate()

    const [value, setValue] = useState("")
    const [error, setError] = useState<LibValidationStatus>(undefined)

    const handleValue = (e: ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!value) {
            setError(false)
            return
        }

        navigate({
            pathname: PATHS.POKEMON_LIST,
            search: `pokemon=${value}`,
        })
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Input
                value={value}
                onChange={handleValue}
                type="search"
                inputVariant="pill"
                placeholder="Search a Pokémon by name or number..."
                icon="search"
                validation={{ status: error }}
            />

            <Flexbox justifyContent="center" gap="xs">
                <ButtonPill color="white" type="submit">
                    Search Pokémon
                </ButtonPill>

                <ButtonPill type="button" color="white" variant="outline">
                    Random Pokémon
                </ButtonPill>
            </Flexbox>
        </StyledForm>
    )
}

const StyledForm = styled(Form)`
    max-width: 600px;
    gap: ${SPACERS.M};
`
