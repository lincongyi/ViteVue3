/**
  * 引入静态图片
 */
export function getImageUrl(name, type='png') {
  return new URL(`/src/assets/${name}.${type}`, import.meta.url).href
}