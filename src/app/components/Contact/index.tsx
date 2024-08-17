import Button from "@/Button";
import { FaAddressCard } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="h-full flex flex-col mx-auto text-center py-8 px-20 pb-24">
      <div className="mx-auto pb-4">
        <FaAddressCard color={"#6366F1"} size={30} />
      </div>
      <h1 className="text-4xl font-bold pb-8">Get in touch!</h1>
      <Button
        btnText="Let's connect"
        reference="/underConstruction"
        type="link"
      />
    </div>
  );
}
