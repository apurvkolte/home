import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setHovered(true);
        const handleMouseLeave = () => setHovered(false);

        // Listen for hover events on all interactive elements
        const hoverTargets = document.querySelectorAll("a, button, .hover-target");
        hoverTargets.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            hoverTargets.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 rounded-full bg-transparent border-[1px] pointer-events-none mix-blend-difference"
            animate={{
                x: position.x - 12,
                y: position.y - 12,
                scale: hovered ? 2 : 1
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
    );
};

export default AnimatedCursor;
