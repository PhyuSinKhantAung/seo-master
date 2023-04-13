import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white text-black">
      <Component {...pageProps} />
    </div>
  );
}
