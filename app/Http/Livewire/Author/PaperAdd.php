<?php

namespace App\Http\Livewire\Author;

use App\Models\Conferences_Sympozia;
use App\Models\ManuscriptAuthor_Sympozia;
use App\Models\ManuscriptFile_Sympozia;
use App\Models\Manuscript_Sympozia;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use Livewire\WithFileUploads;

class PaperAdd extends Component
{
    use WithFileUploads;
    public $title;
    public $abstract;
    public $keywords;
    public $authors = array();
    public $author_fullname;
    public $conferences_name;
    public $presenter;
    public $presenter_contact;
    public $manuscript_file;

    protected $listeners = [
        'grabAuthors',
    ];

    protected $rules = [
        'title' => 'required',
        'abstract' => 'required',
        'keywords' => 'required',
        'authors' => 'required',
        'conferences_name' => 'required',
        'presenter' => 'required',
        'presenter_contact' => 'required|numeric',
        'manuscript_file' => 'required|file|max:2048|mimes:pdf',
    ];

    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }

    public function updatedKeywords($value)
    {
        $value = preg_replace('/{"value":/', '', $value);
        $this->keywords = preg_replace('/}/', '', $value);
    }

    public function render()
    {
        return view('livewire.author.paper-add', ['conferences' => Conferences_Sympozia::all()]);
    }

    public function grabAuthors($authordata)
    {
        array_push($this->authors, $authordata);
    }

    public function removeAuthor($key)
    {
        unset($this->authors[$key]);
    }

    public function submitManuscript()
    {

        $this->validate();

        $manuscript_user_filename = $this->conferences_name . '-' . Auth::user()->id . '-' . now()->format('YmdHis') . '-' . 'manuscript.pdf';

        // Handle Manuscript Info
        $manuscript_user = Manuscript_Sympozia::create([
            'user_id' => Auth::user()->id,
            'conferences_id' => Conferences_Sympozia::where('short_name', $this->conferences_name)->first()->id,
            'title' => $this->title,
            'abstract' => $this->abstract,
            'milestone_id' => 1,
            'status_id' => 1,
        ]);

        // Handle Manuscript File
        $public_filename = $this->manuscript_file->storeAs('submitedManuscript', $manuscript_user_filename, 'public');
        $file = [
            'manuscript_id' => $manuscript_user->id,
            'file_type' => 1,
            'name' => $public_filename,
        ];

        if (ManuscriptFile_Sympozia::where('manuscript_id', $manuscript_user->id)
            ->where('file_type', 1)->first() == null) {
            ManuscriptFile_Sympozia::create($file);
        } else {
            ManuscriptFile_Sympozia::update($file);
        }

        // Handle Manuscript Authors
        ManuscriptAuthor_Sympozia::create([
            'manuscript_id' => $manuscript_user->id,
            'author_id' => Auth::user()->id,
            'presenter' => $this->presenter,
            'contact' => $this->presenter_contact,
            'author_list' => json_encode($this->authors),
        ]);

        return redirect()->route('author.submission');
    }

}