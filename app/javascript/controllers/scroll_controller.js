import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("scroll")
  }

  about() {
    console.log(event)
    this.window.scrollY = 40
  }

  portfolio() {
    console.log(event)
  }

  contact() {
    console.log(event)
  }

}
