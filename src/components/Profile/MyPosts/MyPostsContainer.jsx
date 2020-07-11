import {addPost, updateNewPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}


const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPost})(MyPosts)

export default MyPostsContainer