/*=============================================== Page ===============================================*/

import { useLocation } from "react-router-dom"
import { PageLoading, Wrapper, Main, Aside } from "@julseb-lib/react"
import { PATHS } from "routes"
import { BaseLayout, type IBaseLayout } from "./BaseLayout"
import { Header } from "./Header/Header"
import type { LibMainSize } from "@julseb-lib/react/types"

export const Page: FC<IPage> = ({
    children,
    isLoading,
    mainSize,
    noWrapper,
    aside,
    ...rest
}) => {
    const { pathname } = useLocation()

    return (
        <BaseLayout {...rest}>
            {isLoading ? (
                <PageLoading />
            ) : (
                <>
                    {pathname !== PATHS.ROOT && <Header />}

                    {!noWrapper ? (
                        <Wrapper>
                            {aside && <Aside>{aside}</Aside>}
                            <Main size={mainSize}>{children}</Main>
                        </Wrapper>
                    ) : (
                        children
                    )}
                </>
            )}
        </BaseLayout>
    )
}

interface IPage extends IBaseLayout {
    noWrapper?: boolean
    isLoading?: boolean
    mainSize?: LibMainSize
    aside?: JSX.Element
}
