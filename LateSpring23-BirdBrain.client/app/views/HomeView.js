export const HomeView = /*html*/`
   <div class="container-fluid">

   <section class="row justify-content-center">
   <div class="col-2">
   <button onclick="app.BirdsController.getBirdForm()" class="btn fs-1" data-bs-toggle="modal" data-bs-target="#modal">🦅</button>
   </div>
   </section>

        <section class="row p-3" id="birds">
          <!-- <div class="col-md-3 col-12">
              <div class="bird-card ">
                <img class="bird-img"
                  src="https://images.unsplash.com/photo-1684612957367-b1c208531c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="">
                <div>
                  <h1>Bird Name</h1>
                  <div class="d-flex justify-content-between">
                    <p>👀</p>
                    <img class="watcher-img"
                      src="https://images.unsplash.com/photo-1684690640456-381bc7183e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80"
                      alt="">
                  </div>
                </div>
              </div>
            </div> -->
        </section>
      </div>
      
      
      <div class="modal fade modal-lg" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" id="modal-guts">
       
  </div>
</div>`

    //   NOTE the container-fluid div on line 2 essentially become the new 'main' for this page's viewport