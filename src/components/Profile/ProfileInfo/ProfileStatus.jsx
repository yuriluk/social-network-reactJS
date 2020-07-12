import React, {Component} from "react";


class ProfileStatus extends Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        // console.log (this.state.editMode)
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
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <p>My status: <span onDoubleClick={this.activateEditMode}>{this.props.status}</span></p>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <p>My status: <input autoFocus={true} onBlur={this.deactivateEditMode} defaultValue={this.props.status}/></p>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus
