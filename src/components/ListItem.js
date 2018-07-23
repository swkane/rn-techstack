import React from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common/CardSection";
import * as actions from "../actions";

class ListItem extends React.Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }
  render() {
    const { titleStyle } = styles;
    const { expanded } = this.props;
    const { id, title, description } = this.props.library.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {expanded && (
            <CardSection>
              <Text>{description}</Text>
            </CardSection>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
