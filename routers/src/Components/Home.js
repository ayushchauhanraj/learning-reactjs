import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import pokemon from "../../src/pokeball.png";
import { connect } from "react-redux";
//axios is used for asynchronous http request
//we use life cycle hooks(componentdidmount()) and they can only be formed inside the class components

class Home extends Component {
  // state = {
  //   posts: [],
  // };
  // now using redux a central place to data store
  // componentDidMount() {
  //   axios("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     console.log(res);
  //     this.setState({
  //       posts: res.data.slice(0, 20),
  //     });
  //   });
  // }

  render() {
    /* check wheather data come or not using ternary operator and
     if data then traverse it 
     else show no posts message */
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={pokemon} alt="A pokeball" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Posts yet !</div>
    );
    return (
      <div className="container home">
        <h4>HOME</h4>
        {postList}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.post,
  };
};
export default connect(mapStateToProps)(Home);
