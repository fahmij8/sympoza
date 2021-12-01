<?php

namespace App\Http\Livewire\Author;

use Livewire\Component;
use App\Models\Manuscript_Sympozia;
use Auth;
class Paper extends Component
{
    public function render()
    {
        $papers = Manuscript_Sympozia::where('user_id', Auth::user()->id)->get();
        return view('livewire.author.paper', compact('papers'));
    }

    public function deleteManuscript($id){
        Manuscript_Sympozia::where('id', $id)->delete();
    }
}
