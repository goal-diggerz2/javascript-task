import { createElement } from "../../utils/elements";
import travellersIconSrc from "../../assets/traveller.svg";

export const createDetailElement = () => {
  const detailText = createElement("div", {
    className: "detail__text",
    children: [
      createElement("h3", {
        innerText: "Travellers",
      }),
      createElement("p", {
        innerText: "2 Adults",
      }),
    ],
  });

  const detailButton = createElement("button", {
    className: "detail__btn",
    children: [
      createElement("img", {
        className: "detail__icon",
        src: travellersIconSrc,
        alt: "User Icon",
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
