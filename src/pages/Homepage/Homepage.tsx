/*=============================================== Homepage ===============================================*/

import { Text, Cover } from "@julseb-lib/react"
import { Page } from "components"
import { PokeForm } from "./PokeForm"

export const Homepage = () => {
    return (
        <Page title="Home" noWrapper>
            <Cover
                img="/background-pokemon.jpg"
                height="100vh"
                overlay="black-80"
            >
                <Text tag="h1">Pokédex</Text>
                <PokeForm />
            </Cover>
        </Page>
    )
}
