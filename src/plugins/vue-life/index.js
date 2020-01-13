/**
 * index
 * @author ydr.me
 * @create 2020-01-06 10:44:19
 * @update 2020-01-06 10:44:19
 */

'use strict';

const LISTENERS = Symbol();

export default function vueLife() {
    return {
        install(Vue) {
            Vue.mixin({
                beforeCreate() {
                    registListeners(this, 'beforeDestroy');
                    registListeners(this, 'destroyed');
                    registListeners(this, 'beforeMount');
                    registListeners(this, 'mounted');
                    registListeners(this, 'beforeUpdate');
                    registListeners(this, 'updated');
                    registListeners(this, 'activated');
                    registListeners(this, 'deactivated');
                },
                created() {},
                beforeDestroy() {
                    executeListeners(this, 'beforeDestroy');
                },
                destroyed() {
                    executeListeners(this, 'destroyed');
                    destroyListeners(this);
                },
                beforeMount() {
                    executeListeners(this, 'beforeMount');
                },
                mounted() {
                    executeListeners(this, 'mounted');
                },
                beforeUpdate() {
                    executeListeners(this, 'beforeUpdate');
                },
                updated() {
                    executeListeners(this, 'updated');
                },
                activated() {
                    executeListeners(this, 'activated');
                },
                deactivated() {
                    executeListeners(this, 'deactivated');
                }
            });
        }
    };
}

/**
 * 注册监听器
 * @param vm
 * @param name
 */
function registListeners(vm, name) {
    vm[LISTENERS] = vm[LISTENERS] || {};
    vm[LISTENERS][name] = vm[LISTENERS][name] || [];
    vm[name] = listener => vm[LISTENERS][name].push(listener);
}

/**
 * 执行监听器
 * @param vm
 * @param name
 */
function executeListeners(vm, name) {
    vm[LISTENERS][name].forEach(listener => listener.call(vm));
}

/**
 * 销毁监听
 * @param vm
 */
function destroyListeners(vm) {
    vm[LISTENERS] = null;
}
