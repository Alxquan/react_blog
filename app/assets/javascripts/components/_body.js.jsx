var Body = React.createClass({
  handleSubmit(item) {
    var newState= this.state.items.concat(item);
    this.setState({items: newState})
  },

  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit} />
        <AllItems items={this.state.items} />
      </div>
    )
  }
});
