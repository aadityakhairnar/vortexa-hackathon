import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
     <div className=" my-10 mx-40 flex flex-col">
      <h1 className=" text-center text-2xl sm:text-5xl">Patient Information</h1>
     </div>
    </>
  );
}