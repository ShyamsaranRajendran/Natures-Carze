import React from "react";

function Shipping() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Shipping Information
      </h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        For International buyers, orders are shipped and delivered through
        registered international courier companies and/or International speed
        post only. For domestic buyers, orders are shipped through registered
        domestic courier companies and/or speed post only.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Orders are shipped within{" "}
        <span className="font-semibold">6-8 days</span> or as per the delivery
        date agreed at the time of order confirmation, subject to Courier
        Company / post office norms. MOUNESH RAJA V is not liable for any delay
        in delivery by the courier company / postal authorities and only
        guarantees to hand over the consignment to the courier company or postal
        authorities within <span className="font-semibold">6-8 days</span> from
        the date of the order and payment or as per the delivery date agreed at
        the time of order confirmation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Delivery of all orders will be to the address provided by the buyer.
        Delivery of our services will be confirmed on your email ID as specified
        during registration.
      </p>
      <p className="text-gray-700 leading-relaxed">
        For any issues in utilizing our services, you may contact our helpdesk
        at:
      </p>
      <ul className="text-gray-700 mt-2">
        <li className="font-medium">
          Phone: <span className="text-blue-600">9698904457</span>
        </li>
        <li className="font-medium">
          Email:{" "}
          <a
            href="mailto:curcuimin138@gmail.com"
            className="text-blue-600 hover:underline"
          >
            curcuimin138@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Shipping;
