import "./locationbuttons.css";
import { createLocationElement } from "./frombutton";

export default {
  title: "Components/locationbuttons",
  parameters: { layout: "centered" },
};
export const departureLocation = () => createLocationElement();
