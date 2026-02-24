import { createRoot } from "react-dom/client"; //You are importing the function React uses to show things on the screen.
//Before React 18, apps used ReactDOM.render(). //This function builds the “React root” — the main container where the whole app lives.
//basically: “Make a place where React can live and update the UI.”

import App from "./App.tsx"; //This loads your top-level React component. 
//App.tsx is the first component that gets rendered. //Inside App, you will place your pages, routes, UI, etc.

import "./index.css"; //This loads global CSS for your entire React app.
//“Hey Vite, please load this CSS file so my whole React app has these styles.”
//It is the same as adding a <link> tag in normal HTML.
//React just uses a different method because it bundles everything through JavaScript.

createRoot(document.getElementById("root")!).render(<App />);
//1) Find the "root" element in the HTML file.
//<div id="root"></div>
//This div starts empty, but React will fill it with content.
//So document.getElementById("root") finds that element.

//2)The exclamation mark (!) tells TypeScript that you 
//are sure this element exists and is not null.

//3)createRoot(...) creates the React root inside that element
//It initializes the React rendering system.
//React needs a place to manage all rendering updates — this creates that place.

//4).render(<App />) tells React to render the <App /> component.
//This line inserts your App component into the #root div.
//From here, React controls the UI.

//SUMMARY:
//main.tsx loads React; Loads the App component; finds the root HTML element; 
//creates a React root; and tells React to render the App component inside that root.
//Without it → nothing appears on screen.