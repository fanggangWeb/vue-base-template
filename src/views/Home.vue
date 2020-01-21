<template>
    <div v-class="['home']">
        <div v-class="['header']"></div>
        <div v-class="['main-wrap']">
            <div v-class="['sidebar-con']">
                <sidebar-item></sidebar-item> 
            </div>
            <div v-class="['content']"></div>
        </div>
    </div>
</template>

<script>
import sidebarItem from "@/components/layout/sidebar.vue"
export default {
    components: {
        sidebarItem
    },
    data() {
        return {
            isCollapse: true
        };
    },
    mounted() {},
    methods: {}
};
</script>

<style lang="scss" module>
.home {
    width: 100%;
    height: 100%;
    .header {
        width: 100%;
        height: 80px;
        background: #ccc;
    }
    .main-wrap {
        display: flex;
        width: 100%;
        height: calc(100% - 80px);
        .sidebar-con {
            width: 200px;
            height: 100%;
        }
        .content {
            width: calc(100% - 200px);
            height: 100%;
        }
    }
}
</style>
