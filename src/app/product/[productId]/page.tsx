import items from "@/components/items";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;

  if (!productId || Array.isArray(productId)) return <p>Loading...</p>;

  const item = items.find((i) => i.id.toString() === productId);
  if (!item) return <p>Product not found</p>;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 shadow-lg w-auto h-auto   p-4 gap-4">
        <div className="w-auto">
          <Image
            src={item.img}
            alt={item.title}
            width={250}
            height={250}
            className="rounded-lg w-full"
          />
        </div>

        
      </div>
      <div className="card bg-base-100 shadow-lg w-80 h-120  p-4 gap-4">
      <div className="w-2/3 flex flex-col justify-between">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-gray-500">Category: {item.category}</p>
          <p className="text-gray-700 mt-2">{item.description}</p>
          <div className="flex gap-4">
            <p>Quantity: {item.quantity}</p>
            <p className="ml-auto">Price: {item.price}</p>
          </div>

          <div className="mt-4 ml-auto flex gap-2">
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-error">Delete</button>
          </div>
        </div>

      </div>
    </div>
  );
}
