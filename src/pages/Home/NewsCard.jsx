import React from 'react';

const NewsCard = ({news}) => {
    return (
        <div>
            new: {news.length}
        </div>
    );
};

export default NewsCard;