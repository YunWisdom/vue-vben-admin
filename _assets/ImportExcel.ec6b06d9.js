import{a as e,r as t,i as s,o as i,j as o,k as r,w as a,Y as d,aH as m,n}from"./index.b2563c25.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.ecccf93f.js";import"./index.6aa4fb10.js";import"./Trigger.69a42174.js";import"./omit.2978fa0a.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.52f031c1.js";import"./CheckOutlined.d04cd0d0.js";import"./index.3d914ca4.js";import"./index.3926bcc0.js";import"./colors.7cad5419.js";import"./index.73d6b745.js";import"./RightOutlined.6271d6f8.js";import"./index.309c8c25.js";import"./types.19f6acce.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.4a4f7bba.js";import"./index.de1b91a6.js";import"./index.2d1b8ed6.js";import"./UpOutlined.9fb79b46.js";import"./LeftOutlined.8cd70964.js";import"./DownOutlined.28064e9e.js";import"./index.34bfa216.js";import"./index.2ecb2e39.js";import"./index.561335a2.js";import"./zh_CN.0242bd16.js";import"./index.ae35b363.js";import"./index.257889b7.js";import"./CaretDownFilled.726f4c31.js";import"./CheckOutlined.ba687b5f.js";import"./CloseOutlined.11b614e0.js";import{s as p}from"./EditTableHeaderIcon.fdd93bfb.js";import"./index.6b4afdd3.js";import"./LeftOutlined.a0990950.js";import"./functional.d4e0e18b.js";import"./RightOutlined.1397f8a7.js";import"./useContext.114680ae.js";import"./useTimeout.0990510e.js";import"./useDebounce.9e3543c4.js";import"./useEventListener.c24bc5c8.js";import"./useBreakpoint.a0fed2b4.js";import"./resizeEvent.e79f1ab5.js";import"./domUtils.8b34c94c.js";import"./tsxHelper.24b178b2.js";import"./useExpose.03135198.js";import"./index.aa07d4db.js";import"./propTypes.db13ce1b.js";import"./index.44bbd0bc.js";import"./index.bb2606ae.js";import"./useWindowSizeFn.bf57cf6c.js";import"./uuid.40269c00.js";import"./download.492c51b9.js";import"./useForm.648d9376.js";import"./useFullScreen.a870005d.js";import"./index.5387abc0.js";import{a as c}from"./index.16a7c8d9.js";var j=e({components:{BasicTable:p,ImportExcel:c},setup(){const e=t([]);return{loadDataSuccess:function(t){e.value=[];for(const s of t){const{header:t,results:i,meta:{sheetName:o}}=s,r=[];for(const e of t)r.push({title:e,dataIndex:e});e.value.push({title:o,dataSource:i,columns:r})}},tableListRef:e}}});const u={class:"m-4"},l=n("导入Excel");j.render=function(e,t,n,p,c,j){const b=s("a-button"),f=s("_self"),x=s("BasicTable");return i(),o("div",u,[r(f,{onSuccess:e.loadDataSuccess},{default:a((()=>[r(b,{class:"m-3"},{default:a((()=>[l])),_:1})])),_:1},8,["onSuccess"]),(i(!0),o(d,null,m(e.tableListRef,((e,t)=>(i(),o(x,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])};export default j;