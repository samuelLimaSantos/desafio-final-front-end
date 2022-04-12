import { InputRest } from "../../Mocks/input";
import Input from "../Input";

const DetailsForm = () => {
  return (
    <form>
      {InputRest.map((item) => (
        <Input
          type={item.type}
          name={item.name}
          placeholder={item.placeholder}
        />
      ))}
    </form>
  );
};

export default DetailsForm;
