import React from 'react';
import styled from 'styled-components';

import { Explicit } from './explicit';
import { useSearchResults } from '../hooks/useSearchResults';
import { useDebounce } from '../hooks/useDebounce';


export const Search = () => {
    const [searchTerm, setSearchTerm] = React.useState<string>("")
    const debouncedSearchTerm = useDebounce(searchTerm, 300)
    const [isExplicit, setIsExplicit] = React.useState<boolean>(false)
    const { loading, error, value } = useSearchResults({
        isExplicit,
        limit: 10,
        searchTerm: debouncedSearchTerm
    })


    const onSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setSearchTerm(event.target.value)

    return (
        <>
            <SearchContainer>
                <input
                    id="SearchTextBox"
                    type="text"
                    autoFocus
                    maxLength={25}
                    placeholder={"Enter Search Term"}
                    onChange={onSearchTermChange}
                />
                <Explicit isExplicit={isExplicit} setIsExplicit={setIsExplicit} />
            </SearchContainer>
            <ResultContainer>
                {
                    error
                        ? <div className={"error"}>{error}</div>
                        : <></>
                }
                {
                    loading || value.resultCount === 0
                        ? <></>
                        : value.results.map((line, idx) => (
                            <div className={`line ${idx % 2 ? "odd" : ""}`} key={idx}>
                                <div className={"image-container"}>
                                    <img src={line.artworkUrl100} alt={"Album Cover"} />
                                </div>
                                <div className={"info-container"}>
                                    <div className={"info"}>{line.artistName}</div>
                                    <div className={"info"}>{line.trackName}</div>
                                </div>
                                <div className={"preview-container"}>
                                    <audio controls preload="none">
                                        <source src={line.previewUrl} type="audio/mp4" />
                                    </audio>
                                </div>
                            </div>
                        ))
                }
            </ResultContainer>
        </>
    )
}

const SearchContainer = styled.form`
    margin-bottom: 30px;
    
    #SearchTextBox {
        margin-right: 10px;
    }
`

const ResultContainer = styled.div`
    margin-bottom: 30px;
    display: inline-grid;
    
    .line {
        height: 100px;
        display: inline-flex;
    }

    .odd {
        background-color: #b9b8b8;
    }

    .info-container {
        width: 100%;
        display: initial;
        margin: 0 5px;
    }

    .info {
        height: 25%;
    }
`
