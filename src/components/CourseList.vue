<template>
    <div>
        <!-- 条件渲染 -->
        <div v-if="courses.length == 0">没有任何信息</div>
        <!-- 列表渲染 -->
        <div :class="$style.courseList" v-else>
            <!-- 修改为课程详情跳转为编程导航 -->
            <div v-for="c in courses" :class = "{ active : selectCourse.name === c.name}" :key="c.name" @click="setCourseAndRouter(c)">
                {{ c.name }} - {{ getCurrency(c) }}
                <!-- <router-link :to="`/cart/${c.name}`"> 
                    {{ c.name }} - {{ getCurrency(c) }} 
                </router-link> -->
            </div>
        </div>
        <router-link :to="{ name: 'course', params: { name: '对象测试' }}">对象测试</router-link>
        <router-view/>
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
            },
            setCourseAndRouter(c){
                this.selectCourse = c;
                // 字符串
                // this.$router.push(`/cart/${c.name}`);
                // 对象
                this.$router.push({
                    name: 'course', 
                    params: { name: c.name }
                });
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
