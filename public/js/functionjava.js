
$(document).ready(function() {
  start()
});


function del(e) {
  id = $(e).closest('tr').attr('data_id');
  $.ajax({
    type: "POST",
    url: "delete",
    cache: false,
    data: {
      'id': id
    },
    datatype: "json",
    success: function(msg) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    }
  });
}





function add() {
  ID = $('#insert_ID').val();
  firstname = $('#insert_firstname').val();
  lastname = $('#insert_lastname').val();
  gender = $('#insert_gender option').filter(':selected').val()

  $.ajax({
    type: "POST",
    url: "insert",
    data: {
      'ID': ID,
      firstname: firstname,
      lastname: lastname,
      gender: gender,
    },
    datatype: "json",
    success: function() {
      swal("SAVE SUCCES!", "Your data insert", "success");
      start();
      $('#addmodal').modal('hide')
    }
  });

}

function addmodal() {
  if ($('#addmodal').length > 0) {
    $('#addmodal').remove()
  }
  html = `
  <div class="modal fade" id="addmodal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">INSERT IN EMPLOYEE</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>


          <table class="table" width="100%" border="0" cellspacing="3" cellpadding="0">

              <tr>

                <td><label class = "col-sm-2 col-form-label">ID</label></td>
                <td align="left">

                  <div class="form-group has-feedback">
                    <input class="form-control css-require" name="ID" type="text" id="insert_ID" />
                    <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
                  </div>
                </td>

              </tr>

              <tr>

              <td><label class = "col-sm-2 col-form-label">Firstname</label></td>
                <td align="left">

                  <div class="form-group has-feedback">
                    <input class="form-control css-require" name="firstname" type="text" id="insert_firstname" />
                    <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
                  </div>
                </td>

              </tr>

              <tr>

                <td><label class = "col-sm-2 col-form-label">Lastname</label></td>
                <td align="left">

                  <div class="form-group has-feedback">
                    <input class="form-control css-require" name="lastname" type="text" id="insert_lastname" />
                    <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
                  </div>
                </td>

              </tr>

              <tr>
              <td><label class = "col-sm-2 col-form-label">Gender</label></td>
                <td align="left">

                  <div class="form-group has-feedback">
                    <select name="gender" id="insert_gender">
                      <option value="Man">Man</option>
                      <option value="Woman">Woman</option>
                    </select>
                  </div>
                  <span class="glyphicon form-control-feedback" aria-hidden="true"></span>

              <tr>
              <td><label class = "col-sm-2 col-form-label"></label></td>
              <td align="right">
                  <button onclick = add(); class = "btn btn-primary">Submit</button> &nbsp;
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button> &nbsp;
              </td>
              </tr>

        </div>
      </table>   
  </div>
</div>
</div>

  `
  $("body").append(html);
  
}

function getedit(e) {
  ID = $(e).closest('tr').attr('data_id');

  $.ajax({
    type: "POST",
    url: "edit",
    data: {
      'ID': ID
    },
    datatype: "json",
    success: function(res) {
      editmodal(res)
      console.log(res)
      $('#editmodal').modal('show')
    }
  });

}


function editmodal(e) {

  data = JSON.parse(e)
  console.log(data);
  if ($('#editmodal').length > 0) {
    $('#editmodal').remove()
  }
  html = `
  <div class="modal fade" id="editmodal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">EDIT EMPLOYEE</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        
        <!-- Modal body -->
        <table class="table" width="100%" border="0" cellspacing="3" cellpadding="0">

        <tr>
          <td><label class = "col-sm-2 col-form-label">ID</label></td>
            <td align="left">
            <div class = "col-sm-10">
                <input type = "text" class = "form-control" id = "edit_ID" 
                  placeholder = "" value = "${data["ID"]}">
            </div>
          </td>
        </tr>

        <tr>
          <td><label class = "col-sm-2 col-form-label">Firstname</label></td>
            <td align="left">
          <div class = "col-sm-10">
              <input type = "text" class = "form-control" id = "edit_firstname" 
                placeholder = "" value = "${data["firstname"]}">
          </div>
          </td>
        </tr>
        
        <tr>
          <td><label class = "col-sm-2 col-form-label">Lastname</label></td>
            <td align="left">
          <div class = "col-sm-10">
              <input type = "text" class = "form-control" id = "edit_lastname" 
                placeholder = "" value = "${data["lastname"]}">
            </td>
        </tr>
        
        <tr>
          <td><label class = "col-sm-2 col-form-label">Gender</label></td>
            <td align="left">
              <div class = "col-sm-10">
                      <select name="gender" id="edit_gender">
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                      </select>
                    </div>
          </td>
        </tr>
        
        <!-- Modal footer -->
        <tr>
              <td><label class = "col-sm-2 col-form-label"></label></td>
              <td align="right">
                  <button onclick = saveedit(); class = "btn btn-primary">Submit</button> &nbsp;
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button> &nbsp;
              </td>
              </tr>


      </div>
    </div>
  </div>
  `
  $("body").append(html);
  $("#edit_gender").val(data["gender"])
}

function saveedit() {
  ID = $('#edit_ID').val();
  firstname = $('#edit_firstname').val();
  lastname = $('#edit_lastname').val();
  gender = $('#edit_gender option').filter(':selected').val()

  console.log(ID)
  console.log(firstname)
  console.log(lastname)


  $.ajax({
    type: "POST",
    url: "saveedit",
    data: {
      'ID': ID,
      firstname: firstname,
      lastname: lastname,
      gender: gender,
    },
    datatype: "json",
    success: function() {
      swal("UPDATE SUCCES!", "Your data update", "success");
      start();
      $('#editmodal').modal('hide')
    }
  });

}

function start() {
  console.log("ready!");
  $.ajax({
    type: "POST",
    url: "getemployee",
    cache: false,
    data: "",
    datatype: "json",

    success: function(msg) {
      data = JSON.parse(msg)
      console.log(data)
      html = ''
      $.each(data, function(index, v) {
        html += `
          <tr data_id = '${v['ID']}' >
            <td> ${v['ID']} </td>
            <td> ${v['firstname']} </td>
            <td> ${v['lastname']} </td>
            <td> ${v['gender']} </td>
            <td><button onclick="del(this)" class="btn btn-danger">delete</button></td>
            <td><button onclick="getedit(this)" class="btn btn-warning">edit</button></td>
          </tr>
          `
      });
      $(".inner").html(html);



    }
  });

}
