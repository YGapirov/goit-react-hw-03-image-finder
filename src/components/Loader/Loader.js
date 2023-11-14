import { RotatingLines } from "react-loader-spinner";
export const Loader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
    </>
  );
};
