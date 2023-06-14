/**
 * 引入静态图片
 */
export function getImageUrl(name, type = 'png') {
  return new URL(`../assets/images/${name}.${type}`, import.meta.url).href
}

export const mediator = (function () {
  let topics = []
  let uuid = 0

  /**
   * 订阅
   */
  function subscribe(topic, callback) {
    uuid++
    topics[topic] = topics[topic] ? [...topics[topic], { callback, uuid }] : [{ callback, uuid }]
  }

  /**
   * 发布
   */
  function publish(topic, ...args) {
    if (topics[topic]) {
      topics[topic].map(item => item.callback(...args))
    }
  }
  return {
    install: function (obj = {}) {
      obj.uuid = uuid
      obj.publish = publish
      obj.subscribe = subscribe
      return obj
    }
  }
})()
