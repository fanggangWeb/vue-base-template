<template>
    <svg v-class="['icon']" xmlns="http://www.w3.org/2000/svg">
        <title v-if="title">{{ title }}</title>
        <use :xlink:href="href" xmlns:xlink="http://www.w3.org/1999/xlink" />
    </svg>
</template>

<script>
// const webpackContext = require.context('../assets/svg', false, /\.svg$/);
// webpackContext.keys().forEach(key => webpackContext(key));

export default {
    name: 'svg-icon',

    props: {
        name: {
            type: String,
            required: true
        },

        title: {
            type: String,
            default: null
        }
    },

    computed: {
        href() {
            let icon = require(`../assets/svg/${this.name}.svg`);
            icon = icon.default || icon;
            // {id: '...', url: '...', viewBox: '0 0 24 24'}
            return icon.url;
        }
    }
};
</script>

<style module>
.icon {
    fill: currentColor;
    height: 24px;
    width: 24px;
}
</style>
