import AddDeliveryPage from "./paymentsmode/AddDeliveryPage";
import CardDetails from "./paymentsmode/CardDetailsPage";
import OrderConfirmPage from "./paymentsmode/OrderConfirmpage";
import PaymentMode from "./paymentsmode/PaymentMode";

function PaymentPage() {
  return (
    <>
      <PaymentMode />
      <AddDeliveryPage onClose={() => {}} />
      <CardDetails onClose={() => {}} />
      <OrderConfirmPage />
    </>
  );
}

export default PaymentPage;
