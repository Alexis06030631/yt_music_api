export const CONTENT: any[] = ["contents", 0];
export const RUN_TEXT: any[] = ["runs", 0, "text"];
export const TAB_CONTENT: any[] = ["tabs", 0, "tabRenderer", "content"];
export const TAB_1_CONTENT: any[] = ["tabs", 1, "tabRenderer", "content"];
export const TWO_COLUMN_RENDERER: any[] = ["contents", "twoColumnBrowseResultsRenderer"];
export const SINGLE_COLUMN: any[] = ["contents", "singleColumnBrowseResultsRenderer"];
export const SINGLE_COLUMN_TAB: any[] = [...SINGLE_COLUMN, ...TAB_CONTENT];
export const SECTION: any[] = ["sectionListRenderer"];
export const SECTION_LIST: any[] = [...SECTION, "contents"];
export const SECTION_LIST_ITEM: any[] = [...SECTION, ...CONTENT];
export const TWO_COLUMN_TAB: any[] = [...TWO_COLUMN_RENDERER];
export const RESPONSIVE_HEADER: any[] = ["musicResponsiveHeaderRenderer"];
export const ITEM_SECTION: any[] = ["itemSectionRenderer", ...CONTENT];
export const MUSIC_SHELF: any[] = ["musicShelfRenderer"];
export const GRID: any[] = ["gridRenderer"];
export const GRID_ITEMS: any[] = [...GRID, "items"];
export const MENU: any[] = ["menu", "menuRenderer"];
export const MENU_ITEMS: any[] = [...MENU, "items"];
export const MENU_LIKE_STATUS: any[] = [...MENU, "topLevelButtons", 0, "likeButtonRenderer", "likeStatus"];
export const MENU_SERVICE: any[] = ["menuServiceItemRenderer", "serviceEndpoint"];
export const TOGGLE_MENU: string = "toggleMenuServiceItemRenderer";
export const OVERLAY_RENDERER: any[] = ["musicItemThumbnailOverlayRenderer", "content", "musicPlayButtonRenderer"];
export const PLAY_BUTTON: any[] = ["overlay", ...OVERLAY_RENDERER];
export const NAVIGATION_BROWSE: any[] = ["navigationEndpoint", "browseEndpoint"];
export const NAVIGATION_BROWSE_ID: any[] = [...NAVIGATION_BROWSE, "browseId"];
export const PAGE_TYPE: any[] = ["browseEndpointContextSupportedConfigs", "browseEndpointContextMusicConfig", "pageType"];
export const WATCH_VIDEO_ID: any[] = ["watchEndpoint", "videoId"];
export const PLAYLIST_ID: any[] = ["playlistId"];
export const WATCH_PLAYLIST_ID: any[] = ["watchEndpoint", ...PLAYLIST_ID];
export const NAVIGATION_VIDEO_ID: any[] = ["navigationEndpoint", ...WATCH_VIDEO_ID];
export const QUEUE_VIDEO_ID: any[] = ["queueAddEndpoint", "queueTarget", "videoId"];
export const NAVIGATION_PLAYLIST_ID: any[] = ["navigationEndpoint", ...WATCH_PLAYLIST_ID];
export const WATCH_PID: any[] = ["watchPlaylistEndpoint", ...PLAYLIST_ID];
export const NAVIGATION_WATCH_PLAYLIST_ID: any[] = ["navigationEndpoint", ...WATCH_PID];
export const NAVIGATION_VIDEO_TYPE: any[] = ["watchEndpoint", "watchEndpointMusicSupportedConfigs", "watchEndpointMusicConfig", "musicVideoType",];
export const ICON_TYPE: any[] = ["icon", "iconType"];
export const TOGGLED_BUTTON: any[] = ["toggleButtonRenderer", "isToggled"];
export const TITLE: any[] = ["title", "runs", 0];
export const TITLE_TEXT: any[] = ["title", ...RUN_TEXT];
export const TEXT_RUNS: any[] = ["text", "runs"];
export const TEXT_RUN: any[] = [...TEXT_RUNS, 0];
export const TEXT_RUN_TEXT: any[] = [...TEXT_RUN, "text"];
export const SUBTITLE: any[] = ["subtitle", ...RUN_TEXT];
export const SUBTITLE_RUNS: any[] = ["subtitle", "runs"];
export const SUBTITLE_RUN: any[] = [...SUBTITLE_RUNS, 0];
export const SUBTITLE2: any[] = [...SUBTITLE_RUNS, 2, "text"];
export const SUBTITLE3: any[] = [...SUBTITLE_RUNS, 4, "text"];
export const THUMBNAIL: any[] = ["thumbnail", "thumbnails"];
export const THUMBNAILS: any[] = ["thumbnail", "musicThumbnailRenderer", ...THUMBNAIL];
export const THUMBNAIL_RENDERER: any[] = ["thumbnailRenderer", "musicThumbnailRenderer", ...THUMBNAIL];
export const THUMBNAIL_OVERLAY: any[] = ["thumbnailOverlay", ...OVERLAY_RENDERER, "playNavigationEndpoint", ...WATCH_PID];
export const THUMBNAIL_CROPPED: any[] = ["thumbnail", "croppedSquareThumbnailRenderer", ...THUMBNAIL];
export const FEEDBACK_TOKEN: any[] = ["feedbackEndpoint", "feedbackToken"];
export const BADGE_PATH: any[] = [0, "musicInlineBadgeRenderer", "accessibilityData", "accessibilityData", "label"];
export const BADGE_LABEL: any[] = ["badges", ...BADGE_PATH];
export const SUBTITLE_BADGE_LABEL: any[] = ["subtitleBadges", ...BADGE_PATH];
export const CATEGORY_TITLE: any[] = ["musicNavigationButtonRenderer", "buttonText", ...RUN_TEXT];
export const CATEGORY_PARAMS: any[] = ["musicNavigationButtonRenderer", "clickCommand", "browseEndpoint", "params"];
export const MMRIR: string = "musicMultiRowListItemRenderer";
export const MRLIR: string = "musicResponsiveListItemRenderer";
export const MTRIR: string = "musicTwoRowItemRenderer";
export const MNIR: string = "menuNavigationItemRenderer";
export const TASTE_PROFILE_ITEMS: any[] = ["contents", "tastebuilderRenderer", "contents"];
export const TASTE_PROFILE_ARTIST: any[] = ["title", "runs"];
export const SECTION_LIST_CONTINUATION: any[] = ["continuationContents", "sectionListContinuation"];
export const MENU_PLAYLIST_ID: any[] = [...MENU_ITEMS, 0, MNIR, ...NAVIGATION_WATCH_PLAYLIST_ID];
export const MENU_RADIO_PLAYLIST_ID: any[] = [...MENU_ITEMS, 0, MNIR, "navigationEndpoint", "watchEndpoint", "playlistId"];
export const MULTI_SELECT: any[] = ["musicMultiSelectMenuItemRenderer"];
export const HEADER: any[] = ["header"];
export const HEADER_DETAIL: any[] = [...HEADER];
export const EDITABLE_PLAYLIST_DETAIL_HEADER: any[] = ["musicEditablePlaylistDetailHeaderRenderer"];
export const HEADER_EDITABLE_DETAIL: any[] = [...HEADER, ...EDITABLE_PLAYLIST_DETAIL_HEADER];
export const HEADER_SIDE: any[] = [...HEADER, "musicSideAlignedItemRenderer"];
export const HEADER_MUSIC_VISUAL: any[] = [...HEADER, "musicVisualHeaderRenderer"];
export const HEADER_ARTIST: any[] = [...HEADER, "musicImmersiveHeaderRenderer"];
export const HEADER_ARTIST_TITLE: any[] = [...HEADER_ARTIST, ...TITLE_TEXT];
export const HEADER_PLAYLIST_TITLE: any[] = [...HEADER_DETAIL, ...TITLE_TEXT];
export const HEADER_ARTIST_THUMBNAIL: any[] = [...HEADER_ARTIST, ...THUMBNAILS];
export const HEADER_PLAYLIST_THUMBNAIL: any[] = [...HEADER_DETAIL];
export const DESCRIPTION_SHELF: any[] = ["musicDescriptionShelfRenderer"];
export const DESCRIPTION: any[] = ["description", ...RUN_TEXT];
export const CAROUSEL: any[] = ["musicCarouselShelfRenderer"];
export const IMMERSIVE_CAROUSEL: any[] = ["musicImmersiveCarouselShelfRenderer"];
export const CAROUSEL_CONTENTS: any[] = [...CAROUSEL, "contents"];
export const CAROUSEL_TITLE: any[] = [...HEADER, "musicCarouselShelfBasicHeaderRenderer", ...TITLE];
export const CARD_SHELF_TITLE: any[] = [...HEADER, "musicCardShelfHeaderBasicRenderer", ...TITLE_TEXT];
export const FRAMEWORK_MUTATIONS: any[] = ["frameworkUpdates", "entityBatchUpdate", "mutations"];
export const LONGTEXT_RUNS: any[] = ["longBylineText", "runs"];
export const SUBSCRIBE_BUTTON: any[] = ["subscriptionButton", "subscribeButtonRenderer"];
export const PLAYLIST_SHELF_RENDERER: any[] = [...TWO_COLUMN_TAB, "secondaryContents", ...SECTION_LIST_ITEM, "musicPlaylistShelfRenderer"];
export const PLAYLIST_SHELF_HEADER_RENDERER: any[] = [...TWO_COLUMN_TAB, ...TAB_CONTENT, ...SECTION_LIST, 0, ...RESPONSIVE_HEADER];
export const CHARTS_SHELF_RENDERER: any[] = [...PLAYLIST_SHELF_RENDERER, "contents"];
export const CHARTS_SHELF_PLAYLISTID: any[] = [...PLAYLIST_SHELF_RENDERER, ...PLAYLIST_ID];
export const HEADER_CHART_TITLE: any[] = [...TWO_COLUMN_TAB, ...TAB_CONTENT, ...SECTION_LIST_ITEM, ...RESPONSIVE_HEADER, ...TITLE_TEXT];
export const HEADER_CHART_THUMBNAIL: any[] = [...TWO_COLUMN_TAB, ...TAB_CONTENT, ...SECTION_LIST_ITEM, ...RESPONSIVE_HEADER, ...THUMBNAILS];
export const HEADER_CHART_DESCRIPTION: any[] = [...TWO_COLUMN_TAB, ...TAB_CONTENT, ...SECTION_LIST_ITEM, ...RESPONSIVE_HEADER, "description", ...DESCRIPTION_SHELF, ...DESCRIPTION];


export function nav(root: any, items: any[], none_if_absent: boolean = false, skip_if_absent: boolean = false): any {
	try {
		for (const k of items) {
			root = root[k];
		}
	} catch (e) {
		if (none_if_absent) {
			return null;
		} else if (skip_if_absent) {
			return root;
		}
		throw new Error(`Unable to find '${items}' on ${JSON.stringify(root)}, exception: ${e}`);
	}
	return root;
}


export function findObjectByKey(objectList: any[], key: string, nested: string | null = null, isKey: boolean = false): any {
	for (let item of objectList) {
		if (nested) {
			item = item[nested];
		}
		if (item && key in item) {
			return isKey ? item[key] : item;
		}
	}
	return null;
}

export function findObjectsByKey(objectList: any[], key: string, nested?: string): any[] {
	const objects: any[] = [];
	for (let item of objectList) {
		if (nested) {
			item = item[nested];
		}
		if (key in item) {
			objects.push(item);
		}
	}
	return objects;
}
