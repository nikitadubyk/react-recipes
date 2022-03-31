import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { Recipes } from '../../type'
import Layout from '../../components/Layout'
import './Favorite.css'

const Favorite: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipes[]>([])

    useEffect(() => {
        if (localStorage.getItem('favorite')) {
            //@ts-ignore
            setRecipes(JSON.parse(localStorage.getItem('favorite') || []))
        }
    }, [])

    return (
        <Layout title='Favorite'>
            <div className='favorite'>
                <h3 className='favorite__title'>Favorite</h3>
                <div className='favorite__wrapper'>
                    {recipes.length > 0 ? (
                        recipes.map((recipe: Recipes) => {
                            return (
                                <div className='favorite__item' key={recipe.id}>
                                    <Card {...recipe} />
                                </div>
                            )
                        })
                    ) : (
                        <View />
                    )}
                </div>
            </div>
        </Layout>
    )
}

const View = () => {
    return (
        <div className='favorite__error'>
            <svg
                height='50px'
                version='1.1'
                viewBox='0 0 519 519'
                width='50px'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'
            >
                <title />
                <desc />
                <defs>
                    <radialGradient
                        cx='50%'
                        cy='18.3997132%'
                        fx='50%'
                        fy='18.3997132%'
                        gradientTransform='translate(0.500000,0.183997),scale(0.998077,1.000000),rotate(92.315592),translate(-0.500000,-0.183997)'
                        id='radialGradient-1'
                        r='59.6761013%'
                    >
                        <stop offset='0%' stopColor='#FDE990' />
                        <stop offset='100%' stopColor='#FACE57' />
                    </radialGradient>
                    <radialGradient
                        cx='50%'
                        cy='44.7705207%'
                        fx='50%'
                        fy='44.7705207%'
                        gradientTransform='translate(0.500000,0.447705),scale(0.998077,1.000000),rotate(-88.877641),scale(1.000000,1.022987),translate(-0.500000,-0.447705)'
                        id='radialGradient-2'
                        r='49.9682142%'
                    >
                        <stop
                            offset='0%'
                            stopColor='#D27C12'
                            stopOpacity='0.186216128'
                        />
                        <stop
                            offset='85.6313345%'
                            stopColor='#D27C12'
                            stopOpacity='0'
                        />
                        <stop
                            offset='100%'
                            stopColor='#D27C12'
                            stopOpacity='0.324546547'
                        />
                    </radialGradient>
                    <linearGradient
                        id='linearGradient-3'
                        x1='54.0185272%'
                        x2='45.9814728%'
                        y1='0.372692418%'
                        y2='99.6273076%'
                    >
                        <stop offset='0%' stopColor='#251C0C' />
                        <stop offset='100%' stopColor='#000000' />
                    </linearGradient>
                    <radialGradient
                        cx='50%'
                        cy='50%'
                        fx='50%'
                        fy='50%'
                        gradientTransform='translate(0.500000,0.500000),scale(1.000000,0.540323),rotate(90.000000),translate(-0.500000,-0.500000)'
                        id='radialGradient-4'
                        r='92.5373134%'
                    >
                        <stop offset='0%' stopColor='#71B5F8' />
                        <stop offset='100%' stopColor='#0073E4' />
                    </radialGradient>
                </defs>
                <g
                    fill='none'
                    fillRule='evenodd'
                    id='Page-1'
                    stroke='none'
                    strokeWidth='1'
                >
                    <g
                        id='Artboard'
                        transform='translate(-1563.000000, -1625.000000)'
                    >
                        <g
                            id='Group-5'
                            transform='translate(1563.000000, 1625.000000)'
                        >
                            <ellipse
                                cx='259.500964'
                                cy='259.001923'
                                fill='url(#radialGradient-1)'
                                id='Oval'
                                rx='259.500964'
                                ry='259.001923'
                            />
                            <ellipse
                                cx='259.500963'
                                cy='259.002885'
                                fill='url(#radialGradient-2)'
                                id='Oval'
                                rx='259.500964'
                                ry='259.001923'
                            />
                            <path
                                d='M154.467082,245.347015 C170.159033,242.785728 186.227545,254.870171 188.682329,276.489932 C191.137114,298.109693 179.048594,321.077808 163.356642,323.639095 C147.664691,326.200382 128.212307,315.025617 125.757523,293.405856 C123.302739,271.786095 138.775131,247.908302 154.467082,245.347015 Z M157.209008,182 C163.786099,182 169.117884,187.349264 169.117884,193.947915 C169.117884,200.546567 163.786099,205.895831 157.209008,205.895831 C143.06815,205.895831 128.544211,211.849721 113.444929,224.22921 C108.352076,228.4047 100.84966,227.647497 96.6878131,222.537949 C92.5259662,217.428401 93.2806952,209.90139 98.3735476,205.7259 C117.474112,190.065869 137.15002,182 157.209008,182 Z'
                                fill='url(#linearGradient-3)'
                                id='Oval-2'
                                opacity='0.879673549'
                            />
                            <path
                                d='M395.467082,245.347015 C411.159033,242.785728 427.227545,254.870171 429.682329,276.489932 C432.137114,298.109693 420.048594,321.077808 404.356642,323.639095 C388.664691,326.200382 369.212307,315.025617 366.757523,293.405856 C364.302739,271.786095 379.775131,247.908302 395.467082,245.347015 Z M398.209008,182 C404.786099,182 410.117884,187.349264 410.117884,193.947915 C410.117884,200.546567 404.786099,205.895831 398.209008,205.895831 C384.06815,205.895831 369.544211,211.849721 354.444929,224.22921 C349.352076,228.4047 341.84966,227.647497 337.687813,222.537949 C333.525966,217.428401 334.280695,209.90139 339.373548,205.7259 C358.474112,190.065869 378.15002,182 398.209008,182 Z'
                                fill='url(#linearGradient-3)'
                                id='Oval-2'
                                opacity='0.879673549'
                                transform='translate(382.500000, 253.000000) scale(-1, 1) translate(-382.500000, -253.000000) '
                            />
                            <path
                                d='M261.862067,370 C290.880425,370 317.30918,385.168257 332.211638,409.523562 C335.704214,415.23153 333.924777,422.700172 328.237155,426.205241 C322.606408,429.675259 315.256176,427.959695 311.720892,422.386601 L311.614936,422.21654 C301.064425,404.973687 282.391037,394.256468 261.862067,394.256468 C242.228371,394.256468 224.272045,404.052984 213.490489,420.065781 L213.165977,420.552917 C209.483929,426.139665 201.986228,427.673053 196.419392,423.977834 C190.852557,420.282615 189.324635,412.758094 193.006683,407.171345 C208.179588,384.149589 233.831214,370 261.862067,370 Z'
                                fill='#251C0C'
                                fillRule='nonzero'
                                id='Path'
                            />
                            <path
                                d='M109.5,506 C128.001539,506 143,486.029967 143,461.395683 C143,444.972828 131.833333,418.5076 109.5,382 C87.1666667,418.5076 76,444.972828 76,461.395683 C76,486.029967 90.9984609,506 109.5,506 Z'
                                fill='url(#radialGradient-4)'
                                id='Oval'
                            />
                        </g>
                    </g>
                </g>
            </svg>
            <h3>Oops, no favourite recipes</h3>
            <div>You haven't added anything to your bookmarks</div>
        </div>
    )
}

export default Favorite
