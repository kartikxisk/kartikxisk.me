"use client";
import { useState, useEffect } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { TextReveal, GradientText } from "@/components/ui/text-reveal";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, Phone, ChevronDown, Lightbulb } from "lucide-react";
import { useScrollVisibility } from "@/lib/hooks/use-scroll-visibility";
import { siteConfig } from "@/lib/data/site";

// Focus Light Component - Modern Stage Spotlight with Physics-based beam
const FocusLight = ({ 
  isOn, 
  position 
}: { 
  isOn: boolean; 
  position: 'left' | 'right';
}) => {
  const isLeft = position === 'left';

  return (
    <>
      {/* Light beam with physics - narrow at source, wide at target */}
      {isOn && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pointer-events-none absolute inset-0 z-0"
        >
          {/* SVG for precise cone shape */}
          <svg 
            className="absolute inset-0 h-full w-full" 
            style={{ overflow: 'visible' }}
            viewBox="0 0 1600 800"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Gradient that fades from light source to target */}
              <linearGradient 
                id={`beamGradient-${position}`} 
                x1={isLeft ? "0%" : "100%"} 
                y1="0%" 
                x2="50%" 
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(255, 250, 230, 0.2)" />
                <stop offset="20%" stopColor="rgba(250, 204, 21, 0.1)" />
                <stop offset="60%" stopColor="rgba(250, 204, 21, 0.04)" />
                <stop offset="100%" stopColor="rgba(250, 204, 21, 0)" />
              </linearGradient>
              
              {/* Heavy blur for soft volumetric look */}
              <filter id={`beamBlur-${position}`} x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
              </filter>
              
              <filter id={`beamBlur2-${position}`} x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
              </filter>
            </defs>
            
            {/* Outer glow cone - widest, most diffuse - pointing to center content */}
            <motion.path
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 0.8 }}
              d={isLeft 
                ? "M 80 70 Q 350 280, 550 480 L 850 480 Q 400 280, 80 70 Z"
                : "M 1520 70 Q 1250 280, 1050 480 L 750 480 Q 1200 280, 1520 70 Z"
              }
              fill={`url(#beamGradient-${position})`}
              filter={`url(#beamBlur-${position})`}
              style={{ transformOrigin: isLeft ? '80px 70px' : '1520px 70px' }}
            />
            
            {/* Inner brighter cone */}
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              d={isLeft 
                ? "M 80 70 Q 380 300, 600 450 L 800 450 Q 420 300, 80 70 Z"
                : "M 1520 70 Q 1120 300, 1000 450 L 800 450 Q 1100 300, 1520 70 Z"
              }
              fill="rgba(255, 248, 220, 0.06)"
              filter={`url(#beamBlur2-${position})`}
            />
            
            {/* Core bright line - the main visible beam */}
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              d={isLeft 
                ? "M 80 70 Q 400 320, 650 420 L 780 420 Q 430 320, 80 70 Z"
                : "M 1520 70 Q 1100 320, 950 420 L 820 420 Q 1070 320, 1520 70 Z"
              }
              fill="rgba(255, 255, 240, 0.05)"
              filter={`url(#beamBlur2-${position})`}
            />
          </svg>
        </motion.div>
      )}

      {/* Spotlight fixture */}
      <div className={`absolute top-0 z-50 flex flex-col items-center ${isLeft ? 'left-6 md:left-12' : 'right-6 md:right-12'}`}>
        {/* Ceiling mount */}
        <div className="h-2 w-16 rounded-b bg-neutral-800 shadow-md" />
        
        {/* Mount arm */}
        <div className="h-3 w-1 bg-gradient-to-b from-neutral-700 to-neutral-600" />
        
        {/* Light housing - angled toward center content */}
        <div 
          className="relative"
          style={{ transform: isLeft ? 'rotate(-45deg)' : 'rotate(45deg)' }}
        >
          {/* Housing body */}
          <div className="relative h-8 w-14 rounded-lg bg-gradient-to-b from-neutral-800 via-neutral-900 to-black shadow-xl">
            {/* Top detail */}
            <div className="absolute -top-1 left-2 right-2 w-1 rounded-t bg-neutral-700" />
            
            {/* Side ridges */}
            <div className="absolute left-1 top-1.5 h-5 w-[2px] rounded bg-neutral-700" />
            <div className="absolute right-1 top-1.5 h-5 w-[2px] rounded bg-neutral-700" />
          </div>
          
          {/* Lens housing - pointing downward toward center */}
          <div 
            className={`absolute -bottom-5 left-1/2 -translate-x-1/2 h-6 w-8 rounded-b-lg transition-all duration-300 ${
              isOn 
                ? 'bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-300 shadow-[0_8px_20px_8px_rgba(250,204,21,0.35)]' 
                : 'bg-gradient-to-b from-neutral-600 to-neutral-700'
            }`}
          >
            {/* Lens rings */}
            {isOn && (
              <>
                <div className="absolute inset-x-1 top-1 h-[2px] rounded bg-yellow-100/50" />
                <div className="absolute inset-x-2 top-2 h-[2px] rounded bg-white/30" />
              </>
            )}
          </div>
          
          {/* Barn doors on sides */}
          <div className="absolute -left-1 top-1 h-6 w-1 rounded bg-neutral-800" />
          <div className="absolute -right-1 top-1 h-6 w-1 rounded bg-neutral-800" />
        </div>
      </div>
    </>
  );
};

export const Hero = () => {
  const [lightsOn, setLightsOn] = useState(false);
  const { isVisible, isAtTop } = useScrollVisibility();

  // Keyboard shortcut to toggle lights (L key or Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'l' || e.key === 'L' || (!lightsOn && e.key === ' ')) {
        e.preventDefault();
        setLightsOn(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightsOn]);

  // Block scroll when lights are off
  useEffect(() => {
    if (lightsOn) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [lightsOn]);

  const roles = [...siteConfig.roles];

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Left Focus Light */}
      <FocusLight isOn={lightsOn} position="left" />
      
      {/* Right Focus Light */}
      <FocusLight isOn={lightsOn} position="right" />

      {/* Combined spotlight pool when lights are on */}
      {lightsOn && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2"
        >
          {/* Large ambient pool */}
          <div 
            className="absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 transition-all duration-500"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(250,204,21,0.1) 0%, rgba(250,204,21,0.04) 30%, rgba(250,204,21,0.01) 60%, transparent 80%)',
              filter: 'blur(50px)',
            }}
          />
          
          {/* Medium glow */}
          <div 
            className="absolute left-1/2 top-1/2 h-[450px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 transition-all duration-500"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,252,235,0.1) 0%, rgba(250,204,21,0.06) 40%, transparent 75%)',
              filter: 'blur(30px)',
            }}
          />
          
          {/* Center hotspot */}
          <div 
            className="absolute left-1/2 top-1/2 h-[250px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.06) 0%, rgba(255,250,220,0.04) 50%, transparent 80%)',
              filter: 'blur(20px)',
            }}
          />
        </motion.div>
      )}

      {/* Background gradient orbs */}
      <motion.div
        animate={{ opacity: lightsOn ? 0.1 : 0.02 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      </motion.div>

      {/* Light toggle button - only visible at top of page and not scrolling */}
      <AnimatePresence>
        {isAtTop && isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed left-1/2 top-6 z-[60] -translate-x-1/2 flex flex-col items-center"
          >
            {/* Pulsing glow ring when lights are off */}
            {!lightsOn && (
              <motion.div
                animate={{ 
                  opacity: [0, 0.6, 0],
                  scale: [1, 1.8, 2.2],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute inset-0 rounded-full bg-yellow-400/30 blur-md"
              />
            )}
            
            <motion.button
              onClick={() => setLightsOn(!lightsOn)}
              className={`relative rounded-full p-2 transition-all duration-300 ${
                lightsOn
                  ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:bg-yellow-500/30'
                  : 'bg-neutral-900/80 text-neutral-400 border border-white/10 hover:bg-neutral-800 hover:text-white backdrop-blur-sm'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={!lightsOn ? { 
                boxShadow: [
                  '0 0 0 0 rgba(250, 204, 21, 0)',
                  '0 0 20px 4px rgba(250, 204, 21, 0.3)',
                  '0 0 0 0 rgba(250, 204, 21, 0)'
                ]
              } : {}}
              transition={!lightsOn ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
            >
              <Lightbulb className={`h-4 w-4 ${lightsOn ? 'fill-yellow-400' : ''}`} />
            </motion.button>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: lightsOn ? 0 : 0.8 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-3 text-[10px] text-neutral-500 whitespace-nowrap"
            >
              Press <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 font-mono text-[9px]">L</kbd> or click
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content with opacity based on light */}
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: lightsOn ? 1 : 0.1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-lg text-neutral-400"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
            <TextReveal text="Kartik Kumar" delay={0.3} />
          </h1>

          {/* Role with FlipWords */}
          <div className="mb-8 flex h-12 items-center justify-center text-2xl md:text-3xl overflow-hidden">
            <span className="text-neutral-400">I&apos;m a </span>
            <span className="ml-2 overflow-hidden">
              <FlipWords words={roles} className="font-semibold" />
            </span>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-neutral-400"
          >
            3+ years of experience building{" "}
            <GradientText>scalable web applications</GradientText>, LMS solutions,
            and e-learning platforms with{" "}
            <GradientText>React.js & Next.js</GradientText>
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mb-12 flex items-center justify-center gap-4"
          >
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
              >
                <Github className="h-5 w-5 text-white" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100">
                  GitHub
                </span>
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
              >
                <Linkedin className="h-5 w-5 text-white" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100">
                  LinkedIn
                </span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group relative rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
              >
                <Mail className="h-5 w-5 text-white" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100">
                  Email
                </span>
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="group relative rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:border-white/20 hover:bg-white/10"
              >
                <Phone className="h-5 w-5 text-white" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-neutral-500 opacity-0 transition-opacity group-hover:opacity-100">
                  Call
                </span>
              </a>
            </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#experience"
              className="group relative overflow-hidden rounded-full bg-linear-to-r from-cyan-500 to-purple-500 px-8 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-transparent px-8 py-3 font-medium text-white transition-all hover:bg-white/5"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: lightsOn ? 1 : 0.1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-neutral-500"
        >
          <span className="mb-2 text-xs">Scroll Down</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
