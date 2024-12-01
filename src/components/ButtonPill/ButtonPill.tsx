/*=============================================== ButtonPill component ===============================================*/

import { StyledButtonPill } from "./styles"
import type { IButtonPill } from "./types"

export const ButtonPill: FC<IButtonPill> = props => {
    return <StyledButtonPill {...props} />
}
