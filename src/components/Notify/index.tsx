import { AnyObject } from '../apis/api_types'

export interface NotifyT {
  message: string
  styles?: {
    box?: AnyObject
    content?: AnyObject
  }
  duration?: number
}
export function notify(options: NotifyT) {
  const { message, styles, duration = 3000 } = options
  const { content = {}, box = {} } = styles || {}
  let doc = document.getElementById('custom_toast')
  if (!doc) {
    doc = document.createElement('div')
    doc.id = 'custom_toast'
    document.getElementById('__next').appendChild(doc)
  }

  const boxStyle = {
    textAlign: 'center',
    color: 'white',
    width: 'max-content',
    height: 'max-content',
    position: 'fixed',
    left: '50%',
    top: '0px',
    transform: 'translateX(-50%)',
    zIndex: '9999',
    ...box,
  }
  for (const key in boxStyle) {
    doc.style[key] = boxStyle[key]
  }

  const contentStyle = {
    padding: '4px 8px',
    margin: '6px',
    background: '#4241419c',
    ...content,
  }
  const ele = document.createElement('p')
  ele.innerText = `${message}`
  for (const key in contentStyle) {
    ele.style[key] = contentStyle[key]
  }

  doc.appendChild(ele)
  setTimeout(() => {
    doc.removeChild(ele)
  }, duration)
}
