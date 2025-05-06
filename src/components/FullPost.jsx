import React from 'react';

const FullPost = ({ post, onClose }) => {
  const renderContent = () => {
    const elements = [];
    let imageGroup = [];

    post.content.forEach((item, index) => {
      if (item.type === 'image') {
        imageGroup.push(item);
      } else {
        if (imageGroup.length > 0) {
          elements.push(
            <div key={`image-row-${index}`} className="image-row">
              {imageGroup.map((img, imgIndex) => (
                <img
                  key={`img-${imgIndex}`}
                  src={img.src}
                  alt={img.alt}
                  className="content-img"
                />
              ))}
            </div>
          );
          imageGroup = [];
        }
        elements.push(<p key={index}>{item.value}</p>);
      }
    });

    if (imageGroup.length > 0) {
      elements.push(
        <div key={`image-row-end`} className="image-row">
          {imageGroup.map((img, imgIndex) => (
            <img
              key={`img-${imgIndex}`}
              src={img.src}
              alt={img.alt}
              className="content-img"
            />
          ))}
        </div>
      );
    }

    return elements;
  };

  return (
    <section className="full-post active">
      <div className="full-post-content">
        <a href="#home" className="close-btn" onClick={onClose}>×</a>
        <h2>{post.title}</h2>
        <p className="post-meta">{post.date}</p>
        <img src={post.image} alt={post.alt} className="main-img" />
        {renderContent()}
      </div>
    </section>
  );
};

export default FullPost;