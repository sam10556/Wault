import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  images: string[];
  color: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Matte Black",
    images: ["/p1.png", "/p4.png"],
    color: "text-gray-200",
  },
  {
    id: 2,
    name: "Royal Blue",
    images: ["/b1.png", "/b2.png"],
    color: "text-blue-400",
  },
  {
    id: 3,
    name: "Golden Duo",
    images: ["/y1.png", "/y2.png"],
    color: "text-yellow-400",
  },
];

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: { duration: 0.5 },
  }),
};

interface ProductSlideProps {
  product: Product;
}

const ProductSlide: React.FC<ProductSlideProps> = ({ product }) => (
  <motion.div className="w-full max-w-3xl mx-auto text-center">
    <div className="flex gap-6 justify-center">
      {product.images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${product.name} ${idx + 1}`}
          className="w-1/2 h-[400px] object-contain"
        />
      ))}
    </div>
    <h2 className={`mt-4 text-3xl tracking-wide ${product.color}`}>
      {product.name}
    </h2>
  </motion.div>
);

const ProductCarousel: React.FC = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    let newPage = page + newDirection;
    if (newPage < 0) newPage = products.length - 1;
    if (newPage >= products.length) newPage = 0;
    setPage([newPage, newDirection]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4 md:mb-6 garamond">
          Our Products
        </h2>
        <p className="text-lg sm:text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto">
          Fully custom: shapes, sizes, colors — make it yours.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        {/* Prev Button */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-0 z-10 px-4 py-2 bg-gray-800/70 hover:bg-gray-700 rounded-full"
        >
          ◀
        </button>

        <div className="relative w-full max-w-3xl h-[500px] flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full"
            >
              <ProductSlide product={products[page]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          onClick={() => paginate(1)}
          className="absolute right-0 z-10 px-4 py-2 bg-gray-800/70 hover:bg-gray-700 rounded-full"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
