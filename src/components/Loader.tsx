import loader from "../assets/Spinner.svg";

export const Loader = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={loader} alt="loader" />
    </div>
  );
};
