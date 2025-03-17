"use client"; 

export default function DeleteButton({ productId }: { productId: string }) {
  const handleDelete = async () => {
    const confirmDelete = confirm("⚠️ Are you sure you want to delete this product?");
    if (confirmDelete) {
      const res = await fetch(`http://127.0.0.1:8080/products/${productId}`, { method: "DELETE" });
      if (res.ok) {
        alert("✅ Product deleted successfully!");
        window.location.href = "/product"; 
      } else {
        alert("❌ Failed to delete product!");
      }
    }
  };

  return (
    <button className="btn btn-error flex-1" onClick={handleDelete}>
      Delete
    </button>
  );
}
