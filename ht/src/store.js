import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      xxx:{
        a : 0
      },
      indexData:{
        staUser:1,
        staGoods:2,
        staOrder:20,
        bulletin:{},
      },
      userData:{
        userPagenum:1,
        userList:[],
        userNum:0
      },
      orderData:{
        orderPagenum:1,
        orderList:[],
        orderNum:0
      },
      findData:{
        findKey:'',
        findValue:'',
        modelName:''
      },
      goodsData:{
        goodsPagenum:1,
        goodsList:[],
        goodsNum:0
      },
      sortData:{
        sortPagenum:1,
        sortList:[],
        sortNum:0
      },
  },
  mutations: {
    addStaUser(state,data){
      state.indexData.staUser=data;
    },
    addStaGoods(state,data){
      state.indexData.staGoods=data;
    },
    addStaOrder(state,data){
      state.indexData.staOrder=data;
    },
    addBull(state,data){      
      state.indexData.bulletin=data;
    },

    addUserList(state,data){ 
      state.userData.userList = []
      data.forEach(e=> {
        state.userData.userList.push(e.data)
      }); 
    },
    addUserNum(state,data){
      state.userData.userNum=data;
    },
    addUserPage(state,data){
      state.userData.userPagenum=data;
    },

    addOrderList(state,data){ 
      state.orderData.orderList = []
      state.orderData.orderList = data;
    },
    addOrderNum(state,data){
      state.orderData.orderNum=data;
    },
    addOrderPage(state,data){
      state.orderData.orderPagenum=data;
    },

    addFindData(state,data){
      state.findData.findKey = data.key,
      state.findData.findValue = data.value,
      state.findData.modelName = data.modelName;
    },

    addGoodsList(state,data){ 
      state.goodsData.goodsList = []
      state.goodsData.goodsList = data;
    },
    addGoodsNum(state,data){
      state.goodsData.goodsNum=data;
    },
    addGoodsPage(state,data){
      state.goodsData.goodsPagenum=data;
    },

    addSortList(state,data){ 
      state.sortData.sortList = []
      state.sortData.sortList = data;
    },
    addSortNum(state,data){
      state.sortData.sortNum=data;
    },
    addSortPage(state,data){
      state.sortData.sortPagenum=data;
    },
  },
  actions: {
    addIndex({commit}){
      fetch('/api/?s=App.Main_Set.Count&app_key=2509BCB562FA77246FF87A5899CE1527',{
          method:"post",
          body :`key=userData`,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      .then((e)=>e.json())
      .then(data => {
        commit('addStaUser',data.data.total);                 
      });
      fetch('/api/?s=App.Table.Count&app_key=2509BCB562FA77246FF87A5899CE1527',{
          method:"post",
          body :`model_name=goods`,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      .then((e)=>e.json())
      .then(data => {
        commit('addStaGoods',data.data.total);
      });
      fetch('/api/?s=App.Table.Count&app_key=2509BCB562FA77246FF87A5899CE1527',{
          method:"post",
          body :`model_name=order`,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      .then((e)=>e.json())
      .then(data => {
        commit('addStaOrder',data.data.total);          
      });             
      fetch('/api/?s=App.Main_Set.GetList&app_key=2509BCB562FA77246FF87A5899CE1527',{
          method:"post",
          body :`key=bulletin`,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      .then((e)=>e.json())
      .then(data => {
          commit('addBull',data.data.items[0].data);       
      })       
    },
    addUser({commit}){
      let {userPagenum} = this.state.userData
      fetch('/api/?s=App.Main_Set.GetList&app_key=2509BCB562FA77246FF87A5899CE1527',{
          method:"post",
          body :`key=userData&page=${userPagenum}`,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      .then((e)=>e.json())
      .then(data => {
          commit('addUserNum',data.data.total);
          commit('addUserList',data.data.items);
      }) 
    },
    addOrder({commit}){
      let {orderPagenum} = this.state.orderData
      fetch('/api/?s=App.Table.FreeQuery&app_key=2509BCB562FA77246FF87A5899CE1527',{
          method:"post",
          body :`model_name=order&page=${orderPagenum}&where=[["ID",">=","1"]]`,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      .then((e)=>e.json())
      .then(data => {
        console.log(data.data.list)
          commit('addOrderNum',data.data.total);
          commit('addOrderList',data.data.list);
      }) 
    },
    addFind({commit}){
      let {findKey,findValue,modelName} = this.state.findData;   
      console.log(findKey,findValue,modelName)
      fetch('/api/?s=App.Table.FreeQuery&app_key=2509BCB562FA77246FF87A5899CE1527',{
        method:"post",
        body :`model_name=${modelName}&where=[["${findKey}", "LIKE", "${findValue}"]]`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then((e)=>e.json())
      .then(data => {
        let str= modelName;
        str = str.substring(0,1).toUpperCase()+str.substring(1);
        commit('add'+str+'Num',data.data.total);
        commit('add'+str+'List',data.data.list);
      }) 
    },
    addGoods({commit}){
      let {goodsPagenum} = this.state.goodsData
      fetch('/api/?s=App.Table.FreeQuery&app_key=2509BCB562FA77246FF87A5899CE1527',{
          method:"post",
          body :`model_name=goods&page=${goodsPagenum}&where=[["ID",">=","1"]]`,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      .then((e)=>e.json())
      .then(data => {
        console.log(data.data.list)
          commit('addGoodsNum',data.data.total);
          commit('addGoodsList',data.data.list);
      }) 
    },
    addSort({commit}){
      let {sortPagenum} = this.state.sortData
      fetch('/api/?s=App.Table.FreeQuery&app_key=2509BCB562FA77246FF87A5899CE1527',{
          method:"post",
          body :`model_name=sort&page=${sortPagenum}&where=[["ID",">=","1"]]`,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      .then((e)=>e.json())
      .then(data => {
        console.log(data.data.list)
          commit('addSortNum',data.data.total);
          commit('addSortList',data.data.list);
      }) 
    },
  }
})
