// import React
import React,{Component} from 'react' ;
import Movies from './componenets/Movies' ;

class App extends Component {
  
  state = {
    movies : []
  }
  
  render() {
    return(
      <Movies movies={this.state.movies}></Movies>
    )
  }

  componentDidMount() {
    fetch('http://localhost:3000/movie/list')
        .then(res => res.json())
        .then((data) => {
          this.setState({ movies: data })
        })
        .catch(console.log()) ;
  }
}

export default App;
