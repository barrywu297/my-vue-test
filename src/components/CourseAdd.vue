<template>
    <div>
        <!-- 用户输入 -->
        <p>
            <!-- 需要实现input的:value和@input -->
            <input :value= "course" @input = "onInput" type="text" v-on:keydown.enter="addCourse"/>
            <button @click='addCourse'>新增</button>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'CourseAdd',
        props: ['course'],
        methods: {
            addCourse() {
                // 注意事件名称定义时不要有大写字母出现
                // 派发事件不再需要传递数据
                this.$emit('add-course');
            },
            onInput(e) {
                this.$emit('update:course', e.target.value);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>