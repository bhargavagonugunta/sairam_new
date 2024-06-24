import BorderLine, { BorderLineUp } from "../home/shop/BorderLine";

import RenewPromiseComponent from "./renew-promise/RenewPromiseComponent";

export default function RenewPromise() {
  return (
    <div className="main_head">
      <BorderLineUp />
      <RenewPromiseComponent />
      <BorderLine />
    </div>
  );
}
