webpackJsonp([1],{Go3T:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("lC5x"),o=a.n(r),s=a("J0Oq"),n=a.n(s),i=a("a3Yh"),l=a.n(i),u=a("CtzY"),c=a.n(u),m=a("v6vg"),h=a.n(m),d={data:function(){var e;return e={provinceId:"",cityId:"",areaId:"",tableShowPeople:!0,showEcharts:!1,upperUserId:"",onlysubordinate:"",allsubordinate:"",memberorder:"",membersort:"",memberKeyword:"",activeName:"first",tableData:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},timeInterval:"",searchKeys:"",yztype:[{value:"",label:"全部"},{value:"1",label:"民营医院"},{value:"2",label:"公立医院"}],nature:"",yztel:[{value:"",label:"全部"},{value:"1",label:"有号码"}],yzlevel:[{value:"",label:"全部"},{value:"1",label:"暂不感兴趣"},{value:"2",label:"初步感兴趣"},{value:"3",label:"非常感兴趣"},{value:"4",label:"近期可考察"},{value:"5",label:"线上可签单"}],yzjj:[{value:"",label:"全部"},{value:"1",label:"加急"}],zrtel:[{value:"",label:"全部"},{value:"1",label:"有号码"}],zrlevel:[{value:"",label:"全部"},{value:"1",label:"暂不感兴趣"},{value:"2",label:"初步感兴趣"},{value:"3",label:"非常感兴趣"},{value:"4",label:"近期可考察"},{value:"5",label:"线上可签单"}],zrjj:[{value:"",label:"全部"},{value:"1",label:"加急"}],paiBanCustomerWorkerHas:"",paiBanCustomerWorkerPhoneHas:"",paiBanCustomerWorkerUrgent:"",paiBanCustomerWorkerLevel:"",zhuRenCustomerWorkerHas:"",zhuRenCustomerWorkerPhoneHas:"",zhuRenCustomerWorkerUrgent:"",zhuRenCustomerWorkerLevel:"",paiBanCustomerWorkerLevelname:"",zhuRenCustomerWorkerLevelname:"",urgentLevel:[],urgentLevel1:[],customerPage:1,echartsShowData:!1,lineData:{title:{text:""},text:"数据正在载入...",tooltip:{},legend:{data:["客户量","追踪数"]},xAxis:{name:"时间：日",axisLabel:{interval:0},boundaryGap:!1,data:[]},yAxis:{name:"单位：个"},label:{show:!0},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["bar","line","pie"]},restore:{show:!1},saveAsImage:{show:!0}}},series:[{name:"客户量",type:"line",color:["#37A2DA"],data:[]},{name:"追踪数",type:"line",color:["#fb5858"],data:[]}]},orderNo:0,totalCount:"",nickname:"",totalCountHos:"",totalCountHos1:"",totalCountHos2:"",show1:!1,show2:!1,show3:!1,show4:!1,peopleType:"",phoneIfyuanzhang:"",phoneIfzhuren:"",PhoneHasyuanzhang:"",PhoneHaszhuren:"",urgentyuanzhang:"",urgentzhuren:"",checked1:!1,checked2:!1,checked3:!1,checked4:!1,traceTotalNumber:"",totalCountHosSelect:"",nowTime:"",layuiData:"",createTimeState:"",createTimeFrom:"",createTimeTo:"",hospitalSort:"",hospitalOrder:"",hospitalPageSize:15,hospitalPageNo:1,currentPage1:1,changeEcharts:!0,options:[],provinceName:""},l()(e,"provinceId",""),l()(e,"cityName",""),l()(e,"cityId",""),l()(e,"areaName",""),l()(e,"areaId",""),e},activated:function(){var e=this,t=this;t.options=h.a,console.log(t.options),t.$axios.post("/crm/login-refresh").then(function(a){a.data.codeMsg&&t.$message({type:"info",message:a.data.codeMsg,onClose:function(){t.$router.push({path:"/login"})}}),0==a.data.code&&(e.$store.state.loginRefresh=a.data.data,t.nickname=a.data.data.nickname,t.upperUserId=a.data.data.userId,t.onlysubordinateNum(),t.urgentLevel=[],t.urgentLevel1=[],t.getData(t.upperUserId,t.memberorder,t.membersort))}),t.getDataNumber(),t.lastPage(1),t.allsubordinateNum(),t.getDataNumberHos(),t.getDataNumberHos(1),t.getDataNumberHos(2),t.traceNumber();var a=(new Date).getFullYear(),r=(new Date).getMonth()+1;r<10&&(r="0"+r),t.layuiData=a+"-"+r,t.$nextTick(function(){layui.use("laydate",function(){layui.laydate.render({elem:"#layDateMonth",type:"month",change:function(e,a,r){if(console.log(t.layuiData),t.layuiData==e)return $(".layui-laydate").remove(),t.changeEcharts=!1,void console.log(t.changeEcharts);t.changeEcharts=!0,console.log(t.changeEcharts),console.log(e),console.log(a),console.log(r),t.nowTime=a,a.month<10&&(a.month="0"+a.month),t.layuiData=a.year+"-"+a.month,$(".layui-laydate").remove()}})})})},mounted:function(){this.options=h.a},methods:{selProvince:function(e){for(var t in console.log(e),this.provinces=[],this.citys=[],this.cityId="",this.areaId="",this.provinceId=e,this.options)e==this.options[t].value&&(this.provinces=this.options[t].children,this.provinceName=this.options[t].label);console.log(this.provinces),console.log(this.provinceName,this.provinceId)},selCity:function(e){for(var t in console.log(e),this.citys=[],this.areaId="",this.cityId=e,this.provinces)e==this.provinces[t].value&&(this.citys=this.provinces[t].children,this.cityName=this.provinces[t].label);console.log(this.provinceName,this.provinceId,this.cityName,this.cityId)},selArea:function(e){for(var t in console.log(e),this.areaId=e,this.citys)e==this.citys[t].value&&(this.areaName=this.citys[t].label);console.log(this.provinceName,this.provinceId,this.cityName,this.cityId,this.areaName,this.areaId)},searchMember:function(){this.urgentLevel=[],this.urgentLevel1=[],this.onlysubordinateNum(),this.allsubordinateNum(),"first"==this.activeName?this.getData(this.upperUserId,this.memberorder,this.membersort):this.getData1("",this.memberorder,this.membersort)},restartmember:function(){this.memberKeyword="",this.memberorder="",this.membersort="",this.$refs.tableMember1&&this.$refs.tableMember1.clearSort(),this.$refs.tableMember2&&this.$refs.tableMember2.clearSort(),this.urgentLevel=[],this.urgentLevel1=[],this.onlysubordinateNum(),this.allsubordinateNum(),"first"==this.activeName?this.getData(this.upperUserId,this.memberorder,this.membersort):this.getData1("",this.memberorder,this.membersort)},handleClick:function(e,t){console.log(e,t)},handleDelete:function(e,t){console.log(e,t)},handleTabClick:function(e,t){console.log(e,t),console.log(this.activeName),"first"==e.name?(this.tableShowPeople=!0,0==this.urgentLevel.length&&this.getData(this.upperUserId,this.memberorder,this.membersort)):(this.tableShowPeople=!1,0==this.urgentLevel1.length&&this.getData1("",this.memberorder,this.membersort))},daterange:function(e){this.createTimeFrom=e[0],this.createTimeTo=e[1]},handleSizeChange:function(e){this.hospitalPageSize=e,this.lastPage(this.hospitalPageNo)},handleCurrentChange:function(e){this.hospitalPageNo=e,this.lastPage(this.hospitalPageNo)},sortChange:function(e){console.log(e),this.hospitalSort=e.prop,e.order?"ascending"==e.order?this.hospitalOrder="asc":"descending"==e.order&&(this.hospitalOrder="desc"):(this.hospitalOrder="",this.hospitalSort=""),console.log(this.hospitalOrder,this.hospitalSort),this.currentPage1=1,this.tableData=[],this.lastPage(1)},restart:function(){this.checked1=!1,this.checked2=!1,this.searchKeys="",this.paiBanCustomerWorkerHas="",this.paiBanCustomerWorkerPhoneHas="",this.paiBanCustomerWorkerUrgent="",this.paiBanCustomerWorkerLevel="",this.zhuRenCustomerWorkerHas="",this.zhuRenCustomerWorkerPhoneHas="",this.zhuRenCustomerWorkerUrgent="",this.zhuRenCustomerWorkerLevel="",this.provinceId="",this.provinceName="",this.cityId="",this.cityName="",this.areaId="",this.areaName="",this.currentPage1=1,this.hospitalSort="",this.hospitalOrder="",this.nature="",this.$refs.tableHos.clearSort(),this.tableData=[],this.getNumberHosSelect(),this.lastPage(1)},yuanzhangIf:function(e){this.paiBanCustomerWorkerHas=1==e?1:""},zhurenIf:function(e){this.zhuRenCustomerWorkerHas=1==e?1:""},placedAtTheTopFn:function(e){var t=this;if(console.dir(e),console.log(e),"first"==this.activeName){var a=this.urgentLevel.findIndex(function(t){return t.userId==e.userId});console.log(a),a&&this.$axios.post("/crm/zong-jing-li/update-user",c.a.stringify({userId:e.userId,orderNo:this.orderNo-1})).then(function(e){if(e.data.codeMsg&&t.$message({type:"info",message:e.data.codeMsg}),0==e.data.code){t.orderNo--,console.log(123123),console.log(t.urgentLevel);var r=t.urgentLevel[a];t.urgentLevel.splice(a,1),t.urgentLevel.splice(0,0,r),console.log(t.urgentLevel)}else t.$message({type:"info",message:e.data.codeMsg})})}else{var r=this.urgentLevel1.findIndex(function(t){return t.userId==e.userId});console.log(r),r&&this.$axios.post("/crm/zong-jing-li/update-user",c.a.stringify({userId:e.userId,orderNo:this.orderNo-1})).then(function(e){if(e.data.codeMsg&&t.$message({type:"info",message:e.data.codeMsg}),0==e.data.code){t.orderNo--,console.log(123123),console.log(t.urgentLevel1);var a=t.urgentLevel1[r];t.urgentLevel1.splice(r,1),t.urgentLevel1.splice(0,0,a),console.log(t.urgentLevel1)}else t.$message({type:"info",message:e.data.codeMsg})})}},yuanzhang:function(e){1==e?(this.show1=!0,this.show2=!1,this.paiBanCustomerWorkerHas=1,this.createTimeState="paiBanCustomerWorkerInserTime"):(this.show1=!1,this.show2=!1,this.paiBanCustomerWorkerHas="",this.PhoneHasyuanzhang="",this.paiBanCustomerWorkerPhoneHas="",this.paiBanCustomerWorkerUrgent="",this.paiBanCustomerWorkerLevel="",this.paiBanCustomerWorkerLevelname="",this.checked3=!1,this.urgentyuanzhang="","paiBanCustomerWorkerInserTime"!=this.createTimeState&&"paiBanCustomerWorkerPhoneInsertTime"!=this.createTimeState&&"paiBanCustomerWorkerLevelTime"!=this.createTimeState||(this.createTimeState=""))},zhuren:function(e){1==e?(this.show3=!0,this.show4=!1,this.zhuRenCustomerWorkerHas=1,this.createTimeState="zhuRenCustomerWorkerInserTime"):("zhuRenCustomerWorkerInserTime"!=this.createTimeState&&"zhuRenCustomerWorkerPhoneInsertTime"!=this.createTimeState&&"zhuRenCustomerWorkerLevelTime"!=this.createTimeState||(this.createTimeState=""),this.show3=!1,this.show4=!1,this.zhuRenCustomerWorkerHas="",this.PhoneHaszhuren="",this.zhuRenCustomerWorkerPhoneHas="",this.zhuRenCustomerWorkerUrgent="",this.zhuRenCustomerWorkerLevel="",this.zhuRenCustomerWorkerLevelname="",this.checked4=!1,this.urgentzhuren="")},selectHos:function(e,t){this.nature=t},selectPhoneyuanzhang:function(e){this.phoneIfyuanzhang=e,0==e&&(this.show2=!0,this.paiBanCustomerWorkerPhoneHas="","paiBanCustomerWorkerPhoneInsertTime"==this.createTimeState&&(this.createTimeState="")),1==e&&(this.show2=!0,this.createTimeState="paiBanCustomerWorkerPhoneInsertTime",this.paiBanCustomerWorkerPhoneHas=1)},selectPhonezhuren:function(e){this.phoneIfzhuren=e,0==e&&(this.show4=!0,this.zhuRenCustomerWorkerPhoneHas="","zhuRenCustomerWorkerPhoneInsertTime"==this.createTimeState&&(this.createTimeState="")),1==e&&(this.show4=!0,this.zhuRenCustomerWorkerPhoneHas=1,this.createTimeState="zhuRenCustomerWorkerPhoneInsertTime")},yuanzhanglevel:function(e){0==e?(this.paiBanCustomerWorkerLevel="",this.paiBanCustomerWorkerLevelname="","paiBanCustomerWorkerLevelTime"==this.createTimeState&&(this.createTimeState="")):(this.paiBanCustomerWorkerLevel=e,this.createTimeState="paiBanCustomerWorkerLevelTime",1==e?this.paiBanCustomerWorkerLevelname="暂不感兴趣":2==e?this.paiBanCustomerWorkerLevelname="初步感兴趣":3==e?this.paiBanCustomerWorkerLevelname="非常感兴趣":4==e?this.paiBanCustomerWorkerLevelname="近期可考察":5==e&&(this.paiBanCustomerWorkerLevelname="线上可签单"))},zhurenlevel:function(e){0==e?(this.zhuRenCustomerWorkerLevel="","zhuRenCustomerWorkerLevelTime"==this.createTimeState&&(this.createTimeState="")):(this.zhuRenCustomerWorkerLevel=e,this.createTimeState="zhuRenCustomerWorkerLevelTime",1==e?this.zhuRenCustomerWorkerLevelname="暂不感兴趣":2==e?this.zhuRenCustomerWorkerLevelname="初步感兴趣":3==e?this.zhuRenCustomerWorkerLevelname="非常感兴趣":4==e?this.zhuRenCustomerWorkerLevelname="近期可考察":5==e&&(this.zhuRenCustomerWorkerLevelname="线上可签单"))},yuanzhangjj:function(e){this.paiBanCustomerWorkerUrgent=1==e?1:""},zhurenjj:function(e){this.zhuRenCustomerWorkerUrgent=1==e?1:""},selectFilterFn:function(){this.echartsShowData=!0,this.statisticalAllFn()},selectHospiatlNumFilterFn:function(){this.tableData=[],this.getNumberHosSelect(),this.lastPage(1)},lookrecordlist:function(){localStorage.setItem("id","");var e=this.$router.resolve({path:"/record-list",query:{time:(new Date).getTime()}});window.open(e.href,"_blank")},lastPage:function(e){var t=c.a.stringify({area1Id:this.provinceId,area2Id:this.cityId,area3Id:this.areaId,paiBanCustomerWorkerHas:this.paiBanCustomerWorkerHas,paiBanCustomerWorkerPhoneHas:0==this.paiBanCustomerWorkerPhoneHas?"":this.paiBanCustomerWorkerPhoneHas,paiBanCustomerWorkerUrgent:0==this.paiBanCustomerWorkerUrgent?"":this.paiBanCustomerWorkerUrgent,paiBanCustomerWorkerLevel:0==this.paiBanCustomerWorkerLevel?"":this.paiBanCustomerWorkerLevel,zhuRenCustomerWorkerHas:this.zhuRenCustomerWorkerHas,zhuRenCustomerWorkerPhoneHas:0==this.zhuRenCustomerWorkerPhoneHas?"":this.zhuRenCustomerWorkerPhoneHas,zhuRenCustomerWorkerUrgent:0==this.zhuRenCustomerWorkerUrgent?"":this.zhuRenCustomerWorkerUrgent,zhuRenCustomerWorkerLevel:0==this.zhuRenCustomerWorkerLevel?"":this.zhuRenCustomerWorkerLevel,nature:this.nature,kw:this.searchKeys,sort:this.hospitalSort,order:this.hospitalOrder}),a=this,r=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)",target:document.querySelector(".table1")});$.ajax({url:"/crm/ling-dao/customer/customer-list",type:"GET",data:t+"&createTimeFrom="+a.createTimeFrom+"&createTimeTo="+a.createTimeTo+"&ps="+a.hospitalPageSize+"&pn="+e,async:!0,success:function(e){if(console.dir(e),e.codeMsg&&(a.$message({type:"info",message:e.codeMsg}),r.close()),0==e.code){if($("#leader_index .tbody").html(""),$(".tableBox").css("display","block"),e.data.itemList&&e.data.itemList.length>0){for(var t in e.data.itemList){e.data.itemList[t].paiBanCustomerWorkerPhone1&&e.data.itemList[t].paiBanCustomerWorkerPhone1.substring(0,3)+"****"+e.data.itemList[t].paiBanCustomerWorkerPhone1.substring(8,e.data.itemList[t].paiBanCustomerWorkerPhone1.length),e.data.itemList[t].lastTraceTime?e.data.itemList[t].lastTraceTime=a.moment(e.data.itemList[t].lastTraceTime).format("YYYY-MM-DD"):e.data.itemList[t].lastTraceTime="",e.data.itemList[t].createTime?e.data.itemList[t].createTime=a.moment(e.data.itemList[t].createTime).format("YYYY-MM-DD"):e.data.itemList[t].createTime="",e.data.itemList[t].matterUpdateTime?e.data.itemList[t].matterUpdateTime=a.moment(e.data.itemList[t].matterUpdateTime).format("YYYY-MM-DD"):e.data.itemList[t].matterUpdateTime="";var o=e.data.itemList[t].level;e.data.itemList[t].level=1==o?"无兴趣":2==o?"低兴趣":3==o?"高兴趣":4==o?"可考察":5==o?"可签单":""}a.tableData=e.data.itemList,r.close()}r.close()}}})},lastPageNo:function(e){var t=c.a.stringify({area1Id:this.provinceId,area2Id:this.cityId,area3Id:this.areaId,paiBanCustomerWorkerHas:this.paiBanCustomerWorkerHas,paiBanCustomerWorkerPhoneHas:0==this.paiBanCustomerWorkerPhoneHas?"":this.paiBanCustomerWorkerPhoneHas,paiBanCustomerWorkerUrgent:0==this.paiBanCustomerWorkerUrgent?"":this.paiBanCustomerWorkerUrgent,paiBanCustomerWorkerLevel:0==this.paiBanCustomerWorkerLevel?"":this.paiBanCustomerWorkerLevel,zhuRenCustomerWorkerHas:this.zhuRenCustomerWorkerHas,zhuRenCustomerWorkerPhoneHas:0==this.zhuRenCustomerWorkerPhoneHas?"":this.zhuRenCustomerWorkerPhoneHas,zhuRenCustomerWorkerUrgent:0==this.zhuRenCustomerWorkerUrgent?"":this.zhuRenCustomerWorkerUrgent,zhuRenCustomerWorkerLevel:0==this.zhuRenCustomerWorkerLevel?"":this.zhuRenCustomerWorkerLevel,nature:this.nature,kw:this.searchKeys}),a=this;$.ajax({url:"/crm/ling-dao/customer/customer-list-sum",type:"GET",data:t+"&createTimeFrom="+a.createTimeFrom+"&createTimeTo="+a.createTimeTo+"&ps=15&pn="+e,async:!0,success:function(e){0==e.code&&(a.totalNum=Math.ceil(e.data.itemCount/15),$("#leader_index .shuju").html("( 共"+e.data.itemCount+"条数据 )"),$("#leader_index #box").paging({initPageNo:1,totalPages:a.totalNum,slideSpeed:600,jump:!0,callback:function(e){a.pn=e,a.lastPage(e)}}))}})},getDateDiff:function(e){if(!e)return"";var t=(new Date).getTime()-e;if(!(t<0)){var a=t/2592e6,r=t/6048e5,o=t/864e5,s=t/36e5,n=t/6e4;return a>=1?a<=12?parseInt(a)+"月前":parseInt(a/12)+"年前":r>=1?parseInt(r)+"周前":o>=1?parseInt(o)+"天前":s>=1?parseInt(s)+"小时前":n>=1?parseInt(n)+"分钟前":"刚刚"}},loginout:function(){var e=this;this.$confirm("请确认是否退出登录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(function(){e.$message({type:"success",message:"退出成功!"}),e.$axios.post("/crm/logout").then(function(t){t.data.codeMsg&&e.$message({type:"info",message:t.data.codeMsg}),0==t.data.code&&(location.href=location.pathname)})}).catch(function(){e.$message({type:"info",message:"已取消退出"})})},memberDetail:function(e,t){localStorage.setItem("id",e),localStorage.setItem("nickname",t),this.$router.push({path:"/leader-lookIndex",query:{time:(new Date).getTime()}})},getData:function(e,t,a){var r=this;console.log(e,t,a);var o=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)",target:document.querySelector(".teammemberList")});this.$axios.get("/crm/ling-dao/user-list?"+c.a.stringify({kw:this.memberKeyword,pn:this.customerPage,upperUserId:e,order:t,sort:a})).then(function(e){if(e.data.codeMsg&&(r.$message({type:"info",message:e.data.codeMsg}),o.close()),0==e.data.code){if(e.data.data.itemList[0]&&(r.orderNo=e.data.data.itemList[0].orderNo),console.log(r.activeName),e.data.data.itemList.length>0)for(var t in e.data.data.itemList)r.urgentLevel.push(e.data.data.itemList[t]);o.close()}})},getData1:function(e,t,a){var r=this;console.log(e,t,a);var o=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)",target:document.querySelector(".teammemberList")});this.$axios.get("/crm/ling-dao/user-list?"+c.a.stringify({kw:this.memberKeyword,pn:this.customerPage,order:t,sort:a})).then(function(e){if(e.data.codeMsg&&(r.$message({type:"info",message:e.data.codeMsg}),o.close()),0==e.data.code){if(e.data.data.itemList[0]&&(r.orderNo=e.data.data.itemList[0].orderNo),console.log(r.activeName),e.data.data.itemList.length>0)for(var t in e.data.data.itemList)r.urgentLevel1.push(e.data.data.itemList[t]);o.close()}})},onlysubordinateNum:function(){var e=this;console.log(e.upperUserId),e.$axios.get("/crm/ling-dao/user-list-sum?"+c.a.stringify({upperUserId:e.upperUserId,kw:e.memberKeyword})).then(function(t){t.data.codeMsg&&e.$message({type:"info",message:t.data.codeMsg}),0==t.data.code&&(e.onlysubordinate=t.data.data.itemCount)})},allsubordinateNum:function(){var e=this;e.$axios.get("/crm/ling-dao/user-list-sum?"+c.a.stringify({kw:e.memberKeyword})).then(function(t){t.data.codeMsg&&e.$message({type:"info",message:t.data.codeMsg}),0==t.data.code&&(e.allsubordinate=t.data.data.itemCount)})},getDataNumber:function(){var e=this;this.$axios.get("/crm/ling-dao/user-list-sum").then(function(t){t.data.codeMsg&&e.$message({type:"info",message:t.data.codeMsg}),0==t.data.code&&(e.totalCount=t.data.data.itemCount)})},getNumberHosSelect:function(e){var t=this;return n()(o.a.mark(function a(){var r;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t,r=t.paiBanCustomerWorkerPhoneHas?t.paiBanCustomerWorkerPhoneHas:e,a.next=5,t.$axios.get("/crm/ling-dao/customer/customer-list-sum?"+c.a.stringify({area1Id:t.provinceId,area2Id:t.cityId,area3Id:t.areaId,paiBanCustomerWorkerHas:t.paiBanCustomerWorkerHas,paiBanCustomerWorkerPhoneHas:r,paiBanCustomerWorkerUrgent:t.paiBanCustomerWorkerUrgent,paiBanCustomerWorkerLevel:t.paiBanCustomerWorkerLevel,zhuRenCustomerWorkerHas:t.zhuRenCustomerWorkerHas,zhuRenCustomerWorkerPhoneHas:t.zhuRenCustomerWorkerPhoneHas,zhuRenCustomerWorkerUrgent:t.zhuRenCustomerWorkerUrgent,zhuRenCustomerWorkerLevel:t.zhuRenCustomerWorkerLevel,nature:t.nature,kw:t.searchKeys,createTimeFrom:t.createTimeFrom,createTimeTo:t.createTimeTo})).then(function(e){e.data.codeMsg&&t.$message({type:"info",message:e.data.codeMsg}),0==e.data.code&&(t.totalCountHosSelect=e.data.data.itemCount)});case 5:case"end":return a.stop()}},a,t)}))()},getDataNumberHosSelect:function(e){var t=this;return n()(o.a.mark(function a(){return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(222),t,void 0,a.next=5,t.$axios.get("/crm/ling-dao/customer/customer-list-sum-by-month?"+c.a.stringify({paiBanCustomerWorkerHas:t.paiBanCustomerWorkerHas,paiBanCustomerWorkerPhoneHas:0==t.paiBanCustomerWorkerPhoneHas?"":t.paiBanCustomerWorkerPhoneHas,paiBanCustomerWorkerUrgent:0==t.paiBanCustomerWorkerUrgent?"":t.paiBanCustomerWorkerUrgent,paiBanCustomerWorkerLevel:0==t.paiBanCustomerWorkerLevel?"":t.paiBanCustomerWorkerLevel,zhuRenCustomerWorkerHas:t.zhuRenCustomerWorkerHas,zhuRenCustomerWorkerPhoneHas:0==t.zhuRenCustomerWorkerPhoneHas?"":t.zhuRenCustomerWorkerPhoneHas,zhuRenCustomerWorkerUrgent:0==t.zhuRenCustomerWorkerUrgent?"":t.zhuRenCustomerWorkerUrgent,zhuRenCustomerWorkerLevel:0==t.zhuRenCustomerWorkerLevel?"":t.zhuRenCustomerWorkerLevel,createTimeFrom:t.createTimeFrom,createTimeTo:t.createTimeTo,whatTime:t.createTimeState,nature:t.nature,kw:t.searchKeys,area1Id:t.provinceId,area2Id:t.cityId,area3Id:t.areaId,createTimeByMonth:e})).then(function(e){if(e.data.codeMsg&&t.$message({type:"info",message:e.data.codeMsg}),0==e.data.code){var a=(new Date).getFullYear(),r=(new Date).getMonth()+1,o=(new Date).getDate();r<10&&(r="0"+r),o<10&&(o="0"+o);var s=a.toString()+r.toString()+o.toString();for(var n in e.data.data.sum){var i=e.data.data.sum[n].date.split("-")[0]+e.data.data.sum[n].date.split("-")[1]+e.data.data.sum[n].date.split("-")[2].split(" ")[0];e.data.data.sum[n].date.split("-")[2].split(" ")[0]<10?t.lineData.xAxis.data.push(e.data.data.sum[n].date.split("-")[2].split(" ")[0].replace(0,"")):t.lineData.xAxis.data.push(e.data.data.sum[n].date.split("-")[2].split(" ")[0]),i<=s&&t.lineData.series[0].data.push(e.data.data.sum[n].sum.itemCount)}}});case 5:case"end":return a.stop()}},a,t)}))()},getCustomerWorkerTrace:function(e){var t=this;return n()(o.a.mark(function a(){return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(111),a.next=3,t.$axios.get("/crm/ling-dao/customer-worker-trace/customer-worker-trace-list-sum-by-month?"+c.a.stringify({createTimeFrom:t.createTimeFrom,createTimeTo:t.createTimeTo,createTimeByMonth:e})).then(function(e){if(e.data.codeMsg&&t.$message({type:"info",message:e.data.codeMsg}),0==e.data.code){var a=(new Date).getFullYear(),r=(new Date).getMonth()+1,o=(new Date).getDate();r<10&&(r="0"+r),o<10&&(o="0"+o);var s=a.toString()+r.toString()+o.toString();for(var n in e.data.data.sum){e.data.data.sum[n].date.split("-")[0]+e.data.data.sum[n].date.split("-")[1]+e.data.data.sum[n].date.split("-")[2].split(" ")[0]<=s&&t.lineData.series[1].data.push(e.data.data.sum[n].sum.itemCount)}console.log(t.lineData.series[1].data)}});case 3:case"end":return a.stop()}},a,t)}))()},statisticalAllFn:function(){var e=this;return n()(o.a.mark(function t(){var a,r,s,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(e.changeEcharts),e.changeEcharts){t.next=4;break}if(!e.lineData.series[1].data.length){t.next=4;break}return t.abrupt("return");case 4:return a=e.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)",target:document.querySelector(".popBgWindow")}),0!=e.lineData.xAxis.data.length&&(e.lineData.xAxis.data=[],e.chartsFn()),console.log(1230),(new Date).getDate(),r=(new Date).getMonth()+1,s=(new Date).getFullYear(),console.log(e.nowTime,e.layuiData),e.nowTime&&(s=e.nowTime.year,r=e.nowTime.month,new Date(s,r,0).getDate()),n=new Date(s+"-"+r+"-1 00:00:00").getTime(),console.log(n),t.next=16,e.getDataNumberHosSelect(n);case 16:return t.next=18,e.getCustomerWorkerTrace(n);case 18:e.$echarts.init(document.getElementById("main")).setOption(e.lineData,!0),a.close(),e.changeEcharts=!1;case 21:case"end":return t.stop()}},t,e)}))()},chartsFn:function(){console.log("chartsFn()"),this.lineData.series[0].data=[],this.lineData.series[1].data=[],this.$echarts.init(document.getElementById("main")).setOption(this.lineData,!0),this.$echarts.init(document.getElementById("main")).clear()},getDataNumberHos:function(e){var t=this;this.$axios.get("/crm/ling-dao/customer/customer-list-sum?"+c.a.stringify({nature:e})).then(function(a){a.data.codeMsg&&t.$message({type:"info",message:a.data.codeMsg}),0==a.data.code&&(1==e?t.totalCountHos1=a.data.data.itemCount:2==e?t.totalCountHos2=a.data.data.itemCount:(t.totalCountHos=a.data.data.itemCount,t.totalCountHosSelect=a.data.data.itemCount))})},traceNumber:function(){var e=this;this.$axios.get("/crm/ling-dao/customer-worker-trace/customer-worker-trace-list-sum").then(function(t){t.data.codeMsg&&e.$message({type:"info",message:t.data.codeMsg}),0==t.data.code&&(e.traceTotalNumber=t.data.data.itemCount)})}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"leader_index"}},[a("div",{staticClass:"leader_top"},[a("span",{staticClass:"leader_top_title"},[e._v(e._s(e.$titleName)+" —— "+e._s(e.nickname))]),e._v(" "),a("span",{staticClass:"loginout",on:{click:function(t){return e.loginout()}}},[e._v("退出登录")])]),e._v(" "),a("div",{staticClass:"searchResults"},[a("div",[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.searchKeys,callback:function(t){e.searchKeys=t},expression:"searchKeys"}}),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.selectHospiatlNumFilterFn()}}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.restart()}}},[e._v("重置")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.layuiData,expression:"layuiData"}],staticClass:"layui-input",staticStyle:{cursor:"pointer",display:"inline"},attrs:{type:"text",id:"layDateMonth",readonly:"",placeholder:"图表月份时间选择"},domProps:{value:e.layuiData},on:{input:function(t){t.target.composing||(e.layuiData=t.target.value)}}}),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.selectFilterFn()}}},[e._v("图表")]),e._v(" "),a("div",{staticClass:"screenRow"},[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,"value-format":"timestamp","default-time":["00:00:00","23:59:59"]},on:{change:function(t){return e.daterange(t)}},model:{value:e.timeInterval,callback:function(t){e.timeInterval=t},expression:"timeInterval"}})],1),e._v(" "),a("el-select",{staticClass:"typeName",attrs:{placeholder:"医院类型"},model:{value:e.nature,callback:function(t){e.nature=t},expression:"nature"}},e._l(e.yztype,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-button",{staticStyle:{float:"right",width:"150px"},attrs:{type:"primary"},on:{click:function(t){return e.lookrecordlist()}}},[e._v("通话记录汇总")])],1)]),e._v(" "),a("div",{staticClass:"screen"},[a("div",[a("div",{staticClass:"screenRow"},[a("el-checkbox",{on:{change:function(t){return e.yuanzhangIf(t)}},model:{value:e.checked1,callback:function(t){e.checked1=t},expression:"checked1"}},[e._v("院长")]),e._v(" "),a("el-select",{attrs:{placeholder:"有无号码"},model:{value:e.paiBanCustomerWorkerPhoneHas,callback:function(t){e.paiBanCustomerWorkerPhoneHas=t},expression:"paiBanCustomerWorkerPhoneHas"}},e._l(e.yztel,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-select",{attrs:{placeholder:"请选择级别"},model:{value:e.paiBanCustomerWorkerLevel,callback:function(t){e.paiBanCustomerWorkerLevel=t},expression:"paiBanCustomerWorkerLevel"}},e._l(e.yzlevel,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-select",{attrs:{placeholder:"是否加急"},model:{value:e.paiBanCustomerWorkerUrgent,callback:function(t){e.paiBanCustomerWorkerUrgent=t},expression:"paiBanCustomerWorkerUrgent"}},e._l(e.yzjj,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("div",{staticClass:"screenRow"},[a("el-checkbox",{on:{change:function(t){return e.zhurenIf(t)}},model:{value:e.checked2,callback:function(t){e.checked2=t},expression:"checked2"}},[e._v("主任")]),e._v(" "),a("el-select",{attrs:{placeholder:"有无号码"},model:{value:e.zhuRenCustomerWorkerPhoneHas,callback:function(t){e.zhuRenCustomerWorkerPhoneHas=t},expression:"zhuRenCustomerWorkerPhoneHas"}},e._l(e.zrtel,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-select",{attrs:{placeholder:"请选择级别"},model:{value:e.zhuRenCustomerWorkerLevel,callback:function(t){e.zhuRenCustomerWorkerLevel=t},expression:"zhuRenCustomerWorkerLevel"}},e._l(e.zrlevel,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-select",{attrs:{placeholder:"是否加急"},model:{value:e.zhuRenCustomerWorkerUrgent,callback:function(t){e.zhuRenCustomerWorkerUrgent=t},expression:"zhuRenCustomerWorkerUrgent"}},e._l(e.zrjj,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)])]),e._v(" "),a("div",{staticClass:"screen"},[a("div",{staticClass:"screenRow",staticStyle:{"margin-left":"16"}},[a("el-select",{staticClass:"index_location index_province ",attrs:{placeholder:"请选择省"},on:{change:e.selProvince},model:{value:e.provinceId,callback:function(t){e.provinceId=t},expression:"provinceId"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-select",{staticClass:"index_location index_city",attrs:{placeholder:"请选择市"},on:{change:e.selCity},model:{value:e.cityId,callback:function(t){e.cityId=t},expression:"cityId"}},e._l(e.provinces,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),a("el-select",{staticClass:"index_location index_town",attrs:{placeholder:"请选择区"},on:{change:e.selArea},model:{value:e.areaId,callback:function(t){e.areaId=t},expression:"areaId"}},e._l(e.citys,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)]),e._v(" "),e._e(),e._v(" "),a("div",{staticClass:"selectAllThis"},[a("div",[a("p",{staticStyle:{"font-size":"16px",color:"#333333","line-height":"40px",margin:"0"}},[e._v("\n        合计：总数 "+e._s(e.totalCountHosSelect)+"\n      ")])]),e._v(" "),a("div",{staticClass:"table1"},[a("el-table",{ref:"tableHos",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name","show-overflow-tooltip":"",label:"医院名称",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{attrs:{target:"_blank",href:"./#/modify-hosNew-leader?id="+t.row.customerId}},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"userNickname",label:"业务员",width:"130"}}),e._v(" "),a("el-table-column",{attrs:{prop:"level",label:"级别",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerWorkerCount",label:"相关人员",sortable:"custom","sort-orders":["descending","ascending"],width:"130"}}),e._v(" "),a("el-table-column",{attrs:{prop:"lastTraceContent","show-overflow-tooltip":"",label:"追踪内容"}}),e._v(" "),a("el-table-column",{attrs:{prop:"lastTraceTime",label:"追踪时间",sortable:"custom","sort-orders":["descending","ascending"]}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",sortable:"custom","sort-orders":["descending","ascending"]}}),e._v(" "),a("el-table-column",{attrs:{prop:"matterUpdateTime",label:"关键更新时间",sortable:"custom","sort-orders":["descending","ascending"]}})],1)],1),e._v(" "),a("div",{staticClass:"tableBox",staticStyle:{display:"none","padding-bottom":"50px"}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{background:"","current-page":e.currentPage1,"page-sizes":[15,30,50,100],"page-size":15,layout:"total, sizes, prev, pager, next, jumper",total:e.totalCountHosSelect},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage1=t},"update:current-page":function(t){e.currentPage1=t}}})],1)]),e._v(" "),e._e(),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.echartsShowData,expression:"echartsShowData"}],staticClass:"popBgWindow",on:{click:function(t){if(t.target!==t.currentTarget)return null;e.echartsShowData=!1}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.echartsShowData,expression:"echartsShowData"}],staticStyle:{"min-width":"1230px",height:"400px",margin:"150px auto 0px"}},[a("div",{staticStyle:{"min-width":"1200px",height:"400px","margin-left":"0px auto"},attrs:{id:"main"}})])]),e._v(" "),a("div",{staticClass:"teammembers",staticStyle:{"margin-top":"24px"}},[a("el-tabs",{on:{"tab-click":e.handleTabClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"直属下级:"+e.onlysubordinate+"人",name:"first"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"所有下级:"+e.allsubordinate+"人",name:"second"}})],1),e._v(" "),a("div",{staticClass:"searchResults"},[a("div",[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.memberKeyword,callback:function(t){e.memberKeyword=t},expression:"memberKeyword"}}),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.searchMember}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.restartmember()}}},[e._v("重置")])],1)])],1),e._v(" "),a("div",{staticClass:"teammemberList"},[e.tableShowPeople?a("el-table",{ref:"tableMember1",staticStyle:{width:"100%","max-height":"589px","overflow-y":"scroll"},attrs:{data:e.urgentLevel,border:"","default-sort":{prop:"date",order:"descending"}}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{attrs:{target:"_blank",href:"./#/index-new-leader?id="+t.row.userId+"&nickname="+encodeURIComponent(encodeURIComponent(t.row.nickname))}},[e._v(e._s(t.row.nickname))])]}}],null,!1,3750386361)}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"账号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerCount",label:"客户量",sortable:"","sort-orders":["descending","ascending"]}}),e._v(" "),a("el-table-column",{attrs:{prop:"yesterdayTraceCount",label:"昨日追踪",sortable:"","sort-orders":["descending","ascending"]}}),e._v(" "),a("el-table-column",{attrs:{prop:"yesterdayNewCustomerCount",label:"昨日新客户",sortable:"","sort-orders":["descending","ascending"]}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{color:"#1890ff"},attrs:{size:"mini"},on:{click:function(a){return e.placedAtTheTopFn(t.row)}}},[e._v("置顶")])]}}],null,!1,1140353953)})],1):e._e(),e._v(" "),e.tableShowPeople?e._e():a("el-table",{ref:"tableMember2",staticStyle:{width:"100%","max-height":"589px","overflow-y":"scroll"},attrs:{data:e.urgentLevel1,border:"","default-sort":{prop:"date",order:"descending"}}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nickname",label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{attrs:{target:"_blank",href:"./#/index-new-leader?id="+t.row.userId+"&nickname="+encodeURIComponent(encodeURIComponent(t.row.nickname))}},[e._v(e._s(t.row.nickname))])]}}],null,!1,3750386361)}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"账号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"customerCount",label:"客户量",sortable:"","sort-orders":["descending","ascending"]}}),e._v(" "),a("el-table-column",{attrs:{prop:"yesterdayTraceCount",label:"昨日追踪",sortable:"","sort-orders":["descending","ascending"]}}),e._v(" "),a("el-table-column",{attrs:{prop:"yesterdayNewCustomerCount",label:"昨日新客户",sortable:"","sort-orders":["descending","ascending"]}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticStyle:{color:"#1890ff"},attrs:{size:"mini"},on:{click:function(a){return e.placedAtTheTopFn(t.row)}}},[e._v("置顶")])]}}],null,!1,1140353953)})],1)],1),e._v(" "),e._e(),e._v(" "),a("div",{staticClass:"leader_chart"})])},staticRenderFns:[]};var g=a("C7Lr")(d,p,!1,function(e){a("bT7t")},"data-v-7db5368c",null);t.default=g.exports},a3Yh:function(e,t,a){"use strict";t.__esModule=!0;var r,o=a("liLe"),s=(r=o)&&r.__esModule?r:{default:r};t.default=function(e,t,a){return t in e?(0,s.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},bT7t:function(e,t){},gGjR:function(e,t,a){a("vdXL");var r=a("DH3n").Object;e.exports=function(e,t,a){return r.defineProperty(e,t,a)}},liLe:function(e,t,a){e.exports={default:a("gGjR"),__esModule:!0}},vdXL:function(e,t,a){var r=a("uSC2");r(r.S+r.F*!a("5cPm"),"Object",{defineProperty:a("FIRb").f})}});
//# sourceMappingURL=1.6d8924b46d6a09194bc5.js.map