/* ==========================================================================
   support-data.js — Help & FAQ content
   --------------------------------------------------------------------------
   EVERYTHING A MAINTAINER IS LIKELY TO CHANGE IS IN `SUPPORT_INFO` BELOW.
   The prose lives in `SUPPORT_TEXT`, one block per language.

     · Facts (email, dates, version, platform, response time) go in INFO and
       reach every language through {placeholders}.
     · Wording goes in TEXT. The FAQ array must have the same length and the
       same order in every language — the renderer walks it by index.
     · Answers should describe what the build actually does. If a fix ships,
       update the answer instead of leaving a dead workaround.
   ========================================================================== */

window.SUPPORT_INFO = {

  /* ---- contact ------------------------------------------------------- */

  email: "qq595187561@gmail.com",


  /* ---- document metadata --------------------------------------------- */

  updatedDate: "2026-11-12",
  version: "1.0",

  /// Shown in the "before you write" card.
  platform: "iOS 17",
  responseTime: {
    en: "usually within two working days",
    "zh-Hant": "通常在兩個工作日內",
    "zh-Hans": "通常在两个工作日内",
    ja: "通常 2 営業日以内",
    de: "in der Regel innerhalb von zwei Werktagen",
    es: "normalerweise en dos días laborables",
    fr: "généralement sous deux jours ouvrés",
    nl: "meestal binnen twee werkdagen"
  },

  /* ---- product name --------------------------------------------------- */

  appName: {
    en: "Last Bell",
    "zh-Hant": "放學後",
    "zh-Hans": "放学后",
    ja: "放課後",
    de: "Last Bell",
    es: "Last Bell",
    fr: "Last Bell",
    nl: "Last Bell"
  }
};

window.SUPPORT_LANGS = ["en", "zh-Hant", "zh-Hans", "ja", "de", "es", "fr", "nl"];

window.SUPPORT_NATIVE_NAMES = {
  en: "English",
  "zh-Hant": "繁體中文",
  "zh-Hans": "简体中文",
  ja: "日本語",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  nl: "Nederlands"
};

window.SUPPORT_TEXT = {

/* ======================================================================
   ENGLISH
   ====================================================================== */
"en": {
  title: "Support",
  lede: "Something not working the way you expected? Start here. Most questions have a short answer, and the ones that do not are worth an email.",
  chipUpdated: "Updated",
  chipReply: "Replies {responseTime}",

  contactH: "Email us",
  contactP: "Write to {email} from the address you use with the App Store, and describe what happened. {appName} has no servers, so email is the only support channel — and it is read by the person who writes the app.",
  contactBtn: "Compose an email",

  faqH: "Common questions",

  faq: [
    {
      q: "Why can’t I uninstall the app?",
      a: "Because a plan with Strict blocking is running. Strict blocking asks iOS to forbid removing any app — {appName} included — so long-pressing the icon shows no “Delete App”, and Settings → General → iPhone Storage will not remove it either. That is exactly what the feature is for: a moment of weakness should not be able to end the block. It is not malware, and the app never installs anything on its own.\nTo uninstall, switch Strict blocking off first: open {appName}, scroll to the bottom of the home screen and tap “Stop and turn off all modes”, then confirm. The normal delete gesture works again right after that. If a schedule would reinstate Strict blocking later, turn that plan off as well."
    },
    {
      q: "Why can’t I complete a purchase?",
      a: "Strict blocking also switches off in-app purchases at the system level. While it is active the App Store cannot charge you, so the upgrade screen fails or the button appears to do nothing — no money is taken.\nTurn Strict blocking off first: bottom of the home screen → “Stop and turn off all modes”. Buy the upgrade, then switch the plan back on. The purchase is tied to your Apple Account, so nothing is lost either way."
    },
    {
      q: "A blocked app still opens",
      a: "First check that {appName} still has Screen Time permission: iOS Settings → Screen Time → Apps with access. The permission can be revoked silently after a restart or a system update.\nBlocking is built on Apple’s Screen Time frameworks, which are a self-control aid rather than a tamper-proof lock. Uninstalling and reinstalling the app, changing device settings, or certain low-power states can let a restriction slip. If a specific app always gets through while others are blocked, email us — that is usually a bug worth fixing."
    },
    {
      q: "An app is missing from the block list",
      a: "The list is provided by iOS, not by {appName}. iOS hides some system apps and apps it considers private, and an app must be installed to appear at all. If the app you want is installed but absent, tell us its name and we will check whether it is a platform limit."
    },
    {
      q: "I forgot my app-lock passcode",
      a: "Use your security questions: open the app, enter a wrong passcode, then follow the recovery link. If you no longer know the answers either, delete and reinstall {appName} — that clears the passcode along with all other data.\nThe passcode is deliberately stored only on this device. There is no reset link we could send you, because we cannot read it."
    },
    {
      q: "My schedules disappeared after reinstalling",
      a: "Schedules, blocked apps and screen-time records live only in the app’s local storage. They are not synced to iCloud, so deleting the app removes them and reinstalling starts empty. This is intentional: the app holds no copy that could be exposed."
    },
    {
      q: "Do I have to pay again on a new device?",
      a: "No. Sign in with the same Apple Account you bought it with, open the upgrade screen and tap “Restore purchases”. {appName} reads your entitlement from the App Store, not from a login. Whether a family member can share the purchase depends on your App Store Family Sharing settings."
    },
    {
      q: "Screen-time statistics are empty",
      a: "Statistics come from Apple’s Screen Time data, so they need that permission to be granted and at least some usage to have been recorded since installation. iOS also reports in batches, so the first figures can take a few hours to appear. Opening the app once a day keeps it current."
    },
    {
      q: "The widget has not refreshed",
      a: "iOS decides when widgets reload; an app cannot force it. Opening {appName} once usually triggers a refresh. If the widget stays stale for a whole day, send us your iOS version."
    },
    {
      q: "Does any of my data leave the phone?",
      a: "No. {appName} contains no networking code: no analytics, no crash reporting, no third-party SDK. See the privacy policy for the full list of what is stored locally."
    },
    {
      q: "What version of iOS do I need?",
      a: "{appName} requires {platform} or later. Some blocking features rely on APIs that Apple only exposes from that version onward, so older systems are not supported."
    }
  ],

  tipsH: "Before you write",
  tipsP: "These four details usually turn a round trip into a single reply:",
  tips: [
    "The version shown in Settings → About",
    "Your iPhone model (for example iPhone 14 Pro)",
    "The iOS version from Settings → General → About",
    "What you did, what you expected, and what happened instead"
  ],

  policyH: "Privacy",
  policyP: "{appName} runs entirely on your device. No account, no server, no analytics — nothing you create ever leaves the phone.",
  policyLink: "Read the privacy policy",

  footerNote: "Support comes from one independent developer. {appName} is not affiliated with Apple."
},

/* ======================================================================
   繁體中文
   ====================================================================== */
"zh-Hant": {
  title: "技術支援",
  lede: "有東西跟你預期的不一樣？先從這裡找。大部分問題都有簡短答案，真的找不到的，就寫封信來。",
  chipUpdated: "最後更新",
  chipReply: "回覆時間：{responseTime}",

  contactH: "寫信給我們",
  contactP: "請用你綁定 App Store 的信箱寫到 {email}，並說明發生了什麼事。{appName}沒有伺服器，電子郵件是唯一的支援管道——而且讀信的就是寫這個 App 的人。",
  contactBtn: "開啟郵件",

  faqH: "常見問題",

  faq: [
    {
      q: "為什麼不能卸載 App？",
      a: "因為有計劃開著「強化封鎖」。強化封鎖會要 iOS 禁止移除任何 App——包括{appName}自己——所以長按圖示看不到「刪除 App」，到「設定 → 一般 → iPhone 儲存空間」也刪不掉。這正是這個功能的目的：不讓一時手軟破壞封鎖。它不是病毒，也不會自己安裝任何東西。\n要卸載，請先關掉強化封鎖：打開{appName}，滑到首頁最底部點「停止並關閉所有模式」並確認。執行完之後，平常的刪除方式就恢復了。如果有排程會讓強化封鎖再次生效，記得把那個計劃也關掉。"
    },
    {
      q: "為什麼不能付費？",
      a: "強化封鎖同時會在系統層級關閉 App 內購買。它開著的時候 App Store 無法扣款，所以升級頁會失敗、或按了好像沒反應——不會扣到你的錢。\n先關掉強化封鎖：首頁最底部 →「停止並關閉所有模式」。買完再把計劃重新打開。購買綁在你的 Apple 帳號上，兩邊都不會遺失。"
    },
    {
      q: "封鎖的 App 還是打得開",
      a: "先確認{appName}還持有「螢幕使用時間」權限：iOS 設定 → 螢幕使用時間 → 有存取權的 App。重開機或系統更新後，這個權限有可能被默默收回。\n封鎖建立在 Apple 的螢幕使用時間框架上，它是一種自我約束的輔助，而不是防篡改的鎖。刪除後重裝、變更裝置設定，或某些低耗電狀態，都可能讓限制失效。如果是「某一個 App 永遠擋不住、其他都正常」，請寫信告訴我們——那通常是值得修的 bug。"
    },
    {
      q: "封鎖清單裡找不到某個 App",
      a: "這份清單是 iOS 給的，不是{appName}自己列的。iOS 會隱藏部分系統 App 與它認為涉及隱私的 App，而且 App 必須已安裝才會出現。如果你要的 App 明明裝了卻不在清單裡，把名字告訴我們，我們來確認是不是平台限制。"
    },
    {
      q: "我忘記應用鎖密碼了",
      a: "用密保問題找回：打開 App，先輸入一次錯誤密碼，再點下方的找回入口。如果密保答案也忘了，只能刪除並重裝{appName}，密碼會連同其他資料一起清空。\n密碼刻意只存在這台裝置上。我們沒有辦法寄重設連結給你，因為我們讀不到它。"
    },
    {
      q: "重裝之後，我設定的排程不見了",
      a: "排程、封鎖清單與螢幕使用記錄只存在 App 的本機儲存空間，不會同步到 iCloud。所以刪掉 App 就一併刪掉，重裝後是空的。這是刻意的設計：不留任何可能外流的副本。"
    },
    {
      q: "換了新裝置，完整版要再買一次嗎？",
      a: "不用。用當初購買的同一個 Apple 帳號登入，打開升級頁面點「恢復購買」即可。{appName}是向 App Store 讀取你的權益，不是靠登入。家人能否共用這筆購買，取決於你的 App Store「家人共享」設定。"
    },
    {
      q: "螢幕使用時間統計是空的",
      a: "統計來自 Apple 的螢幕使用時間資料，因此需要先授予權限，而且安裝之後必須累積一些使用量。iOS 也是分批上報的，第一批數字可能要幾小時後才出現。每天開一次 App 可以讓資料保持最新。"
    },
    {
      q: "小工具沒有更新",
      a: "小工具何時重新載入由 iOS 決定，App 無法強制。開一次{appName}通常就會觸發更新。如果整整一天都沒變，請把 iOS 版本告訴我們。"
    },
    {
      q: "我的資料會離開手機嗎？",
      a: "不會。{appName}沒有任何網路程式碼：沒有分析、沒有當機回報、沒有第三方 SDK。完整清單請看隱私政策。"
    },
    {
      q: "需要哪個版本的 iOS？",
      a: "{appName}需要 {platform} 或更新版本。部分封鎖功能依賴 Apple 從該版本才開放的 API，較舊的系統無法支援。"
    }
  ],

  tipsH: "寫信前請先準備",
  tipsP: "這四項資訊通常能把來回詢問變成一次解決：",
  tips: [
    "設定 → 關於 裡顯示的版本號",
    "你的 iPhone 機型（例如 iPhone 14 Pro）",
    "設定 → 一般 → 關於 裡的 iOS 版本",
    "你做了什麼、預期會怎樣、實際發生了什麼"
  ],

  policyH: "隱私",
  policyP: "{appName}完全在你的裝置上運作。沒有帳號、沒有伺服器、沒有數據分析——你建立的任何內容都不會離開這支手機。",
  policyLink: "閱讀隱私政策",

  footerNote: "技術支援由一位獨立開發者提供。{appName}與 Apple 沒有隸屬關係。"
},

/* ======================================================================
   简体中文
   ====================================================================== */
"zh-Hans": {
  title: "技术支持",
  lede: "有东西跟你预期的不一样？先从这里找。大部分问题都有简短答案，实在找不到的，就写封信来。",
  chipUpdated: "最后更新",
  chipReply: "回复时间：{responseTime}",

  contactH: "写信给我",
  contactP: "请用你绑定 App Store 的邮箱写到 {email}，并说明发生了什么。{appName}没有服务器，电子邮件是唯一的技术支持渠道——而且读信的就是写这个 App 的人。",
  contactBtn: "打开邮件",

  faqH: "常见问题",

  faq: [
    {
      q: "为什么不能卸载 App？",
      a: "因为有计划开着「强化封锁」。强化封锁会让 iOS 禁止移除任何 App——包括{appName}自己——所以长按图标看不到「删除 App」，到「设置 → 通用 → iPhone 储存空间」也删不掉。这正是这个功能的目的：不让一时手软破坏封锁。它不是病毒，也不会自己安装任何东西。\n要卸载，请先关掉强化封锁：打开{appName}，滑到首页最底部点「停止并关闭所有模式」并确认。执行完之后，平常的删除方式就恢复了。如果有排程会让强化封锁再次生效，记得把那个计划也关掉。"
    },
    {
      q: "为什么不能付费？",
      a: "强化封锁同时会在系统层级关闭 App 内购买。它开着的时候 App Store 无法扣款，所以升级页会失败、或按了好像没反应——不会扣到你的钱。\n先关掉强化封锁：首页最底部 →「停止并关闭所有模式」。买完再把计划重新打开。购买绑在你的 Apple 账户上，两边都不会丢失。"
    },
    {
      q: "封锁的 App 还是打得开",
      a: "先确认{appName}还持有「屏幕使用时间」权限：iOS 设置 → 屏幕使用时间 → 有访问权限的 App。重启或系统更新后，这个权限有可能被悄悄收回。\n封锁建立在 Apple 的屏幕使用时间框架上，它是一种自我约束的辅助，而不是防篡改的锁。删除后重装、更改设备设置，或某些低电量状态，都可能让限制失效。如果是「某一个 App 永远挡不住、其他都正常」，请写信告诉我——那通常是值得修的缺陷。"
    },
    {
      q: "封锁列表里找不到某个 App",
      a: "这份列表是 iOS 给的，不是{appName}自己列的。iOS 会隐藏部分系统 App 与它认为涉及隐私的 App，而且 App 必须已安装才会出现。如果你要的 App 明明装了却不在列表里，把名字告诉我，我来确认是不是平台限制。"
    },
    {
      q: "我忘记应用锁密码了",
      a: "用密保问题找回：打开 App，先输入一次错误密码，再点下方的找回入口。如果密保答案也忘了，只能删除并重装{appName}，密码会连同其他数据一起清空。\n密码刻意只存在这台设备上。我没有办法寄重置链接给你，因为我读不到它。"
    },
    {
      q: "重装之后，我设置的排程不见了",
      a: "排程、封锁列表与屏幕使用记录只存在 App 的本地存储空间，不会同步到 iCloud。所以删掉 App 就一并删掉，重装后是空的。这是刻意的设计：不留任何可能外流的副本。"
    },
    {
      q: "换了新设备，完整版要再买一次吗？",
      a: "不用。用当初购买的那个 Apple 账户登录，打开升级页面点「恢复购买」即可。{appName}是向 App Store 读取你的权益，不是靠登录。家人能否共享这笔购买，取决于你的 App Store「家人共享」设置。"
    },
    {
      q: "屏幕使用时间统计是空的",
      a: "统计来自 Apple 的屏幕使用时间数据，因此需要先授予权限，而且安装之后必须积累一些使用量。iOS 也是分批上报的，第一批数字可能要几小时后才出现。每天开一次 App 可以让数据保持最新。"
    },
    {
      q: "小组件没有更新",
      a: "小组件何时重新加载由 iOS 决定，App 无法强制。开一次{appName}通常就会触发更新。如果整整一天都没变，请把 iOS 版本告诉我。"
    },
    {
      q: "我的数据会离开手机吗？",
      a: "不会。{appName}没有任何网络代码：没有分析、没有崩溃回传、没有第三方 SDK。完整清单请看隐私政策。"
    },
    {
      q: "需要哪个版本的 iOS？",
      a: "{appName}需要 {platform} 或更新版本。部分封锁功能依赖 Apple 从该版本才开放的 API，较旧的系统无法支持。"
    }
  ],

  tipsH: "写信前请先准备",
  tipsP: "这四项信息通常能把来回询问变成一次解决：",
  tips: [
    "设置 → 关于 里显示的版本号",
    "你的 iPhone 机型（例如 iPhone 14 Pro）",
    "设置 → 通用 → 关于 里的 iOS 版本",
    "你做了什么、预期会怎样、实际发生了什么"
  ],

  policyH: "隐私",
  policyP: "{appName}完全在你的设备上运行。没有账号、没有服务器、没有数据分析——你创建的任何内容都不会离开这部手机。",
  policyLink: "阅读隐私政策",

  footerNote: "技术支持由一位独立开发者提供。{appName}与 Apple 没有隶属关系。"
},

/* ======================================================================
   日本語
   ====================================================================== */
"ja": {
  title: "サポート",
  lede: "思ったとおりに動かないところがありますか。まずはここをご覧ください。多くの疑問には短い答えがあり、それでも解決しないものはメールでお尋ねください。",
  chipUpdated: "最終更新",
  chipReply: "返信 {responseTime}",

  contactH: "メールで問い合わせる",
  contactP: "App Store でお使いのメールアドレスから {email} 宛てに、起きたことを書いてお送りください。{appName}はサーバーを持たないため、メールが唯一のサポート窓口です。読むのはアプリを書いている本人です。",
  contactBtn: "メールを作成",

  faqH: "よくある質問",

  faq: [
    {
      q: "アプリを削除できないのはなぜですか",
      a: "「強化ブロック」を有効にしたプランが動作しているためです。強化ブロックは iOS に対し、すべてのアプリの削除を禁止するよう指示します（{appName}自身も含まれます）。そのため、アイコンを長押ししても「App を削除」は現れず、「設定」→「一般」→「iPhone ストレージ」からも削除できません。これはこの機能の目的そのもので、つい出来心でブロックを解除してしまわないようにするためのものです。ウイルスではなく、アプリが何かを勝手にインストールすることもありません。\n削除するには、まず強化ブロックをオフにしてください。{appName}を開き、ホーム画面の一番下までスクロールして「停止してすべてのモードをオフ」をタップし、確認します。実行すれば、通常どおり削除できるようになります。スケジュールで強化ブロックが再び有効になる場合は、そのプランもオフにしてください。"
    },
    {
      q: "購入が完了しないのはなぜですか",
      a: "強化ブロックは、App 内課金もシステムレベルで無効にします。有効な間は App Store が決済できないため、アップグレード画面は失敗するか、ボタンを押しても反応がないように見えます。料金は請求されません。\nまず強化ブロックをオフにしてください：ホーム画面の一番下 →「停止してすべてのモードをオフ」。購入したら、プランを再びオンに戻します。購入は Apple アカウントに紐づくので、どちらの順序でも失われるものはありません。"
    },
    {
      q: "ブロックしたアプリが起動できてしまう",
      a: "まず{appName}に「スクリーンタイム」の権限が残っているか確認してください：iOS の「設定」→「スクリーンタイム」→「アクセスを許可した App」。再起動やシステムアップデートのあとに、権限が黙って外れていることがあります。\nブロックは Apple のスクリーンタイムの仕組みに依存しており、自己管理の補助であって、改ざん防止の鍵ではありません。アプリの削除と再インストール、端末設定の変更、低電力状態などで制限が外れることがあります。「特定のアプリだけは必ず通ってしまう」場合はご連絡ください。多くの場合、修正すべき不具合です。"
    },
    {
      q: "ブロック一覧に目的のアプリが出てこない",
      a: "この一覧は iOS が提供するもので、{appName}が作っているものではありません。iOS は一部のシステムアプリやプライバシーに関わると判断したアプリを表示しません。また、インストールされていないアプリは表示されません。インストール済みなのに出てこない場合は、アプリ名をお知らせください。プラットフォーム側の制限かどうかを確認します。"
    },
    {
      q: "ロック解除コードを忘れました",
      a: "秘密の質問で解除してください：アプリを開き、まず誤ったコードを一度入力し、その下の復旧リンクをたどります。答えも忘れてしまった場合は、{appName}を削除して再インストールするしかありません。コードは他のデータと一緒に消えます。\nコードはこの端末にだけ保存する設計です。開発者が読めないため、リセット用のリンクをお送りすることはできません。"
    },
    {
      q: "再インストールしたらスケジュールが消えました",
      a: "スケジュール、ブロック一覧、利用記録はアプリ内のローカルストレージにのみ存在し、iCloud とは同期しません。そのためアプリを削除すると一緒に消え、再インストール直後は空の状態です。これは意図した設計で、外部に漏れうる控えを残さないためです。"
    },
    {
      q: "機種変更したら買い直しが必要ですか",
      a: "いいえ。購入時と同じ Apple アカウントでサインインし、アップグレード画面で「購入を復元」をタップしてください。{appName}はログインではなく App Store から購入情報を読み取ります。家族と共有できるかどうかは、App Store の「ファミリー共有」の設定によります。"
    },
    {
      q: "スクリーンタイムの統計が空です",
      a: "統計は Apple のスクリーンタイム データに基づくため、権限の許可と、インストール以降の利用実績が必要です。iOS はまとめて報告するため、最初の数字が出るまで数時間かかることがあります。1 日 1 回アプリを開くと最新の状態が保たれます。"
    },
    {
      q: "ウィジェットが更新されません",
      a: "ウィジェットの再読み込みのタイミングは iOS が決めており、アプリから強制することはできません。{appName}を一度開くと通常は更新されます。丸一日変わらない場合は、iOS のバージョンをお知らせください。"
    },
    {
      q: "データが端末の外に出ることはありますか",
      a: "ありません。{appName}には通信を行うコードが一切なく、解析もクラッシュ送信もサードパーティ SDK もありません。端末内に保存される項目の一覧はプライバシーポリシーをご覧ください。"
    },
    {
      q: "必要な iOS のバージョンは",
      a: "{appName}には {platform} 以降が必要です。一部のブロック機能は、そのバージョンから Apple が公開した API に依存しているため、古い OS では動作しません。"
    }
  ],

  tipsH: "お問い合わせの前に",
  tipsP: "次の 4 点があると、やり取りが一度で済みます。",
  tips: [
    "「設定」→「情報」に表示されるバージョン",
    "iPhone の機種（例：iPhone 14 Pro）",
    "「設定」→「一般」→「情報」の iOS バージョン",
    "行った操作、期待した動作、実際に起きたこと"
  ],

  policyH: "プライバシー",
  policyP: "{appName}はすべて端末上で動作します。アカウントもサーバーも解析もなく、作成した内容が端末の外に出ることはありません。",
  policyLink: "プライバシーポリシーを読む",

  footerNote: "サポートは個人開発者が提供しています。{appName}は Apple と提携していません。"
},

/* ======================================================================
   DEUTSCH
   ====================================================================== */
"de": {
  title: "Support",
  lede: "Etwas funktioniert nicht wie erwartet? Fang hier an. Die meisten Fragen haben eine kurze Antwort — und die, die keine haben, sind eine E-Mail wert.",
  chipUpdated: "Aktualisiert",
  chipReply: "Antwort {responseTime}",

  contactH: "Schreib uns",
  contactP: "Schreib von der Adresse, die du im App Store verwendest, an {email} und beschreibe, was passiert ist. {appName} hat keine Server — E-Mail ist deshalb der einzige Supportweg, und gelesen wird sie von der Person, die die App schreibt.",
  contactBtn: "E-Mail verfassen",

  faqH: "Häufige Fragen",

  faq: [
    {
      q: "Warum lässt sich die App nicht deinstallieren?",
      a: "Weil ein Plan mit „Strenge Sperre“ läuft. Die strenge Sperre weist iOS an, das Entfernen jeder App zu verbieten — {appName} eingeschlossen. Deshalb fehlt beim langen Drücken auf das Symbol „App löschen“, und auch Einstellungen → Allgemein → iPhone-Speicher entfernt sie nicht. Genau das ist der Zweck: Ein kurzer Moment der Schwäche soll die Sperre nicht beenden können. Es ist keine Malware, und die App installiert nie von selbst etwas.\nZum Deinstallieren zuerst die strenge Sperre ausschalten: {appName} öffnen, auf dem Startbildschirm ganz nach unten scrollen, „Stoppen und alle Modi ausschalten“ antippen und bestätigen. Danach funktioniert das gewohnte Löschen wieder. Wird die strenge Sperre später durch einen Zeitplan erneut aktiv, schalte auch diesen Plan aus."
    },
    {
      q: "Warum kann ich nicht bezahlen?",
      a: "Die strenge Sperre schaltet auch In-App-Käufe auf Systemebene ab. Solange sie aktiv ist, kann der App Store nicht abbuchen — der Upgrade-Bildschirm schlägt fehl oder der Knopf scheint nichts zu tun. Es wird kein Geld abgebucht.\nSchalte zuerst die strenge Sperre aus: Startbildschirm ganz unten → „Stoppen und alle Modi ausschalten“. Kaufe dann und schalte den Plan danach wieder ein. Der Kauf hängt an deinem Apple Account, es geht also nichts verloren."
    },
    {
      q: "Eine gesperrte App lässt sich trotzdem öffnen",
      a: "Prüfe zuerst, ob {appName} noch die Bildschirmzeit-Berechtigung hat: iOS-Einstellungen → Bildschirmzeit → Apps mit Zugriff. Nach einem Neustart oder Systemupdate kann sie stillschweigend entzogen werden.\nDie Sperre baut auf Apples Bildschirmzeit-Frameworks auf und ist eine Selbsthilfe, kein manipulationssicheres Schloss. Deinstallieren und Neuinstallieren, geänderte Geräteeinstellungen oder bestimmte Energiesparzustände können eine Beschränkung aushebeln. Wenn genau eine App immer durchkommt und andere nicht, schreib uns — das ist meistens ein Fehler, der sich lohnen würde."
    },
    {
      q: "Eine App fehlt in der Sperrliste",
      a: "Die Liste kommt von iOS, nicht von {appName}. iOS blendet manche System-Apps und Apps aus, die es als privat einstuft, und eine App muss installiert sein, um überhaupt zu erscheinen. Wenn deine App installiert ist, aber fehlt, nenn uns den Namen — wir prüfen, ob es eine Grenze der Plattform ist."
    },
    {
      q: "Ich habe meinen Sperrcode vergessen",
      a: "Nutze deine Sicherheitsfragen: App öffnen, einmal einen falschen Code eingeben und dem Wiederherstellungs-Link folgen. Wenn du auch die Antworten nicht mehr weißt, bleibt nur Löschen und Neuinstallieren von {appName} — dabei werden Code und alle anderen Daten entfernt.\nDer Code liegt bewusst nur auf diesem Gerät. Wir können dir keinen Link zum Zurücksetzen schicken, weil wir ihn nicht lesen können."
    },
    {
      q: "Nach der Neuinstallation sind meine Pläne weg",
      a: "Pläne, gesperrte Apps und Nutzungsaufzeichnungen liegen ausschließlich im lokalen Speicher der App. Sie werden nicht mit iCloud synchronisiert — Löschen entfernt sie also, und nach der Neuinstallation ist alles leer. Das ist Absicht: Es soll keine Kopie geben, die abfließen könnte."
    },
    {
      q: "Muss ich auf einem neuen Gerät erneut bezahlen?",
      a: "Nein. Melde dich mit demselben Apple Account an, mit dem du gekauft hast, öffne die Upgrade-Seite und tippe auf „Käufe wiederherstellen“. {appName} liest deinen Anspruch aus dem App Store, nicht aus einer Anmeldung. Ob Familienmitglieder den Kauf mitnutzen können, hängt von deinen Familienfreigabe-Einstellungen ab."
    },
    {
      q: "Die Bildschirmzeit-Statistik ist leer",
      a: "Die Statistik stammt aus Apples Bildschirmzeit-Daten. Dafür muss die Berechtigung erteilt sein und seit der Installation etwas Nutzung angefallen sein. iOS meldet außerdem in Stapeln — die ersten Zahlen können ein paar Stunden brauchen. Wenn du die App einmal am Tag öffnest, bleibt sie aktuell."
    },
    {
      q: "Das Widget aktualisiert sich nicht",
      a: "Wann Widgets neu laden, entscheidet iOS; eine App kann das nicht erzwingen. Einmal {appName} öffnen löst meist eine Aktualisierung aus. Bleibt das Widget einen ganzen Tag unverändert, schick uns deine iOS-Version."
    },
    {
      q: "Verlassen meine Daten das Telefon?",
      a: "Nein. {appName} enthält keinen Netzwerkcode: keine Analyse, keine Absturzberichte, keine Fremd-SDKs. Die vollständige Liste der lokal gespeicherten Daten steht in der Datenschutzerklärung."
    },
    {
      q: "Welche iOS-Version brauche ich?",
      a: "{appName} setzt {platform} oder neuer voraus. Einige Sperrfunktionen hängen von APIs ab, die Apple erst ab dieser Version bereitstellt — ältere Systeme werden nicht unterstützt."
    }
  ],

  tipsH: "Bevor du schreibst",
  tipsP: "Diese vier Angaben machen aus zwei Mails meist eine:",
  tips: [
    "Die Version aus Einstellungen → Info",
    "Dein iPhone-Modell (zum Beispiel iPhone 14 Pro)",
    "Die iOS-Version aus Einstellungen → Allgemein → Info",
    "Was du getan hast, was du erwartet hast und was stattdessen passiert ist"
  ],

  policyH: "Datenschutz",
  policyP: "{appName} läuft vollständig auf deinem Gerät. Kein Konto, kein Server, keine Analyse — nichts, was du anlegst, verlässt das Telefon.",
  policyLink: "Datenschutzerklärung lesen",

  footerNote: "Der Support kommt von einem einzelnen unabhängigen Entwickler. {appName} steht in keiner Verbindung zu Apple."
},

/* ======================================================================
   ESPAÑOL
   ====================================================================== */
"es": {
  title: "Soporte",
  lede: "¿Algo no funciona como esperabas? Empieza por aquí. Casi todo tiene una respuesta corta, y lo que no la tiene merece un correo.",
  chipUpdated: "Actualizado",
  chipReply: "Respuesta {responseTime}",

  contactH: "Escríbenos",
  contactP: "Escribe desde la dirección que usas en el App Store a {email} y cuéntanos qué pasó. {appName} no tiene servidores, así que el correo es el único canal de soporte, y lo lee la persona que programa la app.",
  contactBtn: "Redactar un correo",

  faqH: "Preguntas frecuentes",

  faq: [
    {
      q: "¿Por qué no puedo desinstalar la app?",
      a: "Porque hay un plan con «Bloqueo estricto» activo. El bloqueo estricto pide a iOS que prohíba quitar cualquier app, incluida {appName}. Por eso, al mantener pulsado el icono no aparece «Eliminar app», y Ajustes → General → Almacenamiento del iPhone tampoco la elimina. Ese es justamente el objetivo: que un momento de debilidad no pueda acabar con el bloqueo. No es un virus y la app nunca instala nada por su cuenta.\nPara desinstalarla, desactiva antes el bloqueo estricto: abre {appName}, baja hasta el final de la pantalla de inicio y pulsa «Detener y desactivar todos los modos», luego confirma. En cuanto se ejecute, vuelve a funcionar el borrado habitual. Si un horario va a reactivar el bloqueo estricto más adelante, desactiva también ese plan."
    },
    {
      q: "¿Por qué no puedo pagar?",
      a: "El bloqueo estricto también desactiva las compras dentro de la app a nivel del sistema. Mientras está activo, el App Store no puede cobrar: la pantalla de mejora falla o el botón parece no hacer nada. No se te cobra nada.\nDesactiva primero el bloqueo estricto: final de la pantalla de inicio → «Detener y desactivar todos los modos». Haz la compra y vuelve a activar el plan. La compra está asociada a tu cuenta de Apple, así que no se pierde nada."
    },
    {
      q: "Una app bloqueada se sigue abriendo",
      a: "Primero comprueba que {appName} conserva el permiso de Tiempo de uso: Ajustes de iOS → Tiempo de uso → Apps con acceso. Puede retirarse en silencio tras reiniciar o tras una actualización del sistema.\nEl bloqueo se apoya en los frameworks de Tiempo de uso de Apple: es una ayuda para el autocontrol, no un candado a prueba de manipulación. Desinstalar y reinstalar la app, cambiar ajustes del dispositivo o ciertos estados de bajo consumo pueden dejar pasar una restricción. Si una app concreta siempre se cuela y las demás no, escríbenos: normalmente es un fallo que merece arreglarse."
    },
    {
      q: "Falta una app en la lista de bloqueo",
      a: "La lista la proporciona iOS, no {appName}. iOS oculta algunas apps del sistema y las que considera privadas, y una app debe estar instalada para aparecer. Si la tuya está instalada pero no sale, dinos su nombre y comprobaremos si es una limitación de la plataforma."
    },
    {
      q: "He olvidado mi código de bloqueo",
      a: "Usa tus preguntas de seguridad: abre la app, introduce un código incorrecto y sigue el enlace de recuperación. Si tampoco recuerdas las respuestas, borra y reinstala {appName}: se eliminará el código junto con el resto de los datos.\nEl código se guarda a propósito solo en este dispositivo. No podemos enviarte un enlace de restablecimiento porque no podemos leerlo."
    },
    {
      q: "Mis horarios desaparecieron al reinstalar",
      a: "Los horarios, las apps bloqueadas y los registros de uso viven solo en el almacenamiento local de la app. No se sincronizan con iCloud, así que borrar la app los elimina y la reinstalación empieza vacía. Es intencionado: no existe ninguna copia que pudiera exponerse."
    },
    {
      q: "¿Tengo que pagar otra vez en un dispositivo nuevo?",
      a: "No. Inicia sesión con la misma cuenta de Apple con la que compraste, abre la pantalla de mejora y pulsa «Restaurar compras». {appName} lee tu derecho del App Store, no de un inicio de sesión. Que un familiar pueda compartir la compra depende de tu configuración de En familia."
    },
    {
      q: "Las estadísticas de tiempo de uso están vacías",
      a: "Las estadísticas provienen de los datos de Tiempo de uso de Apple, así que hace falta conceder el permiso y que se haya registrado algo de uso desde la instalación. iOS además informa por lotes, por lo que las primeras cifras pueden tardar unas horas. Abrir la app una vez al día la mantiene al día."
    },
    {
      q: "El widget no se actualiza",
      a: "iOS decide cuándo se recargan los widgets; una app no puede forzarlo. Abrir {appName} una vez suele provocar una actualización. Si el widget sigue igual un día entero, envíanos tu versión de iOS."
    },
    {
      q: "¿Sale algún dato de mi teléfono?",
      a: "No. {appName} no contiene código de red: sin analítica, sin informes de fallos, sin SDK de terceros. La lista completa de lo que se guarda localmente está en la política de privacidad."
    },
    {
      q: "¿Qué versión de iOS necesito?",
      a: "{appName} requiere {platform} o posterior. Algunas funciones de bloqueo dependen de API que Apple solo expone desde esa versión, así que los sistemas anteriores no son compatibles."
    }
  ],

  tipsH: "Antes de escribir",
  tipsP: "Estos cuatro datos suelen convertir dos correos en uno:",
  tips: [
    "La versión que aparece en Ajustes → Información",
    "Tu modelo de iPhone (por ejemplo iPhone 14 Pro)",
    "La versión de iOS en Ajustes → General → Información",
    "Qué hiciste, qué esperabas y qué pasó en realidad"
  ],

  policyH: "Privacidad",
  policyP: "{appName} funciona por completo en tu dispositivo. Sin cuenta, sin servidor y sin analítica: nada de lo que creas sale del teléfono.",
  policyLink: "Leer la política de privacidad",

  footerNote: "El soporte lo ofrece un único desarrollador independiente. {appName} no está afiliado a Apple."
},

/* ======================================================================
   FRANÇAIS
   ====================================================================== */
"fr": {
  title: "Assistance",
  lede: "Quelque chose ne se comporte pas comme prévu ? Commencez ici. La plupart des questions ont une réponse courte, et celles qui n’en ont pas méritent un e-mail.",
  chipUpdated: "Mis à jour",
  chipReply: "Réponse {responseTime}",

  contactH: "Écrivez-nous",
  contactP: "Écrivez depuis l’adresse utilisée avec l’App Store à {email} en décrivant ce qui s’est passé. {appName} n’a pas de serveur : l’e-mail est donc le seul canal d’assistance, et il est lu par la personne qui écrit l’app.",
  contactBtn: "Rédiger un e-mail",

  faqH: "Questions fréquentes",

  faq: [
    {
      q: "Pourquoi ne puis-je pas désinstaller l’app ?",
      a: "Parce qu’un plan avec « Blocage strict » est actif. Le blocage strict demande à iOS d’interdire la suppression de toute app, {appName} comprise. C’est pourquoi un appui long sur l’icône n’affiche pas « Supprimer l’app », et Réglages → Général → Stockage iPhone ne la supprime pas non plus. C’est précisément le but : qu’un instant de faiblesse ne puisse pas mettre fin au blocage. Ce n’est pas un virus, et l’app n’installe jamais rien d’elle-même.\nPour désinstaller, désactivez d’abord le blocage strict : ouvrez {appName}, faites défiler jusqu’en bas de l’écran d’accueil et touchez « Arrêter et désactiver tous les modes », puis confirmez. La suppression habituelle refonctionne aussitôt. Si un horaire doit réactiver le blocage strict plus tard, désactivez aussi ce plan."
    },
    {
      q: "Pourquoi le paiement ne passe-t-il pas ?",
      a: "Le blocage strict désactive aussi les achats intégrés au niveau du système. Tant qu’il est actif, l’App Store ne peut pas débiter : l’écran de mise à niveau échoue ou le bouton semble sans effet. Aucun montant n’est prélevé.\nDésactivez d’abord le blocage strict : bas de l’écran d’accueil → « Arrêter et désactiver tous les modes ». Achetez, puis réactivez le plan. L’achat est lié à votre compte Apple : rien n’est perdu."
    },
    {
      q: "Une app bloquée s’ouvre quand même",
      a: "Vérifiez d’abord que {appName} dispose toujours de l’autorisation Temps d’écran : Réglages iOS → Temps d’écran → Apps avec accès. Elle peut être retirée discrètement après un redémarrage ou une mise à jour du système.\nLe blocage repose sur les frameworks Temps d’écran d’Apple : c’est une aide à la maîtrise de soi, pas un verrou inviolable. Désinstaller puis réinstaller l’app, modifier les réglages de l’appareil ou certains états d’économie d’énergie peuvent laisser passer une restriction. Si une app précise passe toujours alors que les autres sont bloquées, écrivez-nous : c’est généralement un défaut qui mérite d’être corrigé."
    },
    {
      q: "Une app manque dans la liste de blocage",
      a: "La liste est fournie par iOS, pas par {appName}. iOS masque certaines apps système et celles qu’il juge privées, et une app doit être installée pour apparaître. Si la vôtre est installée mais absente, donnez-nous son nom : nous vérifierons s’il s’agit d’une limite de la plateforme."
    },
    {
      q: "J’ai oublié mon code de verrouillage",
      a: "Utilisez vos questions de sécurité : ouvrez l’app, saisissez un code erroné, puis suivez le lien de récupération. Si vous ne connaissez plus les réponses non plus, supprimez et réinstallez {appName} : le code sera effacé avec le reste des données.\nLe code est volontairement stocké uniquement sur cet appareil. Nous ne pouvons pas vous envoyer de lien de réinitialisation, car nous ne pouvons pas le lire."
    },
    {
      q: "Mes plages horaires ont disparu après une réinstallation",
      a: "Les plages, les apps bloquées et les relevés d’usage n’existent que dans le stockage local de l’app. Ils ne sont pas synchronisés avec iCloud : supprimer l’app les efface, et la réinstallation repart à vide. C’est intentionnel — il n’existe aucune copie qui pourrait fuiter."
    },
    {
      q: "Dois-je repayer sur un nouvel appareil ?",
      a: "Non. Connectez-vous avec le même compte Apple que lors de l’achat, ouvrez l’écran de mise à niveau et touchez « Restaurer les achats ». {appName} lit votre droit auprès de l’App Store, pas d’une connexion. Le partage avec la famille dépend de vos réglages de Partage familial."
    },
    {
      q: "Les statistiques de temps d’écran sont vides",
      a: "Les statistiques proviennent des données Temps d’écran d’Apple : il faut donc avoir accordé l’autorisation et qu’un peu d’usage ait été enregistré depuis l’installation. iOS transmet aussi par lots, donc les premiers chiffres peuvent prendre quelques heures. Ouvrir l’app une fois par jour suffit à la garder à jour."
    },
    {
      q: "Le widget ne se rafraîchit pas",
      a: "C’est iOS qui décide du rechargement des widgets ; une app ne peut pas l’imposer. Ouvrir {appName} une fois déclenche généralement une mise à jour. Si le widget reste figé une journée entière, indiquez-nous votre version d’iOS."
    },
    {
      q: "Certaines de mes données quittent-elles le téléphone ?",
      a: "Non. {appName} ne contient aucun code réseau : pas de mesure d’audience, pas de rapport de plantage, pas de SDK tiers. La liste complète de ce qui est stocké localement figure dans la politique de confidentialité."
    },
    {
      q: "Quelle version d’iOS faut-il ?",
      a: "{appName} nécessite {platform} ou une version ultérieure. Certaines fonctions de blocage dépendent d’API qu’Apple n’expose qu’à partir de cette version ; les systèmes plus anciens ne sont pas pris en charge."
    }
  ],

  tipsH: "Avant d’écrire",
  tipsP: "Ces quatre éléments transforment souvent un aller-retour en une seule réponse :",
  tips: [
    "La version affichée dans Réglages → Informations",
    "Votre modèle d’iPhone (par exemple iPhone 14 Pro)",
    "La version d’iOS dans Réglages → Général → Informations",
    "Ce que vous avez fait, ce que vous attendiez et ce qui s’est produit"
  ],

  policyH: "Confidentialité",
  policyP: "{appName} fonctionne entièrement sur votre appareil. Pas de compte, pas de serveur, pas de mesure d’audience — rien de ce que vous créez ne quitte le téléphone.",
  policyLink: "Lire la politique de confidentialité",

  footerNote: "L’assistance est assurée par un développeur indépendant. {appName} n’est affiliée à Apple."
},

/* ======================================================================
   NEDERLANDS
   ====================================================================== */
"nl": {
  title: "Ondersteuning",
  lede: "Werkt iets niet zoals je verwacht? Begin hier. De meeste vragen hebben een kort antwoord, en de vragen die dat niet hebben zijn een e-mail waard.",
  chipUpdated: "Bijgewerkt",
  chipReply: "Antwoord {responseTime}",

  contactH: "Mail ons",
  contactP: "Mail vanaf het adres dat je bij de App Store gebruikt naar {email} en beschrijf wat er gebeurde. {appName} heeft geen servers, dus e-mail is het enige supportkanaal — en het wordt gelezen door degene die de app schrijft.",
  contactBtn: "E-mail opstellen",

  faqH: "Veelgestelde vragen",

  faq: [
    {
      q: "Waarom kan ik de app niet verwijderen?",
      a: "Omdat er een schema met ‘Strikte blokkering’ loopt. Strikte blokkering laat iOS het verwijderen van elke app verbieden — {appName} inbegrepen. Daarom ontbreekt ‘App verwijderen’ als je het pictogram ingedrukt houdt, en ook Instellingen → Algemeen → iPhone-opslag verwijdert hem niet. Dat is precies het doel: een zwak moment mag de blokkering niet kunnen beëindigen. Het is geen malware, en de app installeert zelf nooit iets.\nVerwijderen doe je zo: schakel eerst de strikte blokkering uit. Open {appName}, scroll op het beginscherm helemaal naar beneden, tik op ‘Stop en alle modi uitzetten’ en bevestig. Daarna werkt verwijderen weer zoals gewoonlijk. Zet een schema de strikte blokkering later opnieuw aan, schakel dat schema dan ook uit."
    },
    {
      q: "Waarom kan ik niet betalen?",
      a: "Strikte blokkering schakelt ook in-app-aankopen op systeemniveau uit. Zolang die actief is, kan de App Store niets afschrijven: het upgradescherm mislukt of de knop lijkt niets te doen. Er wordt niets afgeschreven.\nSchakel eerst de strikte blokkering uit: onderaan het beginscherm → ‘Stop en alle modi uitzetten’. Koop daarna en zet het schema weer aan. De aankoop hangt aan je Apple-account, dus er gaat niets verloren."
    },
    {
      q: "Een geblokkeerde app gaat toch open",
      a: "Controleer eerst of {appName} nog de schermtijdtoestemming heeft: iOS-instellingen → Schermtijd → Apps met toegang. Die kan na een herstart of systeemupdate stilzwijgend zijn ingetrokken.\nBlokkeren leunt op Apples Schermtijd-frameworks: het is een hulpmiddel voor zelfbeheersing, geen sabotagebestendig slot. De app verwijderen en opnieuw installeren, toestelinstellingen wijzigen of bepaalde energiebesparingsstanden kunnen een beperking laten passeren. Komt steeds precies één app erdoor terwijl de rest geblokkeerd blijft, mail ons dan — dat is meestal een fout die het waard is om te verhelpen."
    },
    {
      q: "Een app ontbreekt in de blokkeerlijst",
      a: "De lijst komt van iOS, niet van {appName}. iOS verbergt sommige systeemapps en apps die het als privé beschouwt, en een app moet geïnstalleerd zijn om te verschijnen. Staat die van jou er wel op het toestel maar niet in de lijst, noem dan de naam — dan kijken we of het een beperking van het platform is."
    },
    {
      q: "Ik ben mijn toegangscode vergeten",
      a: "Gebruik je beveiligingsvragen: open de app, voer één keer een verkeerde code in en volg de herstellink. Weet je de antwoorden ook niet meer, dan blijft verwijderen en opnieuw installeren van {appName} over — de code verdwijnt dan samen met alle andere gegevens.\nDe code staat bewust alleen op dit toestel. We kunnen je geen resetlink sturen, omdat we hem niet kunnen lezen."
    },
    {
      q: "Mijn schema’s zijn weg na opnieuw installeren",
      a: "Schema’s, geblokkeerde apps en gebruiksgegevens staan alleen in de lokale opslag van de app. Ze synchroniseren niet met iCloud, dus verwijderen wist ze en een nieuwe installatie begint leeg. Dat is opzettelijk: er bestaat geen kopie die zou kunnen uitlekken."
    },
    {
      q: "Moet ik op een nieuw toestel opnieuw betalen?",
      a: "Nee. Meld je aan met hetzelfde Apple-account waarmee je hebt gekocht, open het upgradescherm en tik op ‘Aankopen herstellen’. {appName} leest je recht bij de App Store, niet uit een login. Of een gezinslid de aankoop kan delen hangt af van je instellingen voor Delen met gezin."
    },
    {
      q: "De schermtijdstatistieken zijn leeg",
      a: "De statistieken komen uit Apples schermtijdgegevens, dus de toestemming moet gegeven zijn en er moet sinds de installatie wat gebruik zijn geregistreerd. iOS meldt bovendien in batches, waardoor de eerste cijfers een paar uur kunnen duren. De app één keer per dag openen houdt alles actueel."
    },
    {
      q: "De widget ververst niet",
      a: "iOS bepaalt wanneer widgets opnieuw laden; een app kan dat niet afdwingen. {appName} één keer openen zorgt meestal voor een verversing. Blijft de widget een hele dag ongewijzigd, stuur ons dan je iOS-versie."
    },
    {
      q: "Verlaat er iets van mijn gegevens de telefoon?",
      a: "Nee. {appName} bevat geen netwerkcode: geen analytics, geen crashrapporten, geen SDK’s van derden. De volledige lijst van wat lokaal wordt opgeslagen staat in het privacybeleid."
    },
    {
      q: "Welke iOS-versie heb ik nodig?",
      a: "{appName} vereist {platform} of nieuwer. Sommige blokkeerfuncties leunen op API’s die Apple pas vanaf die versie openstelt, dus oudere systemen worden niet ondersteund."
    }
  ],

  tipsH: "Voordat je schrijft",
  tipsP: "Deze vier gegevens maken van twee mails meestal één:",
  tips: [
    "De versie uit Instellingen → Info",
    "Je iPhone-model (bijvoorbeeld iPhone 14 Pro)",
    "De iOS-versie uit Instellingen → Algemeen → Info",
    "Wat je deed, wat je verwachtte en wat er in plaats daarvan gebeurde"
  ],

  policyH: "Privacy",
  policyP: "{appName} draait volledig op je toestel. Geen account, geen server, geen analytics — niets van wat je maakt verlaat de telefoon.",
  policyLink: "Privacybeleid lezen",

  footerNote: "Ondersteuning komt van één onafhankelijke ontwikkelaar. {appName} is niet verbonden aan Apple."
}

/* @@TEXT-END@@ */
};
