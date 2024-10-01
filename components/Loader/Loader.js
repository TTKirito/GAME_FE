import { Spinner } from "react-bootstrap";
import { LoaderWrapper } from "./Style";

const Loader = () => {
  return (
    <LoaderWrapper>
      <Spinner/>
    </LoaderWrapper>
  );
};

export default Loader;
