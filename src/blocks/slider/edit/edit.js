import {
  useBlockProps,
  useInnerBlocksProps,
  InspectorControls,
} from "@wordpress/block-editor";

import {
  PanelBody,
  PanelRow,
  ToggleControl,
  __experimentalNumberControl as NumberControl,
} from "@wordpress/components";

import { __ } from "@wordpress/i18n";

import { register as registerSwiper } from "swiper/element/bundle";

import "./editor.scss";

import Template from "../templates/singleSlide";

export default function Edit({ attributes, setAttributes }) {
  registerSwiper();

  const {
    slidesPerView,
    autoplay,
    autoplayDelay,
    autoplayDisableOnInteraction,
    navigation,
    pagination,
    loop,
  } = attributes;

  const blockProps = useBlockProps();
  const innerBlocksProps = useInnerBlocksProps(blockProps, {
    allowedBlocks: ["sss/slide"],
    template: Template,
  });
  const { className, ...attr } = blockProps;

  const params = {
    "slides-per-view": slidesPerView,
    navigation: navigation,
    pagination: pagination,
    loop: loop,
    ...(autoplay && {
      "autoplay-delay": autoplayDelay,
      "autoplay-disable-on-interaction": autoplayDisableOnInteraction,
    }),
  };

  return (
    <>
      <div className={`sss-slider ${className}`} {...attr}>
        <swiper-container {...params}>
          {innerBlocksProps.children}
        </swiper-container>
      </div>

      <InspectorControls>
        <PanelBody title={__("Settings", "sss")}>
          <PanelRow>
            <NumberControl
              value={parseInt(slidesPerView)}
              label={__("Slides per view", "sss")}
              onChange={(value, event) => {
                if (!value) return;

                setAttributes({ slidesPerView: parseInt(value) });
              }}
              min={1}
              help={__("Slides per view")}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__("Autoplay", "sss")}
              checked={autoplay}
              onChange={(value) => setAttributes({ autoplay: value })}
              help={__("“Autoplay” automatically plays the slides")}
            />
          </PanelRow>
          <PanelRow>
            <NumberControl
              isShiftStepEnabled={true}
              shiftStep={10}
              value={parseInt(autoplayDelay)}
              label={__("Autoplay delay", "sss")}
              onChange={(value) =>
                setAttributes({ autoplayDelay: parseInt(value) })
              }
              help={__("Autoplay delay between the slides")}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__("Autoplay disable on interaction", "sss")}
              checked={autoplayDisableOnInteraction}
              onChange={(value) =>
                setAttributes({ autoplayDisableOnInteraction: value })
              }
              help={__("Autoplay disable on interaction")}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__("Navigation", "sss")}
              checked={navigation}
              onChange={(value) => setAttributes({ navigation: value })}
              help={__(
                "“Navigation” will display arrows so user can navigate forward/backward.",
              )}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__("Pagination", "sss")}
              checked={pagination}
              onChange={(value) => setAttributes({ pagination: value })}
              help={__(
                "“Pagination” will display dots along the bottom for user to click through slides.",
              )}
            />
          </PanelRow>
          <PanelRow>
            <ToggleControl
              label={__("Loop", "sss")}
              checked={loop}
              onChange={(value) => setAttributes({ loop: value })}
              help={__("“Loop” will loop infinitely through all the slides")}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
    </>
  );
}
