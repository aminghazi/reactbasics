import React from 'react';
import { css } from 'glamor';

const NewsListItem = (props) => {
    let list_item = css({
        padding: "20px",
        boxShadow: "0 0 4px #ababab",
        marginTop: "15px",
        ':hover': {
          color: 'black'
        },
        '@media(min-width: 500px)': {
          color: 'green',
          ':hover': {
            color: 'yellow'
          }
        }
    })

    return (
        <div className={`${list_item}`}>
            <h2>{ props.item.title }</h2>
            <span>{ props.item.body }</span>
        </div>
    )
}

export default NewsListItem;