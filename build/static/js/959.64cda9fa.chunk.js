"use strict";(self.webpackChunktokyo_white_react_admin_dashboard=self.webpackChunktokyo_white_react_admin_dashboard||[]).push([[959],{3959:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var a=r(5043),n=r(4556),o=r(8070),i=r(2110),l=r(5795),s=r(3404),d=r(1793),u=r(6821),c=r(9731),p=r(2660),h=r(579);const m=()=>{const e=(0,n.wA)(),t=(0,n.d4)((e=>e.AddStudentDetail.StudentDetails));console.log(t,"StudentDetails");const r=(0,n.d4)((e=>e.AddStudentDetail.GetStudentDetails));console.log(r,"GetStudentDetail");const[m,x]=(0,a.useState)(""),[A,f]=(0,a.useState)(""),[g,v]=(0,a.useState)(""),[b,S]=(0,a.useState)(""),[w,j]=(0,a.useState)(""),[y,F]=(0,a.useState)(""),[C,T]=(0,a.useState)(""),[N,I]=(0,a.useState)(""),[R,q]=(0,a.useState)(""),[M,z]=(0,a.useState)(""),[P,k]=(0,a.useState)(""),[D,_]=(0,a.useState)(""),[B,H]=(0,a.useState)(""),[L,E]=(0,a.useState)(""),[$,W]=(0,a.useState)(""),[V,G]=(0,a.useState)(""),[Q,U]=(0,a.useState)(""),[Y,K]=(0,a.useState)(""),[Z,J]=(0,a.useState)(""),[O,X]=(0,a.useState)(""),[ee,te]=(0,a.useState)(0),[re,ae]=(0,a.useState)(""),[ne,oe]=(0,a.useState)([]),ie={Id:ee,ClassId:(()=>{let e=0;return ne.map((t=>{t.IsActive&&(e=parseInt(t.Value))})),e})().toString(),StudentName:m,BirthDate:g,Age:parseInt(w),FatherName:C,PhoneNo:R,MotherName:P,PhoneNo2:B,SocietyName:$,StudentAddress:Q,Emailid:Z},le={Id:145};(0,a.useEffect)((()=>{e((0,p.dl)(ie))}),[]),(0,a.useEffect)((()=>{e((0,p._K)(le))}),[]);const se=()=>{x(""),v(""),j(""),T(""),q(""),k(""),H(""),W(""),U(""),J(""),oe((e=>e.map((e=>({...e,IsActive:!1})))))};return(0,h.jsxs)(o.A,{children:[(0,h.jsx)(c.A,{heading:"Enquiry Form"}),(0,h.jsx)(u.A,{error:re}),(0,h.jsx)("br",{}),(0,h.jsxs)(i.A,{children:[(0,h.jsx)(l.A,{value:m,onChange:e=>{x(e.target.value)},label:"StudentName"}),(0,h.jsx)(u.A,{error:A}),(0,h.jsx)(l.A,{value:g,type:"date",onChange:e=>{(e=>{v(e);const t=new Date;if(isNaN(Date.parse(g)))j("");else{const r=new Date(e);j((t.getFullYear()-r.getFullYear()).toString())}})(e.target.value)},label:"Birth Date",focused:!0}),(0,h.jsx)(u.A,{error:b}),(0,h.jsx)(l.A,{value:w,type:"text",onChange:e=>(e=>{const t=e.target.value;(""===t||/^[0-9\b]+$/.test(t)&&t.length<=2)&&j(t)})(e),label:"Age"}),(0,h.jsx)(u.A,{error:y}),(0,h.jsx)(l.A,{value:C,onChange:e=>{T(e.target.value)},label:"FatherName"}),(0,h.jsx)(u.A,{error:N}),(0,h.jsx)(l.A,{value:R,type:"text",onChange:e=>(e=>{const t=e.target.value;(""===t||/^[0-9\b]+$/.test(t)&&t.length<=10)&&q(t)})(e),onBlur:e=>{z((0,d.Qy)(e.target.value))},error:""!==M,helperText:M,label:"PhoneNo"}),(0,h.jsx)(l.A,{value:P,onChange:e=>{k(e.target.value)},label:"MotherName"}),(0,h.jsx)(u.A,{error:D}),(0,h.jsx)(l.A,{value:B,onChange:e=>(e=>{const t=e.target.value;(""===t||/^[0-9\b]+$/.test(t)&&t.length<=10)&&H(t)})(e),onBlur:e=>{E((0,d.Qy)(e.target.value))},error:""!==L,helperText:L,label:"PhoneNo2"}),(0,h.jsx)(l.A,{value:$,onChange:e=>{W(e.target.value)},label:"SocietyName"}),(0,h.jsx)(u.A,{error:V}),(0,h.jsx)(l.A,{value:Q,onChange:e=>{U(e.target.value)},label:"StudentAddress"}),(0,h.jsx)(u.A,{error:Y}),(0,h.jsx)(l.A,{value:Z,onChange:e=>{J(e.target.value)},onBlur:e=>{var t;X((t=e.target.value)?/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,3})+$/.test(t)?"":"Invalid email address":"Email Id should not be blank.")},error:""!==O,helperText:O,label:"Emailid"}),(0,h.jsx)(s.A,{onClick:()=>{let t=!1;""===m?(f("This field is required"),t=!0):f(""),""===g?(S("This field is required"),t=!0):S(""),""===w?(F("This field is required"),t=!0):F(""),""===C?(I("This field is required"),t=!0):I(""),""===P?(_("This field is required"),t=!0):_(""),""===$?(G("This field is required"),t=!0):G(""),""===Q?(K("This field is required"),t=!0):K(""),(()=>{let e=!1;return ne.map((t=>{t.IsActive&&(e=!0)})),e})()?ae(""):(ae("Fill the Mandatory Field"),t=!0),t||e((0,p.dl)(ie)),t||se()},children:"Submit"})]}),(0,h.jsx)("br",{})]})}},6821:(e,t,r)=>{r.d(t,{A:()=>o});var a=r(5865),n=(r(5043),r(579));const o=function(e){let{error:t}=e;return(0,n.jsx)("div",{children:(0,n.jsx)(a.A,{sx:{color:"red"},children:t})})}},3652:(e,t,r)=>{r.d(t,{$$:()=>c,dF:()=>u,uL:()=>d});var a,n=r(7528),o=r(2056),i=r(5865),l=r(6946),s=r(3404);const d=(0,o.Ay)(i.A)((e=>{let{theme:t}=e;return"\n\nfont-weight: 500;\nfont-size: 20px;\ncolor: black;\nmargin: auto;\ntext-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\nfont-family: roboto;\n@media (min-width: 280px) and (max-width: 320px)  {\n  font-size: 18px;\n};\n@media (min-width: 600px)  {\n  font-size: 22px;\n};\n"})),u=(0,o.Ay)(l.A)(a||(a=(0,n.A)(["\n \n  width:70px;\n  height:75px;\n  @media (max-width: 320px) {\n    width: 60px;\n    height: 65px;\n  }\n  @media (max-width: 280px) {\n    width: 50px;\n    height: 55px;\n  }\n\n  border-radius: 10px;\n  margin-bottom: 5px;\n  text-align: center;\ntext-decoration: none;\n  box-shadow: 1px 4px 5px 2px rgba(0, 0, 0, 0.3);\n"]))),c=(0,o.Ay)(s.A)((e=>{let{theme:t,color:r}=e;return"\ncolor: white;\nfont-size: 12px;\nfont-family: 'Roboto';\ntext-decoration: none;\nheight:30px;\nborder-radius: 3px;\nbox-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n@media (min-width: 600px) {\n  \n };\n"}))},9731:(e,t,r)=>{r.d(t,{A:()=>c});var a=r(2056),n=r(6946),o=r(6240),i=r(8070),l=r(3652),s=r(6971),d=r(579);const u=(0,a.Ay)(n.A)((e=>{let{theme:t}=e;return"\n        margin-top: ".concat(t.spacing(2),";\n        margin-bottom: ").concat(t.spacing(2),";\n")})),c=e=>{let{heading:t}=e;(0,o.A)();const r=(0,s.Zp)();return null!==sessionStorage.getItem("UserId")&&void 0!==sessionStorage.getItem("UserId")||r("/"),(0,d.jsx)(i.A,{children:(0,d.jsx)(u,{display:"flex",alignItems:"center",children:(0,d.jsx)(l.uL,{children:t})})})}},2110:(e,t,r)=>{r.d(t,{A:()=>A});var a=r(8168),n=r(8587),o=r(5043),i=(r(5173),r(643)),l=r(222),s=r(2056),d=r(7864),u=r(1596),c=r(3088);function p(e){return(0,c.A)("MuiCard",e)}(0,r(5904).A)("MuiCard",["root"]);var h=r(579);const m=["className","raised"],x=(0,s.Ay)(u.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),A=o.forwardRef((function(e,t){const r=(0,d.A)({props:e,name:"MuiCard"}),{className:o,raised:s=!1}=r,u=(0,n.A)(r,m),c=(0,a.A)({},r,{raised:s}),A=(e=>{const{classes:t}=e;return(0,l.A)({root:["root"]},p,t)})(c);return(0,h.jsx)(x,(0,a.A)({className:(0,i.A)(A.root,o),elevation:s?8:void 0,ref:t,ownerState:c},u))}))},5795:(e,t,r)=>{r.d(t,{A:()=>q});var a=r(8168),n=r(8587),o=r(5043),i=(r(5173),r(643)),l=r(222),s=r(2056),d=r(7864),u=r(5761),c=r(1833),p=r(9859),h=r(9190),m=r(3193),x=r(4827),A=r(5213),f=r(6803),g=r(3088),v=r(5904);function b(e){return(0,g.A)("MuiFormHelperText",e)}const S=(0,v.A)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]);var w=r(579);const j=["children","className","component","disabled","error","filled","focused","margin","required","variant"],y=(0,s.Ay)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.size&&t["size".concat((0,f.A)(r.size))],r.contained&&t.contained,r.filled&&t.filled]}})((e=>{let{theme:t,ownerState:r}=e;return(0,a.A)({color:t.palette.text.secondary},t.typography.caption,{textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0,["&.".concat(S.disabled)]:{color:t.palette.text.disabled},["&.".concat(S.error)]:{color:t.palette.error.main}},"small"===r.size&&{marginTop:4},r.contained&&{marginLeft:14,marginRight:14})})),F=o.forwardRef((function(e,t){const r=(0,d.A)({props:e,name:"MuiFormHelperText"}),{children:o,className:s,component:u="p"}=r,c=(0,n.A)(r,j),p=(0,A.A)(),h=(0,x.A)({props:r,muiFormControl:p,states:["variant","size","disabled","error","filled","focused","required"]}),m=(0,a.A)({},r,{component:u,contained:"filled"===h.variant||"outlined"===h.variant,variant:h.variant,size:h.size,disabled:h.disabled,error:h.error,filled:h.filled,focused:h.focused,required:h.required}),g=(e=>{const{classes:t,contained:r,size:a,disabled:n,error:o,filled:i,focused:s,required:d}=e,u={root:["root",n&&"disabled",o&&"error",a&&"size".concat((0,f.A)(a)),r&&"contained",s&&"focused",i&&"filled",d&&"required"]};return(0,l.A)(u,b,t)})(m);return(0,w.jsx)(y,(0,a.A)({as:u,ownerState:m,className:(0,i.A)(g.root,s),ref:t},c,{children:" "===o?(0,w.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):o}))}));var C=r(9746);function T(e){return(0,g.A)("MuiTextField",e)}(0,v.A)("MuiTextField",["root"]);const N=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],I={standard:u.A,filled:c.A,outlined:p.A},R=(0,s.Ay)(m.A,{name:"MuiTextField",slot:"Root",overridesResolver:(e,t)=>t.root})({}),q=o.forwardRef((function(e,t){const r=(0,d.A)({props:e,name:"MuiTextField"}),{autoComplete:s,autoFocus:u=!1,children:c,className:p,color:m="primary",defaultValue:x,disabled:A=!1,error:f=!1,FormHelperTextProps:g,fullWidth:v=!1,helperText:b,id:S,InputLabelProps:j,inputProps:y,InputProps:q,inputRef:M,label:z,maxRows:P,minRows:k,multiline:D=!1,name:_,onBlur:B,onChange:H,onFocus:L,placeholder:E,required:$=!1,rows:W,select:V=!1,SelectProps:G,type:Q,value:U,variant:Y="outlined"}=r,K=(0,n.A)(r,N),Z=(0,a.A)({},r,{autoFocus:u,color:m,disabled:A,error:f,fullWidth:v,multiline:D,required:$,select:V,variant:Y}),J=(e=>{const{classes:t}=e;return(0,l.A)({root:["root"]},T,t)})(Z);const O={};if("outlined"===Y&&(j&&"undefined"!==typeof j.shrink&&(O.notched=j.shrink),z)){var X;const e=null!=(X=null==j?void 0:j.required)?X:$;O.label=(0,w.jsxs)(o.Fragment,{children:[z,e&&"\xa0*"]})}V&&(G&&G.native||(O.id=void 0),O["aria-describedby"]=void 0);const ee=b&&S?"".concat(S,"-helper-text"):void 0,te=z&&S?"".concat(S,"-label"):void 0,re=I[Y],ae=(0,w.jsx)(re,(0,a.A)({"aria-describedby":ee,autoComplete:s,autoFocus:u,defaultValue:x,fullWidth:v,multiline:D,name:_,rows:W,maxRows:P,minRows:k,type:Q,value:U,id:S,inputRef:M,onBlur:B,onChange:H,onFocus:L,placeholder:E,inputProps:y},O,q));return(0,w.jsxs)(R,(0,a.A)({className:(0,i.A)(J.root,p),disabled:A,error:f,fullWidth:v,ref:t,required:$,color:m,variant:Y,ownerState:Z},K,{children:[z&&(0,w.jsx)(h.A,(0,a.A)({htmlFor:S,id:te},j,{children:z})),V?(0,w.jsx)(C.A,(0,a.A)({"aria-describedby":ee,id:S,labelId:te,value:U,input:ae},G,{children:c})):ae,b&&(0,w.jsx)(F,(0,a.A)({id:ee},g,{children:b}))]}))}))}}]);
//# sourceMappingURL=959.64cda9fa.chunk.js.map