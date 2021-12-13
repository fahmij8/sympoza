<?php

namespace App\Http\Livewire\Author;

use Livewire\Component;

class PaperEdit extends Component
{
    public $selectedPaper = null;

    protected $listeners = [
        'editPaper',
    ];

    public function render()
    {
        return view('livewire.author.paper-edit');
    }

    public function editPaper($id)
    {
        $this->selectedPaper = auth()->user()->manuscript->where('id', $id)->first();
    }
}