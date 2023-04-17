const globalVariants = {
  containerVariants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  },

  scrollUpVariants: {
    hidden: {
      y: 500,
    },
    visible: {
      y: 0,
      transition: {
        duration: 1.5,
        type: "spring",
        stiffness: 20,
      },
    },
  },
  fadeZoomInVariants: {
    hidden: {
      scale: 0.5,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
        type: "tween",
      },
    },
  },
};

const heroVariants = {
  containerVariants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1.5,
      },
    },
  },
  childrenVariants: {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  },
  leftButtonVariants: {
    hidden: {
      x: -300,
    },
    visible: {
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  },
  rightButtonVariants: {
    hidden: {
      x: 300,
    },
    visible: {
      x: 0,
      transition: {
        duration: 1.5,
      },
    },
  },
};

export { globalVariants, heroVariants };
