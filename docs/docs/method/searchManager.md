<!-- This file is generated by a script. Do not edit directly -->
# searchManager - Method


---
| <details open><summary>Functions</summary><p>[get](#function-get)<br>[GetData](#function-getdata)<br>[getPage](#function-getpage)<br>[getPlaylist](#function-getplaylist)<br>[relative](#function-relative)<br>[search](#function-search)</p></details> |
| --- |



 # Functions


## Function get(): 
Get the music by id

**Builder**:
````javascript
searchManager.get(id)
````

### Parameters
| Parameter | Type | Description | Optional |
| :---: | :---: | :---: | :---: |
| id | [string![Link](../assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The id of the music | 𐄂 |


<span class="flex_return">**Returns:**&nbsp;
[promise![Link](../assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Music](/docs/class/Music)&gt;</span>
## Function GetData(): 


**Builder**:
````javascript
searchManager.GetData(id)
````

### Parameters
| Parameter | Type | Description | Optional |
| :---: | :---: | :---: | :---: |
| id | [string![Link](../assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |  | 𐄂 |


<span class="flex_return">**Returns:**&nbsp;
[promise![Link](../assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;any&gt;</span>
## Function getPage(): 
Get the home page (NOT WORKING)

**Builder**:
````javascript
searchManager.getPage(type)
````

### Parameters
| Parameter | Type | Description | Optional |
| :---: | :---: | :---: | :---: |
| type | [TypeunitOfTime](/docs/interface/TypeunitOfTime) | Type of page to get | 𐄂 |


<span class="flex_return">**Returns:**&nbsp;
[promise![Link](../assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Home](/docs/class/Home) | any&gt;</span>
## Function getPlaylist(): 
Get the playlist by id

**Builder**:
````javascript
searchManager.getPlaylist(id)
````

### Parameters
| Parameter | Type | Description | Optional |
| :---: | :---: | :---: | :---: |
| id | [string![Link](../assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The id of the playlist | 𐄂 |


<span class="flex_return">**Returns:**&nbsp;
[promise![Link](../assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Playlist](/docs/class/Playlist)&gt;</span>
## Function relative(): 
Get the relative musics of a music

**Builder**:
````javascript
searchManager.relative(ID)
````

### Parameters
| Parameter | Type | Description | Optional |
| :---: | :---: | :---: | :---: |
| ID | [string![Link](../assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The id of the music | 𐄂 |


<span class="flex_return">**Returns:**&nbsp;
[promise![Link](../assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[array![Link](../assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Music](/docs/class/Music)&gt;&gt;</span>
## Function search(): 
Search music, video or other with query

**Builder**:
````javascript
searchManager.search(query, type)
````

### Parameters
| Parameter | Type | Description | Optional |
| :---: | :---: | :---: | :---: |
| query | [string![Link](../assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Query to search | 𐄂 |
| type | [TypeSearch_param](/docs/param/TypeSearch_param) | Type of search | ✓ |


<span class="flex_return">**Returns:**&nbsp;
[promise![Link](../assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[array![Link](../assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Music](/docs/class/Music)&gt;&gt;</span>