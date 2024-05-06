import PLACEHOLDER_IMG from "./assets/image.jpg";
import { __ } from "@wordpress/i18n";

const Template = [
  [
    "sss/slide",
    {},
    [
      [
        "core/cover",
        { url: PLACEHOLDER_IMG, dimRatio: 0 },
        [
          ["core/heading", { placeholder: __("Slider heading", "sss") }],
          ["core/paragraph", { placeholder: __("Slider summary", "sss") }],
          [
            "core/buttons",
            {},
            [["core/button", { placeholder: __("Button", "sss") }]],
          ],
        ],
      ],
    ],
  ],
];

export default Template;
