// external imports
import { useContext, createContext } from 'react'

// a piece of context we can use to grab the current environment
const EnvironmentContext = createContext()

// pull the environment out of context
export const useEnvironment = () => useContext(EnvironmentContext)

// a way for the user to provide an environment to everything
export const EnvironmentProvider = ({ environment, ...props }) => (
    <EnvironmentContext value={environment} {...props} />
)

export default class Environment {
    constructor({ url }) {
        this._url = url
    }
}
