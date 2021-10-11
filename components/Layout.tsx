import Navbar from './Navbar';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="container max-w-screen-xl flex justify-center">
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
