<template>
    <div> 
        <h2>detail page</h2> 
        <p>{{$route.params.name}}</p> 
    </div>
</template>

<script>
export default {
   watch: {
       $route: {
           immediate: true,
        //    deep: true,
           handler() {
               console.log("$route change");
           }
       }
   },
}
</script>

<style lang="scss" scoped>

</style>