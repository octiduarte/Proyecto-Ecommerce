// context/DataContext.tsx
'use client'
import React, { createContext, useContext, ReactNode } from 'react';

interface Store {
  name: string;
  logo: string;
  banner: string;
}

interface Product {
  product_id: number;
  image: string;
  name: string;
  price: number;
  category: string;
  description: string;
}

interface Data {
  store: Store;
  categories: string[];
  products: Product[];
}

interface DataContextType {
  data: Data;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ data: Data; children: ReactNode }> = ({ data, children }) => {
  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context.data;
};
export default useData;

