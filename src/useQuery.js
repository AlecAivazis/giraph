// external imports
import { useState } from 'react'

const useQuery = ({ query, variables, environment }) => {
    // state to track loading state
    const [loading, setLoading] = useState(true)

    // return the results to the user
    return { loading, errors, data }
}
