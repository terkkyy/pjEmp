<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class modeltest extends CI_Model
{

  function getusers()
  {

    $query = $this->db->query("select * from employee");
    $dataarray = $query->result_array();
    // print_r($dataarray);
    return $dataarray;
  }

  function delete($id)
  {

    $del_id = $id['id'];
    print_r($del_id);
    $this->db->delete('employee', array('id' => $del_id));

    return ($id);
  }

  function insert($data)
  {
    $in_id = $data['ID'];
    $in_firstname = $data['firstname'];
    $in_lastname = $data['lastname'];
    $in_gender = $data['gender'];

    $data = array(
      'ID' => $in_id,
      'firstname' => $in_firstname,
      'lastname' => $in_lastname,
      'gender' => $in_gender
    );
    $this->db->insert('employee', $data);

    print_r($data);
  }

  function edit($data)
  {
    $edit_id = $data['ID'];
    $query = $this->db->query("SELECT * FROM `employee` WHERE `ID` = '$edit_id'");
    $this->db->last_query();
    $row = $query->row_array();

    return ($row);
  }

  function saveedit($data)
  {
    print_r($data);
    $in_id = $data['ID'];
    $in_firstname = $data['firstname'];
    $in_lastname = $data['lastname'];
    $in_gender = $data['gender'];


    $data = array(
      'firstname' => $in_firstname,
      'lastname' => $in_lastname,
      'gender' => $in_gender
    );
    

    $this->db->where('ID', $in_id);
    $this->db->update('employee', $data);

    print_r($data);
  }
}
