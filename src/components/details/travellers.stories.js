import "./details.css";
import { createDetailElement } from "./travellers";

export default {
  title: "Components/details",
  parameters: { layout: "centered" },
};

export const travellerDetail = () => createDetailElement();
