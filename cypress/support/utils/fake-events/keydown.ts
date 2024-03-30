import { Key } from './types'

export class KeydownEventMockService {
  static triggerKeydown(key: Key) {
    const event = new KeyboardEvent('keydown', { key })
    document.dispatchEvent(event)
  }
}
