/*=============================================== AsideList ===============================================*/

import { Aside } from "@julseb-lib/react"

export const AsideList: FC<IAsideList> = ({ children }) => {
    return <Aside size="small">{children}</Aside>
}

interface IAsideList {
    children?: Children
}
