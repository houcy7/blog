(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{519:function(t,e,s){"use strict";s.r(e);var r=s(4),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("ul",[s("li",[s("RouterLink",{attrs:{to:"/blogs/docs/front-end/blog/blog-deploy-1.html"}},[t._v("博客的搭建 - 上")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/blogs/docs/front-end/blog/blog-deploy-2.html"}},[t._v("博客的搭建 - 下")])],1)])]),t._v(" "),s("h2",{attrs:{id:"获取代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取代码"}},[t._v("#")]),t._v(" 获取代码")]),t._v(" "),s("p",[t._v("这是我第三次使用vuepress搭建博客了。第一次是发现了好看的vuepress，第二次是发现了好看的vuepress-theme-reco，\n第三次是发现了好看的魔改博客"),s("a",{attrs:{href:"https://zyj_yida.gitee.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("后来的我们"),s("OutboundLink")],1),t._v("，经过和此博客作者的交流后，得到了一些优化的思路，\n便开始了第三次搭建。")]),t._v(" "),s("p",[t._v("此次博客基础代码源自zealsay开源的(vuepress-blog)[https://gitee.com/GodLikeZeal/vuepress_blog]，这种直接引用\n主题代码的方式着实让我这个后端小菜为之一惊，可以通过我仅有的vue知识进行微妙的调整了，具体搭建过程参考zealsay的文章"),s("a",{attrs:{href:"https://www.zealsay.com/blogs/tec/2020/20201223.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用vuepress_blog搭建博客\n"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("为了避免大佬修改博客地址，此处搬运关键命令")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("1.首先按照node环境并安装npm或者yarn，因为vuepress是基于node环境的，这一步可以随便百度。")])]),t._v(" "),s("li",[s("p",[t._v("2.安装vuepress")])])]),t._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vuepress "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm install -D vuepress")]),t._v("\n")])])]),s("ul",[s("li",[t._v("3.检出代码")])]),t._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://gitee.com/GodLikeZeal/vuepress_blog.git\n")])])]),s("ul",[s("li",[t._v("4.进入到.vuepress目录下运行dev")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",[t._v("注意⚠️：一定要到.vuepress目录下运行。")])]),t._v(" "),s("ul",[s("li",[t._v("5.进入到.vuepress目录")])]),t._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" .vuepress\n")])])]),s("ul",[s("li",[t._v("6.安装依赖")])]),t._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or npm install")]),t._v("\n")])])]),s("ul",[s("li",[t._v("7.运行项目")])]),t._v(" "),s("div",{staticClass:"language-shell script extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or npm run dev")]),t._v("\n")])])]),s("ul",[s("li",[t._v("8.打开浏览器 localhost:8080就能访问了")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1go87j8u3iej31hc0u0x6r.jpg",alt:""}}),t._v(" "),s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1go87kg896gj31h70qv4bd.jpg",alt:""}})]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("我把"),s("a",{attrs:{href:"https://github.com/yida-zyj",target:"_blank",rel:"noopener noreferrer"}},[t._v("张益达大佬"),s("OutboundLink")],1),t._v("的图片也抄过来了，实在是有点漂亮。手动狗头。")])]),t._v(" "),s("h2",{attrs:{id:"修改配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[t._v("#")]),t._v(" 修改配置")]),t._v(" "),s("p",[t._v("与博客有关的配置基本上都在"),s("code",[t._v(".vuepress")]),t._v("下的"),s("code",[t._v("config.js")]),t._v("设置，配置都写在一个文件内难免会有些过于冗长又不好进行维护，所以\n将配置分成了单独的模块。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1go89etsotzj30ky0cs756.jpg",alt:""}})]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("目录")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("blogConfig")]),t._v(" "),s("td",[t._v("博客的目录和标签位置顺序配置")])]),t._v(" "),s("tr",[s("td",[t._v("friendLink")]),t._v(" "),s("td",[t._v("友链配置")])]),t._v(" "),s("tr",[s("td",[t._v("nav")]),t._v(" "),s("td",[t._v("除博客的目录和标签其他导航的配置")])]),t._v(" "),s("tr",[s("td",[t._v("theme")]),t._v(" "),s("td",[t._v("主题配置")])]),t._v(" "),s("tr",[s("td",[t._v("config.js")]),t._v(" "),s("td",[t._v("其余配置")])])])]),t._v(" "),s("p",[t._v("基本上没有什么需要特别注意的配置，参考"),s("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/configJs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("config.js的配置"),s("OutboundLink")],1),t._v("\n均可以搞定")]),t._v(" "),s("h2",{attrs:{id:"frontmatter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter"}},[t._v("#")]),t._v(" frontMatter")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/views/1.x/frontMatter.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1),t._v("中已经有相关介绍了，但是zealsay\n大佬给每一个文章都添加了一个"),s("code",[t._v("cover")]),t._v("属性来配置个性图的链接，如果不想为文章指定图片的话，可以设置为"),s("code",[t._v("null")]),t._v(".这样可以展示或者展示一张\n随机的图片。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://tva1.sinaimg.cn/large/008eGmZEly1go89qzpb1gj30vw0cggmt.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"结语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[t._v("#")]),t._v(" 结语")]),t._v(" "),s("p",[t._v("至此，你将会得到一个专属于自己的博客空间，作为一个"),s("code",[t._v("hello world")]),t._v("达人，还不快去写点什么~"),s("br"),t._v("\n下一篇"),s("RouterLink",{attrs:{to:"/blogs/docs/front-end/blog/blog-deploy-2.html"}},[t._v("博客的搭建 - 下")]),t._v(" 咱们继续折腾")],1),t._v(" "),s("h2",{attrs:{id:"鸣谢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#鸣谢"}},[t._v("#")]),t._v(" 鸣谢")]),t._v(" "),s("p",[t._v("感谢"),s("a",{attrs:{href:"https://github.com/vuepress-reco/vuepress-theme-reco",target:"_blank",rel:"noopener noreferrer"}},[t._v("reco_luan"),s("OutboundLink")],1),t._v("."),s("br"),t._v("\n感谢"),s("a",{attrs:{href:"https://github.com/yida-zyj",target:"_blank",rel:"noopener noreferrer"}},[t._v("yida-zyj"),s("OutboundLink")],1),t._v("."),s("br"),t._v("\n感谢"),s("a",{attrs:{href:"https://github.com/GodLikeZeal",target:"_blank",rel:"noopener noreferrer"}},[t._v("zeal"),s("OutboundLink")],1),t._v("."),s("br"),t._v("\n老铁们，小红心请点亮~")])])}),[],!1,null,null,null);e.default=a.exports}}]);