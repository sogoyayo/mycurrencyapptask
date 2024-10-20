import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { TriangleAlert } from "lucide-react";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-165px)]">
      <div className="flex flex-col justify-center items-center space-y-4">
        <div className="mb-4">
          <TriangleAlert className="size-20 text-primary-red" />
        </div>
        <h1 className="text-3xl font-semibold text-primary-red mb-2">
          Oops! Something Went Wrong.
        </h1>
        <p className="text-gray-600 text-center mb-4 max-w-[65ch]">
          We encountered an error - {error.message} Please go back home.
        </p>
        <Button variant={"danger"} onClick={resetErrorBoundary}>
          Go Home
        </Button>
      </div>
    </div>
  );
}

function AppErrorBoundary({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        navigate("/");
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

export default AppErrorBoundary;
