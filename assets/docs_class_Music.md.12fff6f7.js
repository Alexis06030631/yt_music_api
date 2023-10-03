import{_ as a}from"./chunks/external_link.8ce15b78.js";import{_ as t,o as e,c as r,Q as s}from"./chunks/framework.a0756b30.js";const f=JSON.parse('{"title":"Music - Class","description":"","frontmatter":{},"headers":[],"relativePath":"docs/class/Music.md","filePath":"docs/class/Music.md"}'),o={name:"docs/class/Music.md"},n=s('<h1 id="music-class" tabindex="-1">Music - Class <a class="header-anchor" href="#music-class" aria-label="Permalink to &quot;Music - Class&quot;">​</a></h1><hr><table><thead><tr><th><details open><summary>Properties</summary><p><a href="#artists">artists</a><br><a href="#artworks">artworks</a><br><a href="#automix">autoMix</a><br><a href="#browseid">browseId</a><br><a href="#duration">duration</a><br><a href="#id">id</a><br><a href="#isaudioonly">isAudioOnly</a><br><a href="#title">title</a><br><a href="#typevideo">typeVideo</a></p></details></th><th><details open><summary>Functions</summary><p><a href="#function-download">download</a><br><a href="#function-getlyrics">getLyrics</a></p></details></th></tr></thead></table><h1 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h1><h2 id="function-download" tabindex="-1">Function download(): <a class="header-anchor" href="#function-download" aria-label="Permalink to &quot;Function download():&quot;">​</a></h2><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Music.</span><span style="color:#B392F0;">download</span><span style="color:#E1E4E8;">(type, quality)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Music.</span><span style="color:#6F42C1;">download</span><span style="color:#24292E;">(type, quality)</span></span></code></pre></div><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Description</th><th style="text-align:center;">Optional</th></tr></thead><tbody><tr><td style="text-align:center;">type</td><td style="text-align:center;"><a href="/yt_music_api/docs/param/DownloadType_param">DownloadType_param</a></td><td style="text-align:center;"></td><td style="text-align:center;">𐄂</td></tr><tr><td style="text-align:center;">quality</td><td style="text-align:center;"><a href="/yt_music_api/docs/param/DownloadQuality_param">DownloadQuality_param</a></td><td style="text-align:center;"></td><td style="text-align:center;">✓</td></tr></tbody></table><p><strong>Returns:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noreferrer">promise<img src="'+a+'" alt="Link"></a>&lt;<a href="https://nodejs.org/api/buffer.html" target="_blank" rel="noreferrer">buffer<img src="'+a+'" alt="Link"></a>&gt;</span></p><h2 id="function-getlyrics" tabindex="-1">Function getLyrics(): <a class="header-anchor" href="#function-getlyrics" aria-label="Permalink to &quot;Function getLyrics():&quot;">​</a></h2><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Music.</span><span style="color:#B392F0;">getLyrics</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Music.</span><span style="color:#6F42C1;">getLyrics</span><span style="color:#24292E;">()</span></span></code></pre></div><p><strong>Returns:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noreferrer">promise<img src="'+a+'" alt="Link"></a>&lt;<a href="/yt_music_api/docs/class/Lyrics">Lyrics</a> | <a href="/yt_music_api/docs/class/NoLyrics">NoLyrics</a>&gt;</span></p><h1 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h1><h2 id="artists" tabindex="-1">artists: <a class="header-anchor" href="#artists" aria-label="Permalink to &quot;artists:&quot;">​</a></h2><p><strong>Returns:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noreferrer">array<img src="'+a+'" alt="Link"></a>&lt;<a href="/yt_music_api/docs/class/Artist">Artist</a>&gt;</span></p><h2 id="artworks" tabindex="-1">artworks: <a class="header-anchor" href="#artworks" aria-label="Permalink to &quot;artworks:&quot;">​</a></h2><p><strong>Returns:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noreferrer">array<img src="'+a+'" alt="Link"></a>&lt;<a href="/yt_music_api/docs/class/Artwork">Artwork</a>&gt;</span></p><h2 id="automix" tabindex="-1">autoMix: <a class="header-anchor" href="#automix" aria-label="Permalink to &quot;autoMix:&quot;">​</a></h2><p><strong>Returns:</strong><span class="flex_return">boolean</span></p><h2 id="browseid" tabindex="-1">browseId: <a class="header-anchor" href="#browseid" aria-label="Permalink to &quot;browseId:&quot;">​</a></h2><p><strong>Returns:</strong><span class="flex_return">string</span></p><h2 id="duration" tabindex="-1">duration: <a class="header-anchor" href="#duration" aria-label="Permalink to &quot;duration:&quot;">​</a></h2><p><strong>Returns:</strong><span class="flex_return"><a href="/yt_music_api/docs/class/Duration">Duration</a></span></p><h2 id="id" tabindex="-1">id: <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id:&quot;">​</a></h2><p><strong>Returns:</strong><span class="flex_return">string</span></p><h2 id="isaudioonly" tabindex="-1">isAudioOnly: <a class="header-anchor" href="#isaudioonly" aria-label="Permalink to &quot;isAudioOnly:&quot;">​</a></h2><p><strong>Returns:</strong><span class="flex_return">boolean</span></p><h2 id="title" tabindex="-1">title: <a class="header-anchor" href="#title" aria-label="Permalink to &quot;title:&quot;">​</a></h2><p><strong>Returns:</strong><span class="flex_return">string</span></p><h2 id="typevideo" tabindex="-1">typeVideo: <a class="header-anchor" href="#typevideo" aria-label="Permalink to &quot;typeVideo:&quot;">​</a></h2><p><strong>Returns:</strong><span class="flex_return">string</span></p>',33),i=[n];function l(c,d,p,h,u,g){return e(),r("div",null,i)}const m=t(o,[["render",l]]);export{f as __pageData,m as default};
