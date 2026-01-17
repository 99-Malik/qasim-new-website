// Brand Configuration System
// Each brand defines its colors, logo, and styling preferences

export const brandConfigs = {
  Bosch: {
    name: "Bosch",
    primary: "#F80000",
    secondary: "#2D3033",
    accent: "#F0F1F2",
    logo: {
      type: "svg",
      component: "bosch",
      path: "/bosch.svg",
      sizes: {
        desktop: { width: "w-28 sm:w-36 lg:w-44" },
        mobile: { width: "w-24 sm:w-28" },
        image: { width: 140, height: 35 }
      }
    },
    colors: {
      primary: "text-boschPrimary",
      bg: "bg-boschPrimary",
      border: "border-boschPrimary",
      hover: "hover:bg-boschPrimary/10",
      gradient: "from-boschPrimary/20 to-boschPrimary/5",
      gradientFull: "from-boschPrimary to-boschPrimary/80",
      blob: "bg-boschBlob",
      text: "text-boschPrimary",
      light: "bg-boschPrimary/10",
      medium: "bg-boschPrimary/20"
    }
  },
  Samsung: {
    name: "Samsung",
    primary: "#000000",
    secondary: "#FFFFFF",
    accent: "#F7F7F7",
    logo: {
      type: "svg",
      component: "samsung",
      path: "/samsung.svg",
      sizes: {
        desktop: { width: "w-28 sm:w-36 lg:w-44" },
        mobile: { width: "w-24 sm:w-28" },
        image: { width: 140, height: 35 }
      }
    },
    colors: {
      primary: "text-samsungPrimary",
      bg: "bg-samsungPrimary",
      border: "border-samsungPrimary",
      hover: "hover:bg-samsungPrimary/10",
      gradient: "from-samsungPrimary/20 to-samsungPrimary/5",
      gradientFull: "from-samsungPrimary to-samsungPrimary/80",
      blob: "bg-samsungBlob",
      text: "text-samsungPrimary",
      light: "bg-samsungPrimary/10",
      medium: "bg-samsungPrimary/20"
    }
  },
  Siemens: {
    name: "Siemens",
    primary: "#019997",
    secondary: "#FFFFFF",
    accent: "#F0F4F9",
    logo: {
      type: "svg",
      component: "siemens",
      path: "/siemens.svg",
      sizes: {
        desktop: { width: "w-32 sm:w-40 lg:w-56" },
        mobile: { width: "w-32 sm:w-28" },
        image: { width: 200, height: 50 }
      }
    },
    colors: {
      primary: "text-siemensPrimary",
      bg: "bg-siemensPrimary",
      border: "border-siemensPrimary",
      hover: "hover:bg-siemensPrimary/10",
      gradient: "from-siemensPrimary/20 to-siemensPrimary/5",
      gradientFull: "from-siemensPrimary to-siemensPrimary/80",
      blob: "bg-siemensBlob",
      text: "text-siemensPrimary",
      light: "bg-siemensPrimary/10",
      medium: "bg-siemensPrimary/20"
    }
  },
  LG: {
    name: "LG",
    primary: "#A50034",
    secondary: "#000000",
    accent: "#F6F3EB",
    logo: {
      type: "svg",
      component: "lg",
      path: "/lg.svg",
      sizes: {
        desktop: { width: "w-24 sm:w-32 lg:w-40" },
        mobile: { width: "w-20 sm:w-24" },
        image: { width: 100, height: 30 }
      }
    },
    colors: {
      primary: "text-lgPrimary",
      bg: "bg-lgPrimary",
      border: "border-lgPrimary",
      hover: "hover:bg-lgPrimary/10",
      gradient: "from-lgPrimary/20 to-lgPrimary/5",
      gradientFull: "from-lgPrimary to-lgPrimary/80",
      blob: "bg-lgBlob",
      text: "text-lgPrimary",
      light: "bg-lgPrimary/10",
      medium: "bg-lgPrimary/20"
    }
  }
};

// Helper function to get brand config
export function getBrandConfig(company) {
  return brandConfigs[company] || null;
}

// Helper function to get brand colors
export function getBrandColors(company) {
  const config = getBrandConfig(company);
  return config ? config.colors : {
    primary: "text-primary",
    bg: "bg-primary",
    border: "border-primary",
    hover: "hover:bg-primary/10",
    gradient: "from-primary/20 to-primary/5",
    gradientFull: "from-primary to-primary/80",
    blob: "bg-graybg",
    text: "text-primary",
    light: "bg-primary/10",
    medium: "bg-primary/20"
  };
}

