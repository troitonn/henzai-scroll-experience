import React, { useState, useEffect } from "react";

const sections = [
  { id: "mobilidade", label: "Mobilidade" },
  { id: "hub-condominios", label: "Hub Condomínios" },
  { id: "climatizacao", label: "Climatização" },
];

const ServicesNavigation: React.FC = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-[72px] z-40 bg-card/95 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto px-4 flex justify-center gap-2 md:gap-6 overflow-x-auto">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() =>
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className={`font-gantari font-medium text-sm md:text-base px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
              active === id
                ? "bg-henzai-terracota text-white shadow-md"
                : "text-muted-foreground hover:text-henzai-terracota hover:bg-henzai-terracota/10"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default ServicesNavigation;
