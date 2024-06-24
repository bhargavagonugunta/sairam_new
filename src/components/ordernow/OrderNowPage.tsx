import SweetPage from "./sweets/SweetPage";
import CakesPage from "./cakes/CakesPage";
import NamkeenPage from "./namkeen/NamkeenPage";
import DryFruitsPage from "./dryfruits/DryFruitsPage";
import PaymentPage from "../Payments/PaymentPage";


function OrderNowPage () {
    return (
        <div>
        <SweetPage />
        <CakesPage />
        <NamkeenPage />
        <DryFruitsPage />
        <PaymentPage />
        </div>
    )
}

export default OrderNowPage;