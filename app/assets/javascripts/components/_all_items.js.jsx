var AllItems = React.createClass({
  getInitialState() {
    return { items: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
    console.log('Component mounted');
  },
  render() {
    return (
      <div>
        <h3>{item.name}</h3>
         <p>{item.description}</p>
         </div>
        )
       });
       return(
         <div>
           {items}
         </div>
        )
});
