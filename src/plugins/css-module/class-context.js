'use strict';

import { addClassName, delClassName, applyClassName, setStyleName } from './utils';

export default function classContext(el, vnode, adds, dels) {
    const { $style = {} } = vnode.context;
    const mod = (list, add) => {
        list.forEach(([styleName]) => {
            const className = $style[styleName];
            setStyleName(vnode, styleName, el);

            if (!className) {
                return;
            }

            if (add) {
                addClassName(el, className);
            } else {
                delClassName(el, className);
            }
        });
    };

    mod(adds, true);
    mod(dels, false);
    applyClassName(el);
}
