import { useQuery, graphql } from 'giraph'

const App = () => {
    // grab the list of todo items
    const { data, errors, loading } = useQuery(graphql`
        query {
            todoItems {
                id
                body
                owner {
                    ...UserAvatar_user
                }
            }
        }
    `)

    // don't render anything if we're not done
    if (loading) {
        return 'loading'
    }

    if (errors) {
        return JSON.stringify(errors)
    }

    return (
        <div>
            {data.todoItems.map(item => (
                <div>
                    <UserAvatar user={item.owner} />
                    <div>{item.body}</div>
                </div>
            ))}
        </div>
    )
}
