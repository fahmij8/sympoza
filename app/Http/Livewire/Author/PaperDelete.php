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

        if (Manuscript_Sympozia::all()->count() == 0) {
            return redirect()->route('author.submission')->with('success', 'Paper deleted successfully!');
        } else {
            $this->emit('refreshPaperAfterDelete');
            $this->emit('refreshTable');
            $this->selectedPaper = null;
        }
    }

    public function deletePaper($id)
    {
        $this->selectedPaper = auth()->user()->manuscript->where('id', $id)->first();
    }
}