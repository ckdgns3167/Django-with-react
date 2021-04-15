import React from 'react';
import { Avatar, Card } from 'antd';
import { HeartOutlined, HeartFilled, UserOutlined } from '@ant-design/icons';

const Post = ({ post }) => {
  const { caption, location, photo } = post;
  return (
    <div>
      <Card
        hoverable
        cover={<img src={photo} alt={caption} />}
        actions={[<HeartOutlined />]}
      >
        <Card.Meta
          avatar={<Avatar size="large" icon={<UserOutlined />} />}
          title={location}
          description={caption}
        />
      </Card>
      {/*<img src={photo} alt={caption} style={{ width: '100px' }} />*/}
      {/*{caption}, {location}*/}
    </div>
  );
};

export default Post;
