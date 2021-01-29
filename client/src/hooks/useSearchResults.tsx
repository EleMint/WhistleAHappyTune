import React from 'react';

type UseSearchResultsProps = {
    isExplicit: boolean;
    limit: number;
    searchTerm: string;
}

type SearchResult = {
    previewUrl: string;
    artistName: string;
    artworkUrl100: string;
    trackId: number;
    trackName: string;
}

type SearchResultResponse = {
    resultCount: number;
    results: SearchResult[];
}

type UseSearchResultsValue = {
    loading: boolean;
    error: Error | null;
    value: SearchResultResponse;
}

export const useSearchResults = ({ isExplicit, limit, searchTerm }: UseSearchResultsProps): UseSearchResultsValue => {
    const [loading, setLoading] = React.useState<boolean>(true)
    const [error, setError] = React.useState<Error | null>(null)
    const [value, setValue] = React.useState<SearchResultResponse>({} as SearchResultResponse)
    const path = React.useMemo(() =>
        '?' +
        'country=us&' +
        'media=music&' +
        'lang=en_us&' +
        `explicit=${isExplicit ? "yes" : "no"}&` +
        `limit=${limit}&` +
        `term=${searchTerm.trim()}`
        , [isExplicit, limit, searchTerm])

    React.useEffect(() => {
        setLoading(true)
        if (!path.endsWith("=")) {
            fetch(`https://itunes.apple.com/search${path}`)
                .then(resp => resp.json())
                .then((resp: SearchResultResponse) => {
                    setValue(resp)
                    setLoading(false)
                })
                .catch(err => {
                    setError(err)
                    setLoading(false)
                })
        }
    }, [path])

    return {
        loading,
        error,
        value,
    }
}
