import React from 'react'
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageBody'
                       component={TextArea}
                       placeholder='Enter your message'
                       validate={[required, maxLength100]}/>
            </div>
            <div>
                <button>Add Message</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)