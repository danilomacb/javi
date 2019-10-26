import { connect } from "react-redux";

import Message from "../components/Message";

const mapStateToProps = state => {
  return { responseMessage: state.responseMessage };
};

const MessageContainer = connect(mapStateToProps)(Message);

export default MessageContainer;
