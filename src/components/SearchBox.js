import React from 'react'
import '../App.css'

export const SearchBox = (props) => {
    return (
        <div className="col col-sm-3">
            <div className="searcher rounded-pill border-0 py-2">
                <input 
                    className="searcher2 form-control border-0 bg-transparent"
                    value={props.value}
                    onChange={(event) => props.setSearchValue(event.target.value)}
                    placeholder="Search">
                </input>
            </div>
        </div>
    )
}
