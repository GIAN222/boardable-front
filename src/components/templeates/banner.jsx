import Logo from "../atoms/logo.jsx";

function Banner(params) {
  return (
    <div className="flex flex-col items-center text-center">
      <Logo></Logo>
      <h1 className="text-3xl font-bold mt-8">Welcome to Boardable</h1>
    </div>
  );
}
export default Banner;
