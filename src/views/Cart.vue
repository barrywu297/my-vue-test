<template>
  <div class="cart">
     <h2 :title='title'>
            <!-- 插值文本 -->
            {{title}}
        </h2>
      <!-- 弹窗组件 -->
      <!-- 插槽实现内容分发 -->
      <message v-model:show= "show">
          <!-- 添加一个title部分 -->
          <template v-slot:title>恭喜</template>
          <template v-slot>新增课程成功！</template>
      </message>
        <!--新增警告提示窗-->
      <message v-model:show="showWarn" class="warning">
          <template v-slot:title>警告</template>
          <template v-slot>请输入名称！</template>
      </message>
     <!-- 自定义组件支持v-model需要实现内部input的:value和@input -->
    <CourseAdd v-model:course= "course" @add-course= "addCourse"></CourseAdd>
    <BulkPriceAdd v-model:price= "price" @batch-update= "batchUpdate"></BulkPriceAdd>
    <CourseList class = 'course' :courses= "courses" :coursePrice = "coursePrice" />
  </div>
</template>

<script>
// @ is an alias to /src
import CourseList from '@/components/CourseList.vue'
import CourseAdd from '@/components/CourseAdd.vue'
import Message from '@/components/Message.vue'
import BulkPriceAdd from '@/components/BulkPriceAdd.vue' 
import { getCourses } from '@/api/course.js' 

export default {
  name: 'Cart',
  
  data() {
    return {
      title: '测试内容',
      course: '',
      courses: [],
      show: false, // 提示框状态
      showWarn: false,// 控制警告信息显示状态 
      price: 0 // 增加价格数据
    }
  },
  components: {
    CourseList,
    CourseAdd,
    Message,
    BulkPriceAdd
  },
  async created () {
    const courses = await getCourses();
    this.courses = courses;
  },
  methods: {
    addCourse() {
      // 回调函数接收事件参数
      // 1.添加course数组
      if(this.course) {
        this.courses.push({name :this.course});
        // 2.清空coure
        this.course = '';
        this.show = true;
      } else {
        this.showWarn = true
      }
    },
    batchUpdate() {
       // 添加批量更新方法
      this.courses.forEach(c => {
        //向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。
        c.price = this.price;
        //删除对象的属性。如果对象是响应式的，确保删除能触发更新视图。
        //this.$delete(c, 'name');
      });
    }
  },
}
</script>

<style lang="scss" scoped>

  .course {
    // /deep/ div {
    //   color: $color;
    // }

    ::v-deep a {
      color: red;
    }

    ::v-deep .active {
        background-color: $activeColor;
    }
  }
</style>