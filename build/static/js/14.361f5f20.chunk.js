"use strict";(self.webpackChunktokyo_white_react_admin_dashboard=self.webpackChunktokyo_white_react_admin_dashboard||[]).push([[14],{8014:(e,t,s)=>{s.r(t),s.d(t,{default:()=>E});var n=s(2056),a=s(8070),i=s(6946),r=s(1637),l=s(2110),o=s(8903),d=s(9413),c=s(4605),m=s(4598),x=s(5865),h=s(5043),u=s(4556),p=s(9731),A=s(5678),g=s(6971),j=s(8096),f=s(6925),y=s(9056),b=s(9303),S=s(3346),I=s(8038),C=s(1793),v=s(4131),P=s(3652),N=s(9764),L=s(7176),w=s(579);const E=()=>{const{Id:e}=(0,g.g)(),[t,s]=(0,h.useState)(!1),E=(0,u.wA)(),F=(0,g.Zp)(),[R,k]=(0,h.useState)("Admission Form"),[M,z]=(0,h.useState)(!0),[U,D]=(0,h.useState)("0"),[_,B]=(0,h.useState)(""),[q,V]=(0,h.useState)(""),[$,O]=(0,h.useState)(""),[G,W]=(0,h.useState)([{Id:1,Name:"Male",Value:"1"},{Id:2,Name:"Female",Value:"2"}]),[Z,K]=(0,h.useState)("0"),[Y,H]=(0,h.useState)(""),[J,Q]=(0,h.useState)(""),[T,X]=(0,h.useState)(""),[ee,te]=(0,h.useState)(""),[se,ne]=(0,h.useState)(""),[ae,ie]=(0,h.useState)(""),[re,le]=(0,h.useState)(""),[oe,de]=(0,h.useState)(""),[ce,me]=(0,h.useState)(""),[xe,he]=(0,h.useState)(""),[ue,pe]=(0,h.useState)(""),[Ae,ge]=(0,h.useState)(""),[je,fe]=(0,h.useState)(""),[ye,be]=(0,h.useState)(""),[Se,Ie]=(0,h.useState)(""),[Ce,ve]=(0,h.useState)(""),[Pe,Ne]=(0,h.useState)(""),[Le,we]=(0,h.useState)(""),[Ee,Fe]=(0,h.useState)(""),[Re,ke]=(0,h.useState)(""),[Me,ze]=(0,h.useState)(""),[Ue,De]=(0,h.useState)(""),[_e,Be]=(0,h.useState)(""),[qe,Ve]=(0,h.useState)("");let $e=(0,h.useRef)(null),Oe=(0,h.useRef)(null);const Ge=(0,u.d4)((e=>e.Enquiry.Class)),We=(0,u.d4)((e=>e.Admission.AddAdmissionMsg));console.log(Ge);const Ze=(0,u.d4)((e=>e.Enquiry.EnquiryDetails)),Ke=(0,u.d4)((e=>e.Enquiry.Loading));(0,h.useEffect)((()=>{if(void 0!==e){const t={ID:Number(e)};E((0,I.IC)(t))}}),[e]),console.log(Ze),(0,h.useEffect)((()=>{null!==Ze&&(D(Ze.ClassId),B(Ze.StudentName),O((0,v.mh)(Ze.Birthdate)),V((0,C.Cb)(Ze.Birthdate).toString()),K(Ze.Gender),H(Ze.FatherName),Q(Ze.FatherPhoneNo),X(Ze.MotherName),te(Ze.MotherPhoneNo),ne(Ze.StudentAddress),ie(Ze.SocietyName),le(Ze.EmailId),de(Ze.PhotoFileName),me(Ze.PhotoFilePath),he(Ze.ReceiptFileName),pe(Ze.ReceiptFilePath))}),[Ze]),console.log(Ze),console.log($,q),(0,h.useEffect)((()=>{E((0,I.t0)()),Ye()}),[E]),(0,h.useEffect)((()=>{""!==We&&("0"===We?j.oR.error("Failed to Add Admission."):"1"===We?(j.oR.success("Admission Added Successfully."),Ye()):"2"===We?(j.oR.success("Admission Details Updated Successfully."),Ye(),F("/extended-sidebar/Student/AddEnquiry")):"3"===We&&j.oR.error("Email Id Already Exists."),E((0,L.Vc)()))}),[We,E]);const Ye=()=>{D("0"),B(""),O(""),V(""),K("0"),H(""),Q(""),X(""),te(""),ne(""),ie(""),le(""),de(""),me(""),he(""),pe(""),De(""),ze(""),ke(""),Fe(""),we(""),Ne(""),ve(""),be(""),Ie(""),fe(""),ge(""),Be(""),Ve(""),$e.current&&($e.current.value=""),Oe.current&&(Oe.current.value="")},He=e=>/^[a-zA-Z\s]+$/.test(e);(0,n.Ay)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1});return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p.A,{heading:R}),(0,w.jsx)(a.A,{sx:{py:2},children:Ke?(0,w.jsx)(i.A,{p:3,mt:12,sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:(0,w.jsx)(r.A,{})}):(0,w.jsx)(l.A,{variant:"outlined",children:(0,w.jsx)(i.A,{p:1,children:(0,w.jsxs)("form",{children:[(0,w.jsx)(o.Ay,{item:!0,xs:12,sx:{display:"flex",justifyContent:"flex-end"},children:(0,w.jsx)(d.A,{children:(0,w.jsx)(c.A,{control:(0,w.jsx)(m.A,{checked:M,onChange:()=>{!0===M&&(z(!1),F("/extended-sidebar/Student/AddEnquiry"))}}),label:"Admission Form"})})}),(0,w.jsxs)(o.Ay,{container:!0,spacing:2,children:[(0,w.jsx)(o.Ay,{item:!0,xs:6,sm:6,children:(0,w.jsx)(b.A,{Item:_,Label:"Student's Name",ClickItem:e=>{""===e.trim()?(B(""),fe("")):He(e)&&B(e),fe("")},ErrorMessage:je})}),(0,w.jsx)(o.Ay,{item:!0,xs:6,sm:6,sx:{mt:2.7},children:(0,w.jsx)(y.A,{ItemList:Ge,Label:"",DefaultValue:U,ClickItem:e=>{D(e),ge("")},Placeholder:"Select Class",ErrorMessage:Ae})}),(0,w.jsx)(o.Ay,{item:!0,xs:6,sm:6,sx:{mt:.5},children:(0,w.jsx)(f.A,{Item:$,Label:"Birth Date *",ClickItem:e=>{const t=new Date(e),s=new Date,n=new Date(s.getFullYear()-1,s.getMonth(),s.getDate());t>s?be("Birth date cannot be in the future"):t>n?be("Child must be at least 1 years old"):(be(""),O(e),V((0,C.Cb)(e).toString()))},ErrorMessage:ye})}),(0,w.jsx)(o.Ay,{item:!0,xs:6,sm:6,sx:{mt:.5},children:(0,w.jsx)(S.A,{ItemList:G,Label:"Gender *",DefaultValue:Z,ClickItem:e=>{K(e),Ie("")},ErrorMessage:Se})}),(0,w.jsx)(o.Ay,{item:!0,xs:6,sm:6,children:(0,w.jsx)(b.A,{Item:q,Label:"Student's Age",ClickItem:()=>{},ErrorMessage:void 0})}),(0,w.jsx)(o.Ay,{item:!0,xs:6,sm:6,children:(0,w.jsx)(b.A,{Item:re,Label:"Email Id",ClickItem:e=>{le(e.toLowerCase()),De("")},ErrorMessage:Ue,BlurItem:()=>{De((0,C.FN)(re.trim()))}})}),(0,w.jsx)(o.Ay,{item:!0,xs:6,sm:6,children:(0,w.jsx)(b.A,{Item:Y,Label:"Father's Name",ClickItem:e=>{""===e.trim()?(H(""),ve("")):He(e)&&(H(e),ve(""))},ErrorMessage:Ce})}),(0,w.jsx)(o.Ay,{item:!0,xs:6,sm:6,children:(0,w.jsx)(b.A,{Item:J,Label:"Phone No.",ClickItem:e=>{!isNaN(+e)&&e.length<11&&Q(e),Ne("")},ErrorMessage:Pe,BlurItem:()=>{Ne((0,C.un)(J.trim()))}})}),(0,w.jsx)(o.Ay,{item:!0,xs:6,sm:6,children:(0,w.jsx)(b.A,{Item:T,Label:"Mother's Name",ClickItem:e=>{""===e.trim()?(X(""),we("")):He(e)&&X(e),we("")},ErrorMessage:Le})}),(0,w.jsx)(o.Ay,{item:!0,xs:6,sm:6,children:(0,w.jsx)(b.A,{Item:ee,Label:"Phone No.",ClickItem:e=>{!isNaN(+e)&&e.length<11&&te(e),Fe("")},ErrorMessage:Ee,BlurItem:()=>{Fe((0,C.un)(ee.trim()))}})}),(0,w.jsx)(o.Ay,{item:!0,xs:6,sm:6,children:(0,w.jsx)(b.A,{Item:se,Label:"Address",ClickItem:e=>{ne(e),ke("")},ErrorMessage:Re})}),(0,w.jsx)(o.Ay,{item:!0,xs:6,sm:6,children:(0,w.jsx)(b.A,{Item:ae,Label:"Society Name",ClickItem:e=>{ie(e),ze("")},ErrorMessage:Me})}),(0,w.jsxs)(o.Ay,{item:!0,xs:6,sm:6,children:[(0,w.jsx)(x.A,{children:"Receipt *"}),(0,w.jsx)(i.A,{component:"section",sx:{p:1},children:(0,w.jsx)("input",{type:"file",ref:Oe,accept:".png,.jpg",onChange:e=>{const t=e.target.files[0],s=t.name.split(".").pop(),n="".concat(_.split(" ")[0],"_").concat($.replace(/\//g,"")),a="Receipt_".concat(n,".").concat(s);he(a),pe(URL.createObjectURL(t)),console.log("Receipt File Name:",a),console.log("Receipt File Path:",URL.createObjectURL(t))}})}),(0,w.jsx)(N.Ud,{children:qe})]}),(0,w.jsxs)(o.Ay,{item:!0,xs:6,sm:6,children:[(0,w.jsx)(x.A,{children:"Student's Photo *"}),(0,w.jsx)(i.A,{component:"section",sx:{p:1},children:(0,w.jsx)("input",{type:"file",ref:$e,accept:".png,.jpg",onChange:e=>{const t=e.target.files[0],s=t.name.split(".").pop(),n="".concat(_.split(" ")[0],"_").concat($.replace(/\//g,"")),a="Photo_".concat(n,".").concat(s);de(a),me(URL.createObjectURL(t)),console.log("Photo File Name:",a),console.log("Photo File Path:",URL.createObjectURL(t))}})}),(0,w.jsx)(N.Ud,{children:_e})]}),(0,w.jsx)(o.Ay,{item:!0,xs:12,children:(0,w.jsxs)(i.A,{sx:{display:"flex",justifyContent:"center",gap:3},children:[(0,w.jsxs)(P.$$,{onClick:()=>{if((()=>{let e=!0;return"0"===U?(ge("Please select student's class"),e=!1):ge(""),""===_?(fe("Please enter student's name"),e=!1):fe(""),""===$?(be("Please enter student's Birthdate"),e=!1):be(""),"0"===Z?(Ie("Please select gender"),e=!1):Ie(""),""===Y?(ve("Please enter Father name"),e=!1):ve(""),""===J&&(Ne("Please enter valid phone number"),e=!1),""===T?(we("Please enter Mother name"),e=!1):we(""),""===ee&&(Fe("Please enter valid phone number"),e=!1),""===se?(ke("Please enter Residential Address"),e=!1):ke(""),""===ae?(ze("Please enter Society Name"),e=!1):ze(""),""===re&&(De("Please enter valid email-id"),e=!1),""!==Ue&&(e=!1),""!==Pe&&(e=!1),""!==Ee&&(e=!1),""==$e.current.value?(Be("Please attach Student's Photo"),e=!1):Be(""),""==Oe.current.value?(Ve("Please attach Fees Receipt."),e=!1):Ve(""),e})()){const t={ID:void 0==e?0:Number(e),ClassId:Number(U),StudentName:_,Birthdate:$,Gender:Number(Z),FatherName:Y,FatherPhoneNo:J,MotherName:T,MotherPhoneNo:ee,StudentAddress:se,SocietyName:ae,EmailId:re.trim(),PhotoFileName:oe,PhotoFilePath:ce,ReceiptFileName:xe,ReceiptFilePath:ue};E((0,L.RM)(t)),s(!0),console.log(t)}else j.oR.error("Please fill all required fields correctly.")},children:["Submit\xa0",(0,w.jsx)(A.A,{fontSize:"small"})]}),(0,w.jsx)(P.$$,{onClick:Ye,children:"Clear"})]})})]})]})})})})]})}},6925:(e,t,s)=>{s.d(t,{A:()=>l});var n=s(5865),a=s(5795),i=s(9764),r=s(579);const l=e=>{let{Item:t,ClickItem:s,Label:l,ErrorMessage:o=""}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.A,{children:l}),(0,r.jsx)(a.A,{value:t,type:"date",fullWidth:!0,onChange:e=>{s(e.target.value)},size:"small"}),(0,r.jsx)(i.Ud,{children:o})]})}},9056:(e,t,s)=>{s.d(t,{A:()=>r});var n=s(2880),a=s(9764),i=s(579);const r=e=>{let{ItemList:t,ClickItem:s,Label:r,DefaultValue:l,ErrorMessage:o="",Placeholder:d="select option"}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.A,{value:l,fullWidth:!0,variant:"outlined",size:"small",required:!0,onChange:e=>s(e.target.value),children:[(0,i.jsx)("option",{value:"0",children:d}),null===t||void 0===t?void 0:t.map(((e,t)=>(0,i.jsx)("option",{value:e.Value,children:e.Name},t)))]}),(0,i.jsx)(a.Ud,{children:o})]})}},9303:(e,t,s)=>{s.d(t,{A:()=>r});var n=s(5795),a=s(9764),i=s(579);const r=e=>{let{Item:t,Label:s,ErrorMessage:r="",ClickItem:l,BlurItem:o,KeyPressItem:d}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.A,{value:t,onChange:e=>{l(e.target.value)},onBlur:o,size:"small",label:s,variant:"standard",fullWidth:!0,required:!0}),(0,i.jsx)(a.Ud,{children:r})]})}},3346:(e,t,s)=>{s.d(t,{A:()=>d});var n=s(5865),a=s(4714),i=s(4605),r=s(4256),l=s(9764),o=s(579);const d=e=>{let{ItemList:t,ClickItem:s,Label:d,DefaultValue:c,ErrorMessage:m=""}=e;return console.log(m),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.A,{children:d}),(0,o.jsx)(a.A,{value:c,onChange:e=>s(e.target.value),children:(0,o.jsx)("div",{children:null===t||void 0===t?void 0:t.map(((e,t)=>(0,o.jsx)(i.A,{value:e.Value,control:(0,o.jsx)(r.A,{size:"small"}),label:e.Name},t)))})}),(0,o.jsx)(l.Ud,{children:m})]})}},9764:(e,t,s)=>{s.d(t,{Ud:()=>c});var n,a,i,r,l=s(7528),o=s(2056),d=s(5865);const c=(0,o.Ay)(d.A)(n||(n=(0,l.A)(["\n  font-size: 12px;\n  color: red;\n  text-align: center;\n  font-family: 'Roboto';\n  @media (max-width: 280px) {\n    font-size: 10px;\n  }\n"])));(0,o.Ay)(d.A)(a||(a=(0,l.A)(["\n  font-size: 12px;\n  // color: red;\n  text-align: center;\n  font-family: 'Roboto';\n  @media (max-width: 280px) {\n    font-size: 10px;\n  }\n"]))),(0,o.Ay)(d.A)(i||(i=(0,l.A)(["\n  font-size: 12px;\n  color: red;\n  margin-top: -10px;\n  font-family: 'Roboto';\n  @media (max-width: 280px) {\n    font-size: 10px;\n  }\n"]))),(0,o.Ay)(d.A)(r||(r=(0,l.A)(["\n  font-size: 12px;\n  color: red;\n\n  font-family: 'Roboto';\n  @media (max-width: 280px) {\n    font-size: 10px;\n  }\n"])))},3652:(e,t,s)=>{s.d(t,{$$:()=>m,dF:()=>c,uL:()=>d});var n,a=s(7528),i=s(2056),r=s(5865),l=s(6946),o=s(3404);const d=(0,i.Ay)(r.A)((e=>{let{theme:t}=e;return"\n\nfont-weight: 500;\nfont-size: 20px;\ncolor: black;\nmargin: auto;\ntext-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\nfont-family: roboto;\n@media (min-width: 280px) and (max-width: 320px)  {\n  font-size: 18px;\n};\n@media (min-width: 600px)  {\n  font-size: 22px;\n};\n"})),c=(0,i.Ay)(l.A)(n||(n=(0,a.A)(["\n \n  width:70px;\n  height:75px;\n  @media (max-width: 320px) {\n    width: 60px;\n    height: 65px;\n  }\n  @media (max-width: 280px) {\n    width: 50px;\n    height: 55px;\n  }\n\n  border-radius: 10px;\n  margin-bottom: 5px;\n  text-align: center;\ntext-decoration: none;\n  box-shadow: 1px 4px 5px 2px rgba(0, 0, 0, 0.3);\n"]))),m=(0,i.Ay)(o.A)((e=>{let{theme:t,color:s}=e;return"\ncolor: white;\nfont-size: 12px;\nfont-family: 'Roboto';\ntext-decoration: none;\nheight:30px;\nborder-radius: 3px;\nbox-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n@media (min-width: 600px) {\n  \n };\n"}))},9731:(e,t,s)=>{s.d(t,{A:()=>m});var n=s(2056),a=s(6946),i=s(6240),r=s(8070),l=s(3652),o=s(6971),d=s(579);const c=(0,n.Ay)(a.A)((e=>{let{theme:t}=e;return"\n        margin-top: ".concat(t.spacing(2),";\n        margin-bottom: ").concat(t.spacing(2),";\n")})),m=e=>{let{heading:t}=e;(0,i.A)();const s=(0,o.Zp)();return null!==sessionStorage.getItem("UserId")&&void 0!==sessionStorage.getItem("UserId")||s("/"),(0,d.jsx)(r.A,{children:(0,d.jsx)(c,{display:"flex",alignItems:"center",children:(0,d.jsx)(l.uL,{children:t})})})}}}]);
//# sourceMappingURL=14.361f5f20.chunk.js.map