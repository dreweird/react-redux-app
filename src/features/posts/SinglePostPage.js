import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { PostAuthor } from "./PostAuthor";
import { selectPostById } from './postSlice'
import { ReactionButtons } from './ReactionButton'
import { TimeAgo } from "./TimeAgo";


export const SinglePostPage = () => {
    const {postId} = useParams()
    const post = useSelector((state) => selectPostById(state, postId))

     if(!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
     }

     return (
        <section>
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
     )
} 