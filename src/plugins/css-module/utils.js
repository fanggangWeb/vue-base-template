'use strict';

import typeis from 'blear.utils.typeis';
import { assign, each } from 'blear.utils.object';

const CLASS_NAME_MAP = Symbol();
const STYLE_NAME_MAP = Symbol();

/**
 * 解析 value 为一个对象
 * @param value
 * @returns {{}}
 */
export function parseValue(value) {
    if (!value) {
        return {};
    }

    if (typeis.String(value)) {
        value = value.trim();

        if (!value) {
            return {};
        }

        return value.split(/\s+/).reduce((acc, cur, idx) => {
            acc[cur] = cur;
            return acc;
        }, {});
    }

    if (typeis.Array(value)) {
        value = value.reduce((acc, cur, idx) => {
            switch (typeis(cur)) {
                case 'array':
                case 'string':
                    assign(acc, parseValue(cur));
                    break;

                case 'object':
                    assign(acc, cur);
                    break;
            }

            return acc;
        }, {});
    }

    return value;
}

/**
 * 判断两个对象的区别
 * @param o1
 * @param o2
 * @returns {{dels: *, adds: *}}
 */
export function different(o1, o2) {
    const adds = [];
    const dels = [];

    each(o1, (key, val) => {
        if (!o2[key]) {
            dels.push([key, val]);
        }
    });

    each(o2, (key, val) => {
        if (!o1[key]) {
            adds.push([key, val]);
        }
    });

    return { adds, dels };
}

/**
 * 添加样式类
 * @param el
 * @param addClassName
 */
export function addClassName(el, addClassName) {
    el[CLASS_NAME_MAP] = el[CLASS_NAME_MAP] || {};
    el[CLASS_NAME_MAP][addClassName] = true;
}

/**
 * 删除样式类
 * @param el
 * @param delClassName
 */
export function delClassName(el, delClassName) {
    el[CLASS_NAME_MAP] = el[CLASS_NAME_MAP] || {};
    el[CLASS_NAME_MAP][delClassName] = false;
}

/**
 * 恢复样式类
 * @param el
 */
export function applyClassName(el) {
    const map = el[CLASS_NAME_MAP] || {};

    each(map, (className, keep) => {
        el.classList[keep ? 'add' : 'remove'](className);
    });
}

/**
 * 设置组件的样式类名
 * @param vnode
 * @param styleName
 * @param el
 */
export function setStyleName(vnode, styleName, el) {
    const data = vnode.context.$vnode.data;
    data[STYLE_NAME_MAP] = data[STYLE_NAME_MAP] || {};
    data[STYLE_NAME_MAP][styleName] = data[STYLE_NAME_MAP][styleName] || new Map();
    data[STYLE_NAME_MAP][styleName].set(el, true);
}

/**
 * 获取组件里标记的样式类名
 * @param vnode
 * @param styleName
 * @returns {[]}
 */
export function getStyleName(vnode, styleName) {
    const data = vnode.child.$vnode.data;
    const map = data[STYLE_NAME_MAP] && data[STYLE_NAME_MAP][styleName];

    if (!map) {
        return [];
    }

    return Array.from(map.keys());
}
