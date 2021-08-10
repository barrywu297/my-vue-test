<template>
    <div>
        <!-- 条件渲染 -->
        <div v-if="courses.length == 0">没有任何信息</div>
        <!-- 列表渲染 -->
        <div :class="$style.courseList" v-else>
            <div v-for="c in courses" :class = "{ active : selectCourse.name === c.name}" :key="c.name" @click=" selectCourse = c ">
                <!-- {{ c.name }} - {{ getCurrency(c) }} -->
                <router-link :to="`/course/${c.name}`"> 
                    {{ c.name }} - {{ getCurrency(c) }} 
                </router-link>
            </div>
        </div>
        <!-- 利用transition-group可以对v-for渲染的每个元素应用过度 -->
        <!-- <transition-group name="fade"> 
            <div v-for="c in courses" :key="c.name"> 
                {{ c.name }} - ￥{{c.price}} 
                <button @click="addToCart(c)">加购</button>
            </div>
        </transition-group> -->
    </div>
</template>

<script>
    export default {
        name: 'CourseList',
        data() {
            return {
                selectCourse: '',
                coursePrice: ''
            }
        },
        props: {
            courses: {
                type: Array,
                default: () => []
            }
        },
        created () {
            // 一个基于文件名和类名生成的标识符 
            console.log(this.$style.courseList);
        },
        methods: {
            getCurrency(c) {
                const result = "$" + c.price;
                return result;
            }
        }
    }
</script>

<style lang="scss" module scoped>
    .active {
        background-color: $activeColor;
    }

    .courseList {
        transition: transform 1s;
    }

    .flip-list-move {
        transition: transform 1s;
    }
</style>
