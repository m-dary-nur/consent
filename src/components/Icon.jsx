import React, { memo } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

library.add(faChevronLeft)

const Icon = props => <FontAwesomeIcon {...props} />

export default memo(Icon)
