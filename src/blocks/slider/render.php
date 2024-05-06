<?php
/**
 * Super Swiper Slider block
 *
 * @var array     $attributes Block attributes.
 * @var string    $content    Block default content.
 * @var \WP_Block $block      Block instance.
 *
 */

$slides_per_view   = empty( $attributes['slidesPerView'] ) ? 3 :  intval($attributes['slidesPerView']);
$autoplay   = !empty($attributes['autoplay']) && $attributes['autoplay'];
$autoplay_delay   = empty( $attributes['autoplayDelay'] ) ? 3000 : $attributes['autoplayDelay'];
$autoplay_disable_on_interaction   = !empty( $attributes['autoplayDisableOnInteraction'] ) && $attributes['autoplayDisableOnInteraction'] ;
$navigation = !empty( $attributes['navigation'] ) && $attributes['navigation'];
$pagination = !empty( $attributes['pagination'] ) && $attributes['pagination'];
$loop = !empty( $attributes['loop'] ) && $attributes['loop'];
?>

<div class='sss-slider'>
    <swiper-container
        <?= "slides-per-view=\"" . wp_json_encode($slides_per_view) . "\""; ?>
        <?php if($autoplay) { echo "autoplay-delay=\"" . wp_json_encode($autoplay_delay) . "\""; } ?>
        <?php if($autoplay) { echo "autoplay-disable-on-interaction=\"" . wp_json_encode($autoplay_disable_on_interaction) . "\""; } ?>
        navigation="<?= wp_json_encode($navigation) ?>"
        pagination="<?= wp_json_encode($pagination) ?>"
        loop="<?= wp_json_encode($loop) ?>"
    >
        <?php echo $content; ?>
    </swiper-container>
</div>

