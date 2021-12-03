<?php

namespace App\Http\Livewire\Author;

use Livewire\Component;

class Submission extends Component
{
    public $action;

    public function render()
    {
        return view('livewire.author.submission');
    }

    public function action($action)
    {
        $this->action = $action;
        $this->emit('action', $action);
    }
}