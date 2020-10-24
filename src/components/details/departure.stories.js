import "./details.css";
import { createDetailElement } from "./departure";

export default {
  title: "Components/details",
  parameters: { layout: "centered" },
};

export const departureDetail = () => createDetailElement();
