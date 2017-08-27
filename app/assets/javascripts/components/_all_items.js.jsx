var AllItems = React.createClass({
  handleEdit(){
    if(this.state.editable) {
      var name = this.refs.name.value;
      var id = this.props.item.id;
      var description = this.refs.description.value;
      var item = {id: id, name: name, description: description};
      this.props.handleUpdate(item);
    }
    this.setState({editable: !this.state.editable })
  },

  handleDelete() {
    this.props.handleDelete();
  },

  onUpdate(item){
    this.props.onUpdate(item)
  },

  render() {
    var items = this.props.items.map((item) => {
      return(
        <div key={item.id}>
         <Item item={item}
                    handleDelete={this.handleDelete.bind(this, item.id)}
                    handleEdit={this.handleEdit}/>
        </div>
      )
    });

    return (
      <div>
        {items}
      </div>
    )
  }
});
