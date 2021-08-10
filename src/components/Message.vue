<template>
    <!-- 使用transition组件应用过度动画-->
    <transition name="fade">   
        <div class="message-box" v-if="show">
            <strong><slot name="title"></slot></strong>
            <slot></slot>
            <span class="message-box-close" @click = "$emit('update:show', false)">X</span>
        </div>
    </transition>
    <!-- 使用使用CSS动画库Animate.css过度动画-->
    <!-- <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">   
        <div class="message-box" v-if="show">
            <strong><slot name="title"></slot></strong>
            <slot></slot>
            <span class="message-box-close" @click = "$emit('update:show', false)">X</span>
        </div>
    </transition> -->
     <!-- 使用使用CSS动画库Animate.css过度动画-->
   <!-- <transition @before-enter="beforeEnter" 
        @enter="enter">   
        <div class="message-box" v-if="show">
            <strong><slot name="title"></slot></strong>
            <slot></slot>
            <span class="message-box-close" @click = "$emit('update:show', false)">X</span>
        </div>
    </transition> -->
</template>

<script>
export default {
    name: 'Message',
    props: ['show'],
    // methods: {
    //     beforeEnter(el) {
    //         el.style.opacity = 0; // 设置初始状态
    //     },
    //     enter(el) {
    //         document.body.offsetHeight; // 触发回流激活动画
    //         el.style.opacity = 1; // 设置结束状态
    //     }
    // },
}
</script>

<style scoped>
    .message-box {
        padding: 10px 20px;
        background: #4fc08d;
        border: 1px solid #42b983;
    }

    .message-box.warning {
        background: #ef290a;
        border: 1px solid #ef290a;
    }

    .message-box-close {
        float: right;
    }

    /* 定义过度动画 */ 
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
    .fade-leave-from,
    .fade-enter-to {
        opacity: 1;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }

</style>