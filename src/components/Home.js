import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Home extends Component {
    // Store the data from posts
    // state = {
    //     posts: [ ]
    // }
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res)
    //             // Take the data and add to the posts array object above
    //             // Use Slice to grap the data from 0 to 10
    //             this.setState({
    //                 posts: res.data.slice(0,10)
    //             })
    //         })
    // }
    render(){
        // const { posts } = this.state
        const { posts } = this.props
        const postList = posts.length ? (
          posts.map(post => {
            return (
              <div className="post card" key={post.id}>
                <div className="card-content">
                    <Link to={'/' + post.id}>
                    <span className="card-title">{post.title}</span>
                    </Link>
                    <p>{post.body}</p>
                </div>
              </div>
            )
          })
        ) : (
          <div className="center">No posts to show</div>
        );
        return (
            <div className="container">
              <h4 className="center">Home</h4>
              {postList}
            </div>
          )
    }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);