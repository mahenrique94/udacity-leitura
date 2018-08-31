import PropTypes from "prop-types"
import React, { Component, Fragment } from "react"
import { connect } from "react-redux"

import { addNewTask as addNewTaskSaga } from "../sagas"
import { getAllTasks } from "../selectors"

class Home extends Component {

    state = {
        task: ""
    }

    render() {
        const { tasks } = this.props
        const { task } = this.state
        return (
            <Fragment>
                <h1>Home</h1>
                <input onChange={ this.handleChange } value={ task }/>
                <button onClick={ () => this.addNewTask(task) } type="button">Add new task</button>
                <ul>
                    { tasks.map(t => <li key={ t }>{ t }</li>) }
                </ul>
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

Home.propTypes = {
    addNewTask: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired
}

const mapDispatchToProps = dispatch => ({
    addNewTask: task => dispatch(addNewTaskSaga(task))
})

const mapStateToProps = state => ({
    tasks: getAllTasks(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
