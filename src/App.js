import {React} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import AddAlbum from './components/AddAlbum';
import NoPage from './components/NoPage';
import AlbumDetails from './components/AlbumDetails';



function App() {
  
  
  // function fetchAlbums() {
  //   this.setState({ loading: true }, () => {
  //     fetch("http://localhost:3000/albums").then(res => res.json()).then(result => this.setState({
  //       loading: false,
  //       alldata: result
  //     })).catch(console.log);
  //   });
  // }  

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />}/>
          <Route path="addAlbum" element={<AddAlbum />}/>
          <Route path="albums/:id" element={<AlbumDetails />} />
          <Route path="*" element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
