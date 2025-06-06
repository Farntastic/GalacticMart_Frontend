"use client";

import ProductDetails from "@/components/ProductDetails";
import { useParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

export default function ProductPage() {
  const params = useParams(); 
  const [productId, setProductId] = useState<string | null>(null);

  
  useEffect(() => {
    if (params?.productId) {
      setProductId(params.productId as string);
    }
  }, [params]);

  if (!productId) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <Suspense fallback={<p className="text-center text-gray-500">Loading...</p>}>
      <ProductDetails productId={productId} />
    </Suspense>
  );
}
