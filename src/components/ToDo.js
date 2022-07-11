import React from 'react'  

class ToDo extends React.Component {
    state = {
        completed : this.props.task.completed
    }


    toggleCompleted= () => {
        this.setState(prevState => ({
            completed: !prevState.completed
        }))
        this.props.onToggleCompleted(this.props.task.id)
    }


    render (){
        return (
            <li className={"list-group-item d-flex align-tiems-center justify-content-between " + (this.state.completed?'bg-success': null)}>
                  {this.props.task.name}
                  <button type="button" className={"btn btn-sm " + (this.state.completed?'btn-success': 'btn-outline-success')} onClick={() => this.toggleCompleted()}>&#x2713;</button>
            </li>
        )

    }
}

export default ToDo