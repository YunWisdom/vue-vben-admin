import{a as e,h as s,i,o,j as t,k as a,w as l,p as r}from"./index.b140c207.js";import"./xlsx.a48e520c.js";import"./index.a386f3ca.js";import"./omit.8d73d862.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6ab0215c.js";import"./CheckOutlined.72786542.js";import{s as n}from"./index.f1319839.js";import"./index.ed9be7a7.js";import"./colors.9e2b156b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67b83eb2.js";import"./index.e6984f16.js";import"./UpOutlined.d2d7be45.js";import"./DownOutlined.a7138082.js";import"./index.a311583a.js";import"./index.e9dabea4.js";import"./index.0874e336.js";import{s as d}from"./index.40756bd5.js";import"./CloseOutlined.1ded85a0.js";import"./index.9e082a18.js";import"./index.e47dd816.js";import"./LeftOutlined.375e5079.js";import"./functional.c7d55e9a.js";import"./RightOutlined.1c70c502.js";import"./useTimeout.235d9d8d.js";import"./useDebounce.45040196.js";import"./useEventListener.98373847.js";import"./useBreakpoint.1cdd5e73.js";import"./resizeEvent.5bf811bd.js";import"./domUtils.c5071c6b.js";import"./useExpose.978c5fca.js";import"./animation.1adf111b.js";import"./index.abc9c33d.js";import"./index.228fcfc3.js";import"./useWindowSizeFn.2b8ac17a.js";import"./uuid.40269c00.js";import"./download.c37bde26.js";import{u as c}from"./useForm.57e0baec.js";const p=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa"}]},{field:"field44",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,s)=>"1"===s?Promise.reject("值不能为1"):Promise.resolve(),trigger:"blur"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var m=e({components:{BasicForm:n,CollapseContainer:d},setup(){const{createMessage:e}=s(),[i,{validateFields:o,clearValidate:t,getFieldsValue:a,setFieldsValue:l}]=c({labelWidth:120,schemas:p,actionColOptions:{span:24}});return{register:i,schemas:p,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},getFormValues:function(){const s=a();e.success("values:"+JSON.stringify(s))},setFormValues:function(){l({field1:"1111",field5:["1"],field7:"1"})},validateForm:async function(){try{await o()}catch(e){}},resetValidate:async function(){t()}}}});const u={class:"m-4"},f={class:"mb-4"},b=r("手动校验表单"),j=r("清空校验信息"),v=r("获取表单值"),x=r("设置表单值");m.render=function(e,s,r,n,d,c){const p=i("a-button"),m=i("BasicForm"),g=i("CollapseContainer");return o(),t("div",u,[a("div",f,[a(p,{onClick:e.validateForm,class:"mr-2"},{default:l((()=>[b])),_:1},8,["onClick"]),a(p,{onClick:e.resetValidate,class:"mr-2"},{default:l((()=>[j])),_:1},8,["onClick"]),a(p,{onClick:e.getFormValues,class:"mr-2"},{default:l((()=>[v])),_:1},8,["onClick"]),a(p,{onClick:e.setFormValues,class:"mr-2"},{default:l((()=>[x])),_:1},8,["onClick"])]),a(g,{title:"表单校验"},{default:l((()=>[a(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])};export default m;