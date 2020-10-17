import { createElement } from "../../utils/elements";
import toIconSrc from "../../assets/to.svg";

export const createLocationElement = () => {
  const locationText = createElement("div", {
    className: "location__text",
    children: [
      createElement("h3", {
        innerText: "To",
      }),
      createElement("p", {
        innerText: "New Delhi, India",
      }),
    ],
  });

  const locationButton = createElement("button", {
    className: "location__btn",
    children: [
      createElement("img", {
        className: "location__icon",
        src: toIconSrc,
        alt: "Plane landing",
      }),
      locationText,
    ],
  });

  return locationButton;
};
