import {AvailableCountry} from "../types/AvailableCountry";
import Music from "./Music";

export default class Trending {
    availableCountries: AvailableCountry[];
    songs: Music[];

    constructor(data: any) {
        this.songs = data.songs
        this.availableCountries = data.contents.singleColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].musicShelfRenderer.subheaders[0].musicSideAlignedItemRenderer.startItems[0].musicSortFilterButtonRenderer.menu.musicMultiSelectMenuRenderer.options.filter((country: any) => country.musicMultiSelectMenuItemRenderer).map((country: any) => new AvailableCountry(country.musicMultiSelectMenuItemRenderer, data.frameworkUpdates.entityBatchUpdate.mutations?.find((item: any) => item.entityKey === country.musicMultiSelectMenuItemRenderer.formItemEntityKey)?.payload?.musicFormBooleanChoice?.opaqueToken));
    }
}