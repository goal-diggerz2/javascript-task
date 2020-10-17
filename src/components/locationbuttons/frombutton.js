import { createElement } from "../../utils/elements";
import fromIconSrc from "../../assets/from.svg";

export const createLocationElement = () => {
  const locationText = createElement("div", {
    className: "location__text",
    children: [
      createElement("h3", {
        innerText: "From",
      }),
      createElement("p", {
        innerText: "Sydney,Australia",
      }),
    ],
  });

  const locationButton = createElement("button", {
    className: "location__btn",
    children: [
      createElement("img", {
        className: "location__icon",
        src: fromIconSrc,
        alt: "Plane starting",
      }),
      locationText,
    ],
  });

  return locationButton;
};
