import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center space-y-5">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can't find that page.</p>

        <Button>
          <Link to={routes.home}>Go Back Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
