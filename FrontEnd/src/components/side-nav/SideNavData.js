import React from 'react'
// import * as FaIcons from 'react-icons/fa'
// import * as AiIcons from 'react-icons/ai'
// import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SideNavData = [
    {
        title: 'Analyzers',
        category: 'analyzers',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Regional',
                category: 'analyzers-regional'
            },
            {
                title: 'International',
                category: 'analyzers-international'
            },
            {
                title: 'Asia',
                category: 'analyzers-asia'
            }
        ]
    },
    {
        title: 'Data Managers',
        category: 'data-managers',
    },
    {
        title: 'Quote Servers',
        category: 'quote-servers',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Intl / Reg',
                category: 'quote-servers-intl-reg'
            },
            {
                title: 'Asia',
                category: 'quote-servers-asia'
            }
        ]
    },
    {
        title: 'Other',
        category: 'other',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Search Service',
                category: 'other-search-service'
            },
            {
                title: 'Solr',
                category: 'other-solr'
            },
            {
                title: 'OHLC',
                category: 'other-ohlc'
            },
            {
                title: 'DB Manager',
                category: 'other-db-manager'
            },
            {
                title: 'Category 1',
                category: 'other-category-1'
            },
            {
                title: 'Category 2',
                category: 'other-category-2'
            },
            {
                title: 'Category 3',
                category: 'other-category-3'
            },
            {
                title: 'Category 4',
                category: 'other-category-4'
            },
            {
                title: 'Other',
                category: 'other-other'
            }
        ]
    },
    
]
