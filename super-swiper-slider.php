<?php
/**
 * Plugin Name:       Super Swiper Slider
 * Description:       A slider carousel block for WordPress with SwiperJS.
 * Requires at least: 6.4
 * Requires PHP:      7.0
 * Version:           0.0.1
 * Author:            Tomasz Hofdun
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        null
 * Text Domain:       sss
 *
 * @package           sss/super-swiper-slider-block-sss
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function sss_slider_block_init() {
	register_block_type( __DIR__ . '/build/blocks/slider' );
	register_block_type( __DIR__ . '/build/blocks/slide' );
}
add_action( 'init', 'sss_slider_block_init' );
