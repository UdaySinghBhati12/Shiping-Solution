import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Hero from "./Hero";
import Features from "./Features";
import Service from "./Service";
import Content from "./Content";
import Contact from "./Contact";

const Header = () => {
  return (
    <Router>
      <div>
        <header className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <img src= "https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?size=626&ext=jpg&ga=GA1.2.1486710708.1691737541&semt=ais" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24"/>
              {/* <svg xmlns="http://www.w3.org/2005/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg> */}
              <span className="ml-3 text-xl">Shipping Solution</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link to={'/Hero'} class="mr-5 hover:text-gray-900"> Home </Link>
                <Link to={'/Features'} class="mr-5 hover:text-gray-900">About</Link>
                <Link to={'/Service'} class="mr-5 hover:text-gray-900">Service</Link>
                <Link to={'/Content'} class="mr-5 hover:text-gray-900">Blog</Link>
                <Link to={'/Contact'} class="mr-5 hover:text-gray-900">Contact</Link>
            </nav>
            <hr />
            <Switch>
              {/* <Route exact path='/Hero' component={Hero} /> */}
              <Route exact path="/Features" component={Features} />
              <Route exact path='/Service' component={Service} />
              <Route exact path='/Content' component={Content} />
              <Route exact path='/Contact' component={Contact} />
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default Header;

// import React from "react"
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



// import Hero from "./Hero"
// import Features from "./Features"
// import Service from "./Service"
// import Content from "./Content"
// import Contact from "./Contact"

// const Header = () => {
//   return (
//     <Router>
//     <div>
//         <header class="text-gray-400 bg-gray-900 body-font">
//   <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg>
//       <span class="ml-3 text-xl">Shipping Solution</span>
//     </a>
//     <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
//       {/* <a  class="mr-10 hover:text-white" >Home</a>
//       <a href = "/components/Features.js" class="mr-10 hover:text-white" >About</a>
//       <a href ="/components/Service.js" class="mr-10 hover:text-white">Service</a>
//       <a href= "/components/Content.js"class="mr-10 hover:text-white">Blog</a>
//       <a href= "/components/Contact.js" class="mr-10 hover:text-white">Contact</a> */}
      
//       <ul className="navbar-nav mr-auto">
//             <li><Link to={'/Hero'} className="nav-link"> Home </Link></li>
            
//             <li><Link to={'/Features'} className="nav-link">About</Link></li>
//             <li><Link to={'/Service'} className="nav-link">Service</Link></li>
//             <li><Link to={'/Content'} className="nav-link">Blog</Link></li>
//             <li><Link to={'/Contact'} className="nav-link">Contact</Link></li>
//           </ul>
//     </nav>
//     <hr />
//           <Switch>
//               <Route exact path='/Hero' component={Hero} />
//               <Route exact path="/Features" components={Features}/>
//               <Route path='/Service' component={Service} />
//               <Route path='/Content' component={Content} />
//               <Route path='/Contact' component={Contact} />
              
//           </Switch>
   
     
//   </div>
// </header>
// </div>
// </Router>
//   )
// }

// export default Header;
