/* ==========================================================================
   Privacy policy content
   --------------------------------------------------------------------------
   Everything a maintainer is likely to change lives in POLICY_INFO below.
   The prose lives in POLICY_TEXT, one block per language.

   To change a fact (email, dates, app name, what the app does), edit
   POLICY_INFO only — every language picks it up through {placeholders}.
   To change wording, edit POLICY_TEXT. Section order in every language must
   stay identical; the renderer walks them in order.
   ========================================================================== */

window.POLICY_INFO = {
  email: "qq595187561@gmail.com",
  effectiveDate: "2026-10-18",
  updatedDate: "2026-10-18",
  version: "1.0",
  /// Youngest age named in the children's section (COPPA uses 13).
  minAge: 13,
  /// The public copy of this page, linked from the footer.
  policyURL: "https://regina3579.github.io/colouring-app-for-kids/privacy.html",

  appName: {
    en: "Coloring Paradise",
    "zh-Hans": "涂色乐园",
    "zh-Hant": "塗色樂園",
    ja: "ぬりえランド",
    ko: "색칠놀이",
    de: "Ausmalen",
    fr: "Coloriage",
    es: "Colorear",
    pt: "Colorir",
    ar: "تلوين",
    id: "Mewarnai",
    vi: "Tô màu",
    th: "ระบายสี",
    ms: "Mewarna"
  },

  /* Things the app genuinely does NOT do. Delete an id here the day that
     feature ships, and rewrite the matching section — do not just leave it. */
  neverDo: ["ads", "tracking", "thirdParty", "account", "upload", "photoRead"]
};

window.POLICY_LANGS = ["en", "zh-Hans", "zh-Hant", "ja", "ko", "de", "fr", "es", "pt", "ar", "id", "vi", "th", "ms"];

window.POLICY_NATIVE_NAMES = {
  en: "English",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
  ja: "日本語",
  ko: "한국어",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  pt: "Português",
  ar: "العربية",
  id: "Bahasa Indonesia",
  vi: "Tiếng Việt",
  th: "ไทย",
  ms: "Bahasa Melayu"
};

window.POLICY_TEXT = {

  en: {
    title: "Privacy Policy",
    effective: "Effective",
    updated: "Updated",
    version: "Version",
    shareLink: "Web version",
    lede: "{appName} collects nothing about you or your child. No account, no ads, no tracking, and nothing leaves the device.",
    practices: {
      ads: "Advertising or ad SDKs",
      tracking: "Tracking, analytics or profiling",
      thirdParty: "Third-party code",
      account: "Accounts, sign-in or profiles",
      upload: "Uploading your pictures",
      photoRead: "Reading your Photo library"
    },
    sections: [
      {
        hero: true,
        h: "The short version",
        p: ["{appName} is a colouring app for children. It runs entirely offline: no account, no ads, no tracking, and nothing is sent to a server. Every stroke a child makes stays on the device it was made on."]
      },
      {
        h: "Information we collect",
        p: ["None. The app never asks for a name, an email address, a phone number, a birthday or a location, and there is no sign-in. We receive nothing about you or your child, because the app has nowhere to send it."]
      },
      {
        h: "What is saved on your device",
        p: ["Finished pictures, custom line art and half-finished drafts are stored in the app's own folder on your device. They are not backed up to us and not uploaded anywhere. Deleting the app deletes them. Pictures you chose to save to Photos stay in Photos until you remove them there."]
      },
      {
        h: "Photos permission",
        p: ["{appName} asks for add-only access to Photos, and only at the moment you tap Save to Photos. That permission lets the app write a picture or a video into your library. It cannot read, browse or delete anything already in your Photos."]
      },
      {
        h: "Purchases",
        p: ["Payments are handled entirely by Apple through the App Store. We never see your name, card number or billing address. Apple tells the app only whether a purchase exists, so that it can unlock what you paid for. Refunds and purchase history are managed in your Apple ID."]
      },
      {
        h: "Children's privacy",
        p: ["{appName} is made for children and rated 4+. Because the app collects nothing, there is nothing for a child to give away. Buying and settings sit behind a parents' gate — a small arithmetic question — so a child cannot purchase anything or change settings by tapping around.",
            "We do not knowingly collect personal information from anyone, and certainly not from a child under {minAge}. If you believe a child has somehow sent us personal information, write to {email} and we will delete it."]
      },
      {
        h: "What this app never does",
        p: ["These are not promises about the future; they describe how the app is built today."],
        checklist: true
      },
      {
        h: "Your rights",
        p: ["Laws such as the GDPR in Europe, the CCPA in California and the PIPL in China give you the right to see, correct, export or delete the personal data a company holds about you. We hold none, so there is nothing to request. Purchase records are held by Apple — you can review or delete them in your Apple ID settings."]
      },
      {
        h: "Changes to this policy",
        p: ["If the app changes in a way that affects privacy, this page is updated and the date at the top moves with it. A change that would mean collecting something new is announced inside the app before it happens, and needs your consent first."]
      },
      {
        h: "Contact",
        p: ["Questions about this policy, or a request about your data? Write to {email} and we will reply. We answer in English and Chinese."]
      },
      {
        h: "Disclaimer",
        disclaimer: true,
        p: ["This page describes how {appName} actually behaves. It is not legal advice, and it creates no obligation beyond what applicable law requires.",
            "{appName} is provided “as is”, without warranty of any kind. The App Store, iCloud and Photos are services run by Apple, not by us; what Apple does with your data is covered by Apple's own privacy policy.",
            "To the extent permitted by law, the developer is not liable for indirect or incidental loss arising from use of the app. Nothing in this policy limits the rights you have under mandatory consumer protection law in your country."]
      }
    ]
  },

  "zh-Hans": {
    title: "隐私政策",
    effective: "生效日期",
    updated: "更新日期",
    version: "版本",
    shareLink: "网页版",
    lede: "{appName} 不收集你和孩子的任何信息。没有账号、没有广告、没有追踪，所有内容都不离开设备。",
    practices: {
      ads: "广告与广告 SDK",
      tracking: "追踪、统计与用户画像",
      thirdParty: "第三方代码",
      account: "账号、登录与个人资料",
      upload: "上传你画的图片",
      photoRead: "读取你的相册"
    },
    sections: [
      {
        hero: true,
        h: "一句话版本",
        p: ["{appName} 是一款给孩子用的涂色 App，完全离线运行：没有账号、没有广告、没有追踪，也不向任何服务器发送内容。孩子画的每一笔，都只留在画它的那台设备上。"]
      },
      {
        h: "我们收集哪些信息",
        p: ["没有。App 不索取姓名、邮箱、电话、生日或位置，也没有登录。我们收不到任何关于你或你孩子的信息——因为 App 根本没有可以发送的地方。"]
      },
      {
        h: "设备上保存了什么",
        p: ["画完的作品、自绘线稿和没画完的草稿都保存在设备上 App 自己的文件夹里。它们不会备份给我们，也不会被上传。删除 App 就会删除它们。你主动保存到相册的图片会留在相册里，直到你在相册中删除。"]
      },
      {
        h: "相册权限",
        p: ["{appName} 只申请「仅添加」相册权限，而且只在你点「保存到相册」的那一刻申请。这个权限让 App 能把图片或视频写入相册，但不能读取、浏览或删除相册里已有的任何内容。"]
      },
      {
        h: "内购与付款",
        p: ["所有付款都由 Apple 通过 App Store 处理。我们看不到你的姓名、卡号或账单地址。Apple 只告诉 App 某笔购买是否存在，以便解锁你已经付费的内容。退款与购买记录都在你的 Apple ID 中管理。"]
      },
      {
        h: "儿童隐私",
        p: ["{appName} 面向儿童，分级 4+。因为 App 什么都不收集，孩子也就没有什么可以泄露。购买与设置藏在家长门后面（一道简单算术题），孩子乱点也买不了东西、改不了设置。",
            "我们不会有意收集任何人的个人信息，更不会收集 {minAge} 岁以下儿童的信息。如果你认为有孩子以某种方式向我们发送了个人信息，请写信到 {email}，我们会将其删除。"]
      },
      {
        h: "这个 App 从不做什么",
        p: ["这不是对未来的承诺，而是 App 现在的实际做法。"],
        checklist: true
      },
      {
        h: "你的权利",
        p: ["欧洲的 GDPR、美国加州的 CCPA、中国的《个人信息保护法》等法律赋予你查看、更正、导出和删除企业所持个人数据的权利。我们什么也不持有，所以没有可申请的数据。购买记录由 Apple 持有，你可以在 Apple ID 设置中查看或删除。"]
      },
      {
        h: "政策变更",
        p: ["如果 App 的改动影响到隐私，我们会更新这一页，并同步修改顶部的日期。如果某项改动意味着要开始收集新信息，我们会在上线前先在 App 内说明，并且先取得你的同意。"]
      },
      {
        h: "联系我们",
        p: ["对本政策有疑问，或想就你的数据提出请求？写信到 {email}，我们会回复。中文、英文都可以。"]
      },
      {
        h: "免责声明",
        disclaimer: true,
        p: ["本页说明 {appName} 的实际行为，不构成法律意见，也不在适用法律要求之外创设任何义务。",
            "{appName} 按「现状」提供，不附带任何形式的保证。App Store、iCloud 与相册由 Apple 运营，不由我们运营；Apple 如何处理你的数据，适用 Apple 自己的隐私政策。",
            "在法律允许的范围内，开发者不对因使用本 App 而产生的间接或附带损失承担责任。本政策不限制你依据所在国家或地区强制性消费者保护法律所享有的权利。"]
      }
    ]
  },

  "zh-Hant": {
    title: "隱私權政策",
    effective: "生效日期",
    updated: "更新日期",
    version: "版本",
    shareLink: "網頁版",
    lede: "{appName} 不會蒐集你與孩子的任何資訊。沒有帳號、沒有廣告、沒有追蹤，所有內容都不離開裝置。",
    practices: {
      ads: "廣告與廣告 SDK",
      tracking: "追蹤、統計與使用者輪廓",
      thirdParty: "第三方程式碼",
      account: "帳號、登入與個人檔案",
      upload: "上傳你畫的圖片",
      photoRead: "讀取你的相簿"
    },
    sections: [
      {
        hero: true,
        h: "一句話版本",
        p: ["{appName} 是一款給孩子用的塗色 App，完全離線運作：沒有帳號、沒有廣告、沒有追蹤，也不向任何伺服器傳送內容。孩子畫的每一筆，都只留在畫它的那台裝置上。"]
      },
      {
        h: "我們蒐集哪些資訊",
        p: ["沒有。App 不會索取姓名、電子郵件、電話、生日或位置，也沒有登入功能。我們收不到任何關於你或你孩子的資訊——因為 App 根本沒有可以傳送的地方。"]
      },
      {
        h: "裝置上儲存了什麼",
        p: ["畫完的作品、自繪線稿與未完成的草稿都存放在裝置上 App 自己的資料夾裡。它們不會備份給我們，也不會上傳。刪除 App 就會刪除它們。你主動儲存到相簿的圖片會留在相簿裡，直到你在相簿中刪除。"]
      },
      {
        h: "相簿權限",
        p: ["{appName} 只申請「僅加入」相簿權限，而且只在你按下「儲存到相簿」的那一刻申請。這個權限讓 App 能把圖片或影片寫入相簿，但不能讀取、瀏覽或刪除相簿裡既有的任何內容。"]
      },
      {
        h: "內購與付款",
        p: ["所有付款都由 Apple 透過 App Store 處理。我們看不到你的姓名、卡號或帳單地址。Apple 只會告訴 App 某筆購買是否存在，以便解鎖你已付費的內容。退款與購買紀錄都在你的 Apple ID 中管理。"]
      },
      {
        h: "兒童隱私",
        p: ["{appName} 面向兒童，分級 4+。因為 App 什麼都不蒐集，孩子也就沒有什麼可以外流。購買與設定藏在家長驗證後面（一道簡單算術題），孩子亂點也買不了東西、改不了設定。",
            "我們不會刻意蒐集任何人的個人資料，更不會蒐集 {minAge} 歲以下兒童的資料。如果你認為有孩子以某種方式向我們傳送了個人資料，請寫信到 {email}，我們會將其刪除。"]
      },
      {
        h: "這個 App 從不做什麼",
        p: ["這不是對未來的承諾，而是 App 現在的實際做法。"],
        checklist: true
      },
      {
        h: "你的權利",
        p: ["歐洲的 GDPR、美國加州的 CCPA、中國的《個人資訊保護法》等法律賦予你查看、更正、匯出與刪除企業所持個人資料的權利。我們什麼也不持有，所以沒有可申請的資料。購買紀錄由 Apple 持有，你可以在 Apple ID 設定中查看或刪除。"]
      },
      {
        h: "政策變更",
        p: ["如果 App 的改動影響到隱私，我們會更新這一頁，並同步修改頂端的日期。如果某項改動意味著要開始蒐集新資訊，我們會在上線前先在 App 內說明，並且先取得你的同意。"]
      },
      {
        h: "聯絡我們",
        p: ["對本政策有疑問，或想就你的資料提出請求？寫信到 {email}，我們會回覆。中文、英文都可以。"]
      },
      {
        h: "免責聲明",
        disclaimer: true,
        p: ["本頁說明 {appName} 的實際行為，不構成法律意見，也不在適用法律要求之外創設任何義務。",
            "{appName} 按『現狀』提供，不附帶任何形式的保證。App Store、iCloud 與相簿由 Apple 營運，不由我們營運；Apple 如何處理你的資料，適用 Apple 自己的隱私權政策。",
            "在法律允許的範圍內，開發者不對因使用本 App 而產生的間接或附帶損失承擔責任。本政策不限制你依據所在國家或地區強制性消費者保護法律所享有的權利。"]
      }
    ]
  },

  ja: {
    title: "プライバシーポリシー",
    effective: "制定日",
    updated: "最終更新",
    version: "バージョン",
    shareLink: "ウェブ版",
    lede: "{appName} は、あなたやお子さまに関する情報を一切集めません。アカウントなし、広告なし、トラッキングなし。データは端末の外に出ません。",
    practices: {
      ads: "広告・広告SDK",
      tracking: "トラッキング・解析・プロファイリング",
      thirdParty: "第三者コード",
      account: "アカウント・ログイン・プロフィール",
      upload: "描いた絵のアップロード",
      photoRead: "写真ライブラリの読み取り"
    },
    sections: [
      {
        hero: true,
        h: "要点",
        p: ["{appName} は子どものための塗り絵アプリです。完全にオフラインで動作し、アカウントも広告もトラッキングもなく、サーバーへ何も送信しません。子どもが塗った線は、その端末の中だけに残ります。"]
      },
      {
        h: "収集する情報",
        p: ["ありません。氏名・メールアドレス・電話番号・生年月日・位置情報を求めることはなく、ログイン機能もありません。アプリには送信先そのものが存在しないため、私たちがあなたやお子さまの情報を受け取ることはありません。"]
      },
      {
        h: "端末に保存されるもの",
        p: ["完成した作品、自作の線画、塗りかけの下書きは、端末内のアプリ専用フォルダに保存されます。私たちへのバックアップや外部への送信は行いません。アプリを削除するとこれらも削除されます。写真に保存した画像は、写真アプリで削除するまで残ります。"]
      },
      {
        h: "写真へのアクセス",
        p: ["{appName} が求めるのは「追加のみ」の写真アクセスで、しかも「写真に保存」をタップした瞬間だけです。この権限で画像や動画を写真に書き込めますが、すでにある写真を読み取ったり、閲覧・削除したりすることはできません。"]
      },
      {
        h: "購入について",
        p: ["支払いはすべて Apple が App Store を通じて処理します。氏名・カード番号・請求先住所を私たちが見ることはありません。アプリが受け取るのは「その購入があるかどうか」だけで、購入済みの内容を解放するために使います。返金と購入履歴は Apple ID で管理されます。"]
      },
      {
        h: "子どものプライバシー",
        p: ["{appName} は子ども向けで、4+ のレーティングです。何も集めていないため、子どもが渡してしまう情報もありません。購入と設定は保護者ゲート（簡単な計算問題）の奥にあり、子どもが適当にタップしても購入や設定変更はできません。",
            "私たちはどなたからも、まして {minAge} 歳未満の子どもからも、意図して個人情報を収集することはありません。子どもが個人情報を送ってしまったと思われる場合は {email} までご連絡ください。削除します。"]
      },
      {
        h: "このアプリが決してしないこと",
        p: ["将来への約束ではなく、現在のアプリの作りそのものです。"],
        checklist: true
      },
      {
        h: "あなたの権利",
        p: ["EU の GDPR、カリフォルニア州の CCPA、中国の個人情報保護法などは、企業が保有する個人データの閲覧・訂正・エクスポート・削除を求める権利を定めています。私たちは何も保有していないため、請求できるデータはありません。購入記録は Apple が保有しており、Apple ID の設定から確認・削除できます。"]
      },
      {
        h: "本ポリシーの変更",
        p: ["プライバシーに関わる変更がある場合は、このページを更新し、冒頭の日付も合わせて変更します。新たに情報を集める必要が生じる変更は、実施前にアプリ内でお知らせし、事前に同意をいただきます。"]
      },
      {
        h: "お問い合わせ",
        p: ["本ポリシーについてのご質問、データに関するご請求は {email} までお送りください。英語と中国語で対応します。"]
      },
      {
        h: "免責事項",
        disclaimer: true,
        p: ["本ページは {appName} の実際の挙動を説明するものであり、法的助言ではなく、適用法が求める範囲を超えて義務を生じさせるものではありません。",
            "{appName} は『現状のまま』提供され、いかなる保証も伴いません。App Store、iCloud、写真は Apple が運営するサービスであり、私たちではありません。Apple によるデータの取り扱いには Apple 自身のプライバシーポリシーが適用されます。",
            "法律が認める範囲で、開発者は本アプリの利用に起因する間接的・付随的損害について責任を負いません。本ポリシーは、お住まいの国の強行的な消費者保護法によりあなたに認められた権利を制限するものではありません。"]
      }
    ]
  },

  ko: {
    title: "개인정보 처리방침",
    effective: "시행일",
    updated: "최종 수정",
    version: "버전",
    shareLink: "웹 버전",
    lede: "{appName}은(는) 여러분과 아이에 대한 어떤 정보도 수집하지 않습니다. 계정도, 광고도, 추적도 없으며 데이터는 기기 밖으로 나가지 않습니다.",
    practices: {
      ads: "광고 및 광고 SDK",
      tracking: "추적·분석·프로파일링",
      thirdParty: "제3자 코드",
      account: "계정·로그인·프로필",
      upload: "그림 업로드",
      photoRead: "사진 보관함 읽기"
    },
    sections: [
      {
        hero: true,
        h: "요점",
        p: ["{appName}은(는) 아이를 위한 색칠 앱입니다. 완전히 오프라인으로 동작하며 계정, 광고, 추적이 없고 서버로 아무것도 보내지 않습니다. 아이가 칠한 모든 획은 그 기기 안에만 남습니다."]
      },
      {
        h: "수집하는 정보",
        p: ["없습니다. 이름, 이메일, 전화번호, 생년월일, 위치를 요구하지 않으며 로그인 기능도 없습니다. 앱에는 보낼 곳 자체가 없으므로 저희가 여러분이나 아이에 대한 정보를 받는 일은 없습니다."]
      },
      {
        h: "기기에 저장되는 것",
        p: ["완성한 그림, 직접 그린 선화, 미완성 초안은 기기 안 앱 전용 폴더에 저장됩니다. 저희 쪽으로 백업되거나 외부로 업로드되지 않습니다. 앱을 삭제하면 함께 삭제됩니다. 사진 앱에 저장한 이미지는 사진 앱에서 지울 때까지 남습니다."]
      },
      {
        h: "사진 접근 권한",
        p: ["{appName}은(는) ‘추가 전용’ 사진 권한만 요청하며, ‘사진에 저장’을 누른 그 순간에만 요청합니다. 이 권한으로 그림이나 영상을 사진 보관함에 쓸 수는 있지만, 이미 있는 사진을 읽거나 열람하거나 삭제할 수는 없습니다."]
      },
      {
        h: "구매",
        p: ["결제는 전적으로 Apple이 App Store를 통해 처리합니다. 저희는 이름, 카드 번호, 청구지 주소를 볼 수 없습니다. 앱이 전달받는 것은 ‘구매가 있는지 여부’뿐이며, 결제한 기능을 여는 데만 씁니다. 환불과 구매 내역은 Apple ID에서 관리됩니다."]
      },
      {
        h: "아동의 개인정보",
        p: ["{appName}은(는) 아이를 위한 앱이며 4+ 등급입니다. 아무것도 수집하지 않으므로 아이가 흘릴 정보도 없습니다. 구매와 설정은 보호자 확인(간단한 계산 문제) 뒤에 있어서 아이가 마구 눌러도 결제하거나 설정을 바꿀 수 없습니다.",
            "저희는 누구의 개인정보도, 특히 {minAge}세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다. 아이가 개인정보를 보냈다고 생각되면 {email}로 알려 주세요. 삭제하겠습니다."]
      },
      {
        h: "이 앱이 절대 하지 않는 것",
        p: ["미래에 대한 약속이 아니라, 지금 앱이 실제로 만들어진 방식입니다."],
        checklist: true
      },
      {
        h: "이용자의 권리",
        p: ["유럽의 GDPR, 캘리포니아의 CCPA, 중국의 개인정보보호법 등은 기업이 보유한 개인정보의 열람, 정정, 내보내기, 삭제를 요구할 권리를 보장합니다. 저희는 아무것도 보유하지 않으므로 요청할 데이터가 없습니다. 구매 기록은 Apple이 보유하며 Apple ID 설정에서 확인하거나 삭제할 수 있습니다."]
      },
      {
        h: "방침의 변경",
        p: ["개인정보에 영향을 주는 변경이 있으면 이 페이지를 갱신하고 상단의 날짜도 함께 바꿉니다. 새로운 정보를 수집해야 하는 변경이라면 시행 전에 앱 안에서 알리고 먼저 동의를 받습니다."]
      },
      {
        h: "문의",
        p: ["이 방침에 대한 질문이나 데이터 관련 요청은 {email}로 보내 주세요. 영어와 중국어로 답변합니다."]
      },
      {
        h: "면책 조항",
        disclaimer: true,
        p: ["이 페이지는 {appName}의 실제 동작을 설명합니다. 법률 자문이 아니며, 관련 법령이 요구하는 범위를 넘어 어떤 의무도 발생시키지 않습니다.",
            "{appName}은(는) ‘있는 그대로’ 제공되며 어떠한 보증도 하지 않습니다. App Store, iCloud, 사진은 Apple이 운영하는 서비스이며 저희가 아닙니다. Apple의 데이터 처리에는 Apple의 개인정보 처리방침이 적용됩니다.",
            "법이 허용하는 범위에서 개발자는 앱 사용으로 인한 간접적 또는 부수적 손실에 대해 책임지지 않습니다. 이 방침은 거주 국가의 강행적 소비자 보호법에 따라 여러분에게 부여된 권리를 제한하지 않습니다."]
      }
    ]
  },

  de: {
    title: "Datenschutzerklärung",
    effective: "Gültig ab",
    updated: "Zuletzt aktualisiert",
    version: "Version",
    shareLink: "Web-Version",
    lede: "{appName} sammelt nichts über dich oder dein Kind. Kein Konto, keine Werbung, kein Tracking – nichts verlässt das Gerät.",
    practices: {
      ads: "Werbung oder Werbe-SDKs",
      tracking: "Tracking, Analyse oder Profilbildung",
      thirdParty: "Code von Drittanbietern",
      account: "Konten, Anmeldung oder Profile",
      upload: "Hochladen deiner Bilder",
      photoRead: "Lesen deiner Fotomediathek"
    },
    sections: [
      {
        hero: true,
        h: "Kurzfassung",
        p: ["{appName} ist eine Mal-App für Kinder. Sie läuft vollständig offline: kein Konto, keine Werbung, kein Tracking, und nichts wird an einen Server geschickt. Jeder Strich, den ein Kind malt, bleibt auf dem Gerät, auf dem er entstanden ist."]
      },
      {
        h: "Welche Daten wir erheben",
        p: ["Keine. Die App fragt nie nach Name, E-Mail-Adresse, Telefonnummer, Geburtsdatum oder Standort, und es gibt keine Anmeldung. Wir erfahren nichts über dich oder dein Kind, weil die App keinen Ort hat, an den sie etwas senden könnte."]
      },
      {
        h: "Was auf deinem Gerät gespeichert wird",
        p: ["Fertige Bilder, selbst gezeichnete Vorlagen und unfertige Entwürfe liegen im eigenen Ordner der App auf deinem Gerät. Sie werden nicht bei uns gesichert und nirgendwohin hochgeladen. Löschst du die App, sind sie weg. Bilder, die du in „Fotos“ speicherst, bleiben dort, bis du sie löschst."]
      },
      {
        h: "Zugriff auf Fotos",
        p: ["{appName} bittet um reinen Schreibzugriff auf Fotos, und zwar erst in dem Moment, in dem du auf „In Fotos sichern“ tippst. Mit dieser Erlaubnis kann die App ein Bild oder Video in deine Mediathek schreiben. Sie kann vorhandene Fotos weder lesen noch durchsuchen oder löschen."]
      },
      {
        h: "Käufe",
        p: ["Zahlungen wickelt allein Apple über den App Store ab. Wir sehen weder deinen Namen noch deine Kartennummer oder Rechnungsadresse. Apple teilt der App nur mit, ob ein Kauf besteht – damit sie freischalten kann, was du bezahlt hast. Erstattungen und Kaufverlauf verwaltest du in deiner Apple-ID."]
      },
      {
        h: "Privatsphäre von Kindern",
        p: ["{appName} ist für Kinder gemacht und ab 4 Jahren freigegeben. Weil die App nichts sammelt, gibt es auch nichts, was ein Kind preisgeben könnte. Kaufen und Einstellungen liegen hinter einer Elternsperre – einer kleinen Rechenaufgabe –, sodass ein Kind durch Herumtippen weder kaufen noch etwas verstellen kann.",
            "Wir erheben wissentlich von niemandem personenbezogene Daten, erst recht nicht von Kindern unter {minAge} Jahren. Wenn du glaubst, dass ein Kind uns auf irgendeinem Weg Daten geschickt hat, schreib an {email}, und wir löschen sie."]
      },
      {
        h: "Was diese App nie tut",
        p: ["Das sind keine Versprechen für die Zukunft, sondern beschreibt, wie die App heute gebaut ist."],
        checklist: true
      },
      {
        h: "Deine Rechte",
        p: ["Gesetze wie die DSGVO in Europa, der CCPA in Kalifornien und das PIPL in China geben dir das Recht, die personenbezogenen Daten, die ein Unternehmen über dich speichert, einzusehen, zu berichtigen, zu exportieren oder löschen zu lassen. Wir speichern keine, es gibt also nichts zu beantragen. Kaufbelege liegen bei Apple – du kannst sie in den Einstellungen deiner Apple-ID einsehen oder löschen."]
      },
      {
        h: "Änderungen dieser Erklärung",
        p: ["Ändert sich die App in einer Weise, die den Datenschutz betrifft, wird diese Seite aktualisiert und das Datum oben mitgezogen. Eine Änderung, die das Erheben neuer Daten bedeuten würde, kündigen wir vorher in der App an und holen zuerst deine Zustimmung ein."]
      },
      {
        h: "Kontakt",
        p: ["Fragen zu dieser Erklärung oder ein Anliegen zu deinen Daten? Schreib an {email}, wir antworten. Auf Englisch und Chinesisch."]
      },
      {
        h: "Haftungsausschluss",
        disclaimer: true,
        p: ["Diese Seite beschreibt, wie {appName} tatsächlich funktioniert. Sie ist keine Rechtsberatung und begründet keine Pflichten über das hinaus, was das anwendbare Recht verlangt.",
            "{appName} wird „wie besehen“ bereitgestellt, ohne jegliche Gewährleistung. App Store, iCloud und Fotos sind Dienste von Apple, nicht von uns; wie Apple mit deinen Daten umgeht, regelt Apples eigene Datenschutzrichtlinie.",
            "Soweit gesetzlich zulässig, haftet der Entwickler nicht für mittelbare oder zufällige Schäden aus der Nutzung der App. Diese Erklärung beschränkt keine Rechte, die dir zwingendes Verbraucherschutzrecht in deinem Land einräumt."]
      }
    ]
  },

  fr: {
    title: "Politique de confidentialité",
    effective: "En vigueur le",
    updated: "Mise à jour le",
    version: "Version",
    shareLink: "Version web",
    lede: "{appName} ne collecte rien sur vous ni sur votre enfant. Pas de compte, pas de publicité, pas de suivi, et rien ne quitte l'appareil.",
    practices: {
      ads: "Publicité ou SDK publicitaires",
      tracking: "Suivi, analyse ou profilage",
      thirdParty: "Code tiers",
      account: "Comptes, connexion ou profils",
      upload: "Envoi de vos dessins",
      photoRead: "Lecture de votre photothèque"
    },
    sections: [
      {
        hero: true,
        h: "L'essentiel",
        p: ["{appName} est une application de coloriage pour les enfants. Elle fonctionne entièrement hors ligne : pas de compte, pas de publicité, pas de suivi, et rien n'est envoyé à un serveur. Chaque trait dessiné par un enfant reste sur l'appareil où il a été tracé."]
      },
      {
        h: "Données que nous collectons",
        p: ["Aucune. L'application ne demande jamais de nom, d'adresse e-mail, de numéro de téléphone, de date de naissance ni de position, et il n'y a pas de connexion. Nous ne recevons rien sur vous ni sur votre enfant, car l'application n'a aucun endroit où envoyer quoi que ce soit."]
      },
      {
        h: "Ce qui est enregistré sur votre appareil",
        p: ["Les dessins terminés, les tracés que vous créez et les brouillons inachevés sont stockés dans le dossier propre à l'application, sur votre appareil. Ils ne nous sont pas sauvegardés et ne sont envoyés nulle part. Supprimer l'application les supprime. Les images que vous enregistrez dans Photos y restent jusqu'à ce que vous les supprimiez."]
      },
      {
        h: "Accès aux photos",
        p: ["{appName} demande un accès en ajout seul à Photos, et uniquement au moment où vous touchez « Enregistrer dans Photos ». Cette autorisation permet à l'application d'écrire une image ou une vidéo dans votre photothèque. Elle ne peut ni lire, ni parcourir, ni supprimer ce qui s'y trouve déjà."]
      },
      {
        h: "Achats",
        p: ["Les paiements sont entièrement traités par Apple via l'App Store. Nous ne voyons jamais votre nom, votre numéro de carte ni votre adresse de facturation. Apple indique seulement à l'application si un achat existe, afin de débloquer ce que vous avez payé. Les remboursements et l'historique d'achat sont gérés dans votre identifiant Apple."]
      },
      {
        h: "Vie privée des enfants",
        p: ["{appName} est conçue pour les enfants et classée 4+. Comme l'application ne collecte rien, un enfant n'a rien à divulguer. Les achats et les réglages sont protégés par un verrou parental — une petite opération de calcul —, si bien qu'un enfant ne peut rien acheter ni modifier en touchant au hasard.",
            "Nous ne collectons sciemment de données personnelles auprès de personne, et encore moins auprès d'un enfant de moins de {minAge} ans. Si vous pensez qu'un enfant nous a transmis des données, écrivez à {email} et nous les supprimerons."]
      },
      {
        h: "Ce que cette application ne fait jamais",
        p: ["Ce ne sont pas des promesses pour l'avenir : c'est ainsi que l'application est construite aujourd'hui."],
        checklist: true
      },
      {
        h: "Vos droits",
        p: ["Des lois comme le RGPD en Europe, le CCPA en Californie et la PIPL en Chine vous donnent le droit de consulter, rectifier, exporter ou supprimer les données personnelles qu'une entreprise détient sur vous. Nous n'en détenons aucune : il n'y a donc rien à demander. Les justificatifs d'achat sont détenus par Apple — vous pouvez les consulter ou les supprimer dans les réglages de votre identifiant Apple."]
      },
      {
        h: "Modifications de cette politique",
        p: ["Si l'application évolue d'une manière qui touche à la vie privée, cette page est mise à jour et la date en haut change aussi. Une modification qui impliquerait de collecter de nouvelles données serait annoncée dans l'application avant sa mise en œuvre, et nécessiterait votre accord au préalable."]
      },
      {
        h: "Contact",
        p: ["Une question sur cette politique, ou une demande concernant vos données ? Écrivez à {email} et nous répondrons. En anglais et en chinois."]
      },
      {
        h: "Avertissement",
        disclaimer: true,
        p: ["Cette page décrit le fonctionnement réel de {appName}. Elle ne constitue pas un conseil juridique et ne crée aucune obligation au-delà de ce que le droit applicable impose.",
            "{appName} est fournie « en l'état », sans garantie d'aucune sorte. L'App Store, iCloud et Photos sont des services exploités par Apple, pas par nous ; le traitement de vos données par Apple relève de la politique de confidentialité d'Apple.",
            "Dans la mesure permise par la loi, le développeur n'est pas responsable des pertes indirectes ou accessoires résultant de l'utilisation de l'application. Cette politique ne limite aucun droit que vous confère le droit impératif de la consommation de votre pays."]
      }
    ]
  },

  es: {
    title: "Política de privacidad",
    effective: "En vigor desde",
    updated: "Actualizada",
    version: "Versión",
    shareLink: "Versión web",
    lede: "{appName} no recoge nada sobre ti ni sobre tu hijo. Sin cuenta, sin anuncios, sin seguimiento: nada sale del dispositivo.",
    practices: {
      ads: "Publicidad o SDK de anuncios",
      tracking: "Seguimiento, analítica o perfilado",
      thirdParty: "Código de terceros",
      account: "Cuentas, inicio de sesión o perfiles",
      upload: "Subir tus dibujos",
      photoRead: "Leer tu fototeca"
    },
    sections: [
      {
        hero: true,
        h: "En resumen",
        p: ["{appName} es una app de colorear para niños. Funciona completamente sin conexión: sin cuenta, sin anuncios, sin seguimiento y sin enviar nada a un servidor. Cada trazo que hace un niño se queda en el dispositivo donde lo hizo."]
      },
      {
        h: "Qué datos recogemos",
        p: ["Ninguno. La app nunca pide nombre, correo electrónico, teléfono, fecha de nacimiento ni ubicación, y no hay inicio de sesión. No recibimos nada sobre ti ni sobre tu hijo, porque la app no tiene dónde enviarlo."]
      },
      {
        h: "Qué se guarda en tu dispositivo",
        p: ["Los dibujos terminados, los trazos que creas tú y los borradores a medias se guardan en la carpeta propia de la app, en tu dispositivo. No se copian a nuestros servidores ni se suben a ningún sitio. Si borras la app, se borran. Las imágenes que guardes en Fotos se quedan ahí hasta que las borres."]
      },
      {
        h: "Acceso a Fotos",
        p: ["{appName} pide acceso de solo adición a Fotos, y solo en el momento en que tocas «Guardar en Fotos». Ese permiso permite a la app escribir una imagen o un vídeo en tu fototeca. No puede leer, explorar ni borrar nada de lo que ya tienes en Fotos."]
      },
      {
        h: "Compras",
        p: ["Los pagos los gestiona Apple por completo a través del App Store. Nunca vemos tu nombre, tu número de tarjeta ni tu dirección de facturación. Apple solo comunica a la app si existe una compra, para poder desbloquear lo que has pagado. Los reembolsos y el historial de compras se gestionan en tu Apple ID."]
      },
      {
        h: "Privacidad de los niños",
        p: ["{appName} está pensada para niños y tiene clasificación 4+. Como la app no recoge nada, un niño no tiene nada que revelar. Las compras y los ajustes están detrás de un control parental —una pequeña operación aritmética—, así que un niño no puede comprar ni cambiar ajustes tocando al azar.",
            "No recogemos conscientemente datos personales de nadie, y menos de un niño menor de {minAge} años. Si crees que un niño nos ha enviado datos de algún modo, escribe a {email} y los borraremos."]
      },
      {
        h: "Lo que esta app nunca hace",
        p: ["No son promesas de futuro: es cómo está construida la app hoy."],
        checklist: true
      },
      {
        h: "Tus derechos",
        p: ["Leyes como el RGPD en Europa, la CCPA en California y la PIPL en China te dan derecho a consultar, rectificar, exportar o suprimir los datos personales que una empresa tenga sobre ti. Nosotros no tenemos ninguno, así que no hay nada que solicitar. Los registros de compra los tiene Apple: puedes consultarlos o borrarlos en los ajustes de tu Apple ID."]
      },
      {
        h: "Cambios en esta política",
        p: ["Si la app cambia de una forma que afecte a la privacidad, actualizamos esta página y la fecha de arriba. Un cambio que implicara recoger datos nuevos se anunciaría dentro de la app antes de aplicarse y requeriría tu consentimiento previo."]
      },
      {
        h: "Contacto",
        p: ["¿Dudas sobre esta política o una solicitud sobre tus datos? Escribe a {email} y te responderemos. En inglés y chino."]
      },
      {
        h: "Aviso legal",
        disclaimer: true,
        p: ["Esta página describe cómo funciona realmente {appName}. No es asesoramiento jurídico y no crea ninguna obligación más allá de lo que exija la ley aplicable.",
            "{appName} se ofrece «tal cual», sin garantía de ningún tipo. El App Store, iCloud y Fotos son servicios gestionados por Apple, no por nosotros; el tratamiento que Apple hace de tus datos se rige por su propia política de privacidad.",
            "En la medida en que la ley lo permita, el desarrollador no responde de pérdidas indirectas o incidentales derivadas del uso de la app. Esta política no limita los derechos que te reconoce la legislación imperativa de consumo de tu país."]
      }
    ]
  },

  pt: {
    title: "Política de Privacidade",
    effective: "Em vigor desde",
    updated: "Atualizada em",
    version: "Versão",
    shareLink: "Versão web",
    lede: "{appName} não coleta nada sobre você nem sobre seu filho. Sem conta, sem anúncios, sem rastreamento: nada sai do aparelho.",
    practices: {
      ads: "Anúncios ou SDKs de anúncio",
      tracking: "Rastreamento, análise ou perfilamento",
      thirdParty: "Código de terceiros",
      account: "Contas, login ou perfis",
      upload: "Envio dos seus desenhos",
      photoRead: "Leitura da sua fototeca"
    },
    sections: [
      {
        hero: true,
        h: "Em resumo",
        p: ["{appName} é um app de colorir para crianças. Funciona totalmente offline: sem conta, sem anúncios, sem rastreamento e sem enviar nada para servidor. Cada traço que a criança faz fica no aparelho onde foi feito."]
      },
      {
        h: "Quais dados coletamos",
        p: ["Nenhum. O app nunca pede nome, e-mail, telefone, data de nascimento ou localização, e não tem login. Não recebemos nada sobre você ou seu filho, porque o app não tem para onde enviar."]
      },
      {
        h: "O que fica salvo no seu aparelho",
        p: ["Desenhos prontos, traçados criados por você e rascunhos inacabados ficam na pasta do próprio app, no seu aparelho. Não são copiados para nós nem enviados a lugar nenhum. Apagar o app apaga tudo isso. As imagens que você salvar em Fotos ficam lá até você apagá-las."]
      },
      {
        h: "Permissão de Fotos",
        p: ["O {appName} pede acesso somente para adição às Fotos, e apenas no momento em que você toca em “Salvar em Fotos”. Essa permissão deixa o app gravar uma imagem ou um vídeo na sua fototeca. Ele não consegue ler, navegar nem apagar nada que já esteja lá."]
      },
      {
        h: "Compras",
        p: ["Os pagamentos são processados inteiramente pela Apple, pela App Store. Nunca vemos seu nome, número do cartão ou endereço de cobrança. A Apple informa ao app apenas se existe uma compra, para liberar o que você pagou. Reembolsos e histórico de compras ficam no seu Apple ID."]
      },
      {
        h: "Privacidade das crianças",
        p: ["O {appName} é feito para crianças e tem classificação 4+. Como o app não coleta nada, a criança não tem nada a revelar. Compras e ajustes ficam atrás de um bloqueio parental — uma continha de aritmética —, então a criança não consegue comprar nem mexer em nada tocando à toa.",
            "Não coletamos conscientemente dados pessoais de ninguém, muito menos de crianças com menos de {minAge} anos. Se acreditar que uma criança nos enviou dados de alguma forma, escreva para {email} e nós os apagaremos."]
      },
      {
        h: "O que este app nunca faz",
        p: ["Não são promessas para o futuro: é como o app é construído hoje."],
        checklist: true
      },
      {
        h: "Seus direitos",
        p: ["Leis como o GDPR na Europa, a CCPA na Califórnia e a PIPL na China garantem o direito de acessar, corrigir, exportar ou excluir os dados pessoais que uma empresa mantém sobre você. Não mantemos nenhum, então não há nada a solicitar. Os registros de compra são mantidos pela Apple — você pode consultá-los ou apagá-los nos ajustes do seu Apple ID."]
      },
      {
        h: "Mudanças nesta política",
        p: ["Se o app mudar de um jeito que afete a privacidade, esta página é atualizada e a data no topo muda junto. Uma mudança que significasse coletar dados novos seria anunciada dentro do app antes de acontecer e exigiria seu consentimento primeiro."]
      },
      {
        h: "Contato",
        p: ["Dúvidas sobre esta política ou um pedido sobre seus dados? Escreva para {email} e responderemos. Em inglês e chinês."]
      },
      {
        h: "Aviso legal",
        disclaimer: true,
        p: ["Esta página descreve como o {appName} realmente funciona. Não é aconselhamento jurídico e não cria obrigação além do que a lei aplicável exige.",
            "O {appName} é fornecido “no estado em que se encontra”, sem garantia de qualquer tipo. App Store, iCloud e Fotos são serviços operados pela Apple, não por nós; o tratamento dos seus dados pela Apple segue a política de privacidade dela.",
            "Na medida permitida por lei, o desenvolvedor não responde por perdas indiretas ou incidentais decorrentes do uso do app. Esta política não limita os direitos que a legislação consumerista obrigatória do seu país garante."]
      }
    ]
  },

  ar: {
    title: "سياسة الخصوصية",
    effective: "سارية من",
    updated: "آخر تحديث",
    version: "الإصدار",
    shareLink: "النسخة الإلكترونية",
    lede: "{appName} لا تجمع أي شيء عنك أو عن طفلك. لا حساب، لا إعلانات، لا تتبّع، ولا شيء يغادر الجهاز.",
    practices: {
      ads: "الإعلانات أو حِزم الإعلانات",
      tracking: "التتبّع أو التحليلات أو إنشاء الملفات",
      thirdParty: "تعليمات برمجية لجهات خارجية",
      account: "الحسابات أو تسجيل الدخول أو الملفات الشخصية",
      upload: "رفع رسوماتك",
      photoRead: "قراءة مكتبة الصور"
    },
    sections: [
      {
        hero: true,
        h: "الخلاصة",
        p: ["{appName} تطبيق تلوين للأطفال. يعمل دون اتصال بالكامل: لا حساب، لا إعلانات، لا تتبّع، ولا يُرسل أي شيء إلى أي خادم. كل خط يرسمه الطفل يبقى على الجهاز الذي رُسم عليه."]
      },
      {
        h: "المعلومات التي نجمعها",
        p: ["لا شيء. لا يطلب التطبيق اسمًا ولا بريدًا إلكترونيًا ولا رقم هاتف ولا تاريخ ميلاد ولا موقعًا، ولا يوجد تسجيل دخول. نحن لا نستلم أي معلومات عنك أو عن طفلك، لأن التطبيق لا يملك مكانًا يرسلها إليه."]
      },
      {
        h: "ما يُحفظ على جهازك",
        p: ["الرسومات المكتملة والخطوط التي ترسمها بنفسك والمسودات غير المكتملة تُحفظ في مجلد التطبيق الخاص على جهازك. لا تُنسخ إلينا ولا تُرفع إلى أي مكان. حذف التطبيق يحذفها. الصور التي تختار حفظها في تطبيق الصور تبقى هناك حتى تحذفها."]
      },
      {
        h: "إذن الصور",
        p: ["يطلب {appName} إذن الإضافة فقط إلى الصور، وذلك في لحظة الضغط على «حفظ في الصور» فحسب. يسمح هذا الإذن للتطبيق بكتابة صورة أو مقطع فيديو في مكتبتك، ولكنه لا يستطيع قراءة ما لديك أو استعراضه أو حذفه."]
      },
      {
        h: "المشتريات",
        p: ["تتولى Apple كل عمليات الدفع عبر App Store. لا نرى اسمك ولا رقم بطاقتك ولا عنوان الفوترة. تخبر Apple التطبيق فقط بوجود عملية شراء من عدمه، ليفتح لك ما دفعته. تُدار المبالغ المستردة وسجل المشتريات في حساب Apple ID الخاص بك."]
      },
      {
        h: "خصوصية الأطفال",
        p: ["{appName} مصمم للأطفال وتصنيفه 4+. ولأن التطبيق لا يجمع شيئًا، فلا يوجد ما يمكن للطفل أن يفصح عنه. الشراء والإعدادات خلف بوابة للوالدين — مسألة حسابية بسيطة — فلا يستطيع الطفل الشراء أو تغيير الإعدادات بالضغط العشوائي.",
            "لا نجمع عن قصد معلومات شخصية من أي شخص، وبالأخص من طفل دون {minAge} عامًا. إذا كنت تعتقد أن طفلًا أرسل إلينا معلومات شخصية بأي طريقة، فاكتب إلى {email} وسنحذفها."]
      },
      {
        h: "ما لا يفعله هذا التطبيق أبدًا",
        p: ["ليست وعودًا للمستقبل، بل وصف لما بُني عليه التطبيق اليوم."],
        checklist: true
      },
      {
        h: "حقوقك",
        p: ["تمنحك قوانين مثل GDPR في أوروبا وCCPA في كاليفورنيا وPIPL في الصين الحق في الاطلاع على البيانات الشخصية التي تحتفظ بها أي شركة عنك أو تصحيحها أو تصديرها أو حذفها. نحن لا نحتفظ بأي منها، فلا يوجد ما تطلبه. سجلات الشراء تحتفظ بها Apple، ويمكنك مراجعتها أو حذفها من إعدادات Apple ID."]
      },
      {
        h: "تغييرات هذه السياسة",
        p: ["إذا تغيّر التطبيق بشكل يمسّ الخصوصية، نحدّث هذه الصفحة ويتغيّر التاريخ في الأعلى معها. أي تغيير يعني جمع معلومات جديدة سيُعلن داخل التطبيق قبل تنفيذه، ويحتاج إلى موافقتك أولًا."]
      },
      {
        h: "التواصل",
        p: ["أسئلة حول هذه السياسة، أو طلب يخص بياناتك؟ اكتب إلى {email} وسنرد. نجيب بالصينية والإنجليزية."]
      },
      {
        h: "إخلاء المسؤولية",
        disclaimer: true,
        p: ["توضّح هذه الصفحة كيف يعمل {appName} فعليًا. وهي ليست استشارة قانونية ولا تُنشئ أي التزام يتجاوز ما يفرضه القانون المعمول به.",
            "يُقدَّم {appName} «كما هو» دون أي ضمان من أي نوع. App Store وiCloud والصور خدمات تديرها Apple وليست من إدارتنا؛ وما تفعله Apple ببياناتك تحكمه سياسة الخصوصية الخاصة بها.",
            "بالحدود التي يسمح بها القانون، لا يتحمّل المطوّر مسؤولية أي خسارة غير مباشرة أو عرضية ناتجة عن استخدام التطبيق. ولا تحدّ هذه السياسة من أي حقوق يمنحها لك قانون حماية المستهلك الإلزامي في بلدك."]
      }
    ]
  },

  id: {
    title: "Kebijakan Privasi",
    effective: "Berlaku sejak",
    updated: "Diperbarui",
    version: "Versi",
    shareLink: "Versi web",
    lede: "{appName} tidak mengumpulkan apa pun tentang Anda atau anak Anda. Tanpa akun, tanpa iklan, tanpa pelacakan, dan tidak ada yang keluar dari perangkat.",
    practices: {
      ads: "Iklan atau SDK iklan",
      tracking: "Pelacakan, analitik, atau pembuatan profil",
      thirdParty: "Kode pihak ketiga",
      account: "Akun, masuk, atau profil",
      upload: "Mengunggah gambar Anda",
      photoRead: "Membaca pustaka Foto Anda"
    },
    sections: [
      {
        hero: true,
        h: "Ringkasan",
        p: ["{appName} adalah aplikasi mewarnai untuk anak-anak. Aplikasi berjalan sepenuhnya luring: tanpa akun, tanpa iklan, tanpa pelacakan, dan tidak ada yang dikirim ke server. Setiap goresan yang dibuat anak tetap di perangkat tempat goresan itu dibuat."]
      },
      {
        h: "Data yang kami kumpulkan",
        p: ["Tidak ada. Aplikasi tidak pernah meminta nama, alamat email, nomor telepon, tanggal lahir, atau lokasi, dan tidak ada fitur masuk. Kami tidak menerima apa pun tentang Anda atau anak Anda, karena aplikasi tidak punya tempat untuk mengirimnya."]
      },
      {
        h: "Yang tersimpan di perangkat",
        p: ["Gambar yang selesai, garis buatan sendiri, dan draf yang belum selesai disimpan di folder milik aplikasi pada perangkat Anda. Semuanya tidak dicadangkan ke kami dan tidak diunggah ke mana pun. Menghapus aplikasi akan menghapusnya. Gambar yang Anda simpan ke Foto tetap ada di sana sampai Anda menghapusnya."]
      },
      {
        h: "Izin Foto",
        p: ["{appName} meminta akses tambah-saja ke Foto, dan hanya saat Anda mengetuk “Simpan ke Foto”. Izin itu memungkinkan aplikasi menulis gambar atau video ke pustaka Anda. Aplikasi tidak dapat membaca, menelusuri, atau menghapus apa pun yang sudah ada di Foto."]
      },
      {
        h: "Pembelian",
        p: ["Semua pembayaran ditangani sepenuhnya oleh Apple melalui App Store. Kami tidak pernah melihat nama, nomor kartu, atau alamat tagihan Anda. Apple hanya memberi tahu aplikasi apakah suatu pembelian ada, agar aplikasi bisa membuka yang sudah Anda bayar. Pengembalian dana dan riwayat pembelian dikelola di Apple ID Anda."]
      },
      {
        h: "Privasi anak",
        p: ["{appName} dibuat untuk anak-anak dan berperingkat 4+. Karena aplikasi tidak mengumpulkan apa pun, tidak ada yang bisa bocor dari anak. Pembelian dan pengaturan berada di balik gerbang orang tua — soal hitungan sederhana — sehingga anak tidak bisa membeli atau mengubah pengaturan hanya dengan mengetuk sembarangan.",
            "Kami tidak dengan sengaja mengumpulkan data pribadi siapa pun, apalagi anak di bawah {minAge} tahun. Jika Anda yakin ada anak yang mengirimkan data pribadi kepada kami, tulis ke {email} dan kami akan menghapusnya."]
      },
      {
        h: "Yang tidak pernah dilakukan aplikasi ini",
        p: ["Ini bukan janji untuk masa depan, melainkan cara aplikasi ini dibangun hari ini."],
        checklist: true
      },
      {
        h: "Hak Anda",
        p: ["Undang-undang seperti GDPR di Eropa, CCPA di California, dan PIPL di Tiongkok memberi Anda hak untuk melihat, memperbaiki, mengekspor, atau menghapus data pribadi yang dipegang perusahaan tentang Anda. Kami tidak memegang apa pun, jadi tidak ada yang perlu diminta. Catatan pembelian dipegang Apple — Anda dapat meninjaunya atau menghapusnya di pengaturan Apple ID."]
      },
      {
        h: "Perubahan kebijakan",
        p: ["Jika aplikasi berubah dengan cara yang memengaruhi privasi, halaman ini diperbarui dan tanggal di atas ikut berubah. Perubahan yang berarti mengumpulkan data baru akan diumumkan di dalam aplikasi sebelum diberlakukan, dan memerlukan persetujuan Anda lebih dahulu."]
      },
      {
        h: "Kontak",
        p: ["Ada pertanyaan tentang kebijakan ini, atau permintaan terkait data Anda? Tulis ke {email} dan kami akan menjawab. Dalam bahasa Inggris dan Mandarin."]
      },
      {
        h: "Penafian",
        disclaimer: true,
        p: ["Halaman ini menjelaskan bagaimana {appName} benar-benar berperilaku. Ini bukan nasihat hukum dan tidak menimbulkan kewajiban melebihi yang diwajibkan hukum yang berlaku.",
            "{appName} disediakan “sebagaimana adanya”, tanpa jaminan dalam bentuk apa pun. App Store, iCloud, dan Foto adalah layanan yang dijalankan Apple, bukan kami; cara Apple menangani data Anda diatur oleh kebijakan privasi Apple sendiri.",
            "Sejauh diizinkan hukum, pengembang tidak bertanggung jawab atas kerugian tidak langsung atau insidental yang timbul dari penggunaan aplikasi. Kebijakan ini tidak membatasi hak Anda menurut hukum perlindungan konsumen yang bersifat wajib di negara Anda."]
      }
    ]
  },

  vi: {
    title: "Chính sách quyền riêng tư",
    effective: "Có hiệu lực từ",
    updated: "Cập nhật",
    version: "Phiên bản",
    shareLink: "Bản web",
    lede: "{appName} không thu thập bất cứ thông tin nào về bạn hay con bạn. Không tài khoản, không quảng cáo, không theo dõi, và không có gì rời khỏi thiết bị.",
    practices: {
      ads: "Quảng cáo hoặc SDK quảng cáo",
      tracking: "Theo dõi, phân tích hoặc lập hồ sơ",
      thirdParty: "Mã của bên thứ ba",
      account: "Tài khoản, đăng nhập hoặc hồ sơ",
      upload: "Tải tranh của bạn lên",
      photoRead: "Đọc thư viện Ảnh"
    },
    sections: [
      {
        hero: true,
        h: "Tóm tắt",
        p: ["{appName} là ứng dụng tô màu cho trẻ em. Ứng dụng chạy hoàn toàn ngoại tuyến: không tài khoản, không quảng cáo, không theo dõi, và không gửi gì lên máy chủ. Mỗi nét trẻ vẽ đều ở lại trên chính thiết bị đã vẽ ra nó."]
      },
      {
        h: "Thông tin chúng tôi thu thập",
        p: ["Không có. Ứng dụng không bao giờ hỏi tên, email, số điện thoại, ngày sinh hay vị trí, và không có đăng nhập. Chúng tôi không nhận được gì về bạn hay con bạn, vì ứng dụng không có nơi nào để gửi."]
      },
      {
        h: "Những gì được lưu trên thiết bị",
        p: ["Tranh đã hoàn thành, nét vẽ tự tạo và bản nháp dở dang được lưu trong thư mục riêng của ứng dụng trên thiết bị của bạn. Chúng không được sao lưu về phía chúng tôi và không được tải lên đâu cả. Xoá ứng dụng là xoá luôn chúng. Ảnh bạn chọn lưu vào Ảnh sẽ ở đó cho đến khi bạn xoá."]
      },
      {
        h: "Quyền truy cập Ảnh",
        p: ["{appName} chỉ xin quyền thêm vào Ảnh, và chỉ vào đúng lúc bạn nhấn “Lưu vào Ảnh”. Quyền đó cho phép ứng dụng ghi một ảnh hoặc video vào thư viện của bạn. Ứng dụng không thể đọc, duyệt hay xoá bất cứ thứ gì đã có trong Ảnh."]
      },
      {
        h: "Mua hàng",
        p: ["Mọi khoản thanh toán đều do Apple xử lý qua App Store. Chúng tôi không bao giờ thấy tên, số thẻ hay địa chỉ thanh toán của bạn. Apple chỉ cho ứng dụng biết một giao dịch có tồn tại hay không, để mở khoá phần bạn đã trả tiền. Hoàn tiền và lịch sử mua hàng được quản lý trong Apple ID của bạn."]
      },
      {
        h: "Quyền riêng tư của trẻ em",
        p: ["{appName} dành cho trẻ em và được xếp hạng 4+. Vì ứng dụng không thu thập gì, trẻ cũng không có gì để lộ. Việc mua hàng và cài đặt nằm sau cổng phụ huynh — một phép tính nhỏ — nên trẻ không thể mua hay đổi cài đặt bằng cách bấm lung tung.",
            "Chúng tôi không cố ý thu thập thông tin cá nhân của bất kỳ ai, càng không thu thập của trẻ dưới {minAge} tuổi. Nếu bạn cho rằng một đứa trẻ đã gửi thông tin cá nhân cho chúng tôi, hãy viết tới {email} và chúng tôi sẽ xoá."]
      },
      {
        h: "Những điều ứng dụng này không bao giờ làm",
        p: ["Đây không phải lời hứa cho tương lai, mà là cách ứng dụng được xây dựng hiện nay."],
        checklist: true
      },
      {
        h: "Quyền của bạn",
        p: ["Các luật như GDPR ở châu Âu, CCPA ở California và PIPL ở Trung Quốc cho bạn quyền xem, sửa, xuất hoặc xoá dữ liệu cá nhân mà một công ty đang giữ về bạn. Chúng tôi không giữ dữ liệu nào, nên không có gì để yêu cầu. Hồ sơ mua hàng do Apple nắm giữ — bạn có thể xem hoặc xoá trong cài đặt Apple ID."]
      },
      {
        h: "Thay đổi chính sách",
        p: ["Nếu ứng dụng thay đổi theo hướng ảnh hưởng đến quyền riêng tư, trang này sẽ được cập nhật và ngày ở trên cùng thay đổi theo. Một thay đổi đồng nghĩa với việc thu thập dữ liệu mới sẽ được thông báo trong ứng dụng trước khi áp dụng, và cần sự đồng ý của bạn trước."]
      },
      {
        h: "Liên hệ",
        p: ["Có câu hỏi về chính sách này, hoặc yêu cầu về dữ liệu của bạn? Hãy viết tới {email}, chúng tôi sẽ trả lời. Bằng tiếng Trung và tiếng Anh."]
      },
      {
        h: "Tuyên bố miễn trừ trách nhiệm",
        disclaimer: true,
        p: ["Trang này mô tả cách {appName} thực sự hoạt động. Đây không phải tư vấn pháp lý và không tạo ra nghĩa vụ nào vượt quá yêu cầu của pháp luật hiện hành.",
            "{appName} được cung cấp “nguyên trạng”, không kèm bất kỳ bảo đảm nào. App Store, iCloud và Ảnh là dịch vụ do Apple vận hành, không phải chúng tôi; cách Apple xử lý dữ liệu của bạn tuân theo chính sách riêng tư của Apple.",
            "Trong phạm vi pháp luật cho phép, nhà phát triển không chịu trách nhiệm về tổn thất gián tiếp hoặc ngẫu nhiên phát sinh từ việc dùng ứng dụng. Chính sách này không giới hạn các quyền mà luật bảo vệ người tiêu dùng bắt buộc tại quốc gia của bạn dành cho bạn."]
      }
    ]
  },

  th: {
    title: "นโยบายความเป็นส่วนตัว",
    effective: "มีผลตั้งแต่",
    updated: "อัปเดต",
    version: "เวอร์ชัน",
    shareLink: "เว็บไซต์",
    lede: "{appName} ไม่เก็บข้อมูลใด ๆ เกี่ยวกับคุณหรือบุตรหลาน ไม่มีบัญชี ไม่มีโฆษณา ไม่มีการติดตาม และไม่มีข้อมูลออกจากเครื่อง",
    practices: {
      ads: "โฆษณาหรือ SDK โฆษณา",
      tracking: "การติดตาม การวิเคราะห์ หรือการสร้างโปรไฟล์",
      thirdParty: "โค้ดของบุคคลที่สาม",
      account: "บัญชี การเข้าสู่ระบบ หรือโปรไฟล์",
      upload: "การอัปโหลดรูปที่คุณวาด",
      photoRead: "การอ่านคลังภาพของคุณ"
    },
    sections: [
      {
        hero: true,
        h: "สรุปสั้น ๆ",
        p: ["{appName} เป็นแอประบายสีสำหรับเด็ก ทำงานแบบออฟไลน์ทั้งหมด ไม่มีบัญชี ไม่มีโฆษณา ไม่มีการติดตาม และไม่ส่งสิ่งใดไปยังเซิร์ฟเวอร์ ทุกเส้นที่เด็กวาดจะอยู่ในเครื่องที่วาดเท่านั้น"]
      },
      {
        h: "ข้อมูลที่เราเก็บ",
        p: ["ไม่มีเลย แอปไม่เคยขอชื่อ อีเมล เบอร์โทร วันเกิด หรือตำแหน่งที่ตั้ง และไม่มีการเข้าสู่ระบบ เราไม่ได้รับข้อมูลใด ๆ เกี่ยวกับคุณหรือบุตรหลาน เพราะแอปไม่มีที่ให้ส่ง"]
      },
      {
        h: "สิ่งที่บันทึกไว้ในเครื่อง",
        p: ["ภาพที่ระบายเสร็จ เส้นที่คุณวาดเอง และแบบร่างที่ยังไม่เสร็จ จะถูกเก็บไว้ในโฟลเดอร์ของแอปในเครื่องของคุณ ไม่ถูกสำรองมาให้เราและไม่อัปโหลดไปที่ใด การลบแอปจะลบสิ่งเหล่านี้ด้วย ภาพที่คุณเลือกบันทึกลงแอปรูปภาพจะอยู่ที่นั่นจนกว่าคุณจะลบ"]
      },
      {
        h: "สิทธิ์เข้าถึงรูปภาพ",
        p: ["{appName} ขอสิทธิ์แบบเพิ่มอย่างเดียวในรูปภาพ และขอเฉพาะตอนที่คุณแตะ “บันทึกลงรูปภาพ” เท่านั้น สิทธิ์นี้ให้แอปเขียนภาพหรือวิดีโอลงในคลังของคุณ แต่ไม่สามารถอ่าน เรียกดู หรือลบสิ่งที่มีอยู่แล้วในรูปภาพได้"]
      },
      {
        h: "การซื้อ",
        p: ["การชำระเงินทั้งหมดดำเนินการโดย Apple ผ่าน App Store เราไม่เคยเห็นชื่อ หมายเลขบัตร หรือที่อยู่สำหรับเรียกเก็บเงิน Apple แจ้งแอปเพียงว่ามีการซื้ออยู่หรือไม่ เพื่อปลดล็อกสิ่งที่คุณชำระเงินแล้ว การคืนเงินและประวัติการซื้อจัดการได้ใน Apple ID ของคุณ"]
      },
      {
        h: "ความเป็นส่วนตัวของเด็ก",
        p: ["{appName} ทำขึ้นสำหรับเด็กและมีเรตติ้ง 4+ เพราะแอปไม่เก็บอะไรเลย เด็กจึงไม่มีอะไรให้เปิดเผย การซื้อและการตั้งค่าอยู่หลังประตูผู้ปกครอง — โจทย์เลขง่าย ๆ — เด็กจึงซื้อหรือเปลี่ยนการตั้งค่าไม่ได้ด้วยการกดเล่นไปทั่ว",
            "เราไม่เก็บข้อมูลส่วนบุคคลของใครโดยเจตนา โดยเฉพาะเด็กอายุต่ำกว่า {minAge} ปี หากคุณเชื่อว่าเด็กส่งข้อมูลส่วนบุคคลมาให้เราด้วยวิธีใดก็ตาม เขียนมาที่ {email} แล้วเราจะลบให้"]
      },
      {
        h: "สิ่งที่แอปนี้ไม่เคยทำ",
        p: ["นี่ไม่ใช่คำสัญญาเรื่องอนาคต แต่คือวิธีที่แอปถูกสร้างขึ้นในตอนนี้"],
        checklist: true
      },
      {
        h: "สิทธิของคุณ",
        p: ["กฎหมายอย่าง GDPR ในยุโรป CCPA ในแคลิฟอร์เนีย และ PIPL ในจีน ให้สิทธิคุณในการดู แก้ไข ส่งออก หรือลบข้อมูลส่วนบุคคลที่บริษัทถืออยู่เกี่ยวกับคุณ เราไม่ได้ถือข้อมูลใด จึงไม่มีอะไรให้ยื่นขอ ข้อมูลการซื้ออยู่ในมือ Apple คุณดูหรือลบได้ในการตั้งค่า Apple ID"]
      },
      {
        h: "การเปลี่ยนแปลงนโยบาย",
        p: ["หากแอปเปลี่ยนในทางที่กระทบความเป็นส่วนตัว เราจะปรับปรุงหน้านี้และเปลี่ยนวันที่ด้านบนด้วย การเปลี่ยนแปลงที่จะต้องเก็บข้อมูลใหม่จะแจ้งให้ทราบในแอปก่อนดำเนินการ และต้องได้รับความยินยอมจากคุณก่อน"]
      },
      {
        h: "ติดต่อ",
        p: ["มีคำถามเกี่ยวกับนโยบายนี้ หรือต้องการยื่นคำขอเกี่ยวกับข้อมูลของคุณ เขียนมาที่ {email} แล้วเราจะตอบกลับ (ตอบเป็นภาษาจีนและอังกฤษ)"]
      },
      {
        h: "ข้อจำกัดความรับผิด",
        disclaimer: true,
        p: ["หน้านี้อธิบายการทำงานจริงของ {appName} ไม่ใช่คำแนะนำทางกฎหมาย และไม่ก่อให้เกิดหน้าที่ใดเกินกว่าที่กฎหมายที่ใช้บังคับกำหนด",
            "{appName} ให้บริการ “ตามสภาพที่เป็นอยู่” โดยไม่มีการรับประกันใด ๆ App Store, iCloud และรูปภาพเป็นบริการที่ Apple ดำเนินการ ไม่ใช่เรา การที่ Apple จัดการข้อมูลของคุณเป็นไปตามนโยบายความเป็นส่วนตัวของ Apple เอง",
            "ภายในขอบเขตที่กฎหมายอนุญาต ผู้พัฒนาไม่รับผิดชอบต่อความเสียหายทางอ้อมหรือโดยบังเอิญที่เกิดจากการใช้แอป นโยบายนี้ไม่จำกัดสิทธิที่กฎหมายคุ้มครองผู้บริโภคภาคบังคับในประเทศของคุณมอบให้คุณ"]
      }
    ]
  },

  ms: {
    title: "Dasar Privasi",
    effective: "Berkuat kuasa",
    updated: "Dikemas kini",
    version: "Versi",
    shareLink: "Versi web",
    lede: "{appName} tidak mengumpul apa-apa tentang anda atau anak anda. Tiada akaun, tiada iklan, tiada penjejakan, dan tiada apa yang keluar dari peranti.",
    practices: {
      ads: "Iklan atau SDK iklan",
      tracking: "Penjejakan, analitik atau pemprofilan",
      thirdParty: "Kod pihak ketiga",
      account: "Akaun, log masuk atau profil",
      upload: "Memuat naik lukisan anda",
      photoRead: "Membaca pustaka Foto anda"
    },
    sections: [
      {
        hero: true,
        h: "Ringkasan",
        p: ["{appName} ialah aplikasi mewarna untuk kanak-kanak. Ia berjalan sepenuhnya luar talian: tiada akaun, tiada iklan, tiada penjejakan, dan tiada apa dihantar ke pelayan. Setiap sapuan yang dibuat anak kekal pada peranti tempat ia dibuat."]
      },
      {
        h: "Maklumat yang kami kumpul",
        p: ["Tiada. Aplikasi tidak pernah meminta nama, alamat e-mel, nombor telefon, tarikh lahir atau lokasi, dan tiada log masuk. Kami tidak menerima apa-apa tentang anda atau anak anda, kerana aplikasi tiada tempat untuk menghantarnya."]
      },
      {
        h: "Apa yang disimpan pada peranti",
        p: ["Lukisan siap, garisan buatan sendiri dan draf separuh siap disimpan dalam folder aplikasi sendiri pada peranti anda. Ia tidak disandarkan kepada kami dan tidak dimuat naik ke mana-mana. Memadam aplikasi akan memadamkannya. Gambar yang anda simpan ke Foto kekal di sana sehingga anda memadamnya."]
      },
      {
        h: "Kebenaran Foto",
        p: ["{appName} meminta akses tambah sahaja ke Foto, dan hanya pada saat anda mengetik “Simpan ke Foto”. Kebenaran itu membolehkan aplikasi menulis gambar atau video ke pustaka anda. Ia tidak boleh membaca, menyemak imbas atau memadam apa-apa yang sudah ada dalam Foto anda."]
      },
      {
        h: "Pembelian",
        p: ["Semua pembayaran dikendalikan sepenuhnya oleh Apple melalui App Store. Kami tidak pernah melihat nama, nombor kad atau alamat bil anda. Apple hanya memberitahu aplikasi sama ada sesuatu pembelian wujud, supaya aplikasi boleh membuka apa yang telah anda bayar. Bayaran balik dan sejarah pembelian diurus dalam Apple ID anda."]
      },
      {
        h: "Privasi kanak-kanak",
        p: ["{appName} dibuat untuk kanak-kanak dan bertaraf 4+. Kerana aplikasi tidak mengumpul apa-apa, tiada apa yang boleh didedahkan oleh kanak-kanak. Pembelian dan tetapan berada di sebalik pintu ibu bapa — soalan kira-kira mudah — jadi kanak-kanak tidak boleh membeli atau menukar tetapan dengan mengetik sesuka hati.",
            "Kami tidak dengan sengaja mengumpul maklumat peribadi sesiapa, apatah lagi kanak-kanak di bawah {minAge} tahun. Jika anda percaya seorang kanak-kanak telah menghantar maklumat peribadi kepada kami, tulis ke {email} dan kami akan memadamkannya."]
      },
      {
        h: "Apa yang aplikasi ini tidak pernah lakukan",
        p: ["Ini bukan janji untuk masa depan, tetapi cara aplikasi ini dibina hari ini."],
        checklist: true
      },
      {
        h: "Hak anda",
        p: ["Undang-undang seperti GDPR di Eropah, CCPA di California dan PIPL di China memberi anda hak untuk melihat, membetulkan, mengeksport atau memadam data peribadi yang dipegang syarikat tentang anda. Kami tidak memegang apa-apa, jadi tiada apa untuk diminta. Rekod pembelian dipegang oleh Apple — anda boleh menyemak atau memadamnya dalam tetapan Apple ID."]
      },
      {
        h: "Perubahan dasar",
        p: ["Jika aplikasi berubah dengan cara yang menjejaskan privasi, halaman ini dikemas kini dan tarikh di atas turut berubah. Perubahan yang bermakna mengumpul data baharu akan diumumkan dalam aplikasi sebelum dilaksanakan, dan memerlukan persetujuan anda terlebih dahulu."]
      },
      {
        h: "Hubungi",
        p: ["Ada soalan tentang dasar ini, atau permintaan mengenai data anda? Tulis ke {email} dan kami akan menjawab. Dalam bahasa Cina dan Inggeris."]
      },
      {
        h: "Penafian",
        disclaimer: true,
        p: ["Halaman ini menerangkan bagaimana {appName} sebenarnya berfungsi. Ia bukan nasihat guaman dan tidak menimbulkan sebarang kewajipan melebihi apa yang dikehendaki undang-undang yang terpakai.",
            "{appName} disediakan “seadanya”, tanpa jaminan dalam apa jua bentuk. App Store, iCloud dan Foto ialah perkhidmatan yang dijalankan oleh Apple, bukan oleh kami; cara Apple mengendalikan data anda tertakluk pada dasar privasi Apple sendiri.",
            "Setakat yang dibenarkan undang-undang, pembangun tidak bertanggungjawab atas kerugian tidak langsung atau sampingan yang timbul daripada penggunaan aplikasi. Dasar ini tidak mengehadkan hak anda di bawah undang-undang perlindungan pengguna mandatori di negara anda."]
      }
    ]
  }

};
