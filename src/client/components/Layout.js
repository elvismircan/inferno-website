import Inferno from 'inferno'
import { Link } from 'inferno-router'

export default function({ children }) {
    return <div>
        <menu className="container">
            <div className="align-left">
                <Link to="/"><InfernoLogo width="80" height="80"/></Link>
            </div>
            <div className="align-right">
                <Link to="/about">About <DownArrow/></Link>
                <Link to="/docs">Docs <DownArrow/></Link>
                <Link to="/contribute">Contribute</Link>
                <Link to="/help">Help</Link>
            </div>
        </menu>
        <main>
            {children}
        </main>
    </div>
}

const DownArrow = () => (
    <span>&#x25BC;</span>
)

const InfernoLogo = ({ width, height }) => (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width={width} height={height} viewBox="0 0 300.000000 305.000000"
     preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,305.000000) scale(0.050000,-0.050000)"
           fill="#494949" stroke="none">
            <path fill="#FF3232" d="M3008 5996 c-524 -341 -715 -834 -528 -1366 135 -383 2 -667 -278
            -592 -232 62 -326 324 -223 622 47 135 42 142 -34 46 -637 -809 14 -2046 1043
            -1981 989 63 1514 1231 896 1994 -132 164 -155 170 -112 30 67 -214 11 -484
            -125 -613 -99 -92 -113 -83 -109 74 6 242 -66 443 -294 823 -260 436 -300 646
            -174 922 26 58 45 105 42 105 -3 0 -49 -29 -104 -64z"/>
            <path d="M2390 5877 c-1484 -422 -1946 -2303 -827 -3368 1255 -1196 3318 -309
            3326 1431 4 934 -564 1694 -1449 1939 -195 54 -197 53 -233 -34 -87 -207 9
            -517 175 -570 777 -246 1158 -1207 775 -1955 -560 -1095 -2156 -976 -2557 191
            -196 569 16 1227 509 1579 116 83 126 97 159 214 48 174 162 381 278 509 l98
            107 -57 -1 c-31 -1 -120 -20 -197 -42z"/>
            <path d="M1832 1399 c-124 -37 -212 -169 -212 -318 0 -77 -3 -81 -60 -81 -57
            0 -60 -4 -60 -80 0 -76 3 -80 60 -80 l60 0 0 -411 0 -411 95 6 95 6 5 405 6
            405 129 0 130 0 0 80 0 80 -130 0 -130 0 0 80 c0 136 125 207 232 131 62 -43
            137 93 76 139 -79 60 -194 80 -296 49z"/>
            <path d="M20 670 l0 -650 100 0 100 0 0 650 0 650 -100 0 -100 0 0 -650z"/>
            <path d="M872 991 c-42 -16 -107 -57 -145 -93 l-67 -66 0 84 0 84 -100 0 -101
            0 6 -485 5 -485 95 -6 95 -6 0 296 c0 382 72 526 262 526 192 0 226 -67 238
            -479 l10 -331 95 -6 95 -6 0 356 c-1 456 -35 546 -234 617 -96 34 -156 34
            -254 0z"/>
            <path d="M2510 1001 c-459 -110 -504 -767 -65 -950 236 -99 648 44 532 185
            l-47 56 -64 -43 c-141 -96 -328 -83 -448 30 -142 136 -130 141 302 141 l380 0
            0 130 c0 322 -270 529 -590 451z m271 -191 c62 -33 119 -122 119 -189 0 -39
            -11 -41 -280 -41 -278 0 -280 0 -280 46 0 160 269 272 441 184z"/>
            <path d="M3684 997 c-36 -10 -101 -55 -145 -100 l-79 -82 0 93 0 92 -100 0
            -101 0 6 -485 5 -485 95 -6 95 -6 0 246 c0 370 54 494 232 539 l88 22 0 97 c0
            54 -7 97 -15 96 -8 -1 -45 -10 -81 -21z"/>
            <path d="M4308 982 c-45 -21 -106 -63 -135 -95 l-53 -57 0 85 0 85 -100 0
            -101 0 6 -485 5 -485 95 -6 95 -6 0 306 c0 398 61 516 266 516 184 0 221 -76
            234 -480 l10 -330 90 0 90 0 6 318 c6 373 -19 497 -117 580 -112 94 -259 114
            -391 54z"/>
            <path d="M5350 1002 c-567 -149 -457 -980 130 -981 538 -1 712 695 235 941
            -84 43 -274 64 -365 40z m269 -191 c314 -163 191 -632 -160 -607 -396 29 -371
            636 27 636 42 0 101 -13 133 -29z"/>
        </g>
    </svg>
)
