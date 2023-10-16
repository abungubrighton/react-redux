
import './App.css';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import { Provider } from 'react-redux';
// Its the provider that connects the two together and makes available the data

function App() {
    return ( 
        <Provider store={store}>
            <div className = "App" >
                <PostForm />
                <hr />
                <Posts/>
            </div>

        </Provider>
    );
}

export default App;