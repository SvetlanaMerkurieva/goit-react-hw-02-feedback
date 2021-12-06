export const onLeaveFeedback = state => {
  state.setState(prevState => {
    return {
      state: prevState.state + 1,
    };
  });
};
console.log(onLeaveFeedback);
