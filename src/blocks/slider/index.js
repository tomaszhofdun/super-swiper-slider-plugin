import Edit from "./edit/edit";
import save from "./save";

import metadata from "./block.json";

import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

registerBlockType(metadata.name, {
  edit: Edit,
  save,
});

/* The swiper only loads in backend when function registerBlockType is used one more time - For now I don't know the reason why is that */
registerBlockType("sss/hack-to-load-swiper-in-backend", {
  title: "Hack To Load Swiper",
  /* We set bock's parent to the block itself, ensuring it won't appear in the backend */
  parent: ["sss/hack-to-load-swiper-in-backend"],
});
