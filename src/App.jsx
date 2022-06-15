import React from 'react'
import {Routes,Route} from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PgNotFound from './components/PgNotFound';
import Users from './components/Users';

const App = () => (
  <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/users" element={<Users />}/>
      <Route path="*" element={<PgNotFound />}/>
    </Routes>
  </div>
  )

export default App



// import React,{lazy, Suspense} from 'react'
// import {Routes,Route} from 'react-router-dom'
// import NavBar from './components/NavBar';

// const Home=lazy(()=>import ('./components/Home')) 
// const About=lazy(()=>import ('./components/About')) 
// const PgNotFound=lazy(()=>import ('./components/PgNotFound')) 

// const App = () => (
//   <div>
//     <NavBar />
//     <Suspense fallback={<div>Loading...</div>}>
//     <Routes>
//       <Route path="/" element={<Home />}/>
//       <Route path="/about" element={<About />}/>
//       <Route path="*" element={<PgNotFound />}/>

//     </Routes>
//     </Suspense>
//   </div>
//   )
 
// export default App
