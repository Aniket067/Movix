import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Banner from './components/Banner'
import Footer from './components/Footer'

const App = () => {
  let [watchlist,setWatchList]=useState([])

  let handelWatchList =(movieobj)=>{
         let newWatchList =[...watchlist,movieobj]
         localStorage.setItem('moviesApp',JSON.stringify (newWatchList))
         setWatchList(newWatchList)
         console.log(newWatchList)
  }
  let handleWatchListRemove =(movieobj)=>{
    let filteredWatchList = watchlist.filter((movie)=>{
      return movie.id != movieobj.id
    })
    setWatchList(filteredWatchList)
   
  }
  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('moviesApp');
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<> <Banner/> <Movies watchlist={watchlist}handleWatchList={handelWatchList} handleWatchListRemove={handleWatchListRemove}/></> }/>
          <Route path='/watchlist' element={  <Watchlist watchlist={watchlist} setWatchList={setWatchList} />}/>
         Banner
         
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App