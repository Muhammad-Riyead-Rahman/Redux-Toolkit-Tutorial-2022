import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from "./postSlice";

export const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [])

  return (
    <div>
      <section>
        {isLoading && <h3>Loding...</h3>}
        {error && <h3>{error}</h3>}
        {posts && posts.map((post) => {
        
          return (<article>
            <h5>{ post.title }</h5>
            <h5>{ post.body }</h5>
          </article>);
        })}
      </section>
    </div>
  )
}
