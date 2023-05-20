declare const SearchManager: {
    search: (query: string, type: string, limit?: number, page?: number) => Promise<any>;
    searchMusic: (query: string) => Promise<any>;
    searchAll: (query: string, limit?: number, page?: number) => Promise<any>;
};
export default SearchManager;
