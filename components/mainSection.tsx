import React from "react";
import SectionHeader from "./sectionHeader";
import ProductGrid from "./productGrid";
import SectionFooter from "./sectionFooter";

const MainSection = () => {
  return (
    <main>
      <section >
          <SectionHeader />
          <ProductGrid />
          <SectionFooter/>
      </section>
    </main>
  );
};

export default MainSection;
