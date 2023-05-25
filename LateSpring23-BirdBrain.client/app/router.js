import { AboutController } from "./controllers/AboutController.js";
import { BirdsController } from "./controllers/BirdsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { HomeView } from "./views/HomeView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  // NOTE this is our home page... the path: '' will be the default view mounted when we open the page
  // NOTE whatever you want to see/show first goes here
  {
    path: '',
    controller: BirdsController,
    view: HomeView
  },
  //  `
  //   <div class="card">
  //     <div class="card-body">
  //       <p>Home Page</p>
  //       <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
  //     </div>
  //   </div>
  //   `


  {
    // NOTE 'path' refers to the URL of our webpage
    path: '#/about',
    controller: [AboutController, ValuesController],
    // NOTE whatever is in the view here...gets drawn to the 'router-view' id in our HTML
    // NOTE if you don't want to mess around with views at all, just comment out this property
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */