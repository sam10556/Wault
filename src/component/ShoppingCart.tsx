import { useState } from "react";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

type CartItem = Product & { quantity: number };

const products: Product[] = [
  {
    id: 1,
    name: "Wault Matte-Black",
    description:
      "Sleek, durable iron box with fingerprint-secured access to protect your deliveries.",
    price: 10999,
    image: "/p1.png",
  },
  {
    id: 1,
    name: "Wault Royal Blue",
    description:
      "Sleek, durable iron box with fingerprint-secured access to protect your deliveries.",
    price: 10999,
    image: "/b1.png",
  },
  {
    id: 1,
    name: "Wault Golden Duo",
    description:
      "Sleek, durable iron box with fingerprint-secured access to protect your deliveries.",
    price: 10999,
    image: "/y1.png",
  },
];

const ShopPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section
      id="shop"
      className="min-h-screen garamond bg-[#0e1117] text-[#e1e1e1] px-6 py-20 font-sans"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-light text-center mb-2 tracking-wide">
          Wault Store
        </h1>
        <p className="text-2xl font-semibold mt-6 mb-20 tracking-wide garamond text-center">
          <span className="text-blue-600">CHILL,</span>{" "}
          <span className="text-gray-200">YOUR PACKAGES ARE LOCKED IN.</span>
        </p>

        {/* Product Grid */}
        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-transparent border border-gray-700 rounded-2xl p-6 flex flex-col items-center text-center hover:border-gray-500 transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-96 h-96 object-contain mb-6"
              />
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className=" text-gray-400 mb-4">{product.description}</p>
              <div className="flex flex-col items-center justify-between w-full mt-auto">
                <span className="text-sm font-medium">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-gray-400 mb-2">
                  11,999 on EMI, ₹1,200/month for 10 months
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="text-gray-300 hover:text-white p-1 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
                  aria-label={`Add ${product.name} to cart`}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="bg-transparent border border-gray-700 rounded-2xl p-8 max-w-3xl mx-auto mt-16">
          <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-300">
              <ShoppingCart className="w-6 h-6" /> Your Cart
            </h2>
          </div>

          {cart.length === 0 ? (
            <p className="text-center text-gray-500 opacity-70">
              Your cart is empty.
            </p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border border-gray-700 rounded-lg p-3"
                >
                  <div>
                    <h3 className="font-medium text-gray-200">{item.name}</h3>
                    <p className="text-xs text-gray-400">
                      ₹{item.price.toLocaleString("en-IN")} × {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="text-gray-400 hover:text-gray-200 p-1 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-gray-200 font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="text-gray-400 hover:text-gray-200 p-1 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-500 transition-colors p-1 rounded"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between font-semibold text-gray-200 text-lg pt-4 border-t border-gray-700">
                <span>Total</span>
                <span>₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>
            </div>
          )}

          <div className="mt-6 text-center text-gray-500 italic text-sm">
            Stocking Up Soon...
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
