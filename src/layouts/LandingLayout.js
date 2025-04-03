import Header from '@/components/Header'; 
const LandingLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="relative flex flex-col text-gray-800 dark:text-gray-100">
        {children}
      </main>
    </>
  );
};

export default LandingLayout;
