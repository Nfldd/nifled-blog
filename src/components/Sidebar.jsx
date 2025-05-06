import React from 'react';

const Sidebar = ({ posts }) => (
  <aside className="sidebar">
    {/* <div className="search-bar">
      <input type="text" placeholder="Search posts..." />
    </div> */}
    <div className="recent-posts">
      <h3>Recent Posts</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <a href={`#${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

export default Sidebar;