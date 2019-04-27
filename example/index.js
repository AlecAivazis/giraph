// external imports
import React from 'react'
import ReactDOM from 'react-dom'
import { GiraphProvider } from 'giraph'
// local imports
import App from './App'
import environment from './environment'

import './reset.css'

ReactDOM.render(
    <GiraphProvider environment={environment}>
        <App />
    </GiraphProvider>,
    document.getElementById('app')
)
