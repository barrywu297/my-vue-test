<template>
    <div>
        <!-- 用户输入 -->
        <p>
            <!-- 需要实现input的:value和@input -->
             <input :value= "price" @input = "onInput" type="text" v-on:keydown.enter="batchUpdate"/>
             <button @click = "batchUpdate">批量更新</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'BulkPriceAdd',
        props: ['price'],
        methods: {
            batchUpdate() {
                // 注意事件名称定义时不要有大写字母出现
                // 派发事件不再需要传递数据
                this.$emit('batch-update');
            },
            onInput(e) {
                this.$emit('update:price', e.target.value);
            }
        }
    }
</script>

<style scoped>

</style>