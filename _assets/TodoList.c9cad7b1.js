let t=document.createElement("style");t.innerHTML=".todo-list[data-v-352db18b]{position:relative}.todo-list__total[data-v-352db18b]{display:inline-block;width:20px;height:20px;font-size:12px;line-height:20px;color:#fff;text-align:center;background:rgba(255,0,0,.7);border-radius:50%}.todo-list__all[data-v-352db18b]{position:absolute;top:0;right:10px;height:56px;font-size:24px;line-height:56px;text-align:center;cursor:pointer}.todo-list__item[data-v-352db18b]{padding:8px}.todo-list__item-title[data-v-352db18b]{font-size:14px;font-weight:400;line-height:22px;color:#1c1d21}.todo-list__item-memo[data-v-352db18b]{font-size:12px;font-weight:400;line-height:22px;color:#7c8087}.todo-list__item-desc[data-v-352db18b]{font-size:12px;line-height:22px;color:#7c8087}",document.head.appendChild(t);import{k as e,x as i,aq as o,a as s,a_ as a,aT as l,aU as n,i as d,o as r,j as p,ah as c,aV as m,n as b,p as u,aW as f}from"./index.b140c207.js";import"./xlsx.a48e520c.js";import"./index.a386f3ca.js";import"./omit.8d73d862.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6ab0215c.js";import"./CheckOutlined.72786542.js";import"./colors.9e2b156b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67b83eb2.js";import"./LeftOutlined.a8393734.js";import{T as _}from"./index.a311583a.js";import"./index.7bd923c9.js";import"./zh_CN.0242bd16.js";import{L as j}from"./index.6317d623.js";import{s as x}from"./index.40756bd5.js";import"./index.e47dd816.js";import"./RightOutlined.1c70c502.js";import"./useTimeout.235d9d8d.js";import"./resizeEvent.5bf811bd.js";import"./domUtils.c5071c6b.js";import"./useExpose.978c5fca.js";import"./animation.1adf111b.js";import"./index.abc9c33d.js";import{t as h}from"./data.edc06832.js";var g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var O=function(t,s){var a=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?Object(arguments[e]):{},o=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),o.forEach((function(e){v(t,e,i[e])}))}return t}({},t,s.attrs);return e(o,i(a,{icon:g}),null)};O.displayName="EllipsisOutlined",O.inheritAttrs=!1;var y=s({name:"TodoList",components:{CollapseContainer:x,List:j,ListItem:j.Item,ListItemMeta:j.Item.Meta,Tag:_,Tooltip:a,EllipsisOutlined:O},setup:()=>({todoList:h})});const L=f("data-v-352db18b");l("data-v-352db18b");const T=e("span",null,[u(" 待办事项 "),e("span",{class:"todo-list__total"},"30")],-1),z={class:"todo-list__item-title"},w={class:"todo-list__item-memo"},E={class:"todo-list__item-desc"},k=e("br",null,null,-1),C=u("待审批"),I={class:"todo-list__all"},M=u("查看更多");n();const P=L(((t,i,o,s,a,l)=>{const n=d("ListItemMeta"),f=d("Tag"),_=d("a-button"),j=d("ListItem"),x=d("List"),h=d("EllipsisOutlined"),g=d("Tooltip"),v=d("CollapseContainer");return r(),p(v,{class:"todo-list",title:"待办事项",canExpan:!1},{title:L((()=>[T])),default:L((()=>[e(x,null,{default:L((()=>[(r(!0),p(c,null,m(t.todoList,(t=>(r(),p(j,{key:t.id,class:"todo-list__item"},{default:L((()=>[e(n,null,{title:L((()=>[e("div",null,[e("span",z,b(t.title),1),e("span",w,b(t.memo),1)])])),description:L((()=>[e("div",E,[u(" 提交人："+b(t.sbmter)+" ",1),k,u(" 提交时间："+b(t.sbmtTime),1)])])),_:2},1024),e(_,{type:"link"},{default:L((()=>[e(f,{color:"blue"},{default:L((()=>[C])),_:1})])),_:1})])),_:2},1024)))),128))])),_:1}),e("div",I,[e(g,{placement:"topRight"},{title:L((()=>[M])),default:L((()=>[e(h)])),_:1})])])),_:1})}));y.render=P,y.__scopeId="data-v-352db18b";export default y;