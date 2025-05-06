import React from 'react';

const BlogPosts = ({ posts, setSelectedPost }) => (
  <section id="blog-posts">
    {posts.map(post => (
      <article key={post.id} className="post">
        <img src={post.image} alt={post.alt} className="post-img" />
        <div className="post-content">
          <h2>{post.title}</h2>
          <p className="post-meta">{post.date}</p>
          <p className="post-excerpt">{post.excerpt}</p>
          <a
            href={`#${post.id}`}
            className="read-more"
            onClick={(e) => {
              e.preventDefault();
              setSelectedPost(post);
            }}
          >
            Read More
          </a>
        </div>
      </article>
    ))}
  </section>
);

export default BlogPosts;