'use strict';

import { addClassName, delClassName, applyClassName, getStyleName } from './utils';

export default function classProps(el, vnode, adds, dels) {
    const { $style: context$style = {} } = vnode.context;
    const elMap = new Map();
    const mod = (list, add) => {
        list.forEach(([childStyleName, contextStyleName]) => {
            const contextClassName = context$style[contextStyleName];

            if (!contextClassName) {
                return;
            }

            const els = getStyleName(vnode, childStyleName);

            els.forEach(el => {
                if (add) {
                    addClassName(el, contextClassName);
                } else {
                    delClassName(el, contextClassName);
                }

                elMap.set(el, true);
            });
        });
    };

    mod(adds, true);
    mod(dels, false);

    for (el of elMap.keys()) {
        applyClassName(el);
    }
}
