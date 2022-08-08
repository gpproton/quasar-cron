import Component from './Component'


const version = __UI_VERSION__

function install(app) {
  app.component(Component.name, Component)

}

export {
  version,
  Component,

  install
}
