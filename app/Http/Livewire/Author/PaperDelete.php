<?php

namespace App\Http\Livewire\Author;

use App\Models\Manuscript_Sympozia;
use Illuminate\Support\Facades\Storage;
use Livewire\Component;

class PaperDelete extends Component
{
    public $selectedPaper = null;
    public $refresh = false;

    protected $listeners = [
        'deletePaper',
    ];

    public function render()
    {
        return view('livewire.author.paper-delete', [
            'selectedPaper' => $this->selectedPaper,
        ]);
    }

    public function confirmDeletePaper($id)
    {
        Manuscript_Sympozia::find($id)->first()->file->each(function ($file) {
            Storage::disk('local')->delete('/public/' . $file->name);
        });
        Manuscript_Sympozia::find($id)->first()->delete();

        if ($this->selectedPaper->where('user_id', auth()->user()->id)->count() == 0) {
            $this->selectedPaper = null;
            $this->emit('refreshPaperAfterDelete');
        } else {
            $this->selectedPaper = null;
            $this->emit('refreshPaperAfterDelete');
            $this->emit('refreshTable');
        }
    }

    public function deletePaper($id)
    {
        $this->selectedPaper = auth()->user()->manuscript->where('id', $id)->first();
    }
}