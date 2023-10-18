import {addUnitAliasFromArray, getAllObjects, normalizeObjectUnits} from "../utils/typeBuilder";

export type TypeunitOfTime = (
    'home' | 'default' | 'index' |
    'tendance' | 'tendency' | 'tendances' | 'tendencies' |
    'news' | 'new' | 'release' | 'releases'
)
addUnitAliasFromArray('typePage','FEmusic_home', ['home', 'default', 'index']);
addUnitAliasFromArray('typePage', 'FEmusic_charts', ['tendance', 'tendency', 'tendances', 'tendencies']);
addUnitAliasFromArray('typePage', 'FEmusic_new_releases', ['news', 'new', 'release', 'releases']);
