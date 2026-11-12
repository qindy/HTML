/* ==========================================================================
   privacy-data.js — Privacy Policy content
   --------------------------------------------------------------------------
   EVERYTHING A MAINTAINER IS LIKELY TO CHANGE IS IN `POLICY_INFO` BELOW.
   The prose lives in `POLICY_TEXT`, one block per language.

   Rules that keep this file honest:
     · Change a fact (email, date, version, minimum age) in POLICY_INFO only.
       Every language picks it up through {placeholders}.
     · Change wording in POLICY_TEXT. Section COUNT AND ORDER must stay
       identical across languages — the renderer walks them in order.
     · If the app ever ships a feature listed under `neverDo`, delete that id
       AND rewrite the matching paragraph. Do not leave a false claim up.
   ========================================================================== */

window.POLICY_INFO = {

  /* ---- contact ------------------------------------------------------- */

  email: "qq595187561@gmail.com",

  /* ---- document metadata --------------------------------------------- */

  /// Bump `updatedDate` on every substantive edit. YYYY-MM-DD.
  effectiveDate: "2026-11-12",
  updatedDate: "2026-11-12",
  version: "1.0",

  /// Youngest age named in the children's section (COPPA uses 13).
  minAge: 13,

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
  },

  /* Things the app genuinely does NOT do. Delete an id here the day that
     feature ships, and rewrite the section that depends on it. */
  neverDo: ["ads", "analytics", "crash", "identity", "account", "media", "location", "sdk"]
};

window.POLICY_LANGS = ["en", "zh-Hant", "zh-Hans", "ja", "de", "es", "fr", "nl"];

window.POLICY_NATIVE_NAMES = {
  en: "English",
  "zh-Hant": "繁體中文",
  "zh-Hans": "简体中文",
  ja: "日本語",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  nl: "Nederlands"
};

window.POLICY_TEXT = {

/* ======================================================================
   ENGLISH — also the fallback when a language is missing.
   ====================================================================== */
"en": {
  title: "Privacy Policy",
  lede: "{appName} runs entirely on your device. There is no account, no server and no analytics. This page says, in plain language, what stays on your phone, what leaves it — nothing — and what control you have.",
  chipEffective: "Effective",
  chipUpdated: "Updated",
  chipVersion: "Version",
  chipOffline: "Works offline",

  sections: [
    {
      h: "In one paragraph",
      kind: "hero",
      body: [
        { p: "{appName} is a local screen-time and app-blocking tool. Everything you create in it — blocking schedules, the apps you chose to block, screen-time records, your passcode, your security questions — is written to {appName}’s private storage on this iPhone. None of it is sent anywhere, because the app contains no networking code at all." }
      ]
    },
    {
      h: "What we never collect",
      body: [
        { p: "The following list is not a promise about the future; it describes the build you are holding." },
        { checklist: true }
      ]
    },
    {
      h: "Data stored on your device",
      body: [
        { p: "Everything below lives inside the app’s own sandbox. Deleting {appName} deletes all of it." },
        { ul: [
          "Blocking plans — names, time windows, weekdays, repeat rules",
          "The apps and categories you chose to block",
          "Screen-time statistics derived from Apple’s Screen Time data",
          "Your app-lock passcode and your security questions and answers",
          "A local cache of your purchase state, so the app works offline",
          "Preferences — appearance, language, notification wording"
        ] }
      ]
    },
    {
      h: "Screen Time and Family Controls",
      body: [
        { p: "{appName} uses Apple’s Family Controls, DeviceActivity and ManagedSettings frameworks — the same technology behind iOS Screen Time. iOS requires you to grant this permission explicitly, and the data those frameworks produce stays on this device." },
        { p: "The apps you use, how long you use them and which websites you visit are recorded by iOS on this device. {appName} cannot and will not send any of it anywhere — the app contains no networking code at all." }
      ]
    },
    {
      h: "Notifications",
      body: [
        { p: "Reminders are scheduled as local notifications by iOS itself. They are generated on your device; no notification server is involved, and no push token is ever created." }
      ]
    },
    {
      h: "Purchases",
      body: [
        { p: "The optional full-version upgrade is sold through Apple’s in-app purchase system. Apple processes the payment — we never receive your name, card number or billing address. {appName} only learns whether a valid purchase exists, and stores that answer locally so features can unlock while you are offline." }
      ]
    },
    {
      h: "Children",
      body: [
        { p: "{appName} is built for families and needs no account, so it collects no personal information from anyone, including children under {minAge}. There is nothing for a parent to review or delete on our side, because nothing reaches us." }
      ]
    },
    {
      h: "Retention and deletion",
      body: [
        { p: "Data is kept only for as long as the app is installed. Deleting {appName} removes its entire data container. There is no backup on our side and no account to close — we never had your data to begin with." }
      ]
    },
    {
      h: "Your rights",
      body: [
        { p: "Privacy laws such as the GDPR and the CCPA give you the right to access, correct, export and delete your personal data, and to object to its processing. Because {appName} sends us no personal data, we hold nothing to access, correct or delete. The equivalent controls are all on your device: read or change your data inside the app, or delete the app to remove everything." },
        { p: "If you believe something has been handled incorrectly, write to {email} and we will reply." }
      ]
    },
    {
      h: "Disclaimer",
      kind: "disclaimer",
      body: [
        { h3: "Not medical or professional advice",
          p: "Screen-time figures in {appName} are informational only. They are not medical, psychological, diagnostic or therapeutic advice, and must not replace professional guidance. Decisions about a child’s screen habits remain yours." },
        { h3: "Data can be lost",
          p: "Screen-time records and schedules live only on this device. They are lost if the app is deleted, if the device is lost or damaged, or if the operating system removes app data. Any backup you make through iCloud or a computer is governed by Apple’s terms." }
      ]
    },
    {
      h: "Changes to this policy",
      body: [
        { p: "When the app changes in a way that affects this policy, the date at the top is updated and the new text ships with the app update. Continuing to use {appName} after an update means you accept the revised policy." }
      ]
    },
    {
      h: "Contact",
      body: [
        { p: "Questions about this policy, or about how {appName} handles data, go to {email}. We read every message." }
      ]
    }
  ],

  practices: {
    ads: "No advertising identifiers",
    analytics: "No analytics or usage events",
    crash: "No crash reports sent to us",
    identity: "No name, phone or address",
    account: "No Apple Account or email",
    media: "No access to photos or contacts",
    location: "No location tracking",
    sdk: "No third-party SDK"
  },

  footerNote: "This policy also applies to the {appName} widget and the Screen Time report extension, which share the app’s data container and have no network access of their own."
},

/* ======================================================================
   繁體中文 — 源語言（catalog 的 sourceLanguage 也是 zh-Hant）
   ====================================================================== */
"zh-Hant": {
  title: "隱私政策",
  lede: "{appName}完全在你的裝置上運作。沒有帳號、沒有伺服器、沒有數據分析。這一頁用白話說明：什麼留在你的手機裡、什麼會離開（答案是什麼都不會），以及你握有哪些控制權。",
  chipEffective: "生效日期",
  chipUpdated: "最後更新",
  chipVersion: "版本",
  chipOffline: "可離線使用",

  sections: [
    {
      h: "一句話說完",
      kind: "hero",
      body: [
        { p: "{appName}是一套在本機運作的螢幕時間與 App 封鎖工具。你在裡面建立的一切——封鎖排程、被封鎖的 App、螢幕使用記錄、應用鎖密碼、密保問題——都只寫進這台 iPhone 上{appName}的私有儲存空間。這些內容不會被送到任何地方，因為這個 App 完全沒有任何網路程式碼。" }
      ]
    },
    {
      h: "我們絕對不收集什麼",
      body: [
        { p: "下面這份清單不是對未來的承諾，而是在描述你手上這一版的事實。" },
        { checklist: true }
      ]
    },
    {
      h: "只存在你裝置上的資料",
      body: [
        { p: "以下全部位於 App 自己的沙盒內。刪掉{appName}，它們就一起消失。" },
        { ul: [
          "封鎖計劃——名稱、時間區間、星期、重複規則",
          "你選擇封鎖的 App 與類別",
          "由 Apple 螢幕使用時間資料推算出的統計數字",
          "應用鎖密碼，以及密保問題與答案",
          "購買狀態的本機快取，讓 App 離線時仍可解鎖功能",
          "偏好設定——外觀、語言、通知文案"
        ] }
      ]
    },
    {
      h: "螢幕使用時間與家庭控制",
      body: [
        { p: "{appName}使用 Apple 的 Family Controls、DeviceActivity 與 ManagedSettings 框架，也就是 iOS「螢幕使用時間」背後的同一套技術。iOS 要求你明確授權，而這些框架產生的資料只留在這台裝置上。" },
        { p: "你用了哪些 App、用了多久、造訪了哪些網站，這些都記錄在這台裝置上。{appName}不會、也沒有能力把它們送到外面——這個 App 沒有任何網路程式碼。" }
      ]
    },
    {
      h: "通知",
      body: [
        { p: "提醒是由 iOS 本身排定的本機通知，在你自己的裝置上產生。整個過程沒有通知伺服器參與，也不會產生任何推播權杖。" }
      ]
    },
    {
      h: "購買",
      body: [
        { p: "選購的完整版升級透過 Apple 的 App 內購買系統販售。付款由 Apple 處理，我們不會收到你的姓名、卡號或帳單地址。{appName}只會得知「是否存在一筆有效購買」，並把這個結果存在本機，好讓你在離線時也能解鎖功能。" }
      ]
    },
    {
      h: "兒童",
      body: [
        { p: "{appName}為家庭場景設計，不需要註冊帳號，因此不會向任何人收集個人資料，包含未滿 {minAge} 歲的兒童。家長在我們這邊沒有任何東西需要檢視或刪除，因為沒有任何東西會到達我們這裡。" }
      ]
    },
    {
      h: "資料保留與刪除",
      body: [
        { p: "資料只在你安裝這個 App 的期間存在。刪除{appName}會移除它完整的資料容器。我們這邊沒有備份，也沒有帳號需要註銷——從頭到尾，我們就沒有你的資料。" }
      ]
    },
    {
      h: "你的權利",
      body: [
        { p: "GDPR、CCPA 這類隱私法規賦予你查閱、更正、匯出、刪除個人資料，以及反對處理的權利。由於{appName}不會把任何個人資料傳給我們，我們手上沒有任何東西可供查閱、更正或刪除。相對應的控制權全部在你的裝置上：在 App 內檢視或修改你的資料，或直接刪掉 App 來清除一切。" },
        { p: "如果你認為某些資料被處理錯了，寫信到 {email}，我們會回覆。" }
      ]
    },
    {
      h: "免責聲明",
      kind: "disclaimer",
      body: [
        { h3: "不構成醫療或專業建議",
          p: "{appName}顯示的螢幕時間數字僅供參考，不構成醫療、心理、診斷或治療建議，也不可取代專業意見。關於孩子螢幕使用習慣的決定，仍然由你負責。" },
        { h3: "資料可能遺失",
          p: "螢幕使用記錄與排程只存在這台裝置上。若刪除 App、裝置遺失或損壞，或作業系統清除 App 資料，它們就會消失。你透過 iCloud 或電腦所做的備份，適用 Apple 的條款。" }
      ]
    },
    {
      h: "政策變更",
      body: [
        { p: "當 App 的改動影響到這份政策時，頁面上方的日期會更新，新條文會隨 App 更新一併提供。更新後繼續使用{appName}，即表示你接受修訂後的內容。" }
      ]
    },
    {
      h: "聯絡方式",
      body: [
        { p: "關於這份政策，或關於{appName}如何處理資料，請寫信到 {email}。每一封我們都會讀。" }
      ]
    }
  ],

  practices: {
    ads: "不收集廣告識別碼",
    analytics: "不收集分析或使用事件",
    crash: "不回傳當機報告給我們",
    identity: "不收集姓名、電話或地址",
    account: "不收集 Apple 帳號或電子郵件",
    media: "不存取照片或聯絡人",
    location: "不追蹤位置",
    sdk: "不使用第三方 SDK"
  },

  footerNote: "本政策同樣適用於{appName}小工具與螢幕使用時間報告擴充功能——它們與主 App 共用資料容器，本身沒有任何網路存取能力。"
},

/* ======================================================================
   简体中文
   ====================================================================== */
"zh-Hans": {
  title: "隐私政策",
  lede: "{appName}完全在你的设备上运行。没有账号、没有服务器、没有数据分析。这一页用大白话说明：什么留在你的手机里、什么会离开（答案是什么都不会），以及你握有哪些控制权。",
  chipEffective: "生效日期",
  chipUpdated: "最后更新",
  chipVersion: "版本",
  chipOffline: "可离线使用",

  sections: [
    {
      h: "一句话说完",
      kind: "hero",
      body: [
        { p: "{appName}是一套在本机运行的屏幕时间与 App 封锁工具。你在里面创建的一切——封锁排程、被封锁的 App、屏幕使用记录、应用锁密码、密保问题——都只写进这台 iPhone 上{appName}的私有存储空间。这些内容不会被送到任何地方，因为这个 App 完全没有网络代码。" }
      ]
    },
    {
      h: "我们绝对不收集什么",
      body: [
        { p: "下面这份清单不是对未来的承诺，而是在描述你手上这一版的事实。" },
        { checklist: true }
      ]
    },
    {
      h: "只存在你设备上的数据",
      body: [
        { p: "以下全部位于 App 自己的沙盒内。删掉{appName}，它们就一起消失。" },
        { ul: [
          "封锁计划——名称、时间区间、星期、重复规则",
          "你选择封锁的 App 与类别",
          "由 Apple 屏幕使用时间数据推算出的统计数字",
          "应用锁密码，以及密保问题与答案",
          "购买状态的本地缓存，让 App 离线时仍可解锁功能",
          "偏好设置——外观、语言、通知文案"
        ] }
      ]
    },
    {
      h: "屏幕使用时间与家庭控制",
      body: [
        { p: "{appName}使用 Apple 的 Family Controls、DeviceActivity 与 ManagedSettings 框架，也就是 iOS「屏幕使用时间」背后的同一套技术。iOS 要求你明确授权，而这些框架产生的数据只留在这台设备上。" },
        { p: "你用了哪些 App、用了多久、访问了哪些网站，这些都记录在这台设备上。{appName}不会、也没有能力把它们发送出去——这个 App 没有任何网络代码。" }
      ]
    },
    {
      h: "通知",
      body: [
        { p: "提醒是由 iOS 本身排定的本地通知，在你自己的设备上产生。整个过程没有通知服务器参与，也不会生成任何推送令牌。" }
      ]
    },
    {
      h: "购买",
      body: [
        { p: "选购的完整版升级通过 Apple 的 App 内购买系统销售。付款由 Apple 处理，我们不会收到你的姓名、卡号或账单地址。{appName}只会得知「是否存在一笔有效购买」，并把这个结果存在本地，好让你在离线时也能解锁功能。" }
      ]
    },
    {
      h: "儿童",
      body: [
        { p: "{appName}面向家庭场景设计，不需要注册账号，因此不会向任何人收集个人信息，包括未满 {minAge} 岁的儿童。家长在我这边没有任何东西需要查看或删除，因为没有任何东西会到达我这里。" }
      ]
    },
    {
      h: "数据保留与删除",
      body: [
        { p: "数据只在你安装这个 App 的期间存在。删除{appName}会移除它完整的数据容器。我这边没有备份，也没有账号需要注销——从头到尾，我就没有你的数据。" }
      ]
    },
    {
      h: "你的权利",
      body: [
        { p: "GDPR、CCPA 这类隐私法规赋予你查阅、更正、导出、删除个人数据，以及反对处理的权利。由于{appName}不会把任何个人数据传给我，我手上没有任何东西可供查阅、更正或删除。相对应的控制权全部在你的设备上：在 App 内查看或修改你的数据，或直接删掉 App 来清除一切。" },
        { p: "如果你认为某些数据被处理错了，写信到 {email}，我会回复。" }
      ]
    },
    {
      h: "免责声明",
      kind: "disclaimer",
      body: [
        { h3: "不构成医疗或专业建议",
          p: "{appName}显示的屏幕时间数字仅供参考，不构成医疗、心理、诊断或治疗建议，也不能取代专业意见。关于孩子屏幕使用习惯的决定，仍然由你负责。" },
        { h3: "数据可能丢失",
          p: "屏幕使用记录与排程只存在这台设备上。若删除 App、设备丢失或损坏，或操作系统清除 App 数据，它们就会消失。你通过 iCloud 或电脑所做的备份，适用 Apple 的条款。" }
      ]
    },
    {
      h: "政策变更",
      body: [
        { p: "当 App 的改动影响到这份政策时，页面上方的日期会更新，新条款会随 App 更新一并提供。更新后继续使用{appName}，即表示你接受修订后的内容。" }
      ]
    },
    {
      h: "联系方式",
      body: [
        { p: "关于这份政策，或关于{appName}如何处理数据，请写信到 {email}。每一封我都会读。" }
      ]
    }
  ],

  practices: {
    ads: "不收集广告标识符",
    analytics: "不收集分析或使用事件",
    crash: "不回传崩溃报告给我",
    identity: "不收集姓名、电话或地址",
    account: "不收集 Apple 账户或电子邮箱",
    media: "不访问照片或通讯录",
    location: "不追踪位置",
    sdk: "不使用第三方 SDK"
  },

  footerNote: "本政策同样适用于{appName}小组件与屏幕使用时间报告扩展——它们与主 App 共用数据容器，本身没有任何网络访问能力。"
},

/* ======================================================================
   日本語
   ====================================================================== */
"ja": {
  title: "プライバシーポリシー",
  lede: "{appName}はすべてお使いの端末上で動作します。アカウントもサーバーも解析ツールもありません。このページでは、何が端末に残り、何が外部に送られるのか（答えは「何も送られない」）、そしてどんな管理ができるのかを平易に説明します。",
  chipEffective: "施行日",
  chipUpdated: "最終更新",
  chipVersion: "バージョン",
  chipOffline: "オフラインで動作",

  sections: [
    {
      h: "ひとことで言うと",
      kind: "hero",
      body: [
        { p: "{appName}は端末内で完結するスクリーンタイム／アプリ制限ツールです。ブロックのスケジュール、ブロック対象のアプリ、利用記録、ロック解除コード、秘密の質問など、アプリ内で作成したものはすべて、この iPhone 上の{appName}専用の保存領域にだけ書き込まれます。アプリには通信を行うコードが一切ないため、どこにも送信されません。" }
      ]
    },
    {
      h: "収集しないもの",
      body: [
        { p: "以下は将来の約束ではなく、お使いのこのバージョンの事実です。" },
        { checklist: true }
      ]
    },
    {
      h: "端末内に保存されるデータ",
      body: [
        { p: "以下はすべてアプリ自身のサンドボックス内にあります。{appName}を削除すれば、すべて消えます。" },
        { ul: [
          "ブロックのスケジュール — 名前、時間帯、曜日、繰り返し条件",
          "ブロック対象として選んだアプリとカテゴリ",
          "Apple のスクリーンタイム データから集計した統計",
          "ロック解除コード、秘密の質問とその回答",
          "購入状態のローカルキャッシュ（オフラインでも機能を解放するため）",
          "設定 — 外観、言語、通知の文面"
        ] }
      ]
    },
    {
      h: "スクリーンタイムとファミリーコントロール",
      body: [
        { p: "{appName}は Apple の Family Controls、DeviceActivity、ManagedSettings フレームワークを使用します。これは iOS の「スクリーンタイム」と同じ技術です。iOS はこの権限を明示的に許可するよう求めてきますが、これらのフレームワークが生成するデータはこの端末上に留まります。" },
        { p: "どのアプリをどれだけ使ったか、どの Web サイトを見たかは、この端末内に記録されます。{appName}がそれらを外部へ送ることはありませんし、送る手段もありません。アプリに通信を行うコードが一切ないためです。" }
      ]
    },
    {
      h: "通知",
      body: [
        { p: "リマインダーは iOS 自身が予約するローカル通知です。端末上で生成され、通知サーバーは関与せず、プッシュ用トークンも作成されません。" }
      ]
    },
    {
      h: "購入について",
      body: [
        { p: "任意の完全版アップグレードは Apple の App 内課金で販売されます。支払いは Apple が処理するため、開発者が氏名・カード番号・請求先住所を受け取ることはありません。{appName}が受け取るのは「有効な購入があるかどうか」だけであり、それを端末内に保存して、オフラインでも機能を解放できるようにしています。" }
      ]
    },
    {
      h: "お子さまのプライバシー",
      body: [
        { p: "{appName}は家庭での利用を想定しており、アカウント登録が不要なため、{minAge} 歳未満のお子さまを含め、誰からも個人情報を収集しません。開発者側には保護者の方が確認・削除すべきものは何もありません。そもそも何も届いていないからです。" }
      ]
    },
    {
      h: "保存期間と削除",
      body: [
        { p: "データはアプリがインストールされている間だけ存在します。{appName}を削除すると、データコンテナごと消えます。開発者側にバックアップはなく、解約すべきアカウントもありません。最初からデータを預かっていないためです。" }
      ]
    },
    {
      h: "あなたの権利",
      body: [
        { p: "GDPR や CCPA などのプライバシー法は、個人データへのアクセス、訂正、エクスポート、削除、および処理への異議申立ての権利を定めています。{appName}は個人データを開発者に送信しないため、アクセス・訂正・削除の対象となるものは開発者側に存在しません。同等の操作はすべて端末上で行えます。アプリ内でデータを確認・変更するか、アプリを削除してすべて消去してください。" },
        { p: "取り扱いに誤りがあると思われる場合は {email} までご連絡ください。返信いたします。" }
      ]
    },
    {
      h: "免責事項",
      kind: "disclaimer",
      body: [
        { h3: "医療・専門的助言ではありません",
          p: "{appName}に表示されるスクリーンタイムの数値は参考情報です。医学的、心理学的、診断的または治療的助言ではなく、専門家の指導に代わるものでもありません。お子さまの画面習慣に関する判断は、保護者の方に委ねられます。" },
        { h3: "データは失われる可能性があります",
          p: "利用記録とスケジュールはこの端末上にのみ存在します。アプリを削除した場合、端末を紛失・破損した場合、または OS がアプリのデータを削除した場合、それらは失われます。iCloud やパソコン経由で作成したバックアップには Apple の利用条件が適用されます。" }
      ]
    },
    {
      h: "本ポリシーの変更",
      body: [
        { p: "本ポリシーに影響する変更を行う場合は、上部の日付を更新し、新しい文面をアプリのアップデートに含めて提供します。更新後も{appName}の使用を続けることは、改訂後の内容に同意したものとみなされます。" }
      ]
    },
    {
      h: "お問い合わせ",
      body: [
        { p: "本ポリシー、または{appName}のデータの取り扱いについてのご質問は {email} までお寄せください。すべて拝読します。" }
      ]
    }
  ],

  practices: {
    ads: "広告識別子を収集しません",
    analytics: "解析・利用イベントを収集しません",
    crash: "クラッシュレポートを送信しません",
    identity: "氏名・電話番号・住所を収集しません",
    account: "Apple アカウントを収集しません",
    media: "写真や連絡先にアクセスしません",
    location: "位置情報を追跡しません",
    sdk: "サードパーティ SDK 不使用"
  },

  footerNote: "本ポリシーは{appName}ウィジェットとスクリーンタイム レポート拡張にも適用されます。これらはアプリと同じデータコンテナを共有し、独自の通信機能を持ちません。"
},

/* ======================================================================
   DEUTSCH — „du“, passend zur restlichen App-Übersetzung
   ====================================================================== */
"de": {
  title: "Datenschutz",
  lede: "{appName} läuft vollständig auf deinem Gerät. Kein Konto, kein Server, keine Analyse. Diese Seite erklärt in einfachen Worten, was auf deinem iPhone bleibt, was es verlässt — nämlich nichts — und welche Kontrolle du hast.",
  chipEffective: "Gültig ab",
  chipUpdated: "Aktualisiert",
  chipVersion: "Version",
  chipOffline: "Offline nutzbar",

  sections: [
    {
      h: "In einem Absatz",
      kind: "hero",
      body: [
        { p: "{appName} ist ein lokales Werkzeug für Bildschirmzeit und App-Sperren. Alles, was du darin anlegst — Sperrpläne, gesperrte Apps, Nutzungsaufzeichnungen, dein Code, deine Sicherheitsfragen — wird ausschließlich im privaten Speicher von {appName} auf diesem iPhone abgelegt. Nichts davon wird irgendwohin gesendet, denn die App enthält überhaupt keinen Netzwerkcode." }
      ]
    },
    {
      h: "Was wir niemals erfassen",
      body: [
        { p: "Die folgende Liste ist kein Versprechen für die Zukunft, sondern beschreibt die Version, die du in der Hand hältst." },
        { checklist: true }
      ]
    },
    {
      h: "Daten, die nur auf deinem Gerät liegen",
      body: [
        { p: "Alles Folgende befindet sich in der Sandbox der App. Löschst du {appName}, ist alles davon weg." },
        { ul: [
          "Sperrpläne — Namen, Zeitfenster, Wochentage, Wiederholungen",
          "Die Apps und Kategorien, die du gesperrt hast",
          "Nutzungsstatistiken aus Apples Bildschirmzeit-Daten",
          "Dein Sperrcode sowie deine Sicherheitsfragen und -antworten",
          "Ein lokaler Cache deines Kaufstatus, damit die App offline funktioniert",
          "Einstellungen — Erscheinungsbild, Sprache, Text der Mitteilungen"
        ] }
      ]
    },
    {
      h: "Bildschirmzeit und Family Controls",
      body: [
        { p: "{appName} nutzt Apples Frameworks Family Controls, DeviceActivity und ManagedSettings — dieselbe Technik wie die Bildschirmzeit unter iOS. iOS verlangt dafür deine ausdrückliche Freigabe, und die Daten dieser Frameworks bleiben auf diesem Gerät." },
        { p: "Welche Apps du nutzt, wie lange, und welche Websites du besuchst, zeichnet iOS auf diesem Gerät auf. {appName} gibt davon nichts weiter und kann es auch nicht — die App enthält keinerlei Netzwerkcode." }
      ]
    },
    {
      h: "Mitteilungen",
      body: [
        { p: "Erinnerungen sind lokale Mitteilungen, die iOS selbst einplant. Sie entstehen auf deinem Gerät; kein Mitteilungsserver ist beteiligt, und es wird kein Push-Token erzeugt." }
      ]
    },
    {
      h: "Käufe",
      body: [
        { p: "Das optionale Upgrade auf die Vollversion wird über Apples In-App-Kauf verkauft. Die Zahlung wickelt Apple ab — wir erhalten weder deinen Namen noch Kartennummer oder Rechnungsadresse. {appName} erfährt lediglich, ob ein gültiger Kauf vorliegt, und speichert diese Antwort lokal, damit Funktionen auch offline freigeschaltet werden." }
      ]
    },
    {
      h: "Kinder",
      body: [
        { p: "{appName} ist für Familien gedacht und braucht kein Konto. Deshalb werden von niemandem personenbezogene Daten erhoben, auch nicht von Kindern unter {minAge} Jahren. Für Eltern gibt es bei uns nichts einzusehen und nichts zu löschen, weil bei uns nichts ankommt." }
      ]
    },
    {
      h: "Aufbewahrung und Löschung",
      body: [
        { p: "Daten existieren nur, solange die App installiert ist. Beim Löschen von {appName} verschwindet der gesamte Datencontainer. Auf unserer Seite gibt es kein Backup und kein Konto zu schließen — wir hatten deine Daten von Anfang an nicht." }
      ]
    },
    {
      h: "Deine Rechte",
      body: [
        { p: "Datenschutzgesetze wie die DSGVO und der CCPA geben dir das Recht auf Auskunft, Berichtigung, Übertragbarkeit und Löschung deiner personenbezogenen Daten sowie ein Widerspruchsrecht gegen die Verarbeitung. Da {appName} uns keine personenbezogenen Daten übermittelt, haben wir nichts, worüber wir Auskunft geben oder was wir löschen könnten. Die entsprechenden Möglichkeiten liegen alle bei dir: Daten in der App ansehen und ändern oder die App löschen, um alles zu entfernen." },
        { p: "Wenn du den Eindruck hast, dass etwas falsch gehandhabt wurde, schreib an {email} — wir antworten." }
      ]
    },
    {
      h: "Haftungsausschluss",
      kind: "disclaimer",
      body: [
        { h3: "Keine medizinische oder fachliche Beratung",
          p: "Die in {appName} angezeigten Bildschirmzeit-Werte dienen nur der Information. Sie sind keine medizinische, psychologische, diagnostische oder therapeutische Beratung und ersetzen keine fachliche Begleitung. Entscheidungen über die Bildschirmgewohnheiten eines Kindes bleiben deine." },
        { h3: "Daten können verloren gehen",
          p: "Nutzungsaufzeichnungen und Pläne liegen ausschließlich auf diesem Gerät. Sie gehen verloren, wenn die App gelöscht wird, das Gerät abhandenkommt oder beschädigt wird, oder das Betriebssystem App-Daten entfernt. Für Sicherungen über iCloud oder einen Computer gelten Apples Bedingungen." }
      ]
    },
    {
      h: "Änderungen dieser Erklärung",
      body: [
        { p: "Ändert sich die App in einer Weise, die diese Erklärung betrifft, wird das Datum oben aktualisiert und der neue Text mit dem App-Update ausgeliefert. Wenn du {appName} nach einem Update weiter nutzt, akzeptierst du die überarbeitete Fassung." }
      ]
    },
    {
      h: "Kontakt",
      body: [
        { p: "Fragen zu dieser Erklärung oder zum Umgang von {appName} mit Daten gehen an {email}. Wir lesen jede Nachricht." }
      ]
    }
  ],

  practices: {
    ads: "Keine Werbe-IDs",
    analytics: "Keine Analyse- oder Nutzungsereignisse",
    crash: "Keine Absturzberichte an uns",
    identity: "Kein Name, keine Telefonnummer, keine Adresse",
    account: "Kein Apple Account, keine E-Mail",
    media: "Kein Zugriff auf Fotos oder Kontakte",
    location: "Keine Standortverfolgung",
    sdk: "Keine Fremd-SDKs"
  },

  footerNote: "Diese Erklärung gilt auch für das {appName}-Widget und die Bildschirmzeit-Berichtserweiterung. Beide teilen den Datencontainer der App und haben keinen eigenen Netzwerkzugriff."
},

/* ======================================================================
   ESPAÑOL — „tú“, como en el resto de la app
   ====================================================================== */
"es": {
  title: "Privacidad",
  lede: "{appName} funciona por completo en tu dispositivo. Sin cuenta, sin servidor y sin analítica. Esta página explica en lenguaje llano qué se queda en tu iPhone, qué sale de él — nada — y qué control tienes.",
  chipEffective: "Vigente desde",
  chipUpdated: "Actualizado",
  chipVersion: "Versión",
  chipOffline: "Funciona sin conexión",

  sections: [
    {
      h: "En un párrafo",
      kind: "hero",
      body: [
        { p: "{appName} es una herramienta local de tiempo de pantalla y bloqueo de apps. Todo lo que creas dentro —horarios de bloqueo, apps bloqueadas, registros de uso, tu código de bloqueo, tus preguntas de seguridad— se escribe únicamente en el almacenamiento privado de {appName} en este iPhone. Nada de eso se envía a ningún sitio, porque la app no contiene ningún código de red." }
      ]
    },
    {
      h: "Lo que nunca recopilamos",
      body: [
        { p: "La lista siguiente no es una promesa de futuro: describe la versión que tienes en las manos." },
        { checklist: true }
      ]
    },
    {
      h: "Datos que solo están en tu dispositivo",
      body: [
        { p: "Todo lo siguiente vive dentro del espacio aislado de la app. Si borras {appName}, desaparece con ella." },
        { ul: [
          "Planes de bloqueo — nombres, franjas horarias, días, repeticiones",
          "Las apps y categorías que decidiste bloquear",
          "Estadísticas derivadas de los datos de Tiempo de uso de Apple",
          "Tu código de bloqueo y tus preguntas y respuestas de seguridad",
          "Una caché local del estado de compra, para que la app funcione sin conexión",
          "Preferencias — apariencia, idioma, texto de las notificaciones"
        ] }
      ]
    },
    {
      h: "Tiempo de uso y Family Controls",
      body: [
        { p: "{appName} usa los frameworks Family Controls, DeviceActivity y ManagedSettings de Apple: la misma tecnología que hay detrás de Tiempo de uso en iOS. iOS te exige conceder ese permiso de forma explícita, y los datos que generan esos frameworks permanecen en este dispositivo." },
        { p: "Qué apps usas, durante cuánto tiempo y qué sitios web visitas queda registrado en este dispositivo. {appName} no lo envía a ninguna parte y tampoco podría: la app no contiene ningún código de red." }
      ]
    },
    {
      h: "Notificaciones",
      body: [
        { p: "Los recordatorios son notificaciones locales que programa el propio iOS. Se generan en tu dispositivo: no interviene ningún servidor de notificaciones ni se crea ningún token push." }
      ]
    },
    {
      h: "Compras",
      body: [
        { p: "La mejora opcional a la versión completa se vende mediante el sistema de compras dentro de la app de Apple. Apple procesa el pago: nunca recibimos tu nombre, número de tarjeta ni dirección de facturación. {appName} solo sabe si existe una compra válida, y guarda esa respuesta localmente para poder desbloquear funciones sin conexión." }
      ]
    },
    {
      h: "Menores",
      body: [
        { p: "{appName} está pensada para familias y no requiere cuenta, así que no recopila información personal de nadie, tampoco de menores de {minAge} años. Los padres no tienen nada que revisar ni eliminar de nuestro lado, porque nada llega a nosotros." }
      ]
    },
    {
      h: "Conservación y eliminación",
      body: [
        { p: "Los datos existen solo mientras la app esté instalada. Al borrar {appName} se elimina todo su contenedor de datos. No hay copia de seguridad de nuestro lado ni cuenta que cerrar: nunca tuvimos tus datos." }
      ]
    },
    {
      h: "Tus derechos",
      body: [
        { p: "Leyes como el RGPD y la CCPA te reconocen el derecho a acceder, rectificar, exportar y suprimir tus datos personales, así como a oponerte a su tratamiento. Como {appName} no nos transmite datos personales, no tenemos nada que consultar, corregir ni borrar. Los controles equivalentes están todos en tu dispositivo: consulta o modifica tus datos dentro de la app, o bórrala para eliminarlo todo." },
        { p: "Si crees que algo se ha gestionado mal, escribe a {email} y te responderemos." }
      ]
    },
    {
      h: "Aviso legal",
      kind: "disclaimer",
      body: [
        { h3: "No es asesoramiento médico ni profesional",
          p: "Las cifras de tiempo de pantalla que muestra {appName} son solo informativas. No constituyen asesoramiento médico, psicológico, diagnóstico ni terapéutico, y no sustituyen la orientación profesional. Las decisiones sobre los hábitos de pantalla de un menor siguen siendo tuyas." },
        { h3: "Los datos se pueden perder",
          p: "Los registros de uso y los horarios solo existen en este dispositivo. Se pierden si borras la app, si el dispositivo se pierde o se daña, o si el sistema operativo elimina los datos de la app. Las copias que hagas con iCloud o con un ordenador se rigen por los términos de Apple." }
      ]
    },
    {
      h: "Cambios en esta política",
      body: [
        { p: "Cuando la app cambie de un modo que afecte a esta política, se actualizará la fecha de la cabecera y el nuevo texto se distribuirá con la actualización. Seguir usando {appName} tras una actualización implica aceptar la versión revisada." }
      ]
    },
    {
      h: "Contacto",
      body: [
        { p: "Para dudas sobre esta política o sobre cómo {appName} trata los datos, escribe a {email}. Leemos todos los mensajes." }
      ]
    }
  ],

  practices: {
    ads: "Sin identificadores publicitarios",
    analytics: "Sin analítica ni eventos de uso",
    crash: "Sin informes de fallos enviados",
    identity: "Sin nombre, teléfono ni dirección",
    account: "Sin cuenta de Apple ni correo",
    media: "Sin acceso a fotos ni contactos",
    location: "Sin seguimiento de ubicación",
    sdk: "Sin SDK de terceros"
  },

  footerNote: "Esta política se aplica también al widget de {appName} y a la extensión de informe de Tiempo de uso, que comparten el contenedor de datos de la app y no tienen acceso de red propio."
},

/* ======================================================================
   FRANÇAIS — « vous », comme dans le reste de l’app
   ====================================================================== */
"fr": {
  title: "Confidentialité",
  lede: "{appName} fonctionne entièrement sur votre appareil. Pas de compte, pas de serveur, pas de mesure d’audience. Cette page explique simplement ce qui reste sur votre iPhone, ce qui en sort — rien — et quels moyens de contrôle vous avez.",
  chipEffective: "En vigueur",
  chipUpdated: "Mis à jour",
  chipVersion: "Version",
  chipOffline: "Fonctionne hors ligne",

  sections: [
    {
      h: "En un paragraphe",
      kind: "hero",
      body: [
        { p: "{appName} est un outil local de temps d’écran et de blocage d’apps. Tout ce que vous créez dedans — plages de blocage, apps bloquées, relevés d’usage, votre code de verrouillage, vos questions de sécurité — est écrit uniquement dans le stockage privé de {appName} sur cet iPhone. Rien n’est envoyé nulle part, car l’app ne contient aucun code réseau." }
      ]
    },
    {
      h: "Ce que nous ne collectons jamais",
      body: [
        { p: "La liste ci-dessous n’est pas une promesse pour l’avenir : elle décrit la version que vous avez entre les mains." },
        { checklist: true }
      ]
    },
    {
      h: "Données conservées sur votre appareil",
      body: [
        { p: "Tout ce qui suit se trouve dans le bac à sable de l’app. Supprimez {appName} et tout disparaît." },
        { ul: [
          "Plages de blocage — noms, horaires, jours, règles de répétition",
          "Les apps et catégories que vous avez choisi de bloquer",
          "Statistiques issues des données Temps d’écran d’Apple",
          "Votre code de verrouillage ainsi que vos questions et réponses de sécurité",
          "Un cache local de votre état d’achat, pour que l’app fonctionne hors ligne",
          "Préférences — apparence, langue, texte des notifications"
        ] }
      ]
    },
    {
      h: "Temps d’écran et Family Controls",
      body: [
        { p: "{appName} utilise les frameworks Family Controls, DeviceActivity et ManagedSettings d’Apple — la même technologie que Temps d’écran sur iOS. iOS exige que vous accordiez cette autorisation explicitement, et les données produites par ces frameworks restent sur cet appareil." },
        { p: "Les apps que vous utilisez, leur durée d’utilisation et les sites que vous consultez sont enregistrés sur cet appareil. {appName} ne transmet rien de tout cela, et ne le pourrait pas : l’app ne contient aucun code réseau." }
      ]
    },
    {
      h: "Notifications",
      body: [
        { p: "Les rappels sont des notifications locales planifiées par iOS lui-même. Elles sont générées sur votre appareil : aucun serveur de notifications n’intervient et aucun jeton push n’est créé." }
      ]
    },
    {
      h: "Achats",
      body: [
        { p: "L’extension facultative vers la version complète est vendue via le système d’achat intégré d’Apple. Apple traite le paiement : nous ne recevons ni votre nom, ni votre numéro de carte, ni votre adresse de facturation. {appName} apprend seulement s’il existe un achat valide, et conserve cette réponse localement pour débloquer les fonctions hors ligne." }
      ]
    },
    {
      h: "Enfants",
      body: [
        { p: "{appName} est conçue pour les familles et ne nécessite aucun compte : elle ne collecte donc aucune information personnelle, y compris auprès des enfants de moins de {minAge} ans. Les parents n’ont rien à consulter ni à supprimer de notre côté, puisque rien ne nous parvient." }
      ]
    },
    {
      h: "Conservation et suppression",
      body: [
        { p: "Les données n’existent que tant que l’app est installée. Supprimer {appName} efface tout son conteneur de données. Il n’y a ni sauvegarde de notre côté, ni compte à clôturer : nous n’avons jamais eu vos données." }
      ]
    },
    {
      h: "Vos droits",
      body: [
        { p: "Des lois comme le RGPD et le CCPA vous donnent le droit d’accéder à vos données personnelles, de les rectifier, de les exporter et de les supprimer, ainsi que de vous opposer à leur traitement. Comme {appName} ne nous transmet aucune donnée personnelle, nous n’avons rien à consulter, corriger ou supprimer. Les moyens de contrôle équivalents sont tous sur votre appareil : consultez ou modifiez vos données dans l’app, ou supprimez l’app pour tout effacer." },
        { p: "Si vous estimez qu’un traitement est incorrect, écrivez à {email} et nous vous répondrons." }
      ]
    },
    {
      h: "Avertissement",
      kind: "disclaimer",
      body: [
        { h3: "Ni avis médical ni conseil professionnel",
          p: "Les chiffres de temps d’écran affichés dans {appName} sont purement informatifs. Ils ne constituent pas un avis médical, psychologique, diagnostique ou thérapeutique et ne remplacent pas l’accompagnement d’un professionnel. Les décisions concernant les habitudes d’écran d’un enfant vous reviennent." },
        { h3: "Des données peuvent être perdues",
          p: "Les relevés d’usage et les plages horaires n’existent que sur cet appareil. Ils sont perdus si l’app est supprimée, si l’appareil est perdu ou endommagé, ou si le système d’exploitation efface les données de l’app. Les sauvegardes effectuées via iCloud ou un ordinateur relèvent des conditions d’Apple." }
      ]
    },
    {
      h: "Modifications de cette politique",
      body: [
        { p: "Lorsqu’une évolution de l’app affecte cette politique, la date en tête de page est mise à jour et le nouveau texte est livré avec la mise à jour de l’app. Continuer à utiliser {appName} après une mise à jour vaut acceptation de la version révisée." }
      ]
    },
    {
      h: "Contact",
      body: [
        { p: "Pour toute question sur cette politique ou sur la façon dont {appName} traite les données, écrivez à {email}. Nous lisons chaque message." }
      ]
    }
  ],

  practices: {
    ads: "Aucun identifiant publicitaire",
    analytics: "Aucune mesure d’audience ni événement d’usage",
    crash: "Aucun rapport de plantage envoyé",
    identity: "Ni nom, ni téléphone, ni adresse",
    account: "Aucun compte Apple ni e-mail",
    media: "Aucun accès aux photos ni aux contacts",
    location: "Aucun suivi de localisation",
    sdk: "Aucun SDK tiers"
  },

  footerNote: "Cette politique s’applique aussi au widget {appName} et à l’extension de rapport Temps d’écran, qui partagent le conteneur de données de l’app et n’ont aucun accès réseau propre."
},

/* ======================================================================
   NEDERLANDS — „je“, zoals in de rest van de app
   ====================================================================== */
"nl": {
  title: "Privacybeleid",
  lede: "{appName} draait volledig op je toestel. Geen account, geen server, geen analytics. Deze pagina legt in gewone taal uit wat op je iPhone blijft, wat het toestel verlaat — niets — en welke controle je hebt.",
  chipEffective: "Van kracht",
  chipUpdated: "Bijgewerkt",
  chipVersion: "Versie",
  chipOffline: "Werkt offline",

  sections: [
    {
      h: "In één alinea",
      kind: "hero",
      body: [
        { p: "{appName} is een lokale tool voor schermtijd en app-blokkering. Alles wat je erin maakt — blokkeerschema’s, geblokkeerde apps, gebruiksgegevens, je toegangscode, je beveiligingsvragen — wordt uitsluitend opgeslagen in de privéopslag van {appName} op deze iPhone. Niets daarvan wordt ergens naartoe gestuurd, want de app bevat helemaal geen netwerkcode." }
      ]
    },
    {
      h: "Wat we nooit verzamelen",
      body: [
        { p: "De lijst hieronder is geen belofte voor de toekomst, maar beschrijft de versie die je in handen hebt." },
        { checklist: true }
      ]
    },
    {
      h: "Gegevens die alleen op je toestel staan",
      body: [
        { p: "Alles hieronder staat in de sandbox van de app. Verwijder je {appName}, dan is het allemaal weg." },
        { ul: [
          "Blokkeerschema’s — namen, tijdvakken, weekdagen, herhaalregels",
          "De apps en categorieën die je hebt geblokkeerd",
          "Schermtijdstatistieken op basis van Apples schermtijdgegevens",
          "Je toegangscode en je beveiligingsvragen met antwoorden",
          "Een lokale cache van je aankoopstatus, zodat de app offline werkt",
          "Voorkeuren — uiterlijk, taal, tekst van meldingen"
        ] }
      ]
    },
    {
      h: "Schermtijd en Family Controls",
      body: [
        { p: "{appName} gebruikt Apples frameworks Family Controls, DeviceActivity en ManagedSettings — dezelfde techniek achter Schermtijd in iOS. iOS vraagt je die toestemming expliciet te geven, en de gegevens die deze frameworks opleveren blijven op dit toestel." },
        { p: "Welke apps je gebruikt, hoe lang, en welke websites je bezoekt, legt iOS op dit toestel vast. {appName} stuurt daar niets van door en kan dat ook niet — de app bevat geen enkele netwerkcode." }
      ]
    },
    {
      h: "Meldingen",
      body: [
        { p: "Herinneringen zijn lokale meldingen die iOS zelf inplant. Ze ontstaan op je toestel; er is geen meldingsserver bij betrokken en er wordt nooit een pushtoken aangemaakt." }
      ]
    },
    {
      h: "Aankopen",
      body: [
        { p: "De optionele upgrade naar de volledige versie wordt verkocht via Apples in-app aankopen. Apple verwerkt de betaling — wij ontvangen je naam, kaartnummer of factuuradres nooit. {appName} komt alleen te weten óf er een geldige aankoop is, en bewaart dat antwoord lokaal zodat functies ook offline ontgrendeld worden." }
      ]
    },
    {
      h: "Kinderen",
      body: [
        { p: "{appName} is gemaakt voor gezinnen en vereist geen account, dus er worden van niemand persoonsgegevens verzameld, ook niet van kinderen onder de {minAge} jaar. Ouders hebben aan onze kant niets in te zien of te verwijderen, omdat er niets bij ons aankomt." }
      ]
    },
    {
      h: "Bewaring en verwijdering",
      body: [
        { p: "Gegevens bestaan alleen zolang de app is geïnstalleerd. Bij het verwijderen van {appName} verdwijnt de volledige datacontainer. Er is geen back-up aan onze kant en geen account om op te zeggen — we hebben je gegevens nooit gehad." }
      ]
    },
    {
      h: "Je rechten",
      body: [
        { p: "Privacywetten zoals de AVG en de CCPA geven je het recht op inzage, correctie, overdracht en verwijdering van je persoonsgegevens, en het recht bezwaar te maken tegen verwerking. Omdat {appName} geen persoonsgegevens naar ons stuurt, hebben we niets om in te zien, te corrigeren of te verwijderen. De bijbehorende knoppen staan allemaal op je toestel: bekijk of wijzig je gegevens in de app, of verwijder de app om alles te wissen." },
        { p: "Denk je dat iets verkeerd is behandeld, mail dan naar {email} en we reageren." }
      ]
    },
    {
      h: "Disclaimer",
      kind: "disclaimer",
      body: [
        { h3: "Geen medisch of professioneel advies",
          p: "De schermtijdcijfers in {appName} zijn alleen ter informatie. Ze zijn geen medisch, psychologisch, diagnostisch of therapeutisch advies en vervangen professionele begeleiding niet. Beslissingen over de schermgewoonten van een kind blijven van jou." },
        { h3: "Gegevens kunnen verloren gaan",
          p: "Gebruiksgegevens en schema’s staan alleen op dit toestel. Ze gaan verloren als de app wordt verwijderd, als het toestel kwijtraakt of beschadigd raakt, of als het besturingssysteem app-gegevens wist. Op back-ups via iCloud of een computer zijn Apples voorwaarden van toepassing." }
      ]
    },
    {
      h: "Wijzigingen in dit beleid",
      body: [
        { p: "Verandert de app op een manier die dit beleid raakt, dan wordt de datum bovenaan bijgewerkt en gaat de nieuwe tekst mee met de app-update. Als je {appName} na een update blijft gebruiken, accepteer je de herziene versie." }
      ]
    },
    {
      h: "Contact",
      body: [
        { p: "Vragen over dit beleid of over hoe {appName} met gegevens omgaat, kun je sturen naar {email}. We lezen elk bericht." }
      ]
    }
  ],

  practices: {
    ads: "Geen advertentie-ID’s",
    analytics: "Geen analytics of gebruiksgebeurtenissen",
    crash: "Geen crashrapporten naar ons",
    identity: "Geen naam, telefoonnummer of adres",
    account: "Geen Apple-account of e-mailadres",
    media: "Geen toegang tot foto’s of contacten",
    location: "Geen locatietracking",
    sdk: "Geen SDK’s van derden"
  },

  footerNote: "Dit beleid geldt ook voor de {appName}-widget en de schermtijd-rapportage-extensie. Zij delen de datacontainer van de app en hebben zelf geen netwerktoegang."
}

/* @@TEXT-END@@ */
};
