import { useState, useEffect, useCallback } from "react";
import { RecentProduct } from "../types/perfume";

export function useRecentProducts() {
  const [recent, setRecent] = useState<RecentProduct[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("recentProducts");
    if (stored) {
      setRecent(JSON.parse(stored));
    }
  }, []);

  const addRecentProduct = useCallback((product: RecentProduct) => {
    setRecent((prev) => {
      const filtered = prev.filter((p) => p.id !== product.id);
      const updated = [product, ...filtered].slice(0, 10);
      localStorage.setItem("recentProducts", JSON.stringify(updated));
      return updated;
    });
  }, []);

  return { recent, addRecentProduct };
}
