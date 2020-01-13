'use strict';
function get (key, val) {
    return sessionStorage.getItem(key, val)
}
export default {
    token: get("token"), // 用户唯一标识 token
    userInfo: get("userInfo"), // 用户的信息
    riskSourceId: get("riskSourceId"), // 风险源id
    eventId: get("eventId"), //事件id
    libraryId: get("libraryId"), // 仓库id
    aftercareId: get("aftercareId"), // 善后评估id
    taskId: get("taskId") // 事件流程标识id
};
