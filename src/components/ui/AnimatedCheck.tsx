import { motion } from "framer-motion";

export function AnimatedCheck() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-sky-300/40 bg-sky-300/10"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-3.5 w-3.5"
        aria-hidden="true"
      >
        <motion.path
          d="M5 12.5L9.2 16.5L19 7"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-sky-300"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
        />
      </svg>
    </motion.div>
  );
}
