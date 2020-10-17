import "./locationbuttons.css";
import { createLocationElement } from "./tobutton";

export default {
  title: "Components/locationbuttons",
  parameters: { layout: "centered" },
};
export const destinationLocation = () => createLocationElement();
