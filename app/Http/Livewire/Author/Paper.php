<?php

namespace App\Http\Livewire\Author;

use Livewire\Component;

class Paper extends Component
{
    public $refresh = false;
    protected $listeners = ['refreshPaperAfterDelete'];

    public function render()
    {
        return view('livewire.author.paper');
    }

    public function refreshPaperAfterDelete()
    {
        session()->flash('success', 'Paper deleted successfully');
        $this->refresh = !$this->refresh;
    }
}