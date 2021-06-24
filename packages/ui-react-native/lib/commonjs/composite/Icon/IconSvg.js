'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.IconSvg = void 0

var _react = _interopRequireDefault(require('react'))

var _reactNativeSvg = _interopRequireWildcard(require('react-native-svg'))

var _base = require('../../base')

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null
  var cacheBabelInterop = new WeakMap()
  var cacheNodeInterop = new WeakMap()
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop
  })(nodeInterop)
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj }
  }
  var cache = _getRequireWildcardCache(nodeInterop)
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {}
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj.default = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

const Add = ({ size, color }) =>
  /*#__PURE__*/ _react.default.createElement(
    _reactNativeSvg.default,
    {
      width: size,
      height: size,
      viewBox: '0 0 40 40',
      fill: 'none',
    },
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M31 19.7969C31 19.2446 30.5523 18.7969 30 18.7969H21.2318V10C21.2318 9.44772 20.7841 9 20.2318 9H19.7682C19.2159 9 18.7682 9.44772 18.7682 10V18.7969H10C9.44772 18.7969 9 19.2446 9 19.7969V20.2318C9 20.7841 9.44772 21.2318 10 21.2318H18.7682V30C18.7682 30.5523 19.2159 31 19.7682 31H20.2318C20.7841 31 21.2318 30.5523 21.2318 30V21.2318H30C30.5523 21.2318 31 20.7841 31 20.2318V19.7969Z',
      fill: color,
    })
  )

const AngleLeft = ({ size, color }) =>
  /*#__PURE__*/ _react.default.createElement(
    _reactNativeSvg.default,
    {
      width: size,
      height: size,
      viewBox: '0 0 40 40',
      fill: 'none',
    },
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M26.6568 8.99121C27.0652 9.3867 27.0622 10.0427 26.6501 10.4344L16.6014 19.9859L26.63 29.5432C27.0389 29.9329 27.0441 30.5837 26.6415 30.9799L26.2952 31.3207C25.9105 31.6993 25.2946 31.7042 24.9039 31.3318L13.7612 20.7115C13.3471 20.3168 13.3479 19.6559 13.7629 19.2621L24.9377 8.6597C25.3264 8.29092 25.9367 8.29401 26.3216 8.66672L26.6568 8.99121Z',
      fill: color,
    })
  )

const AngleUp = ({ size, color }) =>
  /*#__PURE__*/ _react.default.createElement(
    _reactNativeSvg.default,
    {
      width: size,
      height: size,
      viewBox: '0 0 40 40',
      fill: 'none',
    },
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M31.098 26.245a1 1 0 01-1.447-.007l-9.495-10.042-9.5 10.022a1 1 0 01-1.441.012l-.335-.342a1 1 0 01-.011-1.388l10.56-11.138a1 1 0 011.453.001l10.542 11.171a1 1 0 01-.007 1.38l-.319.331z',
      fill: color,
    })
  )

const AngleRight = ({ size, color }) =>
  /*#__PURE__*/ _react.default.createElement(
    _reactNativeSvg.default,
    {
      width: size,
      height: size,
      viewBox: '0 0 40 40',
      fill: 'none',
    },
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M24.8744 13.6773C24.4843 13.3005 23.865 13.3032 23.4784 13.6836L23.337 13.8226C22.9347 14.2183 22.9393 14.8683 23.3471 15.2583L26.7237 18.4871H10C9.44772 18.4871 9 18.9348 9 19.4871V19.7026C9 20.2549 9.44772 20.7026 10 20.7026H26.7237L23.3471 23.9314C22.9393 24.3214 22.9347 24.9714 23.337 25.3671L23.4784 25.5061C23.865 25.8864 24.4843 25.8892 24.8744 25.5124L30.2555 20.3141C30.6624 19.9209 30.6624 19.2688 30.2555 18.8756L24.8744 13.6773Z',
      fill: color,
    })
  )

const AngleDown = ({ size, color }) =>
  /*#__PURE__*/ _react.default.createElement(
    _reactNativeSvg.default,
    {
      width: size,
      height: size,
      viewBox: '0 0 40 30',
      fill: 'none',
    },
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M30.883 9.97a1 1 0 00-1.224.005l-9.497 7.418-9.501-7.403a1 1 0 00-1.217-.01l-.064.049a1 1 0 00-.012 1.587l10.179 7.929a1 1 0 001.23-.002l10.165-7.954a1 1 0 00-.008-1.58l-.05-.04z',
      fill: color,
    })
  )

const Checkmark = ({ size, color }) =>
  /*#__PURE__*/ _react.default.createElement(
    _reactNativeSvg.default,
    {
      width: size,
      height: size,
      viewBox: `0 0 ${size * 1.5} ${size * 1.2}`,
      fill: 'none',
    },
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M8 0C6.90085 0 5.86417 0.209208 4.88993 0.627633C3.91568 1.04606 3.06636 1.61748 2.34192 2.34192C1.61748 3.06636 1.04606 3.91256 0.627635 4.88056C0.209209 5.84856 0 6.88212 0 7.98126C0 9.0929 0.209209 10.1327 0.627635 11.1007C1.04606 12.0687 1.61748 12.9149 2.34192 13.6393C3.06636 14.3638 3.91568 14.9352 4.88993 15.3536C5.86417 15.7721 6.90085 15.9813 8 15.9813C9.09915 15.9813 10.1358 15.7721 11.1101 15.3536C12.0843 14.9352 12.9336 14.3638 13.6581 13.6393C14.3825 12.9149 14.9539 12.0687 15.3724 11.1007C15.7908 10.1327 16 9.0929 16 7.98126C16 6.88212 15.7908 5.84856 15.3724 4.88056C14.9539 3.91256 14.3825 3.06636 13.6581 2.34192C12.9336 1.61748 12.0843 1.04606 11.1101 0.627633C10.1358 0.209208 9.09915 0 8 0ZM7.19438 11.185L4.00937 7.98126L5.13349 6.85714L7.21311 8.93677L10.8852 5.2459L11.9906 6.38876L7.19438 11.185Z',
      fill: color,
    })
  )

const Close = ({ size, color }) =>
  /*#__PURE__*/ _react.default.createElement(
    _reactNativeSvg.default,
    {
      width: size,
      height: size,
      viewBox: '0 0 40 40',
      fill: 'none',
    },
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M30.2929 11.4545C30.6834 11.064 30.6834 10.4308 30.2929 10.0403L29.9597 9.70711C29.5692 9.31658 28.936 9.31658 28.5455 9.70711L20 18.2526L11.4545 9.70711C11.064 9.31658 10.4308 9.31658 10.0403 9.70711L9.70711 10.0403C9.31658 10.4308 9.31658 11.064 9.70711 11.4545L18.2526 20L9.70711 28.5455C9.31658 28.936 9.31658 29.5692 9.70711 29.9597L10.0403 30.2929C10.4308 30.6834 11.064 30.6834 11.4545 30.2929L20 21.7474L28.5455 30.2929C28.936 30.6834 29.5692 30.6834 29.9597 30.2929L30.2929 29.9597C30.6834 29.5692 30.6834 28.936 30.2929 28.5455L21.7474 20L30.2929 11.4545Z',
      fill: color,
    })
  )

const Edit = ({ size, color }) =>
  /*#__PURE__*/ _react.default.createElement(
    _reactNativeSvg.default,
    {
      width: size,
      height: size,
      viewBox: '0 0 40 40',
      fill: 'none',
    },
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
      d: 'M22.4033 16.5233L23.4767 17.5967L12.9067 28.1667H11.8333V27.0933L22.4033 16.5233ZM26.6033 9.5C26.3117 9.5 26.0083 9.61667 25.7867 9.83833L23.6517 11.9733L28.0267 16.3483L30.1617 14.2133C30.6167 13.7583 30.6167 13.0233 30.1617 12.5683L27.4317 9.83833C27.1983 9.605 26.9067 9.5 26.6033 9.5ZM22.4033 13.2217L9.79289 25.8321C9.60536 26.0196 9.5 26.274 9.5 26.5392V29.5C9.5 30.0523 9.94772 30.5 10.5 30.5H13.4608C13.726 30.5 13.9804 30.3946 14.1679 30.2071L26.7783 17.5967L22.4033 13.2217Z',
      fill: color,
    })
  )

const Ellipsis = ({ size, color }) =>
  /*#__PURE__*/ _react.default.createElement(
    _reactNativeSvg.default,
    {
      width: size,
      height: size,
      viewBox: '0 0 40 40',
      fill: 'none',
    },
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M22.78 20.0277C22.78 19.3716 22.5457 18.8092 22.077 18.3406C21.6084 17.872 21.0461 17.6377 20.39 17.6377C19.7339 17.6377 19.1716 17.872 18.7029 18.3406C18.2343 18.8092 18 19.3716 18 20.0277C18 20.7025 18.2343 21.2742 18.7029 21.7428C19.1716 22.2114 19.7339 22.4458 20.39 22.4458C21.0461 22.4458 21.6084 22.2114 22.077 21.7428C22.5457 21.2742 22.78 20.7025 22.78 20.0277ZM22.78 11.39C22.78 10.7339 22.5457 10.1716 22.077 9.70293C21.6084 9.23431 21.0461 9 20.39 9C19.7339 9 19.1716 9.23431 18.7029 9.70293C18.2343 10.1716 18 10.7339 18 11.39C18 12.0648 18.2343 12.6365 18.7029 13.1051C19.1716 13.5738 19.7339 13.8081 20.39 13.8081C21.0461 13.8081 21.6084 13.5738 22.077 13.1051C22.5457 12.6365 22.78 12.0648 22.78 11.39ZM22.78 28.3054C22.78 27.6494 22.5457 27.087 22.077 26.6184C21.6084 26.1498 21.0461 25.9154 20.39 25.9154C19.7339 25.9154 19.1716 26.1498 18.7029 26.6184C18.2343 27.087 18 27.6494 18 28.3054C18 28.9802 18.2343 29.552 18.7029 30.0206C19.1716 30.4892 19.7339 30.7235 20.39 30.7235C21.0461 30.7235 21.6084 30.4892 22.077 30.0206C22.5457 29.552 22.78 28.9802 22.78 28.3054Z',
      fill: color,
    })
  )

const Search = ({ size, color }) =>
  /*#__PURE__*/ _react.default.createElement(
    _reactNativeSvg.default,
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
    },
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M19.7245 10.3365C19.7245 11.626 19.4795 12.8425 18.9895 13.9859C18.4994 15.1294 17.8288 16.1223 16.9777 16.9648C16.1266 17.8074 15.1337 18.4736 13.9988 18.9637C12.864 19.4537 11.6518 19.6987 10.3623 19.6987C9.07268 19.6987 7.8605 19.4537 6.72567 18.9637C5.59085 18.4736 4.59789 17.8074 3.74678 16.9648C2.89566 16.1223 2.22509 15.1294 1.73505 13.9859C1.24502 12.8425 1 11.626 1 10.3365C1 9.04689 1.24502 7.83471 1.73505 6.69988C2.22509 5.56506 2.89566 4.5764 3.74678 3.73388C4.59789 2.89136 5.59085 2.22509 6.72567 1.73505C7.8605 1.24502 9.07268 1 10.3623 1C11.6518 1 12.864 1.24502 13.9988 1.73505C15.1337 2.22509 16.1266 2.89136 16.9777 3.73388C17.8288 4.5764 18.4994 5.56506 18.9895 6.69988C19.4795 7.83471 19.7245 9.04689 19.7245 10.3365ZM10.3623 17.5064C11.3423 17.5064 12.2665 17.3173 13.1348 16.939C14.0031 16.5608 14.764 16.0492 15.4174 15.4045C16.0707 14.7597 16.5823 14.0031 16.9519 13.1348C17.3216 12.2665 17.5064 11.3337 17.5064 10.3365C17.5064 9.35638 17.3216 8.4322 16.9519 7.56389C16.5823 6.69558 16.0707 5.93904 15.4174 5.29426C14.764 4.64947 14.0031 4.13795 13.1348 3.75967C12.2665 3.3814 11.3423 3.19226 10.3623 3.19226C9.38218 3.19226 8.458 3.3814 7.58968 3.75967C6.72137 4.13795 5.96053 4.64947 5.30715 5.29426C4.65377 5.93904 4.14225 6.69558 3.77257 7.56389C3.40289 8.4322 3.21805 9.35638 3.21805 10.3365C3.21805 11.3337 3.40289 12.2665 3.77257 13.1348C4.14225 14.0031 4.65377 14.7597 5.30715 15.4045C5.96053 16.0492 6.72137 16.5608 7.58968 16.939C8.458 17.3173 9.38218 17.5064 10.3623 17.5064ZM17.6519 19.2252C17.2591 18.8324 17.2617 18.1948 17.6577 17.8053L17.831 17.6347C18.2225 17.2496 18.8512 17.2521 19.2395 17.6404L22.2986 20.6996C22.6869 21.0878 22.6895 21.7166 22.3043 22.108L22.1338 22.2813C21.7442 22.6773 21.1066 22.6799 20.7139 22.2871L17.6519 19.2252Z',
      fill: color,
    })
  )

const Settings = ({ size, color }) =>
  /*#__PURE__*/ _react.default.createElement(
    _reactNativeSvg.default,
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
    },
    /*#__PURE__*/ _react.default.createElement(_reactNativeSvg.Path, {
      d: 'M20.0492 13.0617C20.0925 12.7151 20.125 12.3684 20.125 12.0001C20.125 11.6317 20.0925 11.2851 20.0492 10.9384L22.335 9.15091C22.5408 8.98841 22.595 8.69591 22.465 8.45758L20.2983 4.70925C20.2008 4.53591 20.0167 4.43841 19.8217 4.43841C19.7567 4.43841 19.6917 4.44925 19.6375 4.47092L16.94 5.55425C16.3767 5.12092 15.77 4.76342 15.1092 4.49258L14.6975 1.62175C14.665 1.36175 14.4375 1.16675 14.1667 1.16675H9.83333C9.56249 1.16675 9.33499 1.36175 9.30249 1.62175L8.89083 4.49258C8.22999 4.76342 7.62333 5.13175 7.05999 5.55425L4.36249 4.47092C4.29749 4.44925 4.23249 4.43841 4.16749 4.43841C3.98333 4.43841 3.79916 4.53591 3.70166 4.70925L1.53499 8.45758C1.39416 8.69591 1.45916 8.98841 1.66499 9.15091L3.95083 10.9384C3.90749 11.2851 3.87499 11.6426 3.87499 12.0001C3.87499 12.3576 3.90749 12.7151 3.95083 13.0617L1.66499 14.8492C1.45916 15.0117 1.40499 15.3042 1.53499 15.5426L3.70166 19.2909C3.79916 19.4642 3.98333 19.5617 4.17833 19.5617C4.24333 19.5617 4.30833 19.5509 4.36249 19.5292L7.05999 18.4459C7.62333 18.8792 8.22999 19.2367 8.89083 19.5076L9.30249 22.3784C9.33499 22.6384 9.56249 22.8334 9.83333 22.8334H14.1667C14.4375 22.8334 14.665 22.6384 14.6975 22.3784L15.1092 19.5076C15.77 19.2367 16.3767 18.8684 16.94 18.4459L19.6375 19.5292C19.7025 19.5509 19.7675 19.5617 19.8325 19.5617C20.0167 19.5617 20.2008 19.4642 20.2983 19.2909L22.465 15.5426C22.595 15.3042 22.5408 15.0117 22.335 14.8492L20.0492 13.0617ZM17.9042 11.2092C17.9475 11.5451 17.9583 11.7726 17.9583 12.0001C17.9583 12.2276 17.9367 12.4659 17.9042 12.7909L17.7525 14.0151L18.7167 14.7734L19.8867 15.6834L19.1283 16.9942L17.7525 16.4417L16.6258 15.9867L15.6508 16.7234C15.185 17.0701 14.7408 17.3301 14.2967 17.5142L13.1483 17.9801L12.975 19.2042L12.7583 20.6667H11.2417L11.0358 19.2042L10.8625 17.9801L9.71416 17.5142C9.24833 17.3192 8.81499 17.0701 8.38166 16.7451L7.39583 15.9867L6.24749 16.4526L4.87166 17.0051L4.11333 15.6942L5.28333 14.7842L6.24749 14.0259L6.09583 12.8017C6.06333 12.4659 6.04166 12.2167 6.04166 12.0001C6.04166 11.7834 6.06333 11.5342 6.09583 11.2092L6.24749 9.98508L5.28333 9.22675L4.11333 8.31675L4.87166 7.00591L6.24749 7.55841L7.37416 8.01341L8.34916 7.27675C8.81499 6.93008 9.25916 6.67008 9.70333 6.48591L10.8517 6.02008L11.025 4.79591L11.2417 3.33341H12.7475L12.9533 4.79591L13.1267 6.02008L14.275 6.48591C14.7408 6.68091 15.1742 6.93008 15.6075 7.25508L16.5933 8.01341L17.7417 7.54758L19.1175 6.99508L19.8758 8.30592L18.7167 9.22675L17.7525 9.98508L17.9042 11.2092ZM12 7.66675C9.60583 7.66675 7.66666 9.60592 7.66666 12.0001C7.66666 14.3942 9.60583 16.3334 12 16.3334C14.3942 16.3334 16.3333 14.3942 16.3333 12.0001C16.3333 9.60592 14.3942 7.66675 12 7.66675ZM12 14.1667C10.8083 14.1667 9.83333 13.1917 9.83333 12.0001C9.83333 10.8084 10.8083 9.83342 12 9.83342C13.1917 9.83342 14.1667 10.8084 14.1667 12.0001C14.1667 13.1917 13.1917 14.1667 12 14.1667Z',
      fill: color,
    })
  )

const getSvg = name => {
  switch (name) {
    case 'add':
      return Add

    case 'angle-up':
      return AngleUp

    case 'angle-down':
      return AngleDown

    case 'angle-right':
      return AngleRight

    case 'angle-left':
      return AngleLeft

    case 'checkmark':
      return Checkmark

    case 'close':
      return Close

    case 'edit':
      return Edit

    case 'ellipsis':
      return Ellipsis

    case 'search':
      return Search

    case 'settings':
      return Settings

    default:
      return Add
    // TODO: Add default "icon not found svg"
  }
}

const IconSvg = ({
  name,
  // TODO: Allow custom svgxml as prop
  size = 40,
  color = 'black',
}) => {
  const SvgComponent = getSvg(name)
  return /*#__PURE__*/ _react.default.createElement(
    _base.Box,
    {
      width: size,
      height: size,
    },
    /*#__PURE__*/ _react.default.createElement(SvgComponent, {
      size: size,
      color: color,
    })
  )
}

exports.IconSvg = IconSvg
//# sourceMappingURL=IconSvg.js.map
