
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.querySelector('.container'));

/*
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            videos: [],
            selected: null
        };

        this.videoSearch('surf');
    }

    videoSearch(term){
        YTSearch({key: APIKEY, term: term},(videos)=>{
            this.setState({videos: videos,
                selected: videos[0]});
        });
    }



    render (){
        return <div>
            <About/>

        </div>;
    }
}

<VideoDetail video={this.state.selected}/>
<VideoList onVideoSelect={selected=>this.setState({selected})}
videos={this.state.videos} />
**/

