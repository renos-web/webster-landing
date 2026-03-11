import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile on mount and on resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const togglePlayPause = () => {
    const video = isMobile ? mobileVideoRef.current : videoRef.current;
    if (video) {
      if (video.paused) {
        video.play().catch(error => console.error('Error playing video:', error));
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  // Handle video play state
  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  // Sync initial play state between videos when switching between mobile/desktop
  useEffect(() => {
    const video = isMobile ? mobileVideoRef.current : videoRef.current;
    if (!video) return;
    
    if (isPlaying) {
      video.play().catch(error => console.error('Auto-play failed:', error));
    } else {
      video.pause();
    }
  }, [isMobile, isPlaying]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop Video */}
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          onPlay={handlePlay}
          onPause={handlePause}
        >
          <source src="/images/fondo-desktop-HD.mp4" type="video/mp4" />
        </video>
        
        {/* Mobile Video */}
        <video 
          ref={mobileVideoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="md:hidden absolute inset-0 w-full h-full object-cover"
          onPlay={handlePlay}
          onPause={handlePause}
          preload="auto"
        >
          <source src="/images/fondo-movil-HD.mp4" type="video/mp4" />
        </video>
      </div>
      
      <Button 
        onClick={togglePlayPause}
        variant="ghost"
        size="icon"
        className="absolute bottom-6 right-6 bg-black/40 hover:bg-black/60 text-white rounded-full h-12 w-12 flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-lg transition-all hover:scale-110 z-10"
        aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
      >
        {isPlaying ? (
          <Pause className="h-6 w-6" />
        ) : (
          <Play className="h-6 w-6 ml-1" />
        )}
      </Button>
    </section>
  );
};

export default Hero;