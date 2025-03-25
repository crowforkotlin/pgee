"use strict";(self.webpackChunkpgee=self.webpackChunkpgee||[]).push([[9462],{4429:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"programming/06/programming-06-17","title":"6.17 \u80cc\u5305\u95ee\u9898","description":"\u672c\u8003\u70b9\u672c\u8d28\u662f\u8bb0\u5fc6\u5316\u641c\u7d22\u3002","source":"@site/docs/programming/06/programming-06-17.md","sourceDirName":"programming/06","slug":"/programming/06/programming-06-17","permalink":"/pgee/programming/06/programming-06-17","draft":false,"unlisted":false,"editUrl":"https://github.com/sgpublic/pgee/tree/main/docs/programming/06/programming-06-17.md","tags":[],"version":"current","lastUpdatedAt":1742296372000,"frontMatter":{},"sidebar":"programming","previous":{"title":"6.16 \u6700\u8fd1\u70b9\u5bf9\u95ee\u9898","permalink":"/pgee/programming/06/programming-06-16"},"next":{"title":"6.18 \u591a\u673a\u8c03\u5ea6\u95ee\u9898","permalink":"/pgee/programming/06/programming-06-18"}}');var s=e(4848),t=e(8453);const a={},c="6.17 \u80cc\u5305\u95ee\u9898",l={},m=[];function o(n){const i={a:"a",annotation:"annotation",code:"code",h1:"h1",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,t.R)(),...n.components},{Details:e}=i;return e||function(n,i){throw new Error("Expected "+(i?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"617-\u80cc\u5305\u95ee\u9898",children:"6.17 \u80cc\u5305\u95ee\u9898"})}),"\n",(0,s.jsxs)(i.p,{children:["\u672c\u8003\u70b9\u672c\u8d28\u662f",(0,s.jsx)(i.strong,{children:"\u8bb0\u5fc6\u5316\u641c\u7d22"}),"\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:["\u4f8b\u9898\uff1a",(0,s.jsx)(i.a,{href:"https://www.acwing.com/problem/content/2/",children:"2. 01\u80cc\u5305\u95ee\u9898 - AcWing\u9898\u5e93"})]}),"\n",(0,s.jsx)(i.p,{children:"\u8001\u89c4\u77e9\uff0c\u5148\u5199\u66b4\u529b\u89e3\u6cd5\uff0c\u5373\u5bf9\u6bcf\u4ef6\u7269\u54c1\u9009\u4e0e\u4e0d\u9009\u8fdb\u884c\u9012\u5f52\uff0c\u8fd4\u56de\u4ef7\u503c\u5927\u7684\u60c5\u51b5\u3002"}),"\n",(0,s.jsxs)(i.p,{children:["\u65f6\u95f4\u590d\u6742\u5ea6\uff1a",(0,s.jsxs)(i.span,{className:"katex",children:[(0,s.jsx)(i.span,{className:"katex-mathml",children:(0,s.jsx)(i.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(i.semantics,{children:[(0,s.jsxs)(i.mrow,{children:[(0,s.jsx)(i.mi,{children:"O"}),(0,s.jsx)(i.mo,{stretchy:"false",children:"("}),(0,s.jsxs)(i.msup,{children:[(0,s.jsx)(i.mn,{children:"2"}),(0,s.jsx)(i.mi,{children:"n"})]}),(0,s.jsx)(i.mo,{stretchy:"false",children:")"})]}),(0,s.jsx)(i.annotation,{encoding:"application/x-tex",children:"O(2^n)"})]})})}),(0,s.jsx)(i.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(i.span,{className:"base",children:[(0,s.jsx)(i.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.jsx)(i.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,s.jsx)(i.span,{className:"mopen",children:"("}),(0,s.jsxs)(i.span,{className:"mord",children:[(0,s.jsx)(i.span,{className:"mord",children:"2"}),(0,s.jsx)(i.span,{className:"msupsub",children:(0,s.jsx)(i.span,{className:"vlist-t",children:(0,s.jsx)(i.span,{className:"vlist-r",children:(0,s.jsx)(i.span,{className:"vlist",style:{height:"0.6644em"},children:(0,s.jsxs)(i.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,s.jsx)(i.span,{className:"pstrut",style:{height:"2.7em"}}),(0,s.jsx)(i.span,{className:"sizing reset-size6 size3 mtight",children:(0,s.jsx)(i.span,{className:"mord mathnormal mtight",children:"n"})})]})})})})})]}),(0,s.jsx)(i.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-cpp",children:"#include <iostream>\n#include <cstring>\n#include <algorithm>\nusing namespace std;\n\nint search(int *v, int *w, int i, int current_v, int& V, int& N);\n\nint main() {\n    int N, V;\n    cin >> N >> V;\n    int v[N]; //\u4f53\u79ef\n    int w[N]; //\u4ef7\u503c\n    for (int i = 0; i < N; ++i) {\n        cin >> v[i] >> w[i];\n    }\n    int max_w = search(v, w, 0, 0, V, N);\n    cout << max_w << endl;\n}\n\n/**\n * \u4f7f\u7528\u9012\u5f52\u7684\u65b9\u5f0f\u8fdb\u884c\u66b4\u529b\u641c\u7d22\n *\n * @param v \u6240\u6709\u7269\u54c1\u7684\u4f53\u79ef\n * @param w \u6240\u6709\u7269\u54c1\u7684\u4ef7\u503c\n * @param i \u5f53\u524d\u9009\u5230\u7b2c i \u4ef6\u7269\u54c1\n * @param current_v \u5f53\u524d\u5df2\u9009\u7269\u54c1\u7684\u603b\u4f53\u79ef\n * @param V \u80cc\u5305\u5bb9\u79ef\n * @param N \u7269\u54c1\u6570\u91cf\n * @return \u9009\u5230\u7b2c i \u4ef6\u7269\u54c1\u65f6\uff0c\u5728\u6ee1\u8db3\u603b\u4f53\u79ef\u4e0d\u8d85\u8fc7\u80cc\u5305\u5bb9\u79ef\u7684\u60c5\u51b5\u4e0b\uff0c\u80fd\u53d6\u5f97\u7684\u6700\u5927\u4ef7\u503c\n */\nint search(int *v, int *w, int i, int current_v, int& V, int& N) {\n    if (i + 1 > N) {\n        return 0;\n    }\n\n    int on = 0, next_v = current_v + v[i];\n    if (next_v <= V) {\n        // \u5f53\u7b2c i \u4ef6\u7269\u54c1\u653e\u5165\u540e\u603b\u4f53\u79ef\u4ecd\u4e0d\u8d85\u8fc7\u80cc\u5305\u5bb9\u91cf\u65f6\uff0c\u6b64\u7269\u54c1\u53ef\u4ee5\u653e\u5165\n        on = w[i] + search(v, w, i + 1, next_v, V, N);\n    }\n    int off = search(v, w, i + 1, current_v, V, N);\n    return max(on, off);\n}\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u663e\u7136\uff0c\u4e0a\u8ff0\u89e3\u6cd5\u5e76\u4e0d\u9002\u7528\u4e8e\u4f8b\u9898\u4e2d\u6240\u7ed9\u7684\u6570\u636e\u89c4\u6a21\uff0c\u53ef\u4f7f\u7528\u52a8\u6001\u89c4\u5212\u89e3\u51b3\u3002\u5177\u4f53\u7684\uff1a"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["\u8003\u8651 ",(0,s.jsx)(i.code,{children:"dp[i][j]"})," \u4e3a\uff0c\u524d ",(0,s.jsx)(i.code,{children:"i"})," \u4e2a\u7269\u54c1\u5df2\u9009\u7269\u54c1\u4f53\u79ef\u4e3a ",(0,s.jsx)(i.code,{children:"j"})," \u65f6\uff0c\u6700\u5927\u4ef7\u503c\u4e3a\u591a\u5c11\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u90a3\u4e48\u5c31\u6709\u72b6\u6001\u8f6c\u79fb\u65b9\u7a0b\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\u4e0d\u9009\u7b2c ",(0,s.jsx)(i.code,{children:"i"})," \u4ef6\u7269\u54c1\uff1a",(0,s.jsx)(i.code,{children:"dp[i][j] = dp[i - 1][j];"})]}),"\n",(0,s.jsxs)(i.li,{children:["\u9009\u7b2c ",(0,s.jsx)(i.code,{children:"i"})," \u4ef6\u7269\u54c1\uff1a",(0,s.jsx)(i.code,{children:"dp[i][j] = w[i] + dp[i - 1][j - v[i]];"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u53d6\u4e0a\u8ff0\u4e24\u79cd\u60c5\u51b5\u7684\u6700\u5927\u503c\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["\u6700\u540e\u4ece ",(0,s.jsx)(i.code,{children:"dp[N][0 ~ V]"})," \u4e2d\u53d6\u6700\u5927\u503c\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-cpp",children:"#include <iostream>\n#include <cstring>\n#include <algorithm>\nusing namespace std;\n\nint main() {\n    int N /*\u7269\u54c1\u6570\u91cf*/, V/*\u80cc\u5305\u5bb9\u91cf*/;\n    cin >> N >> V;\n    int v[N] /*\u4f53\u79ef*/, w[N] /*\u4ef7\u503c*/;\n    for (int i = 0; i < N; ++i) {\n        cin >> v[i] >> w[i];\n    }\n    int dp[N + 1][V];\n    memset(dp, 0, sizeof(dp));\n    for (int i = 1; i <= N; ++i) {\n        for (int j = 0; j <= V; ++j) {\n            if (j >= v[i]) {\n                dp[i][j] = max(\n                    dp[i - 1][j], // \u4e0d\u9009\u7b2c i \u4e2a\u7269\u54c1\n                    dp[i - 1][j - v[i]] + w[i] // \u9009\u7b2c i \u4e2a\u7269\u54c1\n                );\n            }\n        }\n    }\n    int result = 0;\n    for (int i = 0; i < V; ++i) {\n        result = max(dp[N][i], result);\n    }\n    cout << result << endl;\n}\n"})}),"\n",(0,s.jsxs)(e,{children:[(0,s.jsx)("summary",{children:"DLC\uff08\u8bb0\u5fc6\u5316\u641c\u7d22\uff09"}),(0,s.jsx)(i.p,{children:"\u8003\u8651\u5230\u9012\u5f52\u641c\u7d22\u7684\u65f6\u5019\uff0c\u51fa\u73b0\u91cd\u590d\u641c\u7d22\u7684\u60c5\u51b5\u3002"}),(0,s.jsx)(i.p,{children:"\u4f8b\u5982\uff0c\u5f53\u80cc\u5305\u5269\u4f59\u5bb9\u79ef\u4e3a 10 \u7684\u65f6\u5019\uff0c\u8fd8\u5269 3 \u4ef6\u7269\u54c1\u53ef\u9009\uff0c\u4f53\u79ef\u4f9d\u6b21\u4e3a\uff1a1\u30014\u30015\uff0c\u9009\u62e9\u548c\u4e0d\u9009\u62e9 1 \u7684\u65f6\u5019\uff0c\u4e24\u4e2a\u5206\u652f\u4e0b\u9762\u90fd\u6709\u9009\u62e9\u548c\u4e0d\u9009\u62e9 4\u3002"}),(0,s.jsx)(i.p,{children:"\u4e8e\u662f\u8003\u8651\u52a0\u4e0a\u8bb0\u5fc6\u5316\u641c\u7d22\uff0c\u63d0\u4ea4\u540e\u4e5f\u80fd AC\u3002\u5b8c\u6574\u4ee3\u7801\u5982\u4e0b\uff1a"}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-cpp",children:"#include <iostream>\n#include <cstring>\n#include <algorithm>\nusing namespace std;\n\nint search(int *v, int *w, int i, int current_v, int& V, int& N);\n\nint main() {\n    int N, V;\n    cin >> N >> V;\n    int v[N]; //\u4f53\u79ef\n    int w[N]; //\u4ef7\u503c\n    for (int i = 0; i < N; ++i) {\n        cin >> v[i] >> w[i];\n    }\n    int max_w = search(v, w, 0, 0, V, N);\n    cout << max_w << endl;\n}\n\nint mem[1010][1010];\n\n/**\n * \u4f7f\u7528\u9012\u5f52\u7684\u65b9\u5f0f\u8fdb\u884c\u66b4\u529b\u641c\u7d22\n *\n * @param v \u6240\u6709\u7269\u54c1\u7684\u4f53\u79ef\n * @param w \u6240\u6709\u7269\u54c1\u7684\u4ef7\u503c\n * @param i \u5f53\u524d\u9009\u5230\u7b2c i \u4ef6\u7269\u54c1\n * @param current_v \u5f53\u524d\u5df2\u9009\u7269\u54c1\u7684\u603b\u4f53\u79ef\n * @param V \u80cc\u5305\u5bb9\u79ef\n * @param N \u7269\u54c1\u6570\u91cf\n * @return \u9009\u5230\u7b2c i \u4ef6\u7269\u54c1\u65f6\uff0c\u5728\u6ee1\u8db3\u603b\u4f53\u79ef\u4e0d\u8d85\u8fc7\u80cc\u5305\u5bb9\u79ef\u7684\u60c5\u51b5\u4e0b\uff0c\u80fd\u53d6\u5f97\u7684\u6700\u5927\u4ef7\u503c\n */\nint search(int *v, int *w, int i, int current_v, int& V, int& N) {\n    if (i + 1 > N) {\n        return 0;\n    }\n\n    if (mem[i][current_v] > 0) {\n        return mem[i][current_v];\n    }\n    int on = 0, next_v = current_v + v[i];\n    if (next_v <= V) {\n        // \u5f53\u7b2c i \u4ef6\u7269\u54c1\u653e\u5165\u540e\u603b\u4f53\u79ef\u4ecd\u4e0d\u8d85\u8fc7\u80cc\u5305\u5bb9\u91cf\u65f6\uff0c\u6b64\u7269\u54c1\u53ef\u4ee5\u653e\u5165\n        on = w[i] + search(v, w, i + 1, next_v, V, N);\n    }\n    int off = search(v, w, i + 1, current_v, V, N);\n    int result = max(on, off);\n    mem[i][current_v] = result;\n    return result;\n}\n"})})]})]})}function d(n={}){const{wrapper:i}={...(0,t.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},8453:(n,i,e)=>{e.d(i,{R:()=>a,x:()=>c});var r=e(6540);const s={},t=r.createContext(s);function a(n){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),r.createElement(t.Provider,{value:i},n.children)}}}]);