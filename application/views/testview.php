      <?php
      defined('BASEPATH') or exit('No direct script access allowed');

      ?>

      <!DOCTYPE html>
      <html lang="en">

      <head>
        <meta charset="utf-8">
        <title>TEST</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <script src="../../public/js/functionjava.js"></script>
        
        <style>
          body {
            background-color: #fefbd8;
          }
        </style>

        <div class="pos-f-t">
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
              <h4 class="text-white">TEST</h4>
              <span class="text-muted">Hello world!!!</span>
            </div>
          </div>
          <nav class="navbar navbar-dark bg-dark ">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">&nbsp; Home <span class="sr-only">(current)</span></a>

              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>

        </div>
      </head>



      <body>

        <div class="container p-3 my-3 bg-dark text-white">
          <h1 class="display-4">Employee</h1>
          <p class="lead">This is employee information....</p>
          <table class="table table-dark table-striped" id="tbEmp">
            <thead>
              <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody class='inner'>

            </tbody>
          </table>

          <div class="container-fluid">
            <button onclick=addmodal(); type="button" class="btn btn-primary" data-toggle="modal" data-target="#addmodal">INSERT</button>
          </div>

        </div>
      </body>




      </html>

      