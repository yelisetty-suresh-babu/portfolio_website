import SignupForm from "./ContactForm.component";
import animation from "./../../../public/singingContract.json";
import Lottie from "lottie-react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center py-10 z-10 w-full">
      <h1 className="md:text-5xl text-xl lg:text-7xl font-bold text-center text-white relative z-20">
        Let's Connect
      </h1>
      <div className="w-full h-20 relative ">
        {/* Gradients */}
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="flex items-center gap-x-10 w-full">
        <Lottie animationData={animation} style={{ height: 600 }} loop={true} />
        <SignupForm />
      </div>
    </div>
  );
};

export default Contact;
