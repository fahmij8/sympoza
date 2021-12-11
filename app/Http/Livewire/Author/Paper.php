<?php

namespace App\Http\Livewire\Author;

use App\Models\Manuscript_Sympozia;
use Illuminate\Support\Facades\Storage;
use Livewire\Component;
use Livewire\WithPagination;

class Paper extends Component
{
    use WithPagination;

    protected $paginationTheme = 'bootstrap';

    public $id_toDelete = null;

    public function render()
    {
        return view('livewire.author.paper', [
            'manuscripts' => Manuscript_Sympozia::where('user_id', auth()->user()->id)->paginate(10),
        ]);
    }

    public function editSubmission($id)
    {
        dd($id);
    }

    public function deleteSubmission($id)
    {
        Storage::disk('local')->delete('/public/' . Manuscript_Sympozia::find($id)->file->name);
        Manuscript_Sympozia::find($id)->delete();
        session()->flash('success', 'Submission Deleted Successfully');
        if (Manuscript_Sympozia::count() == 0) {
            return redirect()->route('author.submission');
        }
    }

}