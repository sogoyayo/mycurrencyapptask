type ErrorNotificationProps = {
  message: string;
  retryFunction?: () => void;
  goBack?: boolean;
};

export const ErrorNotification = ({
  message,
  retryFunction,
  goBack,
}: ErrorNotificationProps) => (
  <div className="text-center py-5">
    <p className="text-red-500">{message}</p>
    {goBack && (
      <button onClick={() => window.history.back()} className="btn btn-primary">
        Go Back
      </button>
    )}
    {retryFunction && (
      <button onClick={retryFunction} className="btn btn-primary">
        Retry
      </button>
    )}
  </div>
);
