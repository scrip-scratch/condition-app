import Navbar from "./UI/Navbar/Navbar";

export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
