import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import JSON from './db.json';

import NewsList from './components/news_list';

class App extends Component {

    state = {
        posts:JSON,
        filtered:[],
        footerText:"I am a Happy Footer",
    }
    
    getKeywords = (event) => {
        let keywords = event.target.value;
        let filtered = this.state.posts.filter((item) => {
            return item.title.indexOf(keywords) > -1
        })

        this.setState({
            filtered
        })
    }

    render() {
        const state = this.state;
        let postsFiltered = state.filtered;
        let postsAll = state.posts;


        return(
            <React.Fragment>            
                <Header keywords={this.getKeywords} />

                <NewsList 
                    // posts={this.state.posts}
                    posts={postsFiltered.length === 0 ? postsAll : postsFiltered}
                    >
                    {
                        postsFiltered.length === 0 ? <h1>All Posts</h1> : <h1>Filter Posts</h1>
                    }
                </NewsList>

                <Footer footerText={this.state.footerText} />
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));