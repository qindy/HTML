# web/ — 隐私政策 & 技术支援页面

一份文件，两个投放位置：**iOS App 内**（WKWebView 从 bundle 读）和 **GitHub Pages**（原样托管）。两边跑的是同一份 HTML，不会出现线上版和 App 内版文案不一致。

## 文件

| 文件 | 作用 |
|---|---|
| `index.html` | 落地页，两个入口。只在网页上有用，App 内不加载。 |
| `privacy.html` | 隐私政策外壳。**只有布局，没有文案。** |
| `support.html` | 技术支持 / FAQ 外壳。**只有布局，没有文案。** |
| `privacy-data.js` | 隐私政策的全部文案 + 变量。**改内容来这里。** |
| `support-data.js` | FAQ 的全部文案 + 变量。**改内容来这里。** |
| `doc.js` | 两个页面共用的渲染引擎（语言选择、占位符、卡片、列表）。 |
| `style.css` | 共用样式，配色对齐 `Learnity/Theme/AppColors.swift`。 |

> 改文案不需要碰 `.html`。除非要改「某一段的排版结构」（比如把卡片改成折叠块），否则 `.html` 不用动。

## 维护：改一处，八种语言一起变

两份 data 文件顶部都有一个 `*_INFO` 对象，几乎所有「会随时间变化的事实」都集中在那里：

```js
window.POLICY_INFO = {
  email: "qq595187561@gmail.com",   // 联系方式
  effectiveDate: "2026-11-12",      // 生效日期
  updatedDate: "2026-11-12",        // 最后更新（每次实质修改都要改）
  version: "1.0",
  minAge: 13,                       // 儿童条款里出现的最小年龄
  appName: { ... },
  neverDo: ["ads", "analytics", ...] // 「我们绝不收集」清单的开关
};
```

正文里用占位符引用它们：`{appName}` `{email}` `{minAge}` `{platform}` `{responseTime}` `{updatedDate}` `{effectiveDate}` `{year}`。

> `{developer}`（「数据控制者：Learnity 开发者」那一句）已按需求删除。真要恢复署名时，在 `POLICY_INFO` 里加回 `developer: { en: "...", ... }`（`doc.js` 的占位符解析还在），再在 Contact 段补一行即可。

**所以换邮箱只需要改 `email` 那一行，八个语言的正文会一起跟着变。**

### 「我们绝不收集」清单

清单不是手写在正文里的，而是由 `neverDo` 数组 + 每个语言的 `practices` 映射渲染出来的。

哪天真的接了广告或分析 SDK：

1. 从 `neverDo` 里删掉 `"ads"` / `"analytics"`（所有语言的那一行就一起消失）；
2. 改写对应的正文段落；
3. 更新 `updatedDate`。

**不要只删一处。** 留着「不收集广告标识符」而实际接了广告，是 App Store 审核和 GDPR 都会抓的硬伤。

### 结构约束

每种语言的 `sections` 数组**长度和顺序必须一致**（渲染器按顺序走）。`support-data.js` 的 `faq` 数组同理。加一段就八种语言一起加。

**FAQ 前两条是固定的**：①「为什么不能卸载 App」②「为什么不能付费」。这两条对应强化封锁（`denyAppRemoval` / `denyInAppPurchases`）引发的最高频投诉，是「被当成病毒」的第一现场，不要往后挪。第一条默认展开——打开页面第一眼就该看到「这不是病毒」。

`privacy-data.js` 末尾有 `/* @@TEXT-END@@ */` 标记，是插入新语言块的位置。

## 验证改动的正确性

```bash
# 语法 + 八语言结构一致性（12 段 / 11 条 FAQ / practices 键是否对齐）
node -e '
global.window={};
eval(require("fs").readFileSync("web/privacy-data.js","utf8"));
const T=window.POLICY_TEXT;
for (const l of window.POLICY_LANGS) console.log(l, "sections", T[l].sections.length);
'
```

在仓库根目录跑：

```bash
node -e 'global.window={};eval(require("fs").readFileSync("web/support-data.js","utf8"));const T=window.SUPPORT_TEXT;for(const l of window.SUPPORT_LANGS)console.log(l,"faq",T[l].faq.length)'
```

## 发布到 GitHub Pages

工作流已经写好在 `.github/workflows/pages.yml`，它会把这个 `web/` 目录直接作为站点根发布。

第一次需要手动开一次：

1. 推代码到 GitHub；
2. 仓库 **Settings → Pages → Source** 选 **GitHub Actions**；
3. 手动跑一次 workflow（或再推一次 `web/` 里的改动）。

发布后的地址：

```
https://<用户名>.github.io/<仓库名>/           ← index.html
https://<用户名>.github.io/<仓库名>/privacy.html
https://<用户名>.github.io/<仓库名>/support.html
```

App Store Connect 里填的隐私政策 URL 就是 `.../privacy.html`。

> 不想用 Actions 的话，也可以把 `web/` 里的文件复制到 `gh-pages` 分支根目录，或者把 Pages 的来源改成「分支 /docs」——但那条路会把 `docs/` 里的中文开发报告一起公开，不建议。

## 语言解析顺序

`doc.js` 按这个顺序挑语言，第一个命中的赢：

1. `?lang=xx` —— 链接里写死，给 App Store 元数据或多语言分享用
2. `window.__appLang` —— **App 内由 WKWebView 在 document start 注入**，所以页面语言自动跟随 App 语言
3. `localStorage` —— 浏览器里上次选的
4. `navigator.languages` —— 系统偏好（含 `zh-CN`/`zh-TW` 到 `zh-Hans`/`zh-Hant` 的映射）
5. `en`

页面右上角的下拉框可以随时覆盖以上全部，选择存在 `localStorage`。

## App 内怎么加载

`Learnity/Views/WebDocView.swift`：

- Xcode 里 `web` 是**文件夹引用**（folder reference，蓝色图标），整包复制进 bundle → `Learnity.app/web/`；
- 加载用 `loadFileURL(_:allowingReadAccessTo:)`，读权限给到 `web/` 目录本身，否则 `style.css` / `doc.js` 会被挡；
- `mailto:` 和外部链接交给系统打开，不会困在 WKWebView 里；
- 页面内 `privacy.html ↔ support.html` 的互链被拦截，改由 SwiftUI 换内容，导航栏标题跟着变。

## 加一种语言

1. `POLICY_LANGS` / `SUPPORT_LANGS` 加代码；
2. `*_NATIVE_NAMES` 加显示名；
3. `POLICY_TEXT` / `SUPPORT_TEXT` 里加一个完整块（复制 `en` 的骨架，逐段替换）；
4. `SUPPORT_INFO.responseTime` 加上这一语言；
5. 跑上面的校验脚本确认段数一致；
6. 如果 App 本身也要支持这门语言，还得在 `Learnity.xcodeproj` 的 `knownRegions` 和 `Localizable.xcstrings` 里同步加上。
