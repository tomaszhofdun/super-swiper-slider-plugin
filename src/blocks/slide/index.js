import Edit from "./edit/edit";
import save from "./save";

import metadata from "./block.json";

import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

registerBlockType(metadata.name, {
  edit: Edit,
  save,
});
