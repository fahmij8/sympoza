<?php

namespace App\Http\Livewire\Author;

use Livewire\Component;
use Livewire\WithFileUploads;
use App\Models\Manuscript_Sympozia;
use App\Models\ManuscriptFile_Sympozia;
use App\Models\FileType_Sympozia;
use Carbon\Carbon;
use Auth;

class PaperAdd extends Component
{
    public $title;
    public $manuscriptFile;
    use WithFileUploads;
    
    public function render()
    {
        return view('livewire.author.paper-add');
    }

    public function submitAbstract(){

        $this->validate([
            'title' => 'required',
            'manuscriptFile' => 'required|mimetypes:application/pdf|max:10000',
        ]);
    

        $manuscript_counter = Manuscript_Sympozia::count();
        $paper_code = 'ISMEE-'.Auth::user()->id.'-'.(strval($manuscript_counter+1));

        Manuscript_Sympozia::create([
            'title' => $this->title,
            'paper_code' => $paper_code,
            'user_id' => Auth::user()->id,
        ]);

        $manuscript = Manuscript_Sympozia::where('paper_code', $paper_code)->first();
        $filename = $this->manuscriptFile->storeAs('submitedManuscript', $paper_code.'-manuscript.pdf', 'public');
        $fileType = FileType_sympozia::where('code', 'REV')->first()->id;
        $file =[
            'manuscript_id' => $manuscript->id,
            'file_type' => $fileType,
            'name' => $filename,
        ];

        if(ManuscriptFile_sympozia::where('manuscript_id', $manuscript->id)
            ->where('file_type', $fileType)->first() == null){

            ManuscriptFile_sympozia::create($file);
        }else{
            ManuscriptFile_sympozia::update($file);
        }
        
        

        return redirect()->route('author.submission');
        //$this->emitUp('resetMenuSubmission_Author');
    }
}
