"use strict";(self.webpackChunktokyo_white_react_admin_dashboard=self.webpackChunktokyo_white_react_admin_dashboard||[]).push([[8],{5546:(e,t,n)=>{n.d(t,{P:()=>o});const o=(0,n(8267).A)({iIconExamSchedule:{fontSize:"20px !important",marginTop:"10px",backgroundColor:"#e8a0e7",borderRadius:"50px",marginRight:"-15px","@media (max-width: 280px)":{fontSize:"15px !important",marginTop:"10px"}},iIconSupport:{fontSize:"20px !important","@media (max-width: 280px)":{fontSize:"15px !important"}}})},8008:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var o=n(5043),i=n(9731),r=n(8070),s=n(2110),l=n(5865),a=n(8903),c=n(6946),d=n(6925),u=n(9303),x=n(9056),p=n(4556),m=n(8096),h=n(2823),f=n.n(h),A=(n(5884),n(1793)),g=n(6821),j=n(300),b=n(614),v=n(3652),S=n(5678),y=n(8038),w=n(5462),N=n(4131),I=n(579);const z=function(){const e=(0,p.d4)((e=>e.Enquiry.Class)),t=(0,p.d4)((e=>e.SchoolNotice.AddSchoolNoticeMsg)),n=(0,p.d4)((e=>e.SchoolNotice.SchoolNoticeDetails)),[h,z]=(0,o.useState)(""),[C,F]=(0,o.useState)("0"),[R,T]=(0,o.useState)(""),k=(0,o.useRef)(null),[P,L]=(0,o.useState)(""),[D,E]=(0,o.useState)(""),[M,q]=(0,o.useState)(""),[_,W]=(0,o.useState)(""),[B,H]=(0,o.useState)(""),[U,V]=(0,o.useState)(""),[$,O]=(0,o.useState)(""),[G,K]=(0,o.useState)(""),[Z,J]=(0,o.useState)(""),[Q,X]=(0,o.useState)(""),[Y,ee]=(0,o.useState)(""),te=(0,p.wA)();(0,o.useEffect)((()=>{te((0,y.t0)())}),[te]),(0,o.useEffect)((()=>{""!==t&&(m.oR.success(t),te((0,w.Ie)()),oe())}),[t]),(0,o.useEffect)((()=>{""!==h&&te((0,w.pl)({ID:Number(h)}))}),[h]),(0,o.useEffect)((()=>{null!==n&&(F(n.ClassId),T(n.NoticeTitle),W(n.NoticeDescription),H((0,N.mh)(n.NoticeDate)),q(n.NoticeFileName)),console.log(n)}),[n]),""!==h&&console.log(h);const ne=()=>{let e=!0;return"0"===C?(V("Please select student's class"),e=!1):V(""),""===R?(O("Please enter Notice Title"),e=!1):O(""),""===B?(J("Please select date of notice"),e=!1):J(""),""===_?(K("Please enter description of notice"),e=!1):K(""),""===k.current.value?(q(""),X("Please select file"),ee("Please select file"),e=!1):(X(""),ee("")),e},oe=()=>{F("0"),z("0"),T(""),H(""),W(""),L(""),q(""),V(""),O(""),K(""),J(""),X("")};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(i.A,{heading:"Add School Notice"}),(0,I.jsxs)(r.A,{children:[(0,I.jsxs)(s.A,{children:[(0,I.jsx)(l.A,{variant:"h3",color:"success"}),(0,I.jsx)("br",{}),(0,I.jsx)(x.A,{ItemList:e,Label:"",DefaultValue:C,ClickItem:e=>{F(e),V("")},Placeholder:"Select Class",ErrorMessage:U}),(0,I.jsxs)(a.Ay,{container:!0,spacing:2,rowSpacing:2,children:[(0,I.jsx)(a.Ay,{item:!0,xs:6,sm:6,children:(0,I.jsx)(u.A,{Item:R,Label:"Title",ClickItem:e=>{T(e),O("")},ErrorMessage:$})}),(0,I.jsx)(a.Ay,{item:!0,xs:6,children:(0,I.jsx)(d.A,{Item:B,Label:"Date *",ClickItem:e=>{H(e),J("")},ErrorMessage:Z})})]}),(0,I.jsx)(f(),{value:_,modules:A.ku,onChange:e=>W(e),onChangeSelection:e=>K("")}),(0,I.jsx)(g.A,{error:G}),(0,I.jsx)(c.A,{mt:2,children:(0,I.jsx)("input",{type:"file",ref:k,accept:".png,.jpg,.jpeg,.bmp",onChange:async e=>{if(e.target.files&&e.target.files.length>0){let t=(0,A.Kz)(e.target.files[0],["jpg","jpeg","png","bmp","pdf"],2e6);if(L(t),null===t){let t=await(0,A.aN)(e.target.files[0]);E(t.slice(t.indexOf(",")+1)),q(e.target.files[0].name),X("")}else k.current.value=null}}})}),(0,I.jsx)(c.A,{children:(0,I.jsx)(b.A,{Note:"Supports only "+["jpg","jpeg","png","bmp"].join(", ")+" files types up to 5 MB"})}),Error&&(0,I.jsx)(g.A,{error:Q}),(0,I.jsx)(a.Ay,{container:!0,children:(0,I.jsx)(a.Ay,{item:!0,xs:12,md:3,sx:{float:"right"},children:(0,I.jsxs)(v.$$,{onClick:()=>{if(ne()){const e={ID:""==h?0:Number(h),ClassIds:C,NoticeTitle:R,NoticeDescription:_,NoticeFileName:M,BinaryData:D,NoticeDate:B};te((0,w.q5)(e)),console.log(ne())}else m.oR.error("Please fill all required fields correctly.")},children:["Send\xa0",(0,I.jsx)(S.A,{fontSize:"small"})]})})})]}),(0,I.jsx)("br",{}),(0,I.jsx)(j.default,{SchoolNotice:e=>{z(e)}})]})]})}},300:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var o=n(5043),i=n(4556),r=n(8096),s=n(5462),l=n(9282),a=n(6971),c=n(579);const d=function(e){let{SchoolNotice:t}=e;const n=(0,i.wA)(),d=((0,a.Zp)(),(0,i.d4)((e=>e.SchoolNotice.deleteSchoolNoticeDetailsMsg)));console.log(" DeleteSchoolNotice",d),(0,i.d4)((e=>e.AddSchoolNotice.sendNotice));const u=(0,i.d4)((e=>e.SchoolNotice.SchoolNoticeList));return console.log("SchoolNoticeList",u),(0,o.useEffect)((()=>{""!==d&&(r.oR.success(d,{toastId:"success1"}),n((0,s.O0)()),n((0,s.zG)()))}),[d]),(0,o.useEffect)((()=>{n((0,s.zG)())}),[n]),(0,c.jsx)("div",{children:(0,c.jsx)(l.A,{ItemList:u,clickEdit:e=>{window.scrollTo(0,0),t(e)},Delete:e=>{if(confirm("Are you sure you want to delete SchoolNotice?")){r.oR.success("Deleted School Notice",{toastId:"success1"});const t={ID:e};n((0,s.q6)(t))}}})})}},6925:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(5865),i=n(5795),r=n(9764),s=n(579);const l=e=>{let{Item:t,ClickItem:n,Label:l,ErrorMessage:a=""}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{children:l}),(0,s.jsx)(i.A,{value:t,type:"date",fullWidth:!0,onChange:e=>{n(e.target.value)},size:"small"}),(0,s.jsx)(r.Ud,{children:a})]})}},9056:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(2880),i=n(9764),r=n(579);const s=e=>{let{ItemList:t,ClickItem:n,Label:s,DefaultValue:l,ErrorMessage:a="",Placeholder:c="select option"}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.A,{value:l,fullWidth:!0,variant:"outlined",size:"small",required:!0,onChange:e=>n(e.target.value),children:[(0,r.jsx)("option",{value:"0",children:c}),null===t||void 0===t?void 0:t.map(((e,t)=>(0,r.jsx)("option",{value:e.Value,children:e.Name},t)))]}),(0,r.jsx)(i.Ud,{children:a})]})}},9303:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(5795),i=n(9764),r=n(579);const s=e=>{let{Item:t,Label:n,ErrorMessage:s="",ClickItem:l,BlurItem:a,KeyPressItem:c}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.A,{value:t,onChange:e=>{l(e.target.value)},onBlur:a,size:"small",label:n,variant:"standard",fullWidth:!0,required:!0}),(0,r.jsx)(i.Ud,{children:s})]})}},9764:(e,t,n)=>{n.d(t,{Ud:()=>d});var o,i,r,s,l=n(7528),a=n(2056),c=n(5865);const d=(0,a.Ay)(c.A)(o||(o=(0,l.A)(["\n  font-size: 12px;\n  color: red;\n  text-align: center;\n  font-family: 'Roboto';\n  @media (max-width: 280px) {\n    font-size: 10px;\n  }\n"])));(0,a.Ay)(c.A)(i||(i=(0,l.A)(["\n  font-size: 12px;\n  // color: red;\n  text-align: center;\n  font-family: 'Roboto';\n  @media (max-width: 280px) {\n    font-size: 10px;\n  }\n"]))),(0,a.Ay)(c.A)(r||(r=(0,l.A)(["\n  font-size: 12px;\n  color: red;\n  margin-top: -10px;\n  font-family: 'Roboto';\n  @media (max-width: 280px) {\n    font-size: 10px;\n  }\n"]))),(0,a.Ay)(c.A)(s||(s=(0,l.A)(["\n  font-size: 12px;\n  color: red;\n\n  font-family: 'Roboto';\n  @media (max-width: 280px) {\n    font-size: 10px;\n  }\n"])))},1051:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(5865),i=(n(5043),n(579));const r=function(e){let{error:t}=e;return(0,i.jsx)("div",{children:(0,i.jsx)(o.A,{sx:{textAlign:"center",color:"red"},children:t})})}},6821:(e,t,n)=>{n.d(t,{A:()=>r});var o=n(5865),i=(n(5043),n(579));const r=function(e){let{error:t}=e;return(0,i.jsx)("div",{children:(0,i.jsx)(o.A,{sx:{color:"red"},children:t})})}},9282:(e,t,n)=>{n.d(t,{A:()=>m});var o=n(5043),i=n(1051),r=n(2110),s=n(8903),l=n(4889),a=n(4645),c=n(5865),d=n(3471),u=n(778),x=n(579);const p=function(e){let{item:t,clickEdit:n,Submit:i,Delete:p,Submit1:m}=e;const[h,f]=(0,o.useState)(!1);return window.addEventListener("resize",(()=>{window.innerWidth<900?f(!0):f(!1)})),(0,x.jsx)("div",{children:(0,x.jsx)(r.A,{sx:{mb:1},children:(0,x.jsxs)(s.Ay,{container:!0,style:{display:"flex",alignItems:"center"},children:[(0,x.jsx)(l.A,{mdDown:!0,children:(0,x.jsx)(a.A,{title:t.Text1,placement:"left-start",children:(0,x.jsx)(c.A,{px:3,sx:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",width:"300px"},children:t.Text1})})}),(0,x.jsx)(s.Ay,{item:!0,xs:3,md:2,children:(0,x.jsx)(c.A,{children:t.Text2})}),(0,x.jsx)(s.Ay,{item:!0,xs:4.5,md:2,children:(0,x.jsx)(c.A,{children:t.Text3})}),(0,x.jsx)(s.Ay,{item:!0,xs:1.5,md:1.5}),(0,x.jsx)(s.Ay,{item:!0,xs:1.5,md:1.5,children:(0,x.jsx)(a.A,{title:"Edit Details",children:(0,x.jsx)(u.A,{color:"success",onClick:()=>n(t.Id)})})}),(0,x.jsx)(s.Ay,{item:!0,xs:1.5,md:1.5,children:(0,x.jsx)(a.A,{title:"Delete Notice",children:(0,x.jsx)(d.A,{color:"error",onClick:()=>p(t.Id)})})})]})})})};const m=function(e){let{ItemList:t,clickEdit:n,Submit:o,Delete:r,Submit1:s}=e;return(0,x.jsx)("div",{children:0==t.length?(0,x.jsx)(i.A,{error:"No records found"}):(0,x.jsx)(x.Fragment,{children:t.map(((e,t)=>(0,x.jsx)("div",{children:(0,x.jsx)(p,{item:e,clickEdit:n,Submit:o,Delete:r,Submit1:s})},t)))})})}},3652:(e,t,n)=>{n.d(t,{$$:()=>u,dF:()=>d,uL:()=>c});var o,i=n(7528),r=n(2056),s=n(5865),l=n(6946),a=n(3404);const c=(0,r.Ay)(s.A)((e=>{let{theme:t}=e;return"\n\nfont-weight: 500;\nfont-size: 20px;\ncolor: black;\nmargin: auto;\ntext-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\nfont-family: roboto;\n@media (min-width: 280px) and (max-width: 320px)  {\n  font-size: 18px;\n};\n@media (min-width: 600px)  {\n  font-size: 22px;\n};\n"})),d=(0,r.Ay)(l.A)(o||(o=(0,i.A)(["\n \n  width:70px;\n  height:75px;\n  @media (max-width: 320px) {\n    width: 60px;\n    height: 65px;\n  }\n  @media (max-width: 280px) {\n    width: 50px;\n    height: 55px;\n  }\n\n  border-radius: 10px;\n  margin-bottom: 5px;\n  text-align: center;\ntext-decoration: none;\n  box-shadow: 1px 4px 5px 2px rgba(0, 0, 0, 0.3);\n"]))),u=(0,r.Ay)(a.A)((e=>{let{theme:t,color:n}=e;return"\ncolor: white;\nfont-size: 12px;\nfont-family: 'Roboto';\ntext-decoration: none;\nheight:30px;\nborder-radius: 3px;\nbox-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n@media (min-width: 600px) {\n  \n };\n"}))},9731:(e,t,n)=>{n.d(t,{A:()=>u});var o=n(2056),i=n(6946),r=n(6240),s=n(8070),l=n(3652),a=n(6971),c=n(579);const d=(0,o.Ay)(i.A)((e=>{let{theme:t}=e;return"\n        margin-top: ".concat(t.spacing(2),";\n        margin-bottom: ").concat(t.spacing(2),";\n")})),u=e=>{let{heading:t}=e;(0,r.A)();const n=(0,a.Zp)();return null!==sessionStorage.getItem("UserId")&&void 0!==sessionStorage.getItem("UserId")||n("/"),(0,c.jsx)(s.A,{children:(0,c.jsx)(d,{display:"flex",alignItems:"center",children:(0,c.jsx)(l.uL,{children:t})})})}},614:(e,t,n)=>{n.d(t,{A:()=>m});var o=n(5043),i=n(8070),r=n(5865),s=n(44),l=n(4645),a=n(5546),c=n(136),d=n(6946),u=n(6240),x=n(2056),p=n(579);const m=function(e){let{Note:t}=e;const[n,m]=(0,o.useState)(!1),h=()=>{m((e=>!e))},f=((0,u.A)(),(0,x.Ay)("span")((e=>{let{theme:t}=e;return"\n          border-radius: 22px;\n          width: ".concat(t.spacing(1.5),";\n          height: ").concat(t.spacing(1.5),";\n          display: inline-block;\n          margin-right: ").concat(t.spacing(1),";\n          margin-top: -").concat(t.spacing(.1),";\n      ")})),(0,a.P)());return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(i.A,{children:(0,p.jsxs)(d.A,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:2,marginTop:"-27px"},children:[(0,p.jsx)(r.A,{variant:"body2",fontSize:"15px",children:(0,p.jsx)("br",{})})," ",(0,p.jsx)("br",{}),(0,p.jsx)(s.A,{onClickAway:()=>{m(!1)},children:(0,p.jsx)(l.A,{PopperProps:{disablePortal:!0},onClose:h,open:n,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:t,arrow:!0,placement:"left",componentsProps:{tooltip:{sx:{marginLeft:"70px",transform:"translate3d(20px, 14.5px, 0px) !important",marginTop:"-10px"}}},children:(0,p.jsx)(c.A,{type:"button",onClick:h,className:f.iIconExamSchedule})})})]})})})}},5795:(e,t,n)=>{n.d(t,{A:()=>T});var o=n(8168),i=n(8587),r=n(5043),s=(n(5173),n(643)),l=n(222),a=n(2056),c=n(7864),d=n(5761),u=n(1833),x=n(9859),p=n(9190),m=n(3193),h=n(4827),f=n(5213),A=n(6803),g=n(3088),j=n(5904);function b(e){return(0,g.A)("MuiFormHelperText",e)}const v=(0,j.A)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var S=n(579);const y=["children","className","component","disabled","error","filled","focused","margin","required","variant"],w=(0,a.Ay)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.size&&t["size".concat((0,A.A)(n.size))],n.contained&&t.contained,n.filled&&t.filled]}})((e=>{let{theme:t,ownerState:n}=e;return(0,o.A)({color:t.palette.text.secondary},t.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,["&.".concat(v.disabled)]:{color:t.palette.text.disabled},["&.".concat(v.error)]:{color:t.palette.error.main}},"small"===n.size&&{marginTop:4},n.contained&&{marginLeft:14,marginRight:14})})),N=r.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiFormHelperText"}),{children:r,className:a,component:d="p"}=n,u=(0,i.A)(n,y),x=(0,f.A)(),p=(0,h.A)({props:n,muiFormControl:x,states:["variant","size","disabled","error","filled","focused","required"]}),m=(0,o.A)({},n,{component:d,contained:"filled"===p.variant||"outlined"===p.variant,variant:p.variant,size:p.size,disabled:p.disabled,error:p.error,filled:p.filled,focused:p.focused,required:p.required}),g=(e=>{const{classes:t,contained:n,size:o,disabled:i,error:r,filled:s,focused:a,required:c}=e,d={root:["root",i&&"disabled",r&&"error",o&&"size".concat((0,A.A)(o)),n&&"contained",a&&"focused",s&&"filled",c&&"required"]};return(0,l.A)(d,b,t)})(m);return(0,S.jsx)(w,(0,o.A)({as:d,ownerState:m,className:(0,s.A)(g.root,a),ref:t},u,{children:" "===r?(0,S.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):r}))}));var I=n(9746);function z(e){return(0,g.A)("MuiTextField",e)}(0,j.A)("MuiTextField",["root"]);const C=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],F={standard:d.A,filled:u.A,outlined:x.A},R=(0,a.Ay)(m.A,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),T=r.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiTextField"}),{autoComplete:a,autoFocus:d=!1,children:u,className:x,color:m="primary",defaultValue:h,disabled:f=!1,error:A=!1,FormHelperTextProps:g,fullWidth:j=!1,helperText:b,id:v,InputLabelProps:y,inputProps:w,InputProps:T,inputRef:k,label:P,maxRows:L,minRows:D,multiline:E=!1,name:M,onBlur:q,onChange:_,onFocus:W,placeholder:B,required:H=!1,rows:U,select:V=!1,SelectProps:$,type:O,value:G,variant:K="outlined"}=n,Z=(0,i.A)(n,C),J=(0,o.A)({},n,{autoFocus:d,color:m,disabled:f,error:A,fullWidth:j,multiline:E,required:H,select:V,variant:K}),Q=(e=>{const{classes:t}=e;return(0,l.A)({root:["root"]},z,t)})(J);const X={};if("outlined"===K&&(y&&"undefined"!==typeof y.shrink&&(X.notched=y.shrink),P)){var Y;const e=null!=(Y=null==y?void 0:y.required)?Y:H;X.label=(0,S.jsxs)(r.Fragment,{children:[P,e&&"\xa0*"]})}V&&($&&$.native||(X.id=void 0),X["aria-describedby"]=void 0);const ee=b&&v?"".concat(v,"-helper-text"):void 0,te=P&&v?"".concat(v,"-label"):void 0,ne=F[K],oe=(0,S.jsx)(ne,(0,o.A)({"aria-describedby":ee,autoComplete:a,autoFocus:d,defaultValue:h,fullWidth:j,multiline:E,name:M,rows:U,maxRows:L,minRows:D,type:O,value:G,id:v,inputRef:k,onBlur:q,onChange:_,onFocus:W,placeholder:B,inputProps:w},X,T));return(0,S.jsxs)(R,(0,o.A)({className:(0,s.A)(Q.root,x),disabled:f,error:A,fullWidth:j,ref:t,required:H,color:m,variant:K,ownerState:J},Z,{children:[P&&(0,S.jsx)(p.A,(0,o.A)({htmlFor:v,id:te},y,{children:P})),V?(0,S.jsx)(I.A,(0,o.A)({"aria-describedby":ee,id:v,labelId:te,value:G,input:oe},$,{children:u})):oe,b&&(0,S.jsx)(N,(0,o.A)({id:ee},g,{children:b}))]}))}))}}]);
//# sourceMappingURL=8.54e1a0b7.chunk.js.map