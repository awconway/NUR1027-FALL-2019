import React, { useState, useCallback } from 'react'

import classes from '../styles/result.module.sass'
import Switch from 'react-switch'
import ReactTooltip from 'react-tooltip'

export default function Result({ expanded = false, children }) {
    const [isExpanded, setIsExpanded] = useState(expanded)
    const handleExpand = useCallback(() => setIsExpanded(!isExpanded), [isExpanded])

    return (
        <div className={classes.root}>
            <label data-tip data-for="toggle">
                <Switch
                    onChange={handleExpand}
                    checked={isExpanded}
                    onColor="#29c15b"
                    onHandleColor="#fff"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    className={classes.toggle}
                    height={14}
                    width={28}
                />
            </label>
            <ReactTooltip id="toggle">
                <span>Toggle to show results</span>
            </ReactTooltip>
            {isExpanded && children && <div>{children}</div>}
        </div>
    )
}
