/**
 * 存储localStorage
 */
export const setStorage = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStorage = name => {
  if (!name) return
  return JSON.parse(window.localStorage.getItem(name))
}

/**
 * 删除localStorage
 */
export const removeStorage = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

export const staticPath = 'http://statics.zhuishushenqi.com'
