<?php

namespace App\Http\Livewire\Author;

use Illuminate\Support\Facades\Route;
use Livewire\Component;

class Submission extends Component
{
    public $action;
    public $SelectedId = null;
    protected $listeners = [
        'grabAction',
        'grabId',
    ];

    public function render()
    {
        return view('livewire.author.submission');
    }

    public function mount()
    {
        $routeName = Route::currentRouteName();
        if ($routeName == 'author.submission') {
            $this->action = null;
        } else if ($routeName == 'author.submission.add') {
            $this->action = 'show-add-paper';
        } else if ($routeName == 'author.submission.edit') {
            $this->action = 'show-edit-paper';
        }
    }

    public function dehydrate()
    {
        if ($this->action == 'manuscriptSubmitted') {
            $this->action = null;
            session()->flash('message', 'Manuscript submitted successfully');
        }
    }

    public function action($action)
    {
        $this->action = $action;
        $this->emit('action', $action);
    }

    public function grabAction($action)
    {
        $this->action($action);
    }

    public function grabId($id)
    {
        $this->SelectedId = $id;
    }
}