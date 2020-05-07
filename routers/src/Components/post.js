import React, { Component } from "react";
import { connect } from "react-redux";
import deletepost from "../actions/Postaction";
//import axios from "axios";
//class has defalut this.props parameter
class Post extends Component {
  // state = {
  //   post: null,
  // };
  // now using redux a central place to data store
  //componentDidMount() {
  //   //in this.props.match.params.post_id  contain the paramter that we pass in route
  //   let id = this.props.match.params.post_id;
  //   axios("https://jsonplaceholder.typicode.com/posts/" + id).then((res) => {
  //     this.setState({
  //       post: res.data,
  //     });
  //   });
  // }

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };

  render() {
    console.log(this.props.post);
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <button className="btn gray " onClick={this.handleClick}>
          Delete Post
        </button>
      </div>
    ) : (
      <div className="center">
        {" "}
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
    return <div>{post}</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.post_id);

  return {
    post: state.post.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletepost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
