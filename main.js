'use strict';
const BASE = './'
const pageList = {
    name: 'css-secrets-learning',
    title: '',
    items: [
        {
            name: 'ch00',
            title: 'ready',
            items: [
                {name: '', title: 'Color mode', link: 'ch00_ready/colorMode.html'},
                {name: '', title: 'Middle color', link: 'ch00_ready/middleColor.html'},
                {name: '', title: 'Simple Selector', link: 'ch00_ready/simpleSelector.html'}
            ]
        },
        {
            name: 'ch01',
            title: 'introduction',
            items: [
                {name: 'ls0_1', title: 'Dry Button', link: 'ch01_introduction/ls0-1_dry_button.html'},
                {name: 'ls0_2', title: 'Current color', link: 'ch01_introduction/ls0-2_currentColor.html'},
                {name: 'ls0_3', title: 'Illusion', link: 'ch01_introduction/ls0-3_illusion.html'}
            ]
        },
        {
            name: 'ch02',
            title: 'background & border',
            items: [
                {name: 'ls1', title: 'Translucent border', link: 'ch02_bg_border/ls1_translucent_border.html'},
                {name: 'ls2', title: 'Multiple borders', link: 'ch02_bg_border/ls2_multiple_borders.html'},
                {name: 'ls3', title: 'Background postion', link: 'ch02_bg_border/ls3_bg_position.html'},
                {name: 'ls4', title: 'Inner rounding', link: 'ch02_bg_border/ls4_inner_rounding.html'},
                {name: 'ls5', title: 'Striped background', link: 'ch02_bg_border/ls5_striped_bg.html'},
                {name: 'ls6', title: 'Complex background', link: 'ch02_bg_border/ls6_complex_bg.html'},
                {name: 'ls7', title: 'Random backgournd', link: 'ch02_bg_border/ls7_random_bg.html'},
                {name: 'ls8', title: 'Countinous image borders', link: 'ch02_bg_border/ls8_continuous_image_borders.html'},
                {name: '', title: 'Simple password input', link: 'ch02_bg_border/sample_password_input.html'},
            ]
        },
        {
            name: 'ch03',
            title: 'shapes',
            items: [
                {name: 'ls9', title: 'Flexible ellipses', link: 'ch03_shapes/ls9_flexible_ellipses.html'},
                {name: 'ls10', title: 'Parallelograms', link: 'ch03_shapes/ls10_parallelograms.html'},
                {name: 'ls11', title: 'Diamond images', link: 'ch03_shapes/ls11_diamond_images.html'},
                {name: 'ls12', title: 'Cutout corners', link: 'ch03_shapes/ls12_cutout_coners.html'},
                {name: 'ls13', title: 'Trapezoid tabs', link: 'ch03_shapes/ls13_trapezoid_tabs.html'},
                {name: 'ls14', title: 'Simple pie chart', link: 'ch03_shapes/ls14_simple_pie_charts.html'},
            ]
        },
        {
            name: 'ch04',
            title: 'visual effects',
            items: [
                {name: 'ls15', title: 'One sides shadows', link: 'ch04_visual_effects/ls15_one_sided_shadows.html'},
                {name: 'ls16', title: 'Irregular drop shadows', link: 'ch04_visual_effects/ls16_irregular_drop_shadows.html'},
                {name: 'ls17', title: 'Color tinting', link: 'ch04_visual_effects/ls17_color_tinting.html'},
                {name: 'ls18', title: 'Frosted glass effect', link: 'ch04_visual_effects/ls18_frosted_glass_effect.html'},
                {name: 'ls19', title: 'Fold corner effect', link: 'ch04_visual_effects/ls19_folded_corner_effect.html'},
            ]
        },
        {
            name: 'ch05',
            title: 'typography',
            items: [
                {name: 'ls20', title: 'Hyphenation', link: 'ch05_typography/ls20_hyphenation.html'},
                {name: 'ls21', title: 'Inserting line breaks', link: 'ch05_typography/ls21_inserting_line_breaks.html'},
                {name: 'ls22', title: 'Zebra striped text lines', link: 'ch05_typography/ls22_zebra_striped_text_lines.html'},
                {name: 'ls23', title: 'Adjusting tab width', link: 'ch05_typography/ls23_adjusting_tab_width.html'},
                {name: 'ls24', title: 'Ligatures', link: 'ch05_typography/ls24_ligatures.html'},
                {name: 'ls25', title: 'Fancy ampersands', link: 'ch05_typography/ls25_fancy_ampersands.html'},
                {name: 'ls26', title: 'Custom underlines', link: 'ch05_typography/ls26_custom_underlines.html'},
                {name: 'ls27', title: 'Realistic text effects', link: 'ch05_typography/ls27_realistic_text_effects.html'},
                {name: 'ls28', title: 'Circular text', link: 'ch05_typography/ls28_circular_text.html'},
            ]
        },
        {
            name: 'ch06',
            title: 'user experience',
            items: [
                {name: 'ls29', title: 'Right Cursor', link: 'ch06_user_experience/ls29_picking_the_right_cursor.html'},
                {name: 'ls30', title: 'extending the clickable area', link: 'ch06_user_experience/ls30_extending_the_clickable_area.html'},
                {name: 'ls31', title: 'custom checkboxes', link: 'ch06_user_experience/ls31_custom_checkboxes.html'},
                {name: 'ls32', title: 'De_emphasize by dimming', link: 'ch06_user_experience/ls32_de_emphasize_by_dimming.html'},
                {name: 'ls33', title: 'De_emphasize by blurring', link: 'ch06_user_experience/ls33_de_emphasize_by_blurring.html'},
                {name: 'ls34', title: 'Scrolling hints', link: 'ch06_user_experience/ls34_scrolling_hints.html'},
                {name: 'ls35', title: 'Interactive image comparison', link: 'ch06_user_experience/ls35_Interactive_image_comparison.html'},
            ]
        },
        {
            name: 'ch07',
            title: 'structure layout',
            items: [
                {name: 'ls36', title: 'Intringsic sizing', link: 'ch07_structure_layout/ls36_intringsic_sizing.html'},
                {name: 'ls37', title: 'Taming table column widths', link: 'ch07_structure_layout/ls37_taming_table_column_widths.html'},
                {name: 'ls38', title: 'Styling by sibling count', link: 'ch07_structure_layout/ls38_styling_by_sibling_count.html'},
                {name: 'ls39', title: 'Fluid background fixed content', link: 'ch07_structure_layout/ls39_fluid_background_fixed_content.html'},
                {name: 'ls40', title: 'Vertical centering', link: 'ch07_structure_layout/ls40_vertical_centering.html'},
                {name: 'ls41', title: 'Sticky footers', link: 'ch07_structure_layout/ls41_sticky_footers.html'},
            ]
        },
        {
            name: 'ch07',
            title: 'structure layout',
            items: [
                {name: 'ls36', title: 'Intringsic sizing', link: 'ch07_structure_layout/ls36_intringsic_sizing.html'},
                {name: 'ls37', title: 'Taming table column widths', link: 'ch07_structure_layout/ls37_taming_table_column_widths.html'},
                {name: 'ls38', title: 'Styling by sibling count', link: 'ch07_structure_layout/ls38_styling_by_sibling_count.html'},
                {name: 'ls39', title: 'Fluid background fixed content', link: 'ch07_structure_layout/ls39_fluid_background_fixed_content.html'},
                {name: 'ls40', title: 'Vertical centering', link: 'ch07_structure_layout/ls40_vertical_centering.html'},
                {name: 'ls41', title: 'Sticky footers', link: 'ch07_structure_layout/ls41_sticky_footers.html'},
            ]
        },
        {
            name: 'ch08',
            title: 'Transitions animations',
            items: [
                {name: 'ls42', title: 'Elastic transitions', link: 'ch08_transitions_animations/ls42_elastic_transitions.html'},
                {name: 'ls43', title: 'Frame by frame animations', link: 'ch08_transitions_animations/ls43_frame_by_frame_animations.html'},
                {name: 'ls44', title: 'Blinking', link: 'ch08_transitions_animations/ls44_blinking.html'},
                {name: 'ls45', title: 'Typing animation', link: 'ch08_transitions_animations/ls45_typing_animation.html'},
                {name: 'ls46', title: 'Smooth state animations', link: 'ch08_transitions_animations/ls46_smooth_state_animations.html'},
                {name: 'ls47', title: 'Animation along circular path', link: 'ch08_transitions_animations/ls47_animation_along_circular_path.html'},
            ]
        },
    ]
}

Vue.component('treeMenu', {
    template: '#treeMenuTemp',
    props: ['tree'],
    data: function () {
      return{
          isClose : true,
      }
    },
    methods:{
        toggle:function () {
            if(this.isFolder){
                this.isClose = !this.isClose
            }
        }
    },
    computed: {
        isFolder: function () {
            return this.tree.items
                && this.tree.items.length
        },
        treeLink: function () {
            return this.tree.link ? BASE + this.tree.link : false
        }
    },
})


var vue = new Vue({
    el: '#app',
    data: {
        menuList: pageList
    },
})