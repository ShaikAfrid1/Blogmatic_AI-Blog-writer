import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const checkScroll = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div>
      {visible && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 z-50 bg-[#6C63FF] text-white p-3 rounded-full shadow-md hover:bg-[#7c75ff] transition-all"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
