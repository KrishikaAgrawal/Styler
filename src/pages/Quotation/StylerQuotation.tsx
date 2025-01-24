import React from "react";

const StylerQuotation: React.FC = () => {
  return (
    <div className=" lg:mx-60 lg:p-5">
      {/* head */}
      <div className="grid lg:grid-cols-3 pb-6 border-b gap-4 lg:gap-0 ">
        <p className="font-bold text-xs">Qutotion</p>
        <div className=" col-span-2 ">
          <div className="flex mb-2 font-Gloock items-center justify-center lg:justify-end gap-2">
            <p className="text-4xl text-white bg-[#025195] w-12 h-12 text-center p-1 rounded-full">
              S
            </p>
            <p className="text-4xl">Styler.</p>
          </div>
          <div className="lg:text-end grid grid-cols-2 text-gray-600 text-xs">
            <div className="">
              <p className="">457-581-85214-52</p>
              <p className="">mail@email.com</p>
              <p className="">Web.com</p>
            </div>
            <div className="">
              <p className="">147 Urza, Miting street,</p>
              <p className="">City,state,Country</p>
              <p className="">Zip code</p>
            </div>
          </div>
        </div>
      </div>
      {/* person details */}
      <div className="py-4 ">
        <div className="flex justify-between mb-11">
          <div className="text-xs text-gray-600 font-medium">
            <p className="text-gray-500 ">Billed to</p>
            <p className="text-xl my-1 text-black font-semibold">John Doe</p>
            <p className="">Adress</p>
            <p className="">mail@email.com</p>
            <p className="">Phone number</p>
          </div>
          <div className="flex text-end gap-1 flex-col text-xs">
            <div className="">
              <p className="text-gray-500 font-medium">Invoice No.</p>
              <p className=" font-semibold">#002121</p>
            </div>
            <div className="">
              <p className="text-gray-500 font-medium">Date</p>
              <p className="">20/12/20</p>
            </div>
            <div className="">
              <p className="text-gray-500 font-medium">Invoice Due Date </p>
              <p className="">30/12/20</p>
            </div>
          </div>
        </div>
        <p className="text-[11px] text-center font-medium text-gray-500">
          Thank you for your interest in our design and oppertunity to quote. we
          are Pleased to quote as follow
        </p>
      </div>
      <div className="border-b border-[#2D34D4] opacity-50"></div>
      {/* Description */}
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-6 text-xs text-gray-500 pt-5 pb-4">
            <th className="font-normal text-start col-span-3">Description</th>
            <th className="font-normal">Unit Cost</th>
            <th className="font-normal">Qty</th>
            <th className="font-normal">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="grid grid-cols-6 items-center text-xs font-normal p-2 border-b">
            <td className="col-span-3">
              <p className="text-gray-800 mb-1">Style</p>
              <p className="text-[10px] lg:text-[11px] text-gray-500 leading-3">
                Custom Evening Gown with Full-Length Train
              </p>
            </td>
            <td className="text-center">$200</td>
            <td className="text-center">5</td>
            <td className="text-center">$400</td>
          </tr>
          <tr className="grid grid-cols-6 items-center text-xs font-normal p-2 border-b">
            <td className="col-span-3">
              <p className="text-gray-800 mb-1">Fabric</p>
              <p className="text-[10px] lg:text-[11px] text-gray-500 leading-3">
                Silk Satin with Chiffon Overlay
              </p>
            </td>
            <td className="text-center">$200</td>
            <td className="text-center">5</td>
            <td className="text-center">$400</td>
          </tr>
          <tr className="grid grid-cols-6 items-center text-xs font-normal p-2 border-b">
            <td className="col-span-3">
              <p className="text-gray-800 mb-1">Color</p>
              <p className="text-[10px] lg:text-[11px] text-gray-500 leading-3">
                Midnight Blue
              </p>
            </td>
            <td className="text-center">$200</td>
            <td className="text-center">5</td>
            <td className="text-center">$400</td>
          </tr>
          <tr className="grid grid-cols-6 items-center text-xs font-normal p-2 border-b">
            <td className="col-span-3">
              <p className="text-gray-800 mb-1">Design Features</p>
              <p className="text-[10px] lg:text-[11px] text-gray-500 leading-3">
                Hand Beaded Bodice, Lace Appliqué, and Detachable Sleeves
              </p>
            </td>
            <td className="text-center">$200</td>
            <td className="text-center">5</td>
            <td className="text-center">$400</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <div className="w-full py-5 flex flex-col gap-2 text-xs items-end">
                <div className="flex gap-3">
                  <p className="text-gray-500 font-medium">SubTotal</p>
                  <p className="font-semibold">$1200.00</p>
                </div>
                <div className="flex gap-3">
                  <p className="text-gray-500 font-medium">Shipping fee</p>
                  <p className="font-semibold">$80.00</p>
                </div>
                <div className="flex gap-3">
                  <p className="text-gray-500 font-medium">Platform fee</p>
                  <p className="font-semibold">$40.00</p>
                </div>
                <div className="flex gap-3">
                  <p className="text-gray-500 font-medium">GST</p>
                  <p className="font-semibold">$40.00</p>
                </div>
                <div className="w-1/2 border-b my-2"></div>
                <div className="flex gap-3">
                  <p className="text-gray-500 font-medium">Invoice Total</p>
                  <p className="text-[#2D34D4] font-bold text-xl">$3000.00</p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="text-[11px]">
                <p>Invoice Term</p>
                <p className="text-gray-500">
                  Please pay your invoice by{" "}
                  <span className="ml-3 text-xs text-black">30/12/20</span>
                </p>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default StylerQuotation;
