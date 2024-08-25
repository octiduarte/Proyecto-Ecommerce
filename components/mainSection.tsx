import React from "react";
import SectionHeader from "./sectionHeader";
import ProductGrid from "./productGrid";
import SectionFooter from "./sectionFooter";

const MainSection = () => {
  return (
    <main  >
      <div>
        <section  >
          <SectionHeader />
        </section>
        <section>
          <ProductGrid />
        </section>
      </div>
    </main>
  );
};

export default MainSection;
