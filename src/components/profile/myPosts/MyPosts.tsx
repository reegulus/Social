import React from "react";
import style from './MyPosts.module.css'
import {Post} from "./post/Post";
import {PostType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: (newPostText: string)=> void
    changeNewPostText: (newText: string)=> void
    newPostText: string
}

export function MyPosts(props: MyPostsPropsType) {

    const postsElements = props.posts
        .map(p => <Post
            message={p.message}
            likesCount={p.likesCount}/>
        )

    let newPostElement: any = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        props.changeNewPostText('')
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.changeNewPostText(text)
    }
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>add
                    </button>
                </div>
            </div>
            <div className={style.post}>
                {
                    postsElements
                }
            </div>
        </div>
    )
}

