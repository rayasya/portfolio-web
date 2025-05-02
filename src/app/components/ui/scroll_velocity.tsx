import React, { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

// Interfaces
interface VelocityMapping {
  input: [number, number];
  output: [number, number];
}

interface VelocityItemProps {
  children: React.ReactNode;
  baseVelocity: number;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
  spacing?: string;
}

interface ScrollVelocityProps {
  scrollContainerRef?: React.RefObject<HTMLElement>;
  items: React.ReactNode[];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  velocityMapping?: VelocityMapping;
  parallaxClassName?: string;
  scrollerClassName?: string;
  parallaxStyle?: React.CSSProperties;
  scrollerStyle?: React.CSSProperties;
  spacing?: string;
  reverseDirection?: boolean;
}

// Updated interfaces for GlassIcons
export interface GlassIconsItem {
  // Support both React elements and image sources
  icon?: React.ReactElement;
  iconSrc?: string;
  iconAlt?: string;
  color: string;
  label: string;
  customClass?: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
  iconSize?: string; // New prop for controlling icon size
  // Tambahkan prop untuk mengatur jumlah kolom grid
  gridCols?: string;
  // Prop untuk mengatur ukuran container
  containerClassName?: string;
}

export interface ScrollVelocityWithGlassIconsProps {
  iconSets: Array<{
    items: GlassIconsItem[];
    className?: string;
    iconSize?: string;
    gridCols?: string;
    containerClassName?: string;
  }>;
  scrollVelocityProps?: Omit<ScrollVelocityProps, "items">;
}

export interface ScrollVelocityTextProps {
  texts: string[];
  scrollVelocityProps?: Omit<ScrollVelocityProps, "items">;
}

function useElementWidth(ref: React.RefObject<HTMLElement | null>): number {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

// Modified GlassIcons component with PNG support and flexible grid
export const GlassIcons: React.FC<GlassIconsProps> = ({
  items,
  className = "",
  iconSize = "1.5em", // Default size matches the original
  // Default grid setting dirubah untuk menampilkan semua ikon dalam 1 baris
  gridCols = "grid-flow-col auto-cols-max",
  // Tambahkan container class untuk mengatur container ikon
  containerClassName = "",
}) => {
  const gradientMapping: Record<string, string> = {
    blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
    purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
    red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
    indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
    orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
    green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
    yellow: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
    pink: "linear-gradient(hsl(333, 90%, 50%), hsl(318, 90%, 50%))",
    teal: "linear-gradient(hsl(173, 90%, 40%), hsl(158, 90%, 40%))",
    white: "linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 90%))",
  };

  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  // Render different icon content based on whether we have a React element or an image source
  const renderIconContent = (item: GlassIconsItem) => {
    if (item.icon) {
      // If a React element icon is provided, use it directly
      return item.icon;
    } else if (item.iconSrc) {
      // If an image source is provided, render an img tag
      return (
        <img
          src={item.iconSrc}
          alt={item.iconAlt || item.label}
          style={{
            width: iconSize,
            height: iconSize,
            objectFit: "contain",
          }}
        />
      );
    }
    // Fallback if neither is provided
    return null;
  };

  return (
    <div
      className={`grid ${gridCols} gap-[4em] mx-[2em] py-[2em] overflow-visible ${containerClassName} ${
        className || ""
      }`}
    >
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          aria-label={item.label}
          className={`relative bg-transparent outline-none w-[4.5em] h-[4.5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group ${
            item.customClass || ""
          }`}
        >
          {/* Back layer */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
            style={{
              ...getBackgroundStyle(item.color),
              boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
            }}
          ></span>

          {/* Front layer */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:[transform:translateZ(2em)]"
            style={{
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
            }}
          >
            <span
              className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center"
              aria-hidden="true"
            >
              {renderIconContent(item)}
            </span>
          </span>

          {/* Label */}
          <span className="absolute top-full left-0 right-0 text-center whitespace-nowrap leading-[2] text-xs opacity-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] translate-y-0 group-hover:opacity-100 group-hover:[transform:translateY(20%)]">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

// ScrollVelocity component
export const ScrollVelocity: React.FC<ScrollVelocityProps> = ({
  scrollContainerRef,
  items = [],
  velocity = 100,
  className = "",
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  velocityMapping = { input: [0, 1000], output: [0, 5] },
  parallaxClassName = "",
  scrollerClassName = "",
  parallaxStyle,
  scrollerStyle,
  spacing = "",
  reverseDirection = false,
}) => {
  function VelocityItem({
    children,
    baseVelocity = velocity,
    scrollContainerRef,
    className = "",
    damping,
    stiffness,
    numCopies,
    velocityMapping,
    parallaxClassName = "",
    scrollerClassName = "",
    parallaxStyle,
    scrollerStyle,
    spacing = "",
  }: VelocityItemProps) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef
      ? { container: scrollContainerRef }
      : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: damping ?? 50,
      stiffness: stiffness ?? 400,
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping?.input || [0, 1000],
      velocityMapping?.output || [0, 5],
      { clamp: false }
    );

    // Using div instead of span for better component support
    const copyRef = useRef<HTMLDivElement>(null);
    const copyWidth = useElementWidth(copyRef);

    // Keep the wrap function exactly as in the original
    function wrap(min: number, max: number, v: number): number {
      const range = max - min;
      const mod = (((v - min) % range) + range) % range;
      return mod + min;
    }

    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px";
      return `${wrap(-copyWidth, 0, v)}px`;
    });

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    const copies = [];
    for (let i = 0; i < numCopies!; i++) {
      copies.push(
        <div
          className={`flex-shrink-0 ${className} ${spacing}`}
          key={i}
          ref={i === 0 ? copyRef : null}
        >
          {children}
        </div>
      );
    }

    return (
      <div
        className={`${parallaxClassName} relative overflow-hidden`}
        style={parallaxStyle}
      >
        <motion.div
          className={`${scrollerClassName} flex whitespace-nowrap items-center`}
          style={{ x, ...scrollerStyle }}
        >
          {copies}
        </motion.div>
      </div>
    );
  }

  return (
    <section>
      {items.map((item: React.ReactNode, index: number) => (
        <VelocityItem
          key={index}
          className={className}
          baseVelocity={
            (reverseDirection ? -1 : 1) *
            (index % 2 !== 0 ? -velocity : velocity)
          }
          scrollContainerRef={scrollContainerRef}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          velocityMapping={velocityMapping}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          parallaxStyle={parallaxStyle}
          scrollerStyle={scrollerStyle}
          spacing={spacing}
        >
          {item}
        </VelocityItem>
      ))}
    </section>
  );
};

// Helper component for using ScrollVelocity with text (for backwards compatibility)
export const ScrollVelocityText: React.FC<ScrollVelocityTextProps> = ({
  texts,
  scrollVelocityProps,
}) => {
  const textItems = texts.map((text, idx) => (
    <span
      key={idx}
      className="text-center font-sans text-4xl font-bold tracking-[-0.02em] drop-shadow md:text-[5rem] md:leading-[5rem]"
    >
      {text}&nbsp;
    </span>
  ));

  return <ScrollVelocity items={textItems} {...scrollVelocityProps} />;
};

// Helper component for using ScrollVelocity with GlassIcons
export const ScrollVelocityWithGlassIcons: React.FC<
  ScrollVelocityWithGlassIconsProps
> = ({ iconSets, scrollVelocityProps }) => {
  const iconItems = iconSets.map((set, idx) => (
    <GlassIcons
      key={idx}
      items={set.items}
      className={set.className}
      iconSize={set.iconSize}
      gridCols={set.gridCols}
      containerClassName={set.containerClassName}
    />
  ));

  return <ScrollVelocity items={iconItems} {...scrollVelocityProps} />;
};

export default ScrollVelocity;
