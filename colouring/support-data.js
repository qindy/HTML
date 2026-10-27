/* ==========================================================================
   Support page content
   --------------------------------------------------------------------------
   Everything a maintainer is likely to change lives in SUPPORT_INFO below.
   The prose lives in SUPPORT_TEXT, one block per language.

   Rules of the house:
   - Change the email or the privacy URL in SUPPORT_INFO only; every language
     picks it up through {email} / {appName}.
   - Keep the same number of FAQ items in every language, in the same order.
     The renderer walks them in order and the answers describe real app
     behaviour, so a missing item is worse than a rough translation.
   - Only state what the app actually does. If a feature changes, fix every
     language in the same commit.
   ========================================================================== */

window.SUPPORT_INFO = {
  email: "qq595187561@gmail.com",
  updatedDate: "2026-10-27",
  minAge: 13,
  /// The policy page this one links to. Relative on purpose: `privacy.html`
  /// sits next to this file in the app bundle and on GitHub Pages.
  policyURL: "privacy.html",

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
  }
};

window.SUPPORT_LANGS = ["en", "zh-Hans", "zh-Hant", "ja", "ko", "de", "fr", "es", "pt", "ar", "id", "vi", "th", "ms"];

window.SUPPORT_NATIVE_NAMES = {
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

window.SUPPORT_TEXT = {

  /* ---------------------------------------------------------------- en --- */
  en: {
    title: "Support",
    lede: "Something not working, or a question we haven't answered? Start here. If you still need help, send us an email — a real person reads it.",
    updated: "Updated",
    contactH: "Email us",
    contactP: "Write to {email} and we will reply. Please include your device model, iOS version and app version so we can help faster.",
    faqH: "Frequently asked questions",
    faq: [
      {
        q: "How do I start coloring?",
        a: "Open a category on the home screen, tap a picture, choose a color at the bottom, then tap the area you want to fill. Tap the green check mark at the top right when you are done."
      },
      {
        q: "Why do some pictures have a lock?",
        a: "The app is free to download and a set of pictures is free to color. The rest open with a one-time purchase made by an adult. Every purchase lives inside Settings, behind the grown-ups' gate."
      },
      {
        q: "I bought something before. How do I get it back on a new device?",
        a: "Open Settings, pass the grown-ups' gate, tap the Pro row, then choose \"Restore Purchases\" at the bottom of that page. Sign in with the same Apple ID you bought with."
      },
      {
        q: "Where are my finished pictures stored?",
        a: "On this device only — there are no servers and no account. Deleting the app or switching devices removes them, so use \"Save to Photos\" on a picture's detail page to keep a copy."
      },
      {
        q: "I deleted a picture. Does my free slot come back?",
        a: "No. Each free slot is granted once per Apple ID, and deleting work does not return it."
      },
      {
        q: "Does the app need the internet? Does it collect data?",
        a: "No connection is needed after the download, and nothing is collected: no ads, no analytics, no accounts. See the privacy policy for the details."
      },
      {
        q: "Can my child buy something by accident?",
        a: "Purchases are only reachable from Settings, after an arithmetic question for grown-ups. Anywhere a child can tap, the app only suggests asking an adult."
      },
      {
        q: "Why can't I save my own line art?",
        a: "The app needs at least one closed shape before it can be colored. Join the ends of your lines so an area is enclosed, then try again."
      },
      {
        q: "Which devices are supported?",
        a: "iPhone and iPad running iOS 17 or later. You can draw with a finger, and with Apple Pencil on iPad."
      }
    ],
    tipsH: "When you write to us, please include",
    tips: [
      "Device model (for example iPhone 15, iPad Air 11-inch)",
      "iOS version (Settings → General → About)",
      "App version (in the app: Settings, at the bottom of the page)",
      "A screenshot, or what you did right before the problem appeared"
    ],
    policyH: "Privacy",
    policyP: "We collect nothing at all. The full explanation is in the privacy policy.",
    policyLink: "Privacy Policy"
  },

  /* ----------------------------------------------------------- zh-Hans --- */
  "zh-Hans": {
    title: "技术支持",
    lede: "遇到问题，或者有我们还没回答的疑问？先看下面。找不到答案就发邮件给我们，会有真人回复。",
    updated: "更新于",
    contactH: "发邮件给我们",
    contactP: "写信到 {email}，我们会回复。麻烦附上设备型号、iOS 版本和 App 版本，这样能更快帮你定位问题。",
    faqH: "常见问题",
    faq: [
      {
        q: "怎么开始涂色？",
        a: "在首页点开一个分类，选一张线稿，在底部挑颜色，再点画面里想涂的区域。涂完点右上角绿色的 ✔️ 就行。"
      },
      {
        q: "为什么有的线稿带小锁？",
        a: "App 免费下载，其中一部分线稿可以直接涂；其余的由大人一次性购买后解锁。所有购买都只在「设置」里、经过家长门之后才能进行。"
      },
      {
        q: "之前买过了，换了新设备怎么找回？",
        a: "进入「设置」→ 通过家长门 → 点畅画那一行 → 页面底部的「恢复购买」，用同一个 Apple ID 即可。"
      },
      {
        q: "涂好的作品存在哪里？会丢吗？",
        a: "只存在这台设备上——我们没有服务器，也没有账号。删除 App 或换设备就会消失，建议在作品详情页用「存到相册」留一份。"
      },
      {
        q: "删掉一张作品，免费名额会还回来吗？",
        a: "不会。免费名额每个 Apple ID 只送一次，删除作品不退还。"
      },
      {
        q: "App 需要联网吗？会收集我的数据吗？",
        a: "下载后不需要联网，也不收集任何数据：没有广告、没有统计、没有账号。详情见隐私政策。"
      },
      {
        q: "孩子会不会误买？",
        a: "购买入口只在「设置」里，并且要先答一道算术题。孩子能点到的地方，只会提示「请大人来」。"
      },
      {
        q: "自己画的线稿存不下来？",
        a: "需要至少一个封闭区域才能上色保存。把线条首尾接上、围出一块地方，再试一次。"
      },
      {
        q: "支持哪些设备？",
        a: "iPhone 和 iPad，系统 iOS 17 或更新。可以用手指画，iPad 上支持 Apple Pencil。"
      }
    ],
    tipsH: "写信时请一并告诉我们",
    tips: [
      "设备型号（例如 iPhone 15、iPad Air 11 英寸）",
      "iOS 版本（设置 → 通用 → 关于本机）",
      "App 版本（App 内「设置」页面底部）",
      "截图，或出问题前你做了什么"
    ],
    policyH: "隐私",
    policyP: "我们不收集任何数据。完整说明在隐私政策里。",
    policyLink: "隐私政策"
  },

  /* ----------------------------------------------------------- zh-Hant --- */
  "zh-Hant": {
    title: "技術支援",
    lede: "遇到問題，或是有我們還沒回答的疑問？先看下面。找不到答案就寄信給我們，會有真人回覆。",
    updated: "更新於",
    contactH: "寄信給我們",
    contactP: "寫信到 {email}，我們會回覆。麻煩附上裝置型號、iOS 版本和 App 版本，這樣能更快幫你找出問題。",
    faqH: "常見問題",
    faq: [
      {
        q: "怎麼開始塗色？",
        a: "在首頁點開一個分類，選一張線稿，在底部挑顏色，再點畫面裡想塗的區域。塗完點右上角綠色的 ✔️ 就好。"
      },
      {
        q: "為什麼有些線稿帶小鎖？",
        a: "App 免費下載，其中一部分線稿可以直接塗；其餘的由大人一次購買後解鎖。所有購買都只在「設定」裡、通過家長門之後才能進行。"
      },
      {
        q: "之前買過了，換了新裝置怎麼找回？",
        a: "進入「設定」→ 通過家長門 → 點暢畫那一列 → 頁面底部的「回復購買」，用同一個 Apple ID 即可。"
      },
      {
        q: "塗好的作品存在哪裡？會不見嗎？",
        a: "只存在這台裝置上——我們沒有伺服器，也沒有帳號。刪除 App 或換裝置就會消失，建議在作品詳細頁面用「存到相簿」留一份。"
      },
      {
        q: "刪掉一張作品，免費名額會還回來嗎？",
        a: "不會。免費名額每個 Apple ID 只送一次，刪除作品不退還。"
      },
      {
        q: "App 需要連網嗎？會收集我的資料嗎？",
        a: "下載後不需要連網，也不收集任何資料：沒有廣告、沒有統計、沒有帳號。詳情請見隱私權政策。"
      },
      {
        q: "孩子會不會誤買？",
        a: "購買入口只在「設定」裡，而且要先答一道算術題。孩子能點到的地方，只會提示「請大人來」。"
      },
      {
        q: "自己畫的線稿存不下來？",
        a: "需要至少一個封閉區域才能上色儲存。把線條首尾接上、圍出一塊地方，再試一次。"
      },
      {
        q: "支援哪些裝置？",
        a: "iPhone 和 iPad，系統 iOS 17 或更新版本。可以用手指畫，iPad 上支援 Apple Pencil。"
      }
    ],
    tipsH: "寫信時請一併告訴我們",
    tips: [
      "裝置型號（例如 iPhone 15、iPad Air 11 吋）",
      "iOS 版本（設定 → 一般 → 關於本機）",
      "App 版本（App 內「設定」頁面底部）",
      "截圖，或出問題前你做了什麼"
    ],
    policyH: "隱私",
    policyP: "我們不收集任何資料。完整說明在隱私權政策裡。",
    policyLink: "隱私權政策"
  },

  /* ---------------------------------------------------------------- ja --- */
  ja: {
    title: "サポート",
    lede: "うまく動かないとき、疑問が残ったときは、まずこちらをご覧ください。解決しない場合はメールでご連絡ください。担当者から返信します。",
    updated: "更新日",
    contactH: "メールでのお問い合わせ",
    contactP: "{email} までご連絡ください。すべて目を通しています。お使いの機種、iOS のバージョン、アプリのバージョンを添えていただけると助かります。",
    faqH: "よくある質問",
    faq: [
      {
        q: "どうやって塗り始めますか？",
        a: "ホームでカテゴリを選び、ぬりえを1枚タップします。下から色を選び、塗りたい部分をタップしてください。塗り終わったら右上の緑の ✔️ をタップします。"
      },
      {
        q: "鍵がかかっているぬりえがあるのはなぜですか？",
        a: "アプリは無料でダウンロードでき、一部のぬりえは無料で塗れます。残りは大人が一度だけ購入すると使えるようになります。購入はすべて「設定」の中、保護者ゲートの先だけにあります。"
      },
      {
        q: "以前購入しました。新しい端末で元に戻すには？",
        a: "「設定」→ 保護者ゲート → Pro の行 → ページ下部の「購入を復元」を選び、購入時と同じ Apple ID でサインインしてください。"
      },
      {
        q: "塗った作品はどこに保存されますか？",
        a: "この端末の中だけです。サーバーもアカウントもありません。アプリを削除したり端末を変えると消えるため、作品の詳細画面から「写真に保存」で控えを残してください。"
      },
      {
        q: "作品を削除すると無料枠は戻りますか？",
        a: "いいえ。無料枠は Apple ID ごとに一度だけで、削除しても戻りません。"
      },
      {
        q: "ネット接続は必要ですか？データは集めていますか？",
        a: "ダウンロード後はオフラインで使えます。データは一切集めていません。広告も解析もアカウントもありません。詳しくはプライバシーポリシーをご覧ください。"
      },
      {
        q: "子どもが誤って購入してしまいませんか？",
        a: "購入できるのは「設定」の中、大人向けの計算問題の先だけです。子どもが触れる場所では「大人に聞いてね」と表示するだけです。"
      },
      {
        q: "自分で描いた線画が保存できません。",
        a: "塗りつぶせる閉じた領域が1つ以上必要です。線の端と端をつないで囲みを作ってから、もう一度お試しください。"
      },
      {
        q: "対応端末は？",
        a: "iOS 17 以降の iPhone と iPad です。指で描けます。iPad では Apple Pencil にも対応しています。"
      }
    ],
    tipsH: "お問い合わせの際は次を添えてください",
    tips: [
      "端末の機種（例：iPhone 15、iPad Air 11インチ）",
      "iOS のバージョン（設定 → 一般 → 情報）",
      "アプリのバージョン（アプリ内「設定」ページの一番下）",
      "スクリーンショット、または問題が起きる前にした操作"
    ],
    policyH: "プライバシー",
    policyP: "データは一切収集していません。詳しくはプライバシーポリシーをご覧ください。",
    policyLink: "プライバシーポリシー"
  },

  /* ---------------------------------------------------------------- ko --- */
  ko: {
    title: "지원",
    lede: "문제가 있거나 궁금한 점이 남아 있나요? 먼저 아래를 확인해 주세요. 해결되지 않으면 이메일을 보내 주시면 담당자가 답장합니다.",
    updated: "업데이트",
    contactH: "이메일 문의",
    contactP: "{email} 로 연락 주세요. 모든 메일에 답변드립니다. 기기 모델, iOS 버전, 앱 버전을 함께 알려 주시면 더 빠르게 도와드릴 수 있습니다.",
    faqH: "자주 묻는 질문",
    faq: [
      {
        q: "색칠은 어떻게 시작하나요?",
        a: "홈에서 카테고리를 고르고 그림을 하나 누른 뒤, 아래에서 색을 선택해 칠하고 싶은 부분을 누르세요. 다 칠했으면 오른쪽 위 초록색 ✔️를 누릅니다."
      },
      {
        q: "왜 어떤 그림에는 자물쇠가 있나요?",
        a: "앱은 무료로 내려받을 수 있고 일부 그림은 무료로 칠할 수 있습니다. 나머지는 보호자가 한 번 구매하면 열립니다. 모든 구매는 '설정' 안, 보호자 확인을 거친 뒤에만 가능합니다."
      },
      {
        q: "예전에 구매했는데 새 기기에서 되찾으려면?",
        a: "'설정' → 보호자 확인 → Pro 항목 → 페이지 아래 '구매 복원'을 선택하고, 구매할 때 쓴 것과 같은 Apple ID로 로그인하세요."
      },
      {
        q: "완성한 그림은 어디에 저장되나요?",
        a: "이 기기에만 저장됩니다. 서버도 계정도 없습니다. 앱을 삭제하거나 기기를 바꾸면 사라지므로, 그림 상세 화면에서 '사진에 저장'으로 사본을 남겨 두세요."
      },
      {
        q: "그림을 지우면 무료 자리가 돌아오나요?",
        a: "아니요. 무료 자리는 Apple ID마다 한 번만 주어지며, 삭제해도 돌아오지 않습니다."
      },
      {
        q: "인터넷이 필요한가요? 데이터를 수집하나요?",
        a: "내려받은 뒤에는 오프라인으로 쓸 수 있고, 어떤 데이터도 수집하지 않습니다. 광고, 분석, 계정이 없습니다. 자세한 내용은 개인정보 처리방침을 참고하세요."
      },
      {
        q: "아이가 실수로 결제할 수 있나요?",
        a: "구매는 '설정' 안, 보호자용 계산 문제를 통과한 뒤에만 가능합니다. 아이가 누를 수 있는 곳에서는 '어른에게 물어보세요' 안내만 나옵니다."
      },
      {
        q: "직접 그린 선화가 저장되지 않아요.",
        a: "색을 칠하려면 닫힌 영역이 하나 이상 있어야 합니다. 선의 끝을 이어 영역을 만든 뒤 다시 시도해 주세요."
      },
      {
        q: "어떤 기기를 지원하나요?",
        a: "iOS 17 이상의 iPhone과 iPad입니다. 손가락으로 그릴 수 있고, iPad에서는 Apple Pencil도 됩니다."
      }
    ],
    tipsH: "문의하실 때 함께 알려 주세요",
    tips: [
      "기기 모델(예: iPhone 15, iPad Air 11형)",
      "iOS 버전(설정 → 일반 → 정보)",
      "앱 버전(앱 안 '설정' 페이지 맨 아래)",
      "스크린샷 또는 문제가 생기기 전에 한 동작"
    ],
    policyH: "개인정보",
    policyP: "어떤 데이터도 수집하지 않습니다. 자세한 내용은 개인정보 처리방침을 참고하세요.",
    policyLink: "개인정보 처리방침"
  },

  /* ---------------------------------------------------------------- de --- */
  de: {
    title: "Support",
    lede: "Etwas funktioniert nicht, oder eine Frage ist offen? Schauen Sie zuerst hier nach. Wenn das nicht hilft, schreiben Sie uns – eine echte Person antwortet.",
    updated: "Aktualisiert",
    contactH: "Schreiben Sie uns",
    contactP: "Mail an {email} – wir antworten. Bitte nennen Sie Gerätemodell, iOS-Version und App-Version, dann geht es schneller.",
    faqH: "Häufige Fragen",
    faq: [
      {
        q: "Wie fange ich mit dem Ausmalen an?",
        a: "Öffnen Sie auf der Startseite eine Kategorie, tippen Sie ein Bild an, wählen Sie unten eine Farbe und tippen Sie dann die Fläche an, die Sie füllen möchten. Zum Schluss das grüne Häkchen oben rechts."
      },
      {
        q: "Warum haben manche Bilder ein Schloss?",
        a: "Die App ist kostenlos, und ein Teil der Bilder lässt sich gratis ausmalen. Der Rest wird durch einen einmaligen Kauf eines Erwachsenen frei. Gekauft wird ausschließlich in den Einstellungen, hinter der Erwachsenensperre."
      },
      {
        q: "Ich habe früher gekauft – wie bekomme ich das auf einem neuen Gerät zurück?",
        a: "Einstellungen → Erwachsenensperre → Zeile „Pro“ → unten auf der Seite „Käufe wiederherstellen“. Melden Sie sich mit derselben Apple-ID an."
      },
      {
        q: "Wo liegen meine fertigen Bilder?",
        a: "Nur auf diesem Gerät – wir haben keine Server und kein Konto. Beim Löschen der App oder einem Gerätewechsel sind sie weg; nutzen Sie „In Fotos sichern“ auf der Detailseite eines Bildes."
      },
      {
        q: "Ich habe ein Bild gelöscht. Kommt mein Gratis-Platz zurück?",
        a: "Nein. Der Gratis-Platz wird pro Apple-ID einmal vergeben; Löschen gibt ihn nicht zurück."
      },
      {
        q: "Braucht die App Internet? Werden Daten gesammelt?",
        a: "Nach dem Download läuft alles offline, und es werden keine Daten gesammelt: keine Werbung, keine Analyse, kein Konto. Details in der Datenschutzerklärung."
      },
      {
        q: "Kann mein Kind versehentlich etwas kaufen?",
        a: "Käufe gibt es nur in den Einstellungen, hinter einer Rechenaufgabe für Erwachsene. Überall sonst erscheint nur der Hinweis, einen Erwachsenen zu fragen."
      },
      {
        q: "Warum lässt sich meine eigene Zeichnung nicht speichern?",
        a: "Zum Ausmalen wird mindestens eine geschlossene Fläche gebraucht. Verbinden Sie die Linienenden zu einem geschlossenen Bereich und versuchen Sie es erneut."
      },
      {
        q: "Welche Geräte werden unterstützt?",
        a: "iPhone und iPad mit iOS 17 oder neuer. Zeichnen mit dem Finger, auf dem iPad auch mit Apple Pencil."
      }
    ],
    tipsH: "Bitte mitschicken",
    tips: [
      "Gerätemodell (z. B. iPhone 15, iPad Air 11″)",
      "iOS-Version (Einstellungen → Allgemein → Info)",
      "App-Version (in der App: Einstellungen, ganz unten)",
      "Screenshot oder kurze Beschreibung, was Sie vorher gemacht haben"
    ],
    policyH: "Datenschutz",
    policyP: "Wir sammeln nichts. Alle Details in der Datenschutzerklärung.",
    policyLink: "Datenschutzerklärung"
  },

  /* ---------------------------------------------------------------- fr --- */
  fr: {
    title: "Assistance",
    lede: "Un souci, une question restée sans réponse ? Regardez d'abord ici. Si cela ne suffit pas, écrivez-nous : une vraie personne vous répondra.",
    updated: "Mise à jour",
    contactH: "Écrivez-nous",
    contactP: "Écrivez à {email} : nous répondons. Indiquez le modèle d'appareil, la version d'iOS et la version de l'app pour aller plus vite.",
    faqH: "Questions fréquentes",
    faq: [
      {
        q: "Comment commencer à colorier ?",
        a: "Ouvrez une catégorie sur l'accueil, touchez une image, choisissez une couleur en bas, puis touchez la zone à remplir. Terminez par la coche verte en haut à droite."
      },
      {
        q: "Pourquoi certaines images ont-elles un cadenas ?",
        a: "L'app est gratuite et une partie des images se colorie sans payer. Le reste s'ouvre par un achat unique effectué par un adulte. Tous les achats se font dans Réglages, derrière le verrou parental."
      },
      {
        q: "J'ai déjà acheté. Comment récupérer cela sur un nouvel appareil ?",
        a: "Réglages → verrou parental → ligne Pro → « Restaurer les achats » en bas de la page, avec le même identifiant Apple."
      },
      {
        q: "Où sont enregistrés mes coloriages terminés ?",
        a: "Uniquement sur cet appareil : pas de serveur, pas de compte. Supprimer l'app ou changer d'appareil les efface ; utilisez « Enregistrer dans Photos » depuis la fiche d'une image."
      },
      {
        q: "J'ai supprimé une image. Mon emplacement gratuit revient-il ?",
        a: "Non. L'emplacement gratuit est accordé une seule fois par identifiant Apple et la suppression ne le rend pas."
      },
      {
        q: "L'app a-t-elle besoin d'Internet ? Collecte-t-elle des données ?",
        a: "Aucune connexion n'est nécessaire après le téléchargement et rien n'est collecté : pas de publicité, pas de mesure d'audience, pas de compte. Voir la politique de confidentialité."
      },
      {
        q: "Mon enfant peut-il acheter par erreur ?",
        a: "Les achats ne sont accessibles que dans Réglages, après une opération de calcul pour adultes. Partout ailleurs, l'app invite seulement à demander à un adulte."
      },
      {
        q: "Pourquoi mon dessin ne s'enregistre-t-il pas ?",
        a: "Il faut au moins une zone fermée pour remplir. Reliez les extrémités de vos traits pour former un contour, puis réessayez."
      },
      {
        q: "Quels appareils sont pris en charge ?",
        a: "iPhone et iPad sous iOS 17 ou version ultérieure. On dessine au doigt, et à l'Apple Pencil sur iPad."
      }
    ],
    tipsH: "Merci de préciser",
    tips: [
      "Modèle d'appareil (par ex. iPhone 15, iPad Air 11 pouces)",
      "Version d'iOS (Réglages → Général → Informations)",
      "Version de l'app (dans l'app : Réglages, tout en bas)",
      "Une capture d'écran, ou ce que vous faisiez avant le problème"
    ],
    policyH: "Confidentialité",
    policyP: "Nous ne collectons rien. Tout est détaillé dans la politique de confidentialité.",
    policyLink: "Politique de confidentialité"
  },

  /* ---------------------------------------------------------------- es --- */
  es: {
    title: "Soporte",
    lede: "¿Algo no funciona o tienes una duda? Mira primero aquí. Si no se resuelve, escríbenos: te responde una persona.",
    updated: "Actualizado",
    contactH: "Escríbenos",
    contactP: "Escribe a {email} y te contestamos. Indica el modelo del dispositivo, la versión de iOS y la de la app para que podamos ayudarte antes.",
    faqH: "Preguntas frecuentes",
    faq: [
      {
        q: "¿Cómo empiezo a colorear?",
        a: "Abre una categoría en la pantalla de inicio, toca un dibujo, elige un color abajo y toca la zona que quieras rellenar. Al terminar, toca la marca verde de arriba a la derecha."
      },
      {
        q: "¿Por qué algunos dibujos tienen un candado?",
        a: "La app es gratis y una parte de los dibujos se colorea sin pagar. El resto se abre con una compra única hecha por un adulto. Todas las compras están en Ajustes, detrás del control para adultos."
      },
      {
        q: "Ya compré antes. ¿Cómo lo recupero en un dispositivo nuevo?",
        a: "Ajustes → control para adultos → fila Pro → «Restaurar compras» al final de la página, con el mismo Apple ID."
      },
      {
        q: "¿Dónde se guardan mis dibujos terminados?",
        a: "Solo en este dispositivo: no hay servidores ni cuenta. Si borras la app o cambias de dispositivo se pierden; usa «Guardar en Fotos» en la ficha del dibujo."
      },
      {
        q: "He borrado un dibujo. ¿Vuelve mi plaza gratuita?",
        a: "No. La plaza gratuita se concede una sola vez por Apple ID y borrar no la devuelve."
      },
      {
        q: "¿La app necesita internet? ¿Recoge datos?",
        a: "No hace falta conexión después de la descarga y no se recoge nada: sin anuncios, sin analítica, sin cuentas. Consulta la política de privacidad."
      },
      {
        q: "¿Puede mi hijo comprar sin querer?",
        a: "Las compras solo están en Ajustes, tras una operación matemática para adultos. Donde el niño puede tocar solo aparece un aviso para llamar a un adulto."
      },
      {
        q: "¿Por qué no se guarda mi propio dibujo?",
        a: "Hace falta al menos una zona cerrada para rellenar. Une los extremos de las líneas para formar un contorno y vuelve a intentarlo."
      },
      {
        q: "¿Qué dispositivos son compatibles?",
        a: "iPhone y iPad con iOS 17 o posterior. Se dibuja con el dedo y, en iPad, con Apple Pencil."
      }
    ],
    tipsH: "Al escribirnos, incluye",
    tips: [
      "Modelo del dispositivo (por ejemplo iPhone 15, iPad Air 11″)",
      "Versión de iOS (Ajustes → General → Información)",
      "Versión de la app (en la app: Ajustes, al final)",
      "Una captura de pantalla, o qué estabas haciendo antes del problema"
    ],
    policyH: "Privacidad",
    policyP: "No recogemos nada. Todo está en la política de privacidad.",
    policyLink: "Política de privacidad"
  },

  /* ---------------------------------------------------------------- pt --- */
  pt: {
    title: "Suporte",
    lede: "Algo não funciona ou ficou uma dúvida? Veja primeiro aqui. Se não resolver, escreva para nós: uma pessoa responde.",
    updated: "Atualizado",
    contactH: "Fale com a gente",
    contactP: "Escreva para {email} e nós respondemos. Informe o modelo do aparelho, a versão do iOS e a do app para agilizar.",
    faqH: "Perguntas frequentes",
    faq: [
      {
        q: "Como começo a colorir?",
        a: "Abra uma categoria na tela inicial, toque em um desenho, escolha uma cor na parte de baixo e toque na área que quer preencher. Ao terminar, toque no ✔️ verde no canto superior direito."
      },
      {
        q: "Por que alguns desenhos têm cadeado?",
        a: "O app é grátis e parte dos desenhos pode ser colorida sem pagar. O restante é liberado com uma compra única feita por um adulto. Todas as compras ficam em Ajustes, atrás da trava para adultos."
      },
      {
        q: "Já comprei antes. Como recupero em um aparelho novo?",
        a: "Ajustes → trava para adultos → linha Pro → “Restaurar compras” no fim da página, com o mesmo Apple ID."
      },
      {
        q: "Onde ficam meus desenhos prontos?",
        a: "Só neste aparelho: não há servidores nem conta. Se você apagar o app ou trocar de aparelho, eles somem; use “Salvar em Fotos” na tela do desenho."
      },
      {
        q: "Apaguei um desenho. Minha vaga grátis volta?",
        a: "Não. A vaga grátis é dada uma única vez por Apple ID e apagar não devolve."
      },
      {
        q: "O app precisa de internet? Coleta dados?",
        a: "Depois do download funciona offline e nada é coletado: sem anúncios, sem métricas, sem contas. Veja a política de privacidade."
      },
      {
        q: "Meu filho pode comprar sem querer?",
        a: "As compras só existem em Ajustes, depois de uma conta de matemática para adultos. Onde a criança alcança, aparece apenas o aviso para chamar um adulto."
      },
      {
        q: "Por que meu próprio desenho não salva?",
        a: "É preciso pelo menos uma área fechada para preencher. Una as pontas dos traços formando um contorno e tente de novo."
      },
      {
        q: "Quais aparelhos são compatíveis?",
        a: "iPhone e iPad com iOS 17 ou superior. Dá para desenhar com o dedo e, no iPad, com o Apple Pencil."
      }
    ],
    tipsH: "Ao escrever, inclua",
    tips: [
      "Modelo do aparelho (ex.: iPhone 15, iPad Air 11″)",
      "Versão do iOS (Ajustes → Geral → Sobre)",
      "Versão do app (no app: Ajustes, no fim da página)",
      "Uma captura de tela, ou o que você fez antes do problema"
    ],
    policyH: "Privacidade",
    policyP: "Não coletamos nada. Os detalhes estão na política de privacidade.",
    policyLink: "Política de privacidade"
  },

  /* ---------------------------------------------------------------- ar --- */
  ar: {
    title: "الدعم",
    lede: "هل هناك شيء لا يعمل أو سؤال بلا جواب؟ ابدأ من هنا. وإن لم تجد الحل فاكتب لنا وسيرد عليك شخص حقيقي.",
    updated: "آخر تحديث",
    contactH: "راسلنا بالبريد",
    contactP: "اكتب إلى {email} وسنرد عليك. أرفق طراز الجهاز وإصدار iOS وإصدار التطبيق لنساعدك أسرع.",
    faqH: "أسئلة متكررة",
    faq: [
      {
        q: "كيف أبدأ التلوين؟",
        a: "افتح فئة من الشاشة الرئيسية، اضغط على رسمة، اختر لونًا من الأسفل ثم اضغط على المنطقة التي تريد تلوينها. عند الانتهاء اضغط علامة ✔️ الخضراء في أعلى اليمين."
      },
      {
        q: "لماذا بعض الرسومات مقفلة؟",
        a: "التطبيق مجاني وبعض الرسومات تُلوَّن مجانًا. الباقي يُفتح بعملية شراء واحدة يقوم بها شخص بالغ. كل عمليات الشراء داخل الإعدادات وخلف بوابة الكبار."
      },
      {
        q: "اشتريت سابقًا، كيف أستعيد ذلك على جهاز جديد؟",
        a: "الإعدادات → بوابة الكبار → سطر Pro → «استعادة المشتريات» أسفل الصفحة، بنفس Apple ID."
      },
      {
        q: "أين تُحفظ رسوماتي المكتملة؟",
        a: "على هذا الجهاز فقط، فلا خوادم ولا حساب. حذف التطبيق أو تغيير الجهاز يزيلها، لذا استخدم «الحفظ في Photos» من صفحة الرسمة."
      },
      {
        q: "حذفت رسمة، هل يعود مكاني المجاني؟",
        a: "لا. المكان المجاني يُمنح مرة واحدة لكل Apple ID ولا يعود بالحذف."
      },
      {
        q: "هل يحتاج التطبيق إلى الإنترنت؟ وهل يجمع بيانات؟",
        a: "لا يحتاج اتصالًا بعد التنزيل ولا يجمع أي بيانات: لا إعلانات ولا تحليلات ولا حسابات. التفاصيل في سياسة الخصوصية."
      },
      {
        q: "هل يمكن أن يشتري طفلي بالخطأ؟",
        a: "الشراء متاح فقط داخل الإعدادات بعد سؤال حسابي للكبار. وأي مكان يصل إليه الطفل يعرض تذكيرًا بسؤال شخص بالغ."
      },
      {
        q: "لماذا لا يُحفظ الرسم الذي رسمته بنفسي؟",
        a: "يلزم وجود منطقة مغلقة واحدة على الأقل ليتم التلوين. صل أطراف الخطوط لتكوين إطار ثم حاول مجددًا."
      },
      {
        q: "ما الأجهزة المدعومة؟",
        a: "iPhone وiPad بنظام iOS 17 أو أحدث. الرسم بالإصبع، وعلى iPad بـ Apple Pencil."
      }
    ],
    tipsH: "عند مراسلتنا أرفق",
    tips: [
      "طراز الجهاز (مثل iPhone 15 أو iPad Air 11 بوصة)",
      "إصدار iOS (الإعدادات → عام → حول)",
      "إصدار التطبيق (داخل التطبيق: الإعدادات، أسفل الصفحة)",
      "لقطة شاشة، أو وصف لما فعلته قبل ظهور المشكلة"
    ],
    policyH: "الخصوصية",
    policyP: "لا نجمع أي شيء. التفاصيل في سياسة الخصوصية.",
    policyLink: "سياسة الخصوصية"
  },

  /* ---------------------------------------------------------------- id --- */
  id: {
    title: "Dukungan",
    lede: "Ada yang tidak berjalan, atau masih ada pertanyaan? Cek dulu di sini. Kalau belum terjawab, kirim email—kami balas langsung.",
    updated: "Diperbarui",
    contactH: "Kirim email",
    contactP: "Tulis ke {email} dan kami balas. Sertakan model perangkat, versi iOS, dan versi aplikasi agar lebih cepat.",
    faqH: "Pertanyaan yang sering diajukan",
    faq: [
      {
        q: "Bagaimana mulai mewarnai?",
        a: "Buka kategori di layar utama, ketuk gambar, pilih warna di bawah, lalu ketuk bagian yang ingin diwarnai. Setelah selesai ketuk tanda ✔️ hijau di kanan atas."
      },
      {
        q: "Kenapa sebagian gambar bergembok?",
        a: "Aplikasi gratis dan sebagian gambar bisa diwarnai gratis. Sisanya terbuka lewat pembelian sekali oleh orang dewasa. Semua pembelian ada di Pengaturan, di balik gerbang orang dewasa."
      },
      {
        q: "Saya pernah membeli. Bagaimana memulihkannya di perangkat baru?",
        a: "Pengaturan → gerbang orang dewasa → baris Pro → “Pulihkan pembelian” di bawah halaman, dengan Apple ID yang sama."
      },
      {
        q: "Di mana hasil gambar saya disimpan?",
        a: "Hanya di perangkat ini—tanpa server dan tanpa akun. Menghapus aplikasi atau berganti perangkat menghilangkannya, jadi pakai “Simpan ke Foto” di halaman detail gambar."
      },
      {
        q: "Saya menghapus satu gambar. Kuota gratis saya kembali?",
        a: "Tidak. Kuota gratis diberikan sekali per Apple ID dan tidak kembali walau dihapus."
      },
      {
        q: "Apakah aplikasi butuh internet? Apakah mengumpulkan data?",
        a: "Setelah diunduh tidak perlu internet dan tidak ada data yang dikumpulkan: tanpa iklan, tanpa analitik, tanpa akun. Lihat kebijakan privasi."
      },
      {
        q: "Bisakah anak saya membeli tanpa sengaja?",
        a: "Pembelian hanya bisa dari Pengaturan, setelah soal hitungan untuk orang dewasa. Di tempat lain hanya muncul ajakan memanggil orang dewasa."
      },
      {
        q: "Kenapa gambar buatan saya tidak tersimpan?",
        a: "Perlu minimal satu area tertutup untuk diwarnai. Sambungkan ujung garis agar membentuk bidang, lalu coba lagi."
      },
      {
        q: "Perangkat apa yang didukung?",
        a: "iPhone dan iPad dengan iOS 17 atau lebih baru. Bisa menggambar dengan jari, dan dengan Apple Pencil di iPad."
      }
    ],
    tipsH: "Saat menulis, sertakan",
    tips: [
      "Model perangkat (mis. iPhone 15, iPad Air 11 inci)",
      "Versi iOS (Pengaturan → Umum → Info)",
      "Versi aplikasi (di aplikasi: Pengaturan, bagian bawah)",
      "Tangkapan layar, atau apa yang Anda lakukan sebelum masalah muncul"
    ],
    policyH: "Privasi",
    policyP: "Kami tidak mengumpulkan apa pun. Detailnya ada di kebijakan privasi.",
    policyLink: "Kebijakan privasi"
  },

  /* ---------------------------------------------------------------- vi --- */
  vi: {
    title: "Hỗ trợ",
    lede: "Có lỗi, hoặc câu hỏi chưa được giải đáp? Hãy xem ở đây trước. Nếu vẫn chưa ổn, gửi email cho chúng tôi—sẽ có người trả lời.",
    updated: "Cập nhật",
    contactH: "Gửi email cho chúng tôi",
    contactP: "Viết tới {email} và chúng tôi sẽ phản hồi. Vui lòng kèm kiểu máy, phiên bản iOS và phiên bản ứng dụng để được hỗ trợ nhanh hơn.",
    faqH: "Câu hỏi thường gặp",
    faq: [
      {
        q: "Làm sao để bắt đầu tô màu?",
        a: "Mở một danh mục ở trang chủ, chạm vào một hình, chọn màu ở dưới rồi chạm vào vùng muốn tô. Xong thì chạm dấu ✔️ màu xanh ở góc trên bên phải."
      },
      {
        q: "Vì sao một số hình có ổ khóa?",
        a: "Ứng dụng miễn phí và một phần hình được tô miễn phí. Phần còn lại mở khóa bằng một lần mua của người lớn. Mọi giao dịch chỉ nằm trong Cài đặt, sau cổng dành cho người lớn."
      },
      {
        q: "Tôi đã mua trước đây. Làm sao lấy lại trên máy mới?",
        a: "Cài đặt → cổng người lớn → dòng Pro → “Khôi phục giao dịch” ở cuối trang, bằng cùng Apple ID."
      },
      {
        q: "Tranh đã tô xong được lưu ở đâu?",
        a: "Chỉ trên máy này—không máy chủ, không tài khoản. Xóa ứng dụng hoặc đổi máy là mất, nên hãy dùng “Lưu vào Ảnh” ở trang chi tiết tranh."
      },
      {
        q: "Tôi đã xóa một tranh. Suất miễn phí có trả lại không?",
        a: "Không. Suất miễn phí chỉ cấp một lần cho mỗi Apple ID và xóa không hoàn lại."
      },
      {
        q: "Ứng dụng có cần internet không? Có thu thập dữ liệu không?",
        a: "Sau khi tải về, dùng được ngoại tuyến và không thu thập gì: không quảng cáo, không phân tích, không tài khoản. Xem chính sách quyền riêng tư."
      },
      {
        q: "Trẻ có thể mua nhầm không?",
        a: "Chỉ vào được mục mua trong Cài đặt, sau một phép tính dành cho người lớn. Nơi trẻ chạm được chỉ hiện lời nhắc nhờ người lớn."
      },
      {
        q: "Vì sao nét vẽ của tôi không lưu được?",
        a: "Cần ít nhất một vùng khép kín để tô màu. Nối hai đầu nét vẽ thành một vùng rồi thử lại."
      },
      {
        q: "Hỗ trợ thiết bị nào?",
        a: "iPhone và iPad chạy iOS 17 trở lên. Vẽ bằng ngón tay, và bằng Apple Pencil trên iPad."
      }
    ],
    tipsH: "Khi viết, vui lòng kèm",
    tips: [
      "Kiểu máy (ví dụ iPhone 15, iPad Air 11 inch)",
      "Phiên bản iOS (Cài đặt → Cài đặt chung → Giới thiệu)",
      "Phiên bản ứng dụng (trong ứng dụng: Cài đặt, cuối trang)",
      "Ảnh chụp màn hình, hoặc việc bạn làm ngay trước khi gặp lỗi"
    ],
    policyH: "Quyền riêng tư",
    policyP: "Chúng tôi không thu thập gì. Chi tiết trong chính sách quyền riêng tư.",
    policyLink: "Chính sách quyền riêng tư"
  },

  /* ---------------------------------------------------------------- th --- */
  th: {
    title: "การช่วยเหลือ",
    lede: "มีปัญหาหรือยังมีคำถามที่ไม่มีคำตอบ? เริ่มจากที่นี่ก่อน หากยังไม่หาย เขียนอีเมลมาหาเรา มีคนจริง ๆ ตอบกลับ",
    updated: "อัปเดต",
    contactH: "ส่งอีเมลถึงเรา",
    contactP: "เขียนมาที่ {email} แล้วเราจะตอบกลับ กรุณาแจ้งรุ่นเครื่อง เวอร์ชัน iOS และเวอร์ชันแอป เพื่อให้ช่วยได้เร็วขึ้น",
    faqH: "คำถามที่พบบ่อย",
    faq: [
      {
        q: "เริ่มระบายสีอย่างไร?",
        a: "เปิดหมวดหมู่ในหน้าแรก แตะรูปหนึ่งรูป เลือกสีด้านล่าง แล้วแตะบริเวณที่ต้องการระบาย เสร็จแล้วแตะเครื่องหมาย ✔️ สีเขียวที่มุมขวาบน"
      },
      {
        q: "ทำไมบางรูปมีแม่กุญแจ?",
        a: "แอปดาวน์โหลดฟรีและมีรูปให้ระบายฟรีบางส่วน ส่วนที่เหลือปลดล็อกด้วยการซื้อครั้งเดียวโดยผู้ใหญ่ การซื้อทั้งหมดอยู่ใน「การตั้งค่า」หลังด่านผู้ใหญ่"
      },
      {
        q: "เคยซื้อไว้แล้ว จะกู้คืนในเครื่องใหม่ได้อย่างไร?",
        a: "การตั้งค่า → ด่านผู้ใหญ่ → แถว Pro → 「กู้คืนการซื้อ」ที่ด้านล่างของหน้า ด้วย Apple ID เดียวกัน"
      },
      {
        q: "ผลงานที่ระบายเสร็จเก็บไว้ที่ไหน?",
        a: "เก็บในเครื่องนี้เท่านั้น ไม่มีเซิร์ฟเวอร์และไม่มีบัญชี หากลบแอปหรือเปลี่ยนเครื่องจะหายไป ควรใช้「บันทึกลงรูปภาพ」ในหน้ารายละเอียดผลงาน"
      },
      {
        q: "ลบผลงานแล้วสิทธิ์ฟรีจะคืนไหม?",
        a: "ไม่คืน สิทธิ์ฟรีให้เพียงครั้งเดียวต่อ Apple ID และการลบไม่ทำให้ได้คืน"
      },
      {
        q: "แอปต้องใช้อินเทอร์เน็ตไหม เก็บข้อมูลไหม?",
        a: "หลังดาวน์โหลดใช้แบบออฟไลน์ได้ และไม่เก็บข้อมูลใด ๆ ทั้งสิ้น ไม่มีโฆษณา ไม่มีการวิเคราะห์ ไม่มีบัญชี ดูรายละเอียดในนโยบายความเป็นส่วนตัว"
      },
      {
        q: "เด็กอาจซื้อโดยไม่ตั้งใจไหม?",
        a: "ทางเข้าซื้ออยู่ใน「การตั้งค่า」หลังตอบโจทย์เลขสำหรับผู้ใหญ่เท่านั้น จุดที่เด็กแตะได้จะแสดงเพียงคำเตือนให้ถามผู้ใหญ่"
      },
      {
        q: "ทำไมเส้นที่วาดเองบันทึกไม่ได้?",
        a: "ต้องมีพื้นที่ปิดอย่างน้อยหนึ่งแห่งจึงจะระบายสีได้ เชื่อมปลายเส้นให้เป็นรูปปิดแล้วลองอีกครั้ง"
      },
      {
        q: "รองรับเครื่องใดบ้าง?",
        a: "iPhone และ iPad ที่ใช้ iOS 17 ขึ้นไป วาดด้วยนิ้วได้ และใช้ Apple Pencil บน iPad"
      }
    ],
    tipsH: "เวลาเขียนมาหาเรา กรุณาแนบ",
    tips: [
      "รุ่นเครื่อง (เช่น iPhone 15, iPad Air 11 นิ้ว)",
      "เวอร์ชัน iOS (การตั้งค่า → ทั่วไป → เกี่ยวกับ)",
      "เวอร์ชันแอป (ในแอป: การตั้งค่า ท้ายหน้า)",
      "ภาพหน้าจอ หรือสิ่งที่ทำก่อนเกิดปัญหา"
    ],
    policyH: "ความเป็นส่วนตัว",
    policyP: "เราไม่เก็บข้อมูลใด ๆ รายละเอียดอยู่ในนโยบายความเป็นส่วนตัว",
    policyLink: "นโยบายความเป็นส่วนตัว"
  },

  /* ---------------------------------------------------------------- ms --- */
  ms: {
    title: "Sokongan",
    lede: "Ada masalah atau soalan yang belum terjawab? Lihat di sini dahulu. Jika masih tidak selesai, hantarkan e-mel—kami akan balas.",
    updated: "Dikemas kini",
    contactH: "Hantar e-mel",
    contactP: "Tulis ke {email} dan kami akan membalas. Sertakan model peranti, versi iOS dan versi app supaya lebih cepat.",
    faqH: "Soalan lazim",
    faq: [
      {
        q: "Bagaimana mula mewarna?",
        a: "Buka kategori pada skrin utama, ketik satu gambar, pilih warna di bawah, kemudian ketik kawasan yang mahu diwarnakan. Setelah selesai ketik tanda ✔️ hijau di penjuru atas kanan."
      },
      {
        q: "Mengapa sesetengah gambar berkunci?",
        a: "App percuma dan sebahagian gambar boleh diwarna percuma. Selebihnya dibuka dengan pembelian sekali oleh orang dewasa. Semua pembelian hanya dalam Tetapan, di sebalik pintu dewasa."
      },
      {
        q: "Saya pernah membeli. Bagaimana memulihkannya pada peranti baru?",
        a: "Tetapan → pintu dewasa → baris Pro → “Pulihkan pembelian” di bawah halaman, dengan Apple ID yang sama."
      },
      {
        q: "Di mana karya saya disimpan?",
        a: "Hanya pada peranti ini—tiada pelayan dan tiada akaun. Memadam app atau menukar peranti menghilangkannya, jadi gunakan “Simpan ke Foto” pada halaman butiran karya."
      },
      {
        q: "Saya padam satu karya. Kuota percuma kembali?",
        a: "Tidak. Kuota percuma diberi sekali bagi setiap Apple ID dan pemadaman tidak mengembalikannya."
      },
      {
        q: "Adakah app perlukan internet? Adakah ia mengumpul data?",
        a: "Selepas dimuat turun ia berfungsi luar talian dan tiada data dikumpul: tiada iklan, tiada analitik, tiada akaun. Lihat dasar privasi."
      },
      {
        q: "Bolehkah anak saya membeli secara tidak sengaja?",
        a: "Pembelian hanya boleh diakses dalam Tetapan selepas soalan kira-kira untuk orang dewasa. Di tempat lain hanya ada peringatan untuk bertanya kepada orang dewasa."
      },
      {
        q: "Mengapa lukisan saya tidak dapat disimpan?",
        a: "Perlu sekurang-kurangnya satu kawasan tertutup untuk diwarnakan. Sambungkan hujung garisan membentuk kawasan, kemudian cuba lagi."
      },
      {
        q: "Peranti apa yang disokong?",
        a: "iPhone dan iPad dengan iOS 17 atau lebih baru. Boleh melukis dengan jari, dan dengan Apple Pencil pada iPad."
      }
    ],
    tipsH: "Semasa menulis, sertakan",
    tips: [
      "Model peranti (cth. iPhone 15, iPad Air 11 inci)",
      "Versi iOS (Tetapan → Umum → Perihal)",
      "Versi app (dalam app: Tetapan, bawah halaman)",
      "Tangkapan skrin, atau apa yang anda buat sebelum masalah berlaku"
    ],
    policyH: "Privasi",
    policyP: "Kami tidak mengumpul apa-apa. Butiran dalam dasar privasi.",
    policyLink: "Dasar privasi"
  }
};
