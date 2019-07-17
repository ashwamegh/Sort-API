import React, {Component} from 'react';

 
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

      }
      
      handleChange(e) {
        this.setState({
            query: e.target.value
        });
      }
      
      handleSubmit(e) {
          e.preventDefault();
          this.props.searchHandler(this.state);
          this.setState({
            query: ''
          })
        // console.log(this.props)
      }

      render() {
        return (
          <div>
          {/* <form onSubmit={this.handleSubmit}> */}
            <label htmlFor="filter">Filter by Worker name: </label>
            <input 
                type="text" 
                id="filter" 
                value={this.state.query} 
                onChange={this.handleChange}
                placeholder="Search worker name"
                />
            {/* </form> */}
            {/* <button>Search</button> */}
          </div>
          )
      }
    }

export default Search;