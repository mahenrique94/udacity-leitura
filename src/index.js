import React from "react"
import ReactDOM from "react-dom"

import Routes from "routes"

import App from "containers/App"

import "cfg/moment"
import "cfg/style"

ReactDOM.render(
    <App>
        <Routes/>
    </App>,
    document.getElementById("root")
)
