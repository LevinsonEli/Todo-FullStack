import React, {Component} from "react";

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        this.setState ({
            inputValue: e.target.value
        });
    }

    handleSubmit(){
        if (this.state.inputValue !== "")
        {
            this.props.addTodo(this.state.inputValue);
            this.setState({inputValue: ""});
        }
    }
    render() {
        return (
            <div>
                <input 
                    className="inputTodo"
                    type="text" 
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button
                    className="addTodoBtn"
                    onClick={this.handleSubmit}
                >
                    Add Todo
                </button>
            </div>
        )
    }
}

export default TodoForm;