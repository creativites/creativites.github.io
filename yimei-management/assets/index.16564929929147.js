import{_ as w,G as f,l as v,n as B,s as C,r as s,a as E,i as a,w as l,I as F,o as x,A as d,j as p,t as i}from"./index.1656492992914.js";import{E as z,g as y}from"./edit.16564929929143.js";const S={components:{ExaminePop:z},setup(){const n=f(),o=v({tableData:{data:[],total:0,loading:!1,param:{pageNum:1,pageSize:10}}}),u=()=>{y(o.tableData.param).then(e=>{console.log(e,"\u83B7\u53D6\u987E\u5BA2\u5BA1\u6838\u5217\u8868\u4FE1\u606F"),o.tableData.data=e.data.list,o.tableData.total=e.data.total})},r=e=>{n.value.openDialog({id:e.id,onSuccess:()=>{F.success("\u64CD\u4F5C\u6210\u529F"),u()},onCancel:()=>{}},u)},m=e=>{o.tableData.param.pageSize=e,u()},c=e=>{o.tableData.param.pageNum=e,u()};return B(()=>{console.log(o,"state"),u()}),{examinePop:n,onExamine:r,searchData:u,onHandleSizeChange:m,onHandleCurrentChange:c,...C(o)}}},A={class:"system-role-container"},N=p(" \u5BA1\u6838 ");function k(n,o,u,r,m,c){const e=s("el-table-column"),_=s("el-button"),g=s("el-table"),b=s("el-pagination"),D=s("el-card"),h=s("ExaminePop");return x(),E("div",A,[a(D,{shadow:"hover"},{default:l(()=>[d(` <div class="system-user-search mb15">
        <el-input clearable size="small" v-model="tableData.param.name" placeholder="\u4EBA\u5458\u59D3\u540D" class="mr10 mb6"
          style="max-width: 180px"> \r
        </el-input>
        <el-button size="small" type="primary" class="mr10 mb6" @click="searchData">
          <el-icon>
            <elementSearch />
          </el-icon>
          \u67E5\u8BE2
        </el-button>
      </div> `),a(g,{data:n.tableData.data,style:{width:"100%"}},{default:l(()=>[d(' <el-table-column type="index" label="\u5E8F\u53F7" width="50" /> '),a(e,{prop:"customerBean",label:"\u987E\u5BA2\u59D3\u540D","show-overflow-tooltip":""},{default:l(t=>[p(i(t.row.customerBean.name),1)]),_:1}),a(e,{prop:"customerBean",label:"\u987E\u5BA2\u624B\u673A\u53F7","show-overflow-tooltip":""},{default:l(t=>[p(i(t.row.customerBean.phone),1)]),_:1}),a(e,{prop:"price",label:"\u6D88\u8D39\u91D1\u989D\uFF08\u5143\uFF09","show-overflow-tooltip":""}),a(e,{prop:"note",label:"\u6D88\u8D39\u4E8B\u9879","show-overflow-tooltip":""}),a(e,{prop:"customerBean",label:"\u4EE3\u7406\u59D3\u540D","show-overflow-tooltip":""},{default:l(t=>[p(i(t.row.customerBean.agentName),1)]),_:1}),a(e,{prop:"customerBean",label:"\u4EE3\u7406\u624B\u673A\u53F7","show-overflow-tooltip":""},{default:l(t=>[p(i(t.row.customerBean.agentPhone),1)]),_:1}),a(e,{prop:"updateTime",label:"\u66F4\u65B0\u65F6\u95F4","show-overflow-tooltip":""}),a(e,{prop:"createTime",label:"\u521B\u5EFA\u65F6\u95F4","show-overflow-tooltip":""}),a(e,{label:"\u64CD\u4F5C",width:"100"},{default:l(t=>[a(_,{size:"mini",type:"text",onClick:P=>r.onExamine(t.row)},{default:l(()=>[N]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),a(b,{onSizeChange:r.onHandleSizeChange,onCurrentChange:r.onHandleCurrentChange,class:"mt15","pager-count":5,"page-sizes":[10,20,30],"current-page":n.tableData.param.pageNum,"onUpdate:current-page":o[0]||(o[0]=t=>n.tableData.param.pageNum=t),background:"","page-size":n.tableData.param.pageSize,"onUpdate:page-size":o[1]||(o[1]=t=>n.tableData.param.pageSize=t),layout:"total, sizes, prev, pager, next, jumper",total:n.tableData.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])]),_:1}),a(h,{ref:"examinePop"},null,512)])}var I=w(S,[["render",k],["__scopeId","data-v-522821ba"],["__file","D:/FILES/projectCode/yimei-management/src/views/system/agentAchievement/index.vue"]]);export{I as default};