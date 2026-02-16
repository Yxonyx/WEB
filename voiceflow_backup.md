# Voiceflow Configuration Backup

Use this to re-integrate Voiceflow when credits are available.

## index.html Script

```html
  <!-- Voiceflow Chat Widget - Load on first user interaction -->
  <script type="text/javascript">
    (function () {
      var loaded = false;
      function loadVoiceflow() {
        if (loaded) return;
        loaded = true;
        document.removeEventListener('scroll', loadVoiceflow);
        document.removeEventListener('click', loadVoiceflow);
        document.removeEventListener('touchstart', loadVoiceflow);
        var v = document.createElement('script');
        v.onload = function () {
          window.voiceflow.chat.load({
            verify: { projectID: '69728b40b960e41275e9bc0b' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: { url: "https://runtime-api.voiceflow.com" }
          });
        };
        v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
        v.type = "text/javascript";
        document.body.appendChild(v);
      }
      document.addEventListener('scroll', loadVoiceflow, { once: true, passive: true });
      document.addEventListener('click', loadVoiceflow, { once: true });
      document.addEventListener('touchstart', loadVoiceflow, { once: true, passive: true });
    })();
  </script>
```

## src/index.css Configuration

```css
/* Voiceflow widget - prevent taking layout space */
#voiceflow-chat,
#voiceFlow-chat,
.vfrc-widget,
[class*="vfrc"],
[id*="voiceflow"],
[id*="voiceFlow"] {
  position: fixed !important;
  z-index: 9999 !important;
}

/* Hide Voiceflow hidden textarea that causes extra space */
#voiceFlow-chat textarea,
#voiceflow-chat textarea {
  position: fixed !important;
  top: -9999px !important;
  left: -9999px !important;
  width: 0 !important;
  height: 0 !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

/* Hide any Voiceflow iframes that might add space */
body>iframe[src*="voiceflow"],
body>div[style*="position: absolute"]:empty {
  display: none !important;
}
```
