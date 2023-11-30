import "./TextScrolling.css";
import { TbTruckDelivery } from "react-icons/tb";
export default function TextScrolling() {
  return (
    <div className="text-wrapper">
      <p className="flex  items-center gap-2">
        <span className="text-[#fcba03] text-lg">
          <TbTruckDelivery />
        </span>
        FREE SHIPPING ON ALL ORDERS. NO MINIMUM PURCHASE
      </p>
      <p className="flex  items-center gap-2">
        <span className="text-[#fcba03] text-lg">
          <TbTruckDelivery />
        </span>{" "}
        FREE SHIPPING ON ALL ORDERS. NO MINIMUM PURCHASE
      </p>
      <p className="flex  items-center gap-2">
        <span className="text-[#fcba03] text-lg">
          <TbTruckDelivery />
        </span>{" "}
        FREE SHIPPING ON ALL ORDERS. NO MINIMUM PURCHASE
      </p>
      <p className="flex  items-center gap-2">
        <span className="text-[#fcba03] text-lg">
          <TbTruckDelivery />
        </span>{" "}
        FREE SHIPPING ON ALL ORDERS. NO MINIMUM PURCHASE
      </p>
    </div>
  );
}
