import "@/styles/globals.css";
import { motion } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-50 text-black">
      <Component {...pageProps} />
    </div>
  );
}
