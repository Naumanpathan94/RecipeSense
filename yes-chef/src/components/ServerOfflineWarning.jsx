import { useState, useEffect } from 'react';

const ServerOfflineWarning = () => {
  const [isServerOnline, setIsServerOnline] = useState(true);

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        // Replace this URL with your actual backend health check endpoint
        const response = await fetch('http://localhost:5000/health');
        setIsServerOnline(response.ok);
      } catch (error) {
        setIsServerOnline(false);
      }
    };

    // Check immediately when component mounts
    checkServerStatus();

    // Check every 30 seconds
    const interval = setInterval(checkServerStatus, 30000);

    return () => clearInterval(interval);
  }, []);

  if (isServerOnline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-amber-500 text-white px-4 py-3 shadow-lg">
        <div className="container mx-auto flex items-center justify-center">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span className="font-medium">
            ML Server is currently offline to save resources. Recipe recommendations are unavailable.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServerOfflineWarning; 