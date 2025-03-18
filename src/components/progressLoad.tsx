'use client'
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Progress } from './ui/progress';

const ProgressLoad = () => {
  const [progress, setProgress] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const [currentPathname, setCurrentPathname] = useState(pathname);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let loadCompleteTimeout: NodeJS.Timeout;

    const startProgress = () => {
      setIsNavigating(true);
      setProgress(0);
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          // Gradually increase progress up to 90%
          if (prev >= 90) {
            clearInterval(progressInterval);
            return prev;
          }
          return prev + Math.random() * 10; // Increment by 0-10%
        });
      }, 200); // Update progress every 200ms

      // Fallback timeout to ensure progress bar closes
      loadCompleteTimeout = setTimeout(() => {
        completeProgress();
      }, 5000); // 5 seconds max loading time
    };

    const completeProgress = () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
      
      if (loadCompleteTimeout) {
        clearTimeout(loadCompleteTimeout);
      }

      setProgress(100); // Set progress to 100% on completion
      setTimeout(() => {
        setIsNavigating(false); // Hide the progress bar
        setProgress(0); // Reset for the next navigation
      }, 500); // Brief delay to show 100% before hiding
    };

    // Handle page load complete
    const handlePageLoadComplete = () => {
      completeProgress();
    };

    // Check if pathname has changed
    if (pathname !== currentPathname) {
      startProgress();
      setCurrentPathname(pathname);

      // Add event listener for page load
      window.addEventListener('load', handlePageLoadComplete);

      // If using Next.js app router, also listen for readyState
      if (document.readyState === 'complete') {
        handlePageLoadComplete();
      } else {
        document.addEventListener('readystatechange', (event) => {
          if (document.readyState === 'complete') {
            handlePageLoadComplete();
          }
        });
      }
    }

    // Clean up event listeners and intervals
    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
      if (loadCompleteTimeout) {
        clearTimeout(loadCompleteTimeout);
      }
      window.removeEventListener('load', handlePageLoadComplete);
      document.removeEventListener('readystatechange', handlePageLoadComplete);
    };
  }, [pathname, currentPathname]);

  return (
    <>
      {isNavigating ? (
        <div className="fixed top-0 left-0 w-full z-50">
          <Progress value={progress} className="h-1 animate-pulse" />
        </div>
      ):(
        <div className="h-1 w-full fixed z-50"></div>
      )}
    </>
  )
}

export default ProgressLoad