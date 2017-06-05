import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyBBB93xpLMhtPLkEJ4EHpIGn664nELFfk0'

// create a new component that shoud produce some HTML
// this const App is setting a function and is returning JSX: html looking code which is actually JS
// we use const and not var because we do not expect this to change (we do not do "App = 5" lateron or so)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('scubadiving')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    )
  }
}

// take this component's generated HTML and put it into the page (in the DOM)
// the component App is rendered in the 'container' class div element in index.html
ReactDOM.render(<App />, document.querySelector('.container'))
