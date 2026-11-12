/* ==========================================================================
   doc.js — shared engine for privacy.html / support.html
   --------------------------------------------------------------------------
   You almost never need to edit this file. Content lives in
   privacy-data.js / support-data.js; only the layout of a section lives in
   the matching .html.

   Language resolution order (first match wins)
     1. ?lang=xx              explicit link, useful for App Store metadata
     2. window.__appLang      injected by the iOS app before page load
     3. localStorage          what this browser chose last time
     4. navigator.languages   the browser/system preference list
     5. "en"                  fallback
   ========================================================================== */

(function () {
  "use strict";

  var FALLBACK = "en";

  function owns(map, key) {
    return !!key && !!map && Object.prototype.hasOwnProperty.call(map, key);
  }

  function pickInitial(textMap, storeKey) {
    var q = null;
    try {
      q = new URLSearchParams(location.search).get("lang");
    } catch (e) { /* very old WebView */ }
    if (owns(textMap, q)) return q;

    if (owns(textMap, window.__appLang)) return window.__appLang;

    try {
      var saved = localStorage.getItem(storeKey);
      if (owns(textMap, saved)) return saved;
    } catch (e) { /* private mode / file:// */ }

    var tags = navigator.languages || [navigator.language || FALLBACK];
    for (var i = 0; i < tags.length; i++) {
      var tag = String(tags[i]);
      if (owns(textMap, tag)) return tag;
      if (/^zh\b/i.test(tag)) {
        if (/hant|tw|hk|mo/i.test(tag)) {
          if (owns(textMap, "zh-Hant")) return "zh-Hant";
        } else if (owns(textMap, "zh-Hans")) {
          return "zh-Hans";
        }
      }
      var base = tag.split("-")[0].toLowerCase();
      if (owns(textMap, base)) return base;
    }
    return owns(textMap, FALLBACK) ? FALLBACK : Object.keys(textMap)[0];
  }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = String(text);
    return node;
  }

  var DocKit = {
    el: el,

    /**
     * config = {
     *   info:        window.POLICY_INFO          (variables at the top of the data file)
     *   text:        window.POLICY_TEXT          (one block per language)
     *   langs:       window.POLICY_LANGS
     *   names:       window.POLICY_NATIVE_NAMES
     *   storeKey:    localStorage key
     *   render:      function (session) { ... }  draws the page body
     * }
     */
    boot: function (config) {
      var info = config.info || {};
      var text = config.text || {};
      var langs = config.langs || Object.keys(text);
      var names = config.names || {};
      var storeKey = config.storeKey || "learnity.doc.lang";

      var lang = pickInitial(text, storeKey);
      if (!owns(text, lang)) lang = FALLBACK;

      var session = {
        /** current language code */
        get lang() { return lang; },

        /** the info bag (email, dates, ...) — read-only by convention */
        info: info,

        /** current language block */
        get strings() { return text[lang]; },

        /** A field that may be a plain string or a {lang: value} map. */
        localized: function (field) {
          var value = info[field];
          if (value == null) return "";
          if (typeof value === "string") return value;
          return value[lang] || value[FALLBACK] || value.en || "";
        },

        appName: function () {
          var bag = info.appName || {};
          return bag[lang] || bag[FALLBACK] || bag.en || "";
        },

        developer: function () { return session.localized("developer"); },

        /** Replace {appName} {email} {minAge} {year} {platform} {responseTime} … */
        fill: function (value) {
          var s = String(value == null ? "" : value);
          s = s.split("{appName}").join(session.appName());
          s = s.split("{developer}").join(session.developer());
          s = s.split("{email}").join(info.email || "");
          s = s.split("{minAge}").join(info.minAge == null ? "" : info.minAge);
          s = s.split("{platform}").join(info.platform || "");
          s = s.split("{responseTime}").join(session.localized("responseTime"));
          s = s.split("{year}").join(String(new Date().getFullYear()));
          s = s.split("{updatedDate}").join(session.date(info.updatedDate));
          s = s.split("{effectiveDate}").join(session.date(info.effectiveDate));
          return s;
        },

        /** ISO date -> long localised date, e.g. "12 November 2026". */
        date: function (iso) {
          if (!iso) return "";
          var d = new Date(iso + "T00:00:00");
          if (isNaN(d.getTime())) return iso;
          try {
            return d.toLocaleDateString(lang, { year: "numeric", month: "long", day: "numeric" });
          } catch (e) {
            return iso;
          }
        },

        /** Build a <section class="card"> with a heading and paragraphs. */
        card: function (heading, paragraphs, extraClass) {
          var node = el("section", "card" + (extraClass ? " " + extraClass : ""));
          if (heading) node.appendChild(el("h2", null, session.fill(heading)));
          (paragraphs || []).forEach(function (para) {
            node.appendChild(el("p", null, session.fill(para)));
          });
          return node;
        },

        /** <ul class="plain|never"> — "never" prepends a ✕ badge. */
        list: function (items, cls) {
          var list = el("ul", cls || null);
          (items || []).forEach(function (item) {
            var li = el("li");
            if (cls === "never") li.appendChild(el("span", "mark", "\u2715"));
            li.appendChild(el("span", null, session.fill(item)));
            list.appendChild(li);
          });
          return list;
        },

        /** Swap language, persist the choice, repaint. */
        setLang: function (next) {
          if (!owns(text, next) || next === lang) return;
          lang = next;
          try { localStorage.setItem(storeKey, lang); } catch (e) { /* ignore */ }
          session.paint();
        },

        paint: function () {
          var block = text[lang] || text[FALLBACK];
          var root = document.documentElement;
          root.lang = lang;
          root.dir = /^(ar|fa|he|ur)$/i.test(lang) ? "rtl" : "ltr";
          document.title = session.fill(block.title);

          var titleNode = document.getElementById("docTitle");
          if (titleNode) titleNode.textContent = session.fill(block.title);

          var select = document.getElementById("langPicker");
          if (select && select.value !== lang) select.value = lang;

          var host = document.getElementById("body");
          if (host) {
            host.textContent = "";
            config.render(session);
          }

          var foot = document.getElementById("footer");
          if (foot) {
            foot.textContent = "";
            session.fillFooter(foot);
          }
        },

        /** Default footer: © year · developer · email · optional link. */
        fillFooter: function (foot) {
          var block = text[lang] || text[FALLBACK];
          foot.appendChild(el("span", null, "\u00A9 " + new Date().getFullYear() + " " + session.appName()));
          if (info.email) {
            foot.appendChild(el("span", "dot", "\u00B7"));
            var mail = el("a", null, info.email);
            mail.href = "mailto:" + info.email;
            foot.appendChild(mail);
          }
          if (config.extraFooter) config.extraFooter(session, foot, block);
        }
      };

      // ---- language picker ----
      var select = document.getElementById("langPicker");
      if (select) {
        langs.forEach(function (code) {
          var option = el("option", null, names[code] || code);
          option.value = code;
          select.appendChild(option);
        });
        select.value = lang;
        select.addEventListener("change", function () { session.setLang(select.value); });
      }

      if (window.__inApp) document.documentElement.classList.add("inapp");

      session.paint();
      return session;
    }
  };

  window.DocKit = DocKit;

  /** Small helper for the "language" line under the content. */
  window.DocKit.languageNote = function (session, node, text) {
    if (!text) return;
    node.appendChild(el("p", "lang-note", text));
  };
})();
