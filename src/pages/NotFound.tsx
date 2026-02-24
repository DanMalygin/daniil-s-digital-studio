// Importing useLocation from react-router-dom to access the current URL path
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

// Importing useEffect from React to run side effects when the component renders
import { useEffect } from "react";

const NotFound = () => {
  // useLocation() gives information about the current route (e.g., pathname)
  const location = useLocation();

  // useEffect runs whenever location.pathname changes
  useEffect(() => {
    // Logging a custom 404 error message when the user visits an unknown route
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]); // Dependency ensures the effect runs on path change only

  return (
    // Outer wrapper: centers content both vertically and horizontally
    <div className="flex min-h-screen items-center justify-center bg-muted">
      {/* Inner container: aligns all text in the center */}
      <div className="text-center">
        {/* Large bold "404" heading */}
        <h1 className="mb-4 text-4xl font-bold">404</h1>

        {/* Subtext explaining that the page doesn't exist */}
        <p className="mb-4 text-xl text-muted-foreground">
          Oops! Page not found
        </p>

        {/* Link that takes the user back to the homepage */}
        <Link to="/" className="text-primary underline hover:text-primary/90">
            Return to Home
        </Link>

      </div>
    </div>
  );
};

// Exporting the NotFound component so it can be used by the router
export default NotFound;
