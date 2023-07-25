
export class Bird {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.img = data.img
    this.canFly = data.canFly
    this.size = data.size
    this.birdWatcherId = data.birdWatcherId
    this.createdAt = data.createdAt
    this.spotterCount = data.spotterCount
    this.birdWatcher = data.birdWatcher
    this.watcherName = data.birdWatcher.name
  }


  get CardTemplate() {
    return `<div class="col-md-3 col-12 my-3 p-3">
        <div class="bird-card " onclick="app.BirdsController.setActive('${this.id}')">
          <img class="bird-img" data-bs-toggle="modal" data-bs-target="#modal"
            src="${this.img}"
            alt="">
          <div>
            <h1 class="ps-2">${this.name}</h1>
            <div class="d-flex justify-content-between p-2 align-items-center">
              <button class="fs-1 btn" onclick="app.SpottersController.becomeSpotter('${this.id}')">👀<span>${this.spotterCount}</span></button>
              <img class="watcher-img" title="${this.watcherName}"
                src="${this.birdWatcher.picture}"
                alt="">
            </div>
          </div>
        </div>
      </div>`
  }

  get BirdDetails() {
    return /*html*/`
          <div class="modal-content" >
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${this.name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body container">
    <section class="row">
    <div class="col-md-6 col-12">
     <img class="img-fluid"
            src="${this.img}"
            alt="">
    </div>
    <div class="col-md-6 col-12">
    <div class="row h-100 justify-content-between">
    <div class="col-12">
    <h1 class="text-center">${this.name}</h1>
    </div>
     <div class="col-12">
        <div class="d-flex justify-content-around">
             <h2>Size: ${this.size}</h2>
            <h2>CanFly: ${this.canFly ? '🦅' : '🐧'} </h2>
       </div>
    </div>

     <div class="col-12" id="spotters">
         <img class="watcher-img"
            src="${this.img}"
            alt="">
    </div>

    </div>
    </div>
    </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Done Peeping 👀</button>
      </div>
    </div>`
  }

  static BirdForm() {
    return /*html*/`
        <div class="modal-content" >
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Peep a Bird</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
     
        <form class="row" onsubmit="app.BirdsController.createBird()">
          <div class="modal-body">
            <div class="form-floating mb-3 col-12">
              <input type="text" class="form-control" id="name" name="name" placeholder="Bird Name">
              <label for="name">Bird Name</label>
            </div>
            <div class="form-floating mb-3 col-12">
              <label for="img">Bird Image</label>
              <input required type="file" class="form-control" id="img" name="img" placeholder="Bird Image">
            </div>
          <div class="col-12">
          <select name="size" class="form-select" id="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="chunko">Chonker</option>
          </select>
          </div>
           <div class="col-12 pt-4">
           <div class="form-check">
           <input class="form-check-input" type="checkbox" id="canFly"  name="canFly">
             <label class="form-check-label" for="gridCheck">
               Can it fly?
            </label>
           </div>
          </div>
          <div>
          <div class="modal-footer">
            <button type="button" class="btn bird-btn" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn bird-btn-green">Report Bird</button>
          </div>
        </form>
            </div>`
  }


}
