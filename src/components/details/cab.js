import { createElement } from "../../utils/elements";
import cabIconSrc from "../../assets/taxi.svg";

export const createDetailElement = () => {
  const detailText = createElement("div", {
    className: "detail__text",
    children: [
      createElement("h3", {
        innerText: "Book a Cab",
      }),
      createElement("p", {
        innerText: "In New Delhi",
      }),
    ],
  });

  const detailButton = createElement("button", {
    className: "detail__btn",
    children: [
      createElement("img", {
        className: "detail__icon",
        src: cabIconSrc,
        alt: "Taxi Icon",
      }),
      detailText,
    ],
  });

  return detailButton;
};

/*
<button>
    <img src="../../assets/calendar-symbol.svg" alt="Calendar">
    <div>
        <h4>DEPARTURE</h4>
        <p>12 Feb, 2020</p>
    </div>
</button>
*/
