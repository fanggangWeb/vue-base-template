<template>
    <div>
        这里是home页
        <div>
            <el-button type="primary">测试</el-button>
        </div>
    </div>
</template>
<script>
import { getTodo } from "@/services/todo"
export default {
    data () {
        return {

        }
    },
    mounted () {
        this._getTodo()
    },
    methods: {
        async _getTodo() {
            let data = await getTodo();
            // console.log(data)
        }
    }
}
</script>
<style lang="scss">
    
</style>