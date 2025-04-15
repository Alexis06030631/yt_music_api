import{_ as t}from"./chunks/external_link.5iCenOwe.js";import{_ as r,C as n,c as l,o,j as s,ae as p,a as e,G as c}from"./chunks/framework.DXGVojAJ.js";const y=JSON.parse('{"title":"Artist() - Classes","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/class/Artist.md","filePath":"documentation/class/Artist.md"}'),h={name:"documentation/class/Artist.md"},d={id:"artist-classes",tabindex:"-1"};function u(g,a,b,m,k,f){const i=n("Badge");return o(),l("div",null,[s("h1",d,[a[0]||(a[0]=e("Artist() - Classes")),c(i,{type:"warning",text:"1"}),a[1]||(a[1]=e()),a[2]||(a[2]=s("a",{class:"header-anchor",href:"#artist-classes","aria-label":'Permalink to "Artist() - Classes<Badge type="warning" text="1" />"'},"​",-1))]),a[3]||(a[3]=p('<div class="warning custom-block"><p class="custom-block-title">Incomplete artist class</p><p>If the artist&#39;s content is empty except for the artist&#39;s name, this is due to a problem with Youtube that I&#39;m trying to resolve as best I can.</p></div><hr><table tabindex="0"><thead><tr><th><details open><summary>Properties</summary><p><a href="#description">description</a><br><a href="#followers">followers</a><br><a href="#id">id</a><br><a href="#name">name</a><br><a href="#thumbnails">thumbnails</a></p></details></th><th><details open><summary>Functions</summary><p><a href="#function-getalbums">getAlbums</a><br><a href="#function-getsongs">getSongs</a></p></details></th></tr></thead></table><h1 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h1><h2 id="function-getalbums" tabindex="-1">Function getAlbums() <a class="header-anchor" href="#function-getalbums" aria-label="Permalink to &quot;Function getAlbums()&quot;">​</a></h2><p>Get the artist&#39;s albums</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Artist.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getAlbums</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p><span class="flex_return"><strong>Return:</strong>  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noreferrer">promise<img src="'+t+'" alt="Link"></a>&lt;<a href="/yt_music_api/documentation/class/Album">Album</a>[]&gt;</span></p><h2 id="function-getsongs" tabindex="-1">Function getSongs() <a class="header-anchor" href="#function-getsongs" aria-label="Permalink to &quot;Function getSongs()&quot;">​</a></h2><p>Get the artist&#39;s songs @return Music[]</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Artist.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getSongs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><p><span class="flex_return"><strong>Return:</strong>  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noreferrer">promise<img src="'+t+'" alt="Link"></a>&lt;<a href="/yt_music_api/documentation/class/Playlist">Playlist</a>&gt;</span></p><h1 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h1><h2 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;description&quot;">​</a></h2><p>The artist&#39;s description</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Artist.description</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noreferrer">string<img src="'+t+'" alt="Link"></a></span></p><h2 id="followers" tabindex="-1">followers <a class="header-anchor" href="#followers" aria-label="Permalink to &quot;followers&quot;">​</a></h2><p>The artist&#39;s followers count</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Artist.followers</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="/yt_music_api/documentation/type/followerFormat">followerFormat</a></span></p><h2 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id&quot;">​</a></h2><p>The YouTube Music artist id</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Artist.id</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" rel="noreferrer">number<img src="'+t+'" alt="Link"></a></span></p><h2 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h2><p>The artist name</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Artist.name</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noreferrer">string<img src="'+t+'" alt="Link"></a></span></p><h2 id="thumbnails" tabindex="-1">thumbnails <a class="header-anchor" href="#thumbnails" aria-label="Permalink to &quot;thumbnails&quot;">​</a></h2><p>Thumbnails of the user</p><p><strong>Builder</strong>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Artist.thumbnails</span></span></code></pre></div><p><strong>Return:</strong><span class="flex_return"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noreferrer">array<img src="'+t+'" alt="Link"></a>&lt;<a href="/yt_music_api/documentation/class/Thumbnail">Thumbnail</a>&gt;</span></p>',40))])}const E=r(h,[["render",u]]);export{y as __pageData,E as default};
