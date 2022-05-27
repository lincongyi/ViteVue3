/**
  * 引入静态图片
 */
export function getImageUrl(name, type='png') {
  return new URL(`../assets/images/${name}.${type}`, import.meta.url).href
}