import{_ as a,c as t,o as s,a1 as i,a2 as e}from"./chunks/framework.CKfMFaxX.js";const m=JSON.parse('{"title":"Music() - Classes","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/class/Music.md","filePath":"documentation/class/Music.md"}'),r={name:"documentation/class/Music.md"},n=i('<h1 id="music-classes" tabindex="-1">Music() - Classes <a class="header-anchor" href="#music-classes" aria-label="Permalink to &quot;Music() - Classes&quot;">​</a></h1><hr><table tabindex="0"><thead><tr><th><details open><summary>Properties</summary><p><a href="#album">album</a><br><a href="#artists">artists</a><br><a href="#browseid">browseID</a><br><a href="#duration">duration</a><br><a href="#id">id</a><br><a href="#isaudioonly">isAudioOnly</a><br><a href="#isexplicit">isExplicit</a><br><a href="#relativebrowseid">relativeBrowseID</a><br><a href="#resulttype">resultType</a><br><a href="#thumbnails">thumbnails</a><br><a href="#title">title</a><br><a href="#videotype">videoType</a><br><a href="#year">year</a></p></details></th><th><details open><summary>Functions</summary><p><a href="#function-download">download</a><br><a href="#function-getlyrics">getLyrics</a><br><a href="#function-getradioplaylist">getRadioPlaylist</a><br><a href="#function-getthumbnail">getThumbnail</a></p></details></th></tr></thead></table><h1 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h1><h2 id="function-download" tabindex="-1">Function download() <a class="header-anchor" href="#function-download" aria-label="Permalink to &quot;Function download()&quot;">​</a></h2><p>Download the music</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">download</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(format, quality)</span></span></code></pre></div><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Description</th><th style="text-align:center;">Optional</th></tr></thead><tbody><tr><td style="text-align:center;">format</td><td style="text-align:center;"></td><td style="text-align:center;">The format of the music (Check available formats)</td><td style="text-align:center;">✓</td></tr><tr><td style="text-align:center;">quality</td><td style="text-align:center;"></td><td style="text-align:center;">The quality of the music (Check available qualities)</td><td style="text-align:center;">✓</td></tr></tbody></table><p><span class="flex_return"><strong>Return:</strong>  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noreferrer">promise<img src="'+e+'" alt="Link"></a>&lt;any&gt;</span></p><h2 id="function-getlyrics" tabindex="-1">Function getLyrics() <a class="header-anchor" href="#function-getlyrics" aria-label="Permalink to &quot;Function getLyrics()&quot;">​</a></h2><p>Get the lyrics of the music if it&#39;s available</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLyrics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p><span class="flex_return"><strong>Return:</strong>  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noreferrer">promise<img src="'+e+'" alt="Link"></a>&lt;{ lyrics: string; source: any; }&gt;</span></p><h2 id="function-getradioplaylist" tabindex="-1">Function getRadioPlaylist() <a class="header-anchor" href="#function-getradioplaylist" aria-label="Permalink to &quot;Function getRadioPlaylist()&quot;">​</a></h2><p>Get the radio playlist of the music</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getRadioPlaylist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p><span class="flex_return"><strong>Return:</strong>  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noreferrer">promise<img src="'+e+'" alt="Link"></a>&lt;<a href="/yt_music_api/documentation/class/Playlist">Playlist</a>&gt;</span></p><h2 id="function-getthumbnail" tabindex="-1">Function getThumbnail() <a class="header-anchor" href="#function-getthumbnail" aria-label="Permalink to &quot;Function getThumbnail()&quot;">​</a></h2><p>Return Thumbnail with custom size</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getThumbnail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(width, height)</span></span></code></pre></div><h3 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><table tabindex="0"><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Description</th><th style="text-align:center;">Optional</th></tr></thead><tbody><tr><td style="text-align:center;">width</td><td style="text-align:center;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" rel="noreferrer">number<img src="'+e+'" alt="Link"></a></td><td style="text-align:center;">The width of the thumbnail</td><td style="text-align:center;">𐄂</td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" rel="noreferrer">number<img src="'+e+'" alt="Link"></a></td><td style="text-align:center;">The height of the thumbnail</td><td style="text-align:center;">𐄂</td></tr></tbody></table><p><span class="flex_return"><strong>Return:</strong>  <a href="/yt_music_api/documentation/class/Thumbnail">Thumbnail</a></span></p><h1 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h1><h2 id="album" tabindex="-1">album <a class="header-anchor" href="#album" aria-label="Permalink to &quot;album&quot;">​</a></h2><p>Return the album of the music if it&#39;s available</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.album</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="/yt_music_api/documentation/class/Album">Album</a></span></p><h2 id="artists" tabindex="-1">artists <a class="header-anchor" href="#artists" aria-label="Permalink to &quot;artists&quot;">​</a></h2><p>An array of Artist objects</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.artists</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noreferrer">array<img src="'+e+'" alt="Link"></a>&lt;<a href="/yt_music_api/documentation/class/Artist">Artist</a>&gt;</span></p><h2 id="browseid" tabindex="-1">browseID <a class="header-anchor" href="#browseid" aria-label="Permalink to &quot;browseID&quot;">​</a></h2><p>The browseId of the music (NOT WORKING)</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.browseID</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noreferrer">string<img src="'+e+'" alt="Link"></a></span></p><h2 id="duration" tabindex="-1">duration <a class="header-anchor" href="#duration" aria-label="Permalink to &quot;duration&quot;">​</a></h2><p>The duration of the music</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.duration</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="/yt_music_api/documentation/class/Duration">Duration</a></span></p><h2 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id&quot;">​</a></h2><p>The YTmusic id of the music</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.id</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noreferrer">string<img src="'+e+'" alt="Link"></a></span></p><h2 id="isaudioonly" tabindex="-1">isAudioOnly <a class="header-anchor" href="#isaudioonly" aria-label="Permalink to &quot;isAudioOnly&quot;">​</a></h2><p>If the music is audio only (considerably reduces the risk of unwanted sounds in the middle of a song)</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.isAudioOnly</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" target="_blank" rel="noreferrer">boolean<img src="'+e+'" alt="Link"></a></span></p><h2 id="isexplicit" tabindex="-1">isExplicit <a class="header-anchor" href="#isexplicit" aria-label="Permalink to &quot;isExplicit&quot;">​</a></h2><p>If the music contains explicit content</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.isExplicit</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" target="_blank" rel="noreferrer">boolean<img src="'+e+'" alt="Link"></a></span></p><h2 id="relativebrowseid" tabindex="-1">relativeBrowseID <a class="header-anchor" href="#relativebrowseid" aria-label="Permalink to &quot;relativeBrowseID&quot;">​</a></h2><p>The relative browseId of the music (used for fetching related songs)</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.relativeBrowseID</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noreferrer">string<img src="'+e+'" alt="Link"></a></span></p><h2 id="resulttype" tabindex="-1">resultType <a class="header-anchor" href="#resulttype" aria-label="Permalink to &quot;resultType&quot;">​</a></h2><p>The type of the video</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.resultType</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noreferrer">string<img src="'+e+'" alt="Link"></a></span></p><h2 id="thumbnails" tabindex="-1">thumbnails <a class="header-anchor" href="#thumbnails" aria-label="Permalink to &quot;thumbnails&quot;">​</a></h2><p>An array of available Artwork in different sizes</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.thumbnails</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noreferrer">array<img src="'+e+'" alt="Link"></a>&lt;<a href="/yt_music_api/documentation/class/Thumbnail">Thumbnail</a>&gt;</span></p><h2 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-label="Permalink to &quot;title&quot;">​</a></h2><p>The title of the music</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.title</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noreferrer">string<img src="'+e+'" alt="Link"></a></span></p><h2 id="videotype" tabindex="-1">videoType <a class="header-anchor" href="#videotype" aria-label="Permalink to &quot;videoType&quot;">​</a></h2><p>The YouTube type of the music</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.videoType</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noreferrer">string<img src="'+e+'" alt="Link"></a></span></p><h2 id="year" tabindex="-1">year <a class="header-anchor" href="#year" aria-label="Permalink to &quot;year&quot;">​</a></h2><p>The year of the music if it&#39;s available</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Music.year</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" rel="noreferrer">number<img src="'+e+'" alt="Link"></a></span></p>',94),l=[n];function o(p,c,h,d,u,g){return s(),t("div",null,l)}const k=a(r,[["render",o]]);export{m as __pageData,k as default};