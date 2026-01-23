"use client";
import { useState, useEffect, useRef, useCallback } from "react";

export const useScrollVisibility = (hideDelay = 150) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Check if at top
    setIsAtTop(currentScrollY < 100);
    
    // Hide immediately when scrolling
    if (currentScrollY !== lastScrollY.current) {
      setIsVisible(false);
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Show again after user stops scrolling
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, hideDelay);
    }
    
    lastScrollY.current = currentScrollY;
  }, [hideDelay]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  return { isVisible, isAtTop };
};
