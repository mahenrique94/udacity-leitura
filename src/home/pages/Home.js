import PropTypes from "prop-types"
import React, { Component, Fragment } from "react"
import { connect } from "react-redux"

import { requestAddNewTask } from "../actions"
import { getAllTasks, getLoading } from "../selectors"

class Home extends Component {

    static propTypes = {
        addNewTask: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
        tasks: PropTypes.arrayOf(PropTypes.string).isRequired
    }

    state = {
        task: ""
    }

    render() {
        const { loading, tasks } = this.props
        const { task } = this.state
        return (
            <Fragment>
                <h1>Home</h1>
                { loading ? (<h2>Loading...</h2>) : (
                    <Fragment>
                        <input onChange={ this.handleChange } value={ task }/>
                        <button onClick={ () => this.addNewTask(task) } type="button">Add new task</button>
                        <ul>
                            { tasks.map(t => <li key={ t }>{ t }</li>) }
                        </ul>
                    </Fragment>
                ) }
            </Fragment>
        )
    }

    addNewTask = task => {
        const { addNewTask } = this.props
        addNewTask(task)
        this.setState({ task: "" })
    }

    handleChange = e => this.setState({ task: e.target.value })

}

const mapStateToProps = state => ({
    loading: getLoading(state),
    tasks: getAllTasks(state)
})

const mapDispatchToProps = dispatch => ({
    addNewTask: task => dispatch(requestAddNewTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
