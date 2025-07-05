import Header from "./header/Header";
import Main from "./mainData/Main";
import Footer from "./footer/Footer";
import Mainroutes from "./components/Mainroutes";
// const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8FA] text-[#1C1C1E]">
      <Header />

      <Main children={<Mainroutes />} />

      <Footer />
    </div>
  );
};

export default App;
