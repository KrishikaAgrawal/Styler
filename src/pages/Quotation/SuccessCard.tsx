import success from "../../assets/Quotation/success.png";

interface SuccessCardProps {
  onClose: () => void;
}

const SuccessCard: React.FC<SuccessCardProps> = ({ onClose }) => {
  return (
    <>
      {/* Dark Overlay (Clicking this will close the card) */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={onClose}
      ></div>

      {/* Success Card (Clicking inside should NOT close the card) */}
      <div className="fixed inset-0 flex justify-center items-center z-20">
        <div
          className="bg-white p-6 rounded-[50px] shadow-lg text-center lg:w-2/5 w-11/12 flex flex-col items-center gap-6 font-inter"
          onClick={(e) => e.stopPropagation()} // Prevent click from closing card
        >
          <img src={success} alt="" className="w-1/2 " />
          <div className="">
            <p className="text-[#025195] mb-2 text-2xl font-bold">
              Order placed successful!
            </p>
            <p className="text-[#025195] ">
              You have successful Completed an appointment
            </p>
          </div>
          {/* navigation buttons */}
          <a href="/Quotation" className="w-full">
            <button className="rounded-full border border-[#025195] text-[#025195] font-semibold py-4 lg:w-1/2 w-2/3">
              View Order Details
            </button>
          </a>
          <button className="rounded-full  bg-[#025195] text-white font-semibold py-4 lg:w-1/2 w-2/3">
            Track Order
          </button>
        </div>
      </div>
    </>
  );
};

export default SuccessCard;
