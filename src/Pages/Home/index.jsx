import Layout from "../../Components/Layout";
import RegisterForm from "../../Components/RegisterForm";

function Home() {
  return (
    <Layout>
      <div 
      className="relative w-full p-8 flex justify-center items-center mt-[80px] bg-cover bg-center rounded-lg shadow-lg"
      style={{ 
        height: "calc(100vh - 160px)",
        backgroundImage: "url('https://res.cloudinary.com/dehfpzadt/image/upload/v1740517098/pexels-mikhail-nilov-8101929_j9utpd.jpg')",
        }}>
        <RegisterForm />
      </div>
    </Layout>
  );
}

export default Home;
