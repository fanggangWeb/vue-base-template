'use strict';
function set (key, val) {
    sessionStorage.setItem(key, val)
}
export default {
    settoken(state, data) {
        state.token = data
        set('token', data)
    },
    setuserInfo(state, data) {
        state.userInfo = data
        set('userInfo', data)
    },
    setriskSourceId(state, data) {
        state.riskSourceId = data
        set('riskSourceId', data)
    },
    seteventId(state, data) {
        state.eventId = data
        set('eventId', data)
    },
    setlibraryId(state, data) {
        state.libraryId = data
        set('libraryId', data)
    },
    setaftercareId(state, data) {
        state.aftercareId = data
        set('aftercareId', data)
    },
    settaskId(state, data) {
        state.taskId = data
        set('taskId', data)
    }
};
