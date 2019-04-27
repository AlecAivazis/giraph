import React from 'react'
import { fragmentContainer, graphql } from 'giraph'

const UserAvatar = ({ user }) => <img src={user.avatar.url} />

export default fragmentContainer(
    UserAvatar,
    graphql`
        fragment UserAvatar_user on User {
            avatar {
                url
            }
        }
    `
)
