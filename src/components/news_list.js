import React from 'react';

import NewsListItem from './news_list_item';

const NewsList = (props) => {

    const news = props.posts.map((item, i) => (
        <NewsListItem item={item} key={item.id} />
    ))

    return (
        <>
            {
                props.children
            }
            {
                news
            }      
        </>
    )
}

export default NewsList;