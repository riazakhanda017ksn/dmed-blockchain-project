import React from 'react';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Post = () => {
    return (
          <div className="flex-post">
            <button>Post <FaPlus/></button>
                <Link to={'/list-page'}>List Page</Link>
            </div>
    );
};

export default Post;