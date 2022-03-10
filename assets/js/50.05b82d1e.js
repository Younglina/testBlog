(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{620:function(s,a,t){"use strict";t.r(a);var n=t(8),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"题目描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://leetcode-cn.com/problems/binary-subarrays-with-sum/",target:"_blank",rel:"noopener noreferrer"}},[s._v("930.和相同的二元子数组"),t("OutboundLink")],1),t("br"),s._v("\n给你一个二元数组 "),t("code",[s._v("nums")]),s._v(" ，和一个整数 "),t("code",[s._v("goal")]),s._v(" ，请你统计并返回有多少个和为 "),t("code",[s._v("goal")]),s._v(" 的 "),t("code",[s._v("非空")]),s._v(" 子数组。")]),s._v(" "),t("p",[t("code",[s._v("子数组")]),s._v(" 是数组的一段连续部分。")]),s._v(" "),t("h3",{attrs:{id:"示例-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-1"}},[s._v("#")]),s._v(" 示例 1：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：nums = [1,0,1,0,1], goal = 2  \n输出：4  \n解释：  \n有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"示例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[s._v("#")]),s._v(" 示例 2：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：people = [3,2,2,1], limit = 3  \n输出：3  \n解释：3 艘船分别载 (1, 2), (2) 和 (3)  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"示例-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[s._v("#")]),s._v(" 示例 3：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：nums = [0,0,0,0,0], goal = 0  \n输出：15\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[s._v("提示")]),t("p",[s._v("1 <= nums.length <= 3 * 104"),t("br"),s._v("\nnums[i] 不是 0 就是 1"),t("br"),s._v("\n0 <= goal <= nums.length")])]),t("h2",{attrs:{id:"思路1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路1"}},[s._v("#")]),s._v(" 思路1")]),s._v(" "),t("h3",{attrs:{id:"前缀和-哈希表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前缀和-哈希表"}},[s._v("#")]),s._v(" 前缀和 + 哈希表")]),s._v(" "),t("p",[s._v("遍历数组记录当前值为"),t("code",[s._v("i")]),s._v("，定义一个哈希表"),t("code",[s._v("map")]),s._v("记录数组的前缀和、"),t("code",[s._v("sum")]),s._v("记录当前总和"),t("code",[s._v("nums[0]+···+nums[i]")]),s._v("，\n累加"),t("code",[s._v("map")]),s._v("中存在"),t("code",[s._v("sum-goal")]),s._v("的数量即可")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[1,0,1,0,1]\ni=1, map={0:1},         sum = 0,    map[0-2]=0, res=0  \ni=0, map={0:1,1:1},     sum = 1,    map[1-2]=0, res=0  \ni=1, map={0:1,1:2},     sum = 2,    map[2-2]=1, res=1  \ni=0, map={0:1,1:2,2:1}, sum = 2,    map[2-2]=1, res=2  \ni=1, map={0:1,1:2,2:2}, sum = 3,    map[3-2]=2, res=4  \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"题解1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题解1"}},[s._v("#")]),s._v(" 题解1")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("numSubarraysWithSum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" goal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" map"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("sum"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("res"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" i "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n        sum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" i\n        res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sum"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("goal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"思路2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思路2"}},[s._v("#")]),s._v(" 思路2")]),s._v(" "),t("h3",{attrs:{id:"滑动窗口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口"}},[s._v("#")]),s._v(" 滑动窗口")]),s._v(" "),t("p",[s._v("定义两个左指针"),t("code",[s._v("l1,l2")]),s._v("，一个右指针"),t("code",[s._v("r")]),s._v("遍历数组，"),t("code",[s._v("(l1,r]")]),s._v("的和记为"),t("code",[s._v("s1")]),s._v(" ，"),t("code",[s._v("(l2,r]")]),s._v("的和记为"),t("code",[s._v("s2")]),s._v(",\n"),t("code",[s._v("l1")]),s._v("为"),t("code",[s._v("s1>goal")]),s._v("的临界点，"),t("code",[s._v("l2")]),s._v("为"),t("code",[s._v("s2>=goal")]),s._v("的零界点，所以"),t("code",[s._v("l2到l1")]),s._v("之间的数都是满足条件的，即为"),t("code",[s._v("l2-l1")])]),s._v(" "),t("h2",{attrs:{id:"题解2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题解2"}},[s._v("#")]),s._v(" 题解2")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("numSubarraysWithSum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" goal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" len"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("res"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" l1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("l2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("len"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        s1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        s2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v("r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("goal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" s1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("l1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v("r "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" s2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v("goal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" s2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-=")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("l2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" l2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("l1\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" res\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);