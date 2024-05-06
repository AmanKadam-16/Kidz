"use strict";(self.webpackChunktokyo_white_react_admin_dashboard=self.webpackChunktokyo_white_react_admin_dashboard||[]).push([[694],{8694:(e,t,n)=>{n.r(t),n.d(t,{default:()=>H});var s=n(8070),i=n(2110),a=n(2140),r=n(8903),o=n(5865),l=n(3404),d=n(8587),c=n(8168),x=n(5043),u=(n(5173),n(643)),m=n(222),h=n(6803),A=n(1053),p=n(5213),v=n(2056),j=n(3088);function f(e){return(0,j.A)("MuiInputAdornment",e)}const I=(0,n(5904).A)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var g=n(7864),b=n(579);const S=["children","className","component","disablePointerEvents","disableTypography","position","variant"],w=(0,v.Ay)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t["position".concat((0,h.A)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,c.A)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:t.palette.action.active},"filled"===n.variant&&{["&.".concat(I.positionStart,"&:not(.").concat(I.hiddenLabel,")")]:{marginTop:16}},"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),y=x.forwardRef((function(e,t){const n=(0,g.A)({props:e,name:"MuiInputAdornment"}),{children:s,className:i,component:a="div",disablePointerEvents:r=!1,disableTypography:l=!1,position:v,variant:j}=n,I=(0,d.A)(n,S),y=(0,p.A)()||{};let C=j;j&&y.variant,y&&!C&&(C=y.variant);const N=(0,c.A)({},n,{hiddenLabel:y.hiddenLabel,size:y.size,disablePointerEvents:r,position:v,variant:C}),k=(e=>{const{classes:t,disablePointerEvents:n,hiddenLabel:s,position:i,size:a,variant:r}=e,o={root:["root",n&&"disablePointerEvents",i&&"position".concat((0,h.A)(i)),r,s&&"hiddenLabel",a&&"size".concat((0,h.A)(a))]};return(0,m.A)(o,f,t)})(N);return(0,b.jsx)(A.A.Provider,{value:null,children:(0,b.jsx)(w,(0,c.A)({as:a,ownerState:N,className:(0,u.A)(k.root,i),ref:t},I,{children:"string"!==typeof s||l?(0,b.jsxs)(x.Fragment,{children:["start"===v?(0,b.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):null,s]}):(0,b.jsx)(o.A,{color:"text.secondary",children:s})}))})}));var C=n(9731),N=n(7841),k=n(9778);const L=e=>{let{Item:t,ClickItem:n}=e;const s=()=>{t={...t,IsActive:!t.IsActive},n(t)};return(0,b.jsx)("div",{children:(0,b.jsxs)(i.A,{sx:{display:"flex"},children:[t.IsActive?(0,b.jsx)(k.A,{onClick:s}):(0,b.jsx)(N.A,{onClick:s}),(0,b.jsx)(o.A,{children:t.Name})]})})};const E=function(e){let{ItemList:t,clickItem:n}=e;const s=e=>{t=t.map((t=>t.Id===e.Id?e:{...t,IsActive:!1})),n(t)};return(0,b.jsx)(r.Ay,{container:!0,spacing:1,children:t.map(((e,t)=>(0,b.jsx)(r.Ay,{item:!0,xs:6,md:3,children:(0,b.jsx)(L,{Item:e,ClickItem:s})},t)))})};var F=n(1130),P=n(1793),z=n(6587),T=n(6360),M=n(4556),R=n(8632),D=n(8096),U=n(6840),V=n(6971),_=n(9282);const O=function(e){let{clickEdit:t}=e;const n=(0,M.wA)(),s=(0,V.Zp)(),i=(0,M.d4)((e=>e.AddStudentFollowUp.FollowUpList)),a=(0,M.d4)((e=>e.AddStudentFollowUp.DeleteFollowUp));return(0,x.useEffect)((()=>{n((0,R.Om)())}),[]),(0,x.useEffect)((()=>{""!==a&&D.oR.success(a,{toastId:"success1"}),n((0,R.tL)()),n((0,R.Om)())}),[a]),(0,b.jsx)("div",{children:(0,b.jsx)(_.A,{ItemList:i,clickEdit:t,Submit:e=>{s("/extended-sidebar/Student/AdmissionConversion/"+e)},Delete:e=>{if(confirm("Are You Sure you want to delete The List")){const t={Id:e};n((0,R.su)(t))}}})})};var W=n(6821);const H=()=>{const[e,t]=(0,x.useState)(""),[n,d]=(0,x.useState)(""),[c,u]=(0,x.useState)(""),[m,h]=(0,x.useState)(""),[A,p]=(0,x.useState)(""),[v,j]=(0,x.useState)(""),[f,I]=(0,x.useState)([{Id:1,Name:"yes",Value:1,IsActive:!1},{Id:2,Name:"No",Value:2,IsActive:!1},{Id:3,Name:"Did Not Connect",Value:3,IsActive:!1}]),[g,S]=(0,x.useState)([{Id:1,Name:"2 days",Value:1,IsActive:!1},{Id:2,Name:"7 days",Value:2,IsActive:!1},{Id:3,Name:"10 days",IsActive:!1},{Id:4,Name:"1 month",Value:4,IsActive:!1}]),[w,N]=(0,x.useState)(""),[k,L]=(0,x.useState)(""),[_,H]=(0,x.useState)(""),[Z,$]=(0,x.useState)(""),[q,B]=(0,x.useState)(""),[Y,G]=(0,x.useState)(""),J=(0,M.wA)(),{Id:K}=(0,V.g)(),Q=(0,M.d4)((e=>e.AddStudentFollowUp.StudentFollowUp)),X=(0,M.d4)((e=>e.AddStudentDetails.StudentDetailsFollowUp)),ee={Id:4,CallStatus:f.filter((e=>e.IsActive)).map((e=>e.Value)).toString(),Reminder:g.filter((e=>e.IsActive)).map((e=>e.Value)).toString(),Comment:_},te={Id:parseInt(K)};(0,x.useEffect)((()=>{""!==Q&&D.oR.success(Q,{toastId:"success1"})}),[Q]),(0,x.useEffect)((()=>{J((0,U.Lp)(te))}),[]),(0,x.useEffect)((()=>{t(X.Text1),d(X.Text2),u(X.Text3),h(X.Text6),p(X.Text7),j(X.Text5)}),[X]);return(0,b.jsx)("div",{children:(0,b.jsxs)(s.A,{children:[(0,b.jsx)(C.A,{heading:"FollowUp"}),(0,b.jsxs)(i.A,{children:[(0,b.jsx)(a.A,{value:e,onChange:e=>{t(e.target.value)},label:"Student Name"}),(0,b.jsxs)(r.Ay,{container:!0,spacing:2,children:[(0,b.jsx)(r.Ay,{item:!0,xs:6,children:(0,b.jsx)(a.A,{value:n,onChange:e=>{d(e.target.value)},label:"Father Name"})}),(0,b.jsx)(r.Ay,{item:!0,xs:6,children:(0,b.jsx)(a.A,{value:c,onChange:e=>{u(e.target.value)},label:"Phone Number"})}),(0,b.jsx)(r.Ay,{item:!0,xs:6,children:(0,b.jsx)(a.A,{value:m,onChange:e=>{h(e.target.value)},label:"Mother Name"})}),(0,b.jsx)(r.Ay,{item:!0,xs:6,children:(0,b.jsx)(a.A,{value:A,onChange:e=>{p(e.target.value)},label:"Phone Number"})})]}),(0,b.jsx)(a.A,{value:v,onChange:e=>{j(e.target.value)},label:"Email"}),(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),(0,b.jsx)(o.A,{children:"Status of Call"}),(0,b.jsx)(E,{ItemList:f,clickItem:e=>{I(e)}}),(0,b.jsx)(W.A,{error:w}),(0,b.jsx)("br",{}),(0,b.jsx)(o.A,{children:"Reminder"}),(0,b.jsx)(E,{ItemList:g,clickItem:e=>{S(e)}}),(0,b.jsx)(W.A,{error:k}),(0,b.jsx)("br",{}),(0,b.jsx)(F.A,{value:_,onChange:e=>H(e.target.value),name:"Outlined",placeholder:"Comment",minRows:4,style:{width:"100%"}}),(0,b.jsx)(W.A,{error:Z}),(0,b.jsx)("br",{}),(0,b.jsx)(l.A,{onClick:()=>{let e=!1;""===_?($("filled required"),e=!0):$(""),(()=>{let e=!1;return f.map((t=>{t.IsActive&&(e=!0)})),e})()?N(""):(N("Fill the Mandatory Field"),e=!0),(()=>{let e=!1;return g.map((t=>{t.IsActive&&(e=!0)})),e})()?L(""):(L("Fill the Mandatory Field"),e=!0),e||J((0,R.nW)(ee))},children:"Save"})]}),(0,b.jsxs)(r.Ay,{container:!0,spacing:2,children:[(0,b.jsx)(r.Ay,{item:!0,xs:6,sx:{mt:2.7},children:(0,b.jsx)(z.A,{itemList:P.E2,ClickItem:e=>{B(e)},DefaultValue:q,Label:"Select Month"})}),(0,b.jsx)(r.Ay,{item:!0,xs:6,children:(0,b.jsx)(a.A,{value:Y,onChange:e=>{G(e.target.value)},label:"Search by Student Name",InputProps:{endAdornment:(0,b.jsx)(y,{position:"end",children:(0,b.jsx)(T.A,{})})}})})]}),(0,b.jsx)("br",{}),(0,b.jsx)(O,{clickEdit:()=>{}})]})})}},6587:(e,t,n)=>{n.d(t,{A:()=>o});n(5043);var s=n(6946),i=n(3193),a=n(2880),r=n(579);const o=function(e){let{itemList:t,ClickItem:n,DefaultValue:o,Label:l}=e;return(0,r.jsx)("div",{children:(0,r.jsx)(s.A,{children:(0,r.jsx)(i.A,{fullWidth:!0,children:(0,r.jsxs)(a.A,{fullWidth:!0,value:o,onChange:e=>n(e.target.value),id:"select",children:[""==o&&(0,r.jsx)("option",{children:l}),t.map(((e,t)=>(0,r.jsx)("option",{value:e.Value,children:e.Name},t)))]})})})})}},1051:(e,t,n)=>{n.d(t,{A:()=>a});var s=n(5865),i=(n(5043),n(579));const a=function(e){let{error:t}=e;return(0,i.jsx)("div",{children:(0,i.jsx)(s.A,{sx:{textAlign:"center",color:"red"},children:t})})}},6821:(e,t,n)=>{n.d(t,{A:()=>a});var s=n(5865),i=(n(5043),n(579));const a=function(e){let{error:t}=e;return(0,i.jsx)("div",{children:(0,i.jsx)(s.A,{sx:{color:"red"},children:t})})}},9282:(e,t,n)=>{n.d(t,{A:()=>h});var s=n(5043),i=n(1051),a=n(2110),r=n(8903),o=n(4889),l=n(4645),d=n(5865),c=n(3471),x=n(778),u=n(579);const m=function(e){let{item:t,clickEdit:n,Submit:i,Delete:m,Submit1:h}=e;const[A,p]=(0,s.useState)(!1);return window.addEventListener("resize",(()=>{window.innerWidth<900?p(!0):p(!1)})),(0,u.jsx)("div",{children:(0,u.jsx)(a.A,{sx:{mb:1},children:(0,u.jsxs)(r.Ay,{container:!0,style:{display:"flex",alignItems:"center"},children:[(0,u.jsx)(o.A,{mdDown:!0,children:(0,u.jsx)(l.A,{title:t.Text1,placement:"left-start",children:(0,u.jsx)(d.A,{px:3,sx:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",width:"300px"},children:t.Text1})})}),(0,u.jsx)(r.Ay,{item:!0,xs:3,md:2,children:(0,u.jsx)(d.A,{children:t.Text2})}),(0,u.jsx)(r.Ay,{item:!0,xs:4.5,md:2,children:(0,u.jsx)(d.A,{children:t.Text3})}),(0,u.jsx)(r.Ay,{item:!0,xs:1.5,md:1.5}),(0,u.jsx)(r.Ay,{item:!0,xs:1.5,md:1.5,children:(0,u.jsx)(x.A,{color:"success",onClick:()=>n(t.Id)})}),(0,u.jsx)(r.Ay,{item:!0,xs:1.5,md:1.5,children:(0,u.jsx)(c.A,{color:"error",onClick:()=>m(t.Id)})})]})})})};const h=function(e){let{ItemList:t,clickEdit:n,Submit:s,Delete:a,Submit1:r}=e;return(0,u.jsx)("div",{children:0==t.length?(0,u.jsx)(i.A,{error:"No records found"}):(0,u.jsx)(u.Fragment,{children:t.map(((e,t)=>(0,u.jsx)("div",{children:(0,u.jsx)(m,{item:e,clickEdit:n,Submit:s,Delete:a,Submit1:r})},t)))})})}},3652:(e,t,n)=>{n.d(t,{$$:()=>x,dF:()=>c,uL:()=>d});var s,i=n(7528),a=n(2056),r=n(5865),o=n(6946),l=n(3404);const d=(0,a.Ay)(r.A)((e=>{let{theme:t}=e;return"\n\nfont-weight: 500;\nfont-size: 20px;\ncolor: black;\nmargin: auto;\ntext-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\nfont-family: roboto;\n@media (min-width: 280px) and (max-width: 320px)  {\n  font-size: 18px;\n};\n@media (min-width: 600px)  {\n  font-size: 22px;\n};\n"})),c=(0,a.Ay)(o.A)(s||(s=(0,i.A)(["\n \n  width:70px;\n  height:75px;\n  @media (max-width: 320px) {\n    width: 60px;\n    height: 65px;\n  }\n  @media (max-width: 280px) {\n    width: 50px;\n    height: 55px;\n  }\n\n  border-radius: 10px;\n  margin-bottom: 5px;\n  text-align: center;\ntext-decoration: none;\n  box-shadow: 1px 4px 5px 2px rgba(0, 0, 0, 0.3);\n"]))),x=(0,a.Ay)(l.A)((e=>{let{theme:t,color:n}=e;return"\ncolor: white;\nfont-size: 12px;\nfont-family: 'Roboto';\ntext-decoration: none;\nheight:30px;\nborder-radius: 3px;\nbox-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n@media (min-width: 600px) {\n  \n };\n"}))},9731:(e,t,n)=>{n.d(t,{A:()=>x});var s=n(2056),i=n(6946),a=n(6240),r=n(8070),o=n(3652),l=n(6971),d=n(579);const c=(0,s.Ay)(i.A)((e=>{let{theme:t}=e;return"\n        margin-top: ".concat(t.spacing(2),";\n        margin-bottom: ").concat(t.spacing(2),";\n")})),x=e=>{let{heading:t}=e;(0,a.A)();const n=(0,l.Zp)();return null!==sessionStorage.getItem("UserId")&&void 0!==sessionStorage.getItem("UserId")||n("/"),(0,d.jsx)(r.A,{children:(0,d.jsx)(c,{display:"flex",alignItems:"center",children:(0,d.jsx)(o.uL,{children:t})})})}},9778:(e,t,n)=>{var s=n(5709);t.A=void 0;var i=s(n(39)),a=n(579),r=(0,i.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");t.A=r},7841:(e,t,n)=>{var s=n(5709);t.A=void 0;var i=s(n(39)),a=n(579),r=(0,i.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked");t.A=r},6360:(e,t,n)=>{var s=n(5709);t.A=void 0;var i=s(n(39)),a=n(579),r=(0,i.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.A=r},2880:(e,t,n)=>{n.d(t,{A:()=>I});var s=n(8168),i=n(8587),a=n(5043),r=n(643),o=(n(5173),n(222)),l=n(6914),d=n(4827),c=n(5213),x=n(2527),u=n(5761),m=n(7864),h=n(8402),A=n(579);const p=["className","children","classes","IconComponent","input","inputProps","variant"],v=["root"],j=(0,A.jsx)(u.A,{}),f=a.forwardRef((function(e,t){const n=(0,m.A)({name:"MuiNativeSelect",props:e}),{className:u,children:A,classes:f={},IconComponent:I=x.A,input:g=j,inputProps:b}=n,S=(0,i.A)(n,p),w=(0,c.A)(),y=(0,d.A)({props:n,muiFormControl:w,states:["variant"]}),C=(e=>{const{classes:t}=e;return(0,o.A)({root:["root"]},h.w,t)})((0,s.A)({},n,{classes:f})),N=(0,i.A)(f,v);return a.cloneElement(g,(0,s.A)({inputComponent:l.Ay,inputProps:(0,s.A)({children:A,classes:N,IconComponent:I,variant:y.variant,type:void 0},b,g?g.props.inputProps:{}),ref:t},S,{className:(0,r.A)(C.root,g.props.className,u)}))}));f.muiName="Select";const I=f}}]);
//# sourceMappingURL=694.9e8bc0dc.chunk.js.map