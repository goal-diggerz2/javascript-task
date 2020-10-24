import { createElement } from "../../utils/elements";
import chairIconSrc from "../../assets/chair.svg";

export const createDetailElement = () => {
  const detailText = createElement("div", {
    className: "detail__text class__text",
    children: [
      createElement("h3", {
        innerText: "Class",
      }),
      createElement("p", {
        innerText: "Business",
      }),
    ],
  });

  const detailButton = createElement("button", {
    className: "detail__btn",
    children: [
      createElement("img", {
        className: "detail__icon",
        src: chairIconSrc,
        alt: "Chair Icon",
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
