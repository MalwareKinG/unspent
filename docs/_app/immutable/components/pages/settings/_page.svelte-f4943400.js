import{S as se,i as ae,s as le,k as q,a as P,q as U,w as I,a6 as re,l as x,h as u,c as k,m as E,r as z,x as C,n as m,G as g,b as w,y as D,f as H,t as S,z as j,ae as M,af as J,ag as K,B as ne}from"../../../chunks/index-385cc4c0.js";import{C as X}from"../../../chunks/ActionIcons-ce18791b.js";import{T as O,H as Q}from"../../../chunks/HelperText-af298711.js";import{b as Y,e as Z,n as y,p as ee}from"../../../chunks/store-2f984722.js";function oe(l){let e;return{c(){e=U("bitcoincash:q4j3j6j...")},l(s){e=z(s,"bitcoincash:q4j3j6j...")},m(s,t){w(s,e,t)},d(s){s&&u(e)}}}function fe(l){let e,s;return e=new Q({props:{slot:"helper",$$slots:{default:[oe]},$$scope:{ctx:l}}}),{c(){I(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,n){D(e,t,n),s=!0},p(t,n){const f={};n&4096&&(f.$$scope={dirty:n,ctx:t}),e.$set(f)},i(t){s||(H(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}function ie(l){let e,s,t,n,f,r,v,_;function b(i){l[8](i)}let d={style:"width: 100%;",helperLine$style:"width: 100%;",label:"Cash address to recieve executor fees",$$slots:{helper:[fe]},$$scope:{ctx:l}};return l[0]!==void 0&&(d.value=l[0]),r=new O({props:d}),M.push(()=>J(r,"value",b)),r.$on("change",l[5]),{c(){e=q("div"),s=q("h2"),t=U("Executor Cash Address"),n=P(),f=q("div"),I(r.$$.fragment),this.h()},l(i){e=x(i,"DIV",{class:!0});var $=E(e);s=x($,"H2",{class:!0});var p=E(s);t=z(p,"Executor Cash Address"),p.forEach(u),n=k($),f=x($,"DIV",{class:!0});var a=E(f);C(r.$$.fragment,a),a.forEach(u),$.forEach(u),this.h()},h(){m(s,"class","svelte-q2fa1h"),m(f,"class","svelte-q2fa1h"),m(e,"class","margins svelte-q2fa1h")},m(i,$){w(i,e,$),g(e,s),g(s,t),g(e,n),g(e,f),D(r,f,null),_=!0},p(i,$){const p={};$&4096&&(p.$$scope={dirty:$,ctx:i}),!v&&$&1&&(v=!0,p.value=i[0],K(()=>v=!1)),r.$set(p)},i(i){_||(H(r.$$.fragment,i),_=!0)},o(i){S(r.$$.fragment,i),_=!1},d(i){i&&u(e),j(r)}}}function ce(l){let e;return{c(){e=U("https://... chaingraph host... /v1/graphql")},l(s){e=z(s,"https://... chaingraph host... /v1/graphql")},m(s,t){w(s,e,t)},d(s){s&&u(e)}}}function ue(l){let e,s;return e=new Q({props:{slot:"helper",$$slots:{default:[ce]},$$scope:{ctx:l}}}),{c(){I(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,n){D(e,t,n),s=!0},p(t,n){const f={};n&4096&&(f.$$scope={dirty:n,ctx:t}),e.$set(f)},i(t){s||(H(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}function $e(l){let e,s;return e=new Q({props:{slot:"helper"}}),{c(){I(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,n){D(e,t,n),s=!0},p:ne,i(t){s||(H(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}function de(l){let e;return{c(){e=U("Protocol filter")},l(s){e=z(s,"Protocol filter")},m(s,t){w(s,e,t)},d(s){s&&u(e)}}}function pe(l){let e,s;return e=new Q({props:{slot:"helper",$$slots:{default:[de]},$$scope:{ctx:l}}}),{c(){I(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,n){D(e,t,n),s=!0},p(t,n){const f={};n&4096&&(f.$$scope={dirty:n,ctx:t}),e.$set(f)},i(t){s||(H(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){j(e,t)}}}function he(l){let e,s,t,n,f,r,v,_,b,d,i,$,p,a,o,V;function A(c){l[9](c)}let B={style:"width: 100%;",helperLine$style:"width: 100%;",label:"Chaingraph Service",$$slots:{helper:[ue]},$$scope:{ctx:l}};l[1]!==void 0&&(B.value=l[1]),r=new O({props:B}),M.push(()=>J(r,"value",A)),r.$on("change",l[4]);function G(c){l[10](c)}let F={label:"Node Filter",$$slots:{helper:[$e]},$$scope:{ctx:l}};l[2]!==void 0&&(F.value=l[2]),d=new O({props:F}),M.push(()=>J(d,"value",G)),d.$on("change",l[6]);function te(c){l[11](c)}let R={label:"Protocol",$$slots:{helper:[pe]},$$scope:{ctx:l}};return l[3]!==void 0&&(R.value=l[3]),a=new O({props:R}),M.push(()=>J(a,"value",te)),a.$on("change",l[7]),{c(){e=q("div"),s=q("h2"),t=U("Unspent Contract Index"),n=P(),f=q("div"),I(r.$$.fragment),_=P(),b=q("div"),I(d.$$.fragment),$=P(),p=q("div"),I(a.$$.fragment),this.h()},l(c){e=x(c,"DIV",{class:!0});var h=E(e);s=x(h,"H2",{class:!0});var T=E(s);t=z(T,"Unspent Contract Index"),T.forEach(u),n=k(h),f=x(h,"DIV",{class:!0});var L=E(f);C(r.$$.fragment,L),L.forEach(u),_=k(h),b=x(h,"DIV",{class:!0});var N=E(b);C(d.$$.fragment,N),N.forEach(u),$=k(h),p=x(h,"DIV",{class:!0});var W=E(p);C(a.$$.fragment,W),W.forEach(u),h.forEach(u),this.h()},h(){m(s,"class","svelte-q2fa1h"),m(f,"class","svelte-q2fa1h"),m(b,"class","svelte-q2fa1h"),m(p,"class","svelte-q2fa1h"),m(e,"class","margins svelte-q2fa1h")},m(c,h){w(c,e,h),g(e,s),g(s,t),g(e,n),g(e,f),D(r,f,null),g(e,_),g(e,b),D(d,b,null),g(e,$),g(e,p),D(a,p,null),V=!0},p(c,h){const T={};h&4096&&(T.$$scope={dirty:h,ctx:c}),!v&&h&2&&(v=!0,T.value=c[1],K(()=>v=!1)),r.$set(T);const L={};h&4096&&(L.$$scope={dirty:h,ctx:c}),!i&&h&4&&(i=!0,L.value=c[2],K(()=>i=!1)),d.$set(L);const N={};h&4096&&(N.$$scope={dirty:h,ctx:c}),!o&&h&8&&(o=!0,N.value=c[3],K(()=>o=!1)),a.$set(N)},i(c){V||(H(r.$$.fragment,c),H(d.$$.fragment,c),H(a.$$.fragment,c),V=!0)},o(c){S(r.$$.fragment,c),S(d.$$.fragment,c),S(a.$$.fragment,c),V=!1},d(c){c&&u(e),j(r),j(d),j(a)}}}function _e(l){let e,s,t,n,f,r,v,_,b,d,i,$,p;return _=new X({props:{class:"demo-spaced",$$slots:{default:[ie]},$$scope:{ctx:l}}}),$=new X({props:{class:"demo-spaced",$$slots:{default:[he]},$$scope:{ctx:l}}}),{c(){e=q("meta"),s=P(),t=q("h1"),n=U("Settings"),f=P(),r=q("div"),v=q("div"),I(_.$$.fragment),b=P(),d=q("div"),i=q("div"),I($.$$.fragment),this.h()},l(a){const o=re("svelte-14483kn",document.head);e=x(o,"META",{name:!0,content:!0,class:!0}),o.forEach(u),s=k(a),t=x(a,"H1",{class:!0});var V=E(t);n=z(V,"Settings"),V.forEach(u),f=k(a),r=x(a,"DIV",{class:!0});var A=E(r);v=x(A,"DIV",{class:!0});var B=E(v);C(_.$$.fragment,B),B.forEach(u),A.forEach(u),b=k(a),d=x(a,"DIV",{class:!0});var G=E(d);i=x(G,"DIV",{class:!0});var F=E(i);C($.$$.fragment,F),F.forEach(u),G.forEach(u),this.h()},h(){document.title="Settings",m(e,"name","description"),m(e,"content","Settings"),m(e,"class","svelte-q2fa1h"),m(t,"class","svelte-q2fa1h"),m(v,"class","card-container svelte-q2fa1h"),m(r,"class","card-display svelte-q2fa1h"),m(i,"class","card-container svelte-q2fa1h"),m(d,"class","card-display svelte-q2fa1h")},m(a,o){g(document.head,e),w(a,s,o),w(a,t,o),g(t,n),w(a,f,o),w(a,r,o),g(r,v),D(_,v,null),w(a,b,o),w(a,d,o),g(d,i),D($,i,null),p=!0},p(a,[o]){const V={};o&4097&&(V.$$scope={dirty:o,ctx:a}),_.$set(V);const A={};o&4110&&(A.$$scope={dirty:o,ctx:a}),$.$set(A)},i(a){p||(H(_.$$.fragment,a),H($.$$.fragment,a),p=!0)},o(a){S(_.$$.fragment,a),S($.$$.fragment,a),p=!1},d(a){u(e),a&&u(s),a&&u(t),a&&u(f),a&&u(r),j(_),a&&u(b),a&&u(d),j($)}}}function ve(l,e,s){let t,n,f,r;Y.subscribe(o=>{s(1,n=o)}),Z.subscribe(o=>{s(0,t=o)}),y.subscribe(o=>{s(2,f=o)}),ee.subscribe(o=>{s(3,r=o)});function v(){Y.set(n)}function _(){Z.set(t)}function b(){y.set(f)}function d(){ee.set(r)}function i(o){t=o,s(0,t)}function $(o){n=o,s(1,n)}function p(o){f=o,s(2,f)}function a(o){r=o,s(3,r)}return[t,n,f,r,v,_,b,d,i,$,p,a]}class xe extends se{constructor(e){super(),ae(this,e,ve,_e,le,{})}}export{xe as default};
//# sourceMappingURL=_page.svelte-f4943400.js.map
