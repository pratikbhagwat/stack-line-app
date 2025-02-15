export default function ProductInfo({ product }) {
  return (
    <div className="p-4">
      <img src={product.image} alt={product.title} className="w-40 h-40 mx-auto" />
      <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
      <p className="text-sm text-gray-600">{product.subtitle}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {product.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-gray-200 text-sm rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}