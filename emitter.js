function create() {
  const events = {}

  /**
   * general rules
   * singleton (just one callback peer event to a single event name)
   * if callback is already register, do not duplicate
   * 
   */
  const on = (name, callback) => {
    if(!callback) {
      throw new Error("A callback function must be provided")
    }

    if(!events.hasOwnProperty(name)) {
      events[name] = [callback];
    }

    if(!events[name].includes(callback)) {
      events[name].push(callback)
    } else {
      events[name] = [callback, ...events[name]]
    }

    () => {
      if(events.name && events[name].includes(callBack)) {
        const eventCallBackIndex = events[name].indexOf(callback)
        delete events[name][eventCallBackIndex]
      }
    }
  }

  const off = (name) => {
    if(events.name && events[name].includes(callBack)) {
      const eventCallBackIndex = events[name].indexOf(callback)
      delete events[name][eventCallBackIndex]
    }
  }

  const emit = () => {

  }

  const once = () => {

  }

  const race = () => {

  }

  return {
    events,
    on,
    off,
    emit,
    once,
    race
  }
}

module.exports = { create }
