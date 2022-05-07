<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Test extends CI_Controller
{

	public function index()
	{
		//$this->load->view('welcome_message');

		echo "terk";
	}
	public function test2()
	{
		//$this->load->view('welcome_message');
		//echo "hello world2";

		$this->load->view('testview');
	}

	public function getemployee()
	{

		$this->load->model('modeltest', 'mtest');
		$data = $this->mtest->getusers();


		echo json_encode($data);
	}


	public function delete()
	{
		$id = $this->input->post();

		$this->load->model('modeltest', 'mtest');
		$data = $this->mtest->delete($id);

		echo json_encode($data);
	}


	public function insert()
	{
		$data= $this->input->post();

		$this->load->model('modeltest', 'mtest');
		$data = $this->mtest->insert($data);
	

		echo json_encode($data);
	}

	public function edit()
	{
		$id = $this->input->post();

		$this->load->model('modeltest', 'mtest');
		$data = $this->mtest->edit($id);

		echo json_encode($data);
	}


	public function saveedit()
	{

		$data= $this->input->post();
		print_r($data);
		$this->load->model('modeltest', 'mtest');
		$data = $this->mtest->saveedit($data);
	

		echo json_encode($data);
	}
}

