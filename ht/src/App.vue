<template> 
  <Row id="app">
    <Col span="24" class="Table">
      <Table />
    </Col>
    <Col span="24" class="body">
      <Row class="body-r">
        <Col span="4" class="Nav">
          <Nav />
        </Col>
        <Col span="20" class="page"><router-view/></Col>
      </Row>
    </Col>     
  </Row>    
</template>
<script>
  import Table from './components/app/Table.vue';
  import Nav from './components/app/Nav.vue'
  export default {
      name:"App",
      components:{
        Table,
        Nav
      },
      data(){
        return{
        
        }
      },
  }
</script>
<style>
#app{
  height: 100%;
}
#app .body{
  height: calc(100% - 60px);
}
#app .body-r{
  height: 100%;
  background-color: #f3f3f3;
}
#app .Nav{
  height: 100%;
}

</style>
