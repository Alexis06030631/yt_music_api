<!-- This file is generated by a script. Do not edit directly -->
# Artist() - Classes<Badge type="warning" text="1" />
:::warning Incomplete artist class
If the artist's content is empty except for the artist's name, this is due to a problem with Youtube that I'm trying to resolve as best I can.
:::



---
| <details open><summary>Properties</summary><p>[description](#description)<br>[followers](#followers)<br>[id](#id)<br>[name](#name)<br>[thumbnails](#thumbnails)</p></details> | <details open><summary>Functions</summary><p>[getAlbums](#function-getalbums)<br>[getSongs](#function-getsongs)</p></details> |
| --- | --- |



 # Functions


## Function getAlbums() 
Get the artist's albums

**Builder**:
````javascript
Artist.getAlbums()
````



<span class="flex_return">**Return:**&nbsp;
[promise![Link](/assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Album](/documentation/class/Album)[]&gt;</span>
## Function getSongs() 
Get the artist's songs

**Builder**:
````javascript
Artist.getSongs()
````



<span class="flex_return">**Return:**&nbsp;
[promise![Link](/assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Playlist](/documentation/class/Playlist)&gt;</span>


 # Properties


## description
The artist's description

**Builder**:
````javascript
Artist.description
````



**Return:**
<span class="flex_return">[string![Link](/assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
## followers
The artist's followers count

**Builder**:
````javascript
Artist.followers
````



**Return:**
<span class="flex_return">[followerFormat](/documentation/type/followerFormat)</span>
## id
The YouTube Music artist id

**Builder**:
````javascript
Artist.id
````



**Return:**
<span class="flex_return">[number![Link](/assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)</span>
## name
The artist name

**Builder**:
````javascript
Artist.name
````



**Return:**
<span class="flex_return">[string![Link](/assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
## thumbnails
Thumbnails of the user

**Builder**:
````javascript
Artist.thumbnails
````



**Return:**
<span class="flex_return">[array![Link](/assets/img/external_link.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Thumbnail](/documentation/class/Thumbnail)&gt;</span>