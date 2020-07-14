import React, {Component} from "react";


class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        console.log("this: ", this.state.editMode)
        this.setState({
                editMode: true
            }
        )
        // console.log (this.state.editMode)
    }

    deactivateEditMode = () => {
        this.setState({
                editMode: false
            }
        )
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')

        if (prevProps.status !== this.props.status) {
            this.setState(
                {
                    status: this.props.status
                }
            )
        }
    }

    render() {
        console.log('render')


        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <p>My status: <span onDoubleClick={this.activateEditMode}>{this.state.status || 'Unknown'}</span>
                    </p>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <p>My status:
                        <input autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}
                               onChange={this.onStatusChange}/>
                    </p>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus
