import React, {Component} from "react";


class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
                editMode: true
            }
        )
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
