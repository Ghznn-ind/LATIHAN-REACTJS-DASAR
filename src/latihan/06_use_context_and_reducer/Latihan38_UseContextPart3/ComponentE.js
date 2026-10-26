import React, { useContext } from 'react'
import { UserContext, ChannelContext } from './index'

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return (
        <div>
            User: {user} - Channel: {channel}
        </div>
    )
}

export default ComponentE
