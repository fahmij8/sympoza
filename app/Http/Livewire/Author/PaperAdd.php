<?php

namespace App\Http\Livewire\Author;

use App\Models\Conferences_Sympozia;
use App\Models\ManuscriptAuthor_Sympozia;
use App\Models\ManuscriptFile_Sympozia;
use App\Models\ManuscriptMilestone_Sympozia;
use App\Models\ManuscriptStatus_Sympozia;
use App\Models\Manuscript_Sympozia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
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
    public $scope_selected;
    public $presenter;
    public $presenter_contact;
    public $manuscript_file;

    protected $listeners = [
        'grabAuthors',
    ];

    protected $rules = [
        'title' => 'required|unique:sympozia_manuscript,title',
        'abstract' => 'required|unique:sympozia_manuscript,abstract',
        'keywords' => 'required',
        'authors' => 'required',
        'conferences_name' => 'required',
        'scope_selected' => 'required',
        'presenter' => 'required',
        'presenter_contact' => 'required|numeric',
        'manuscript_file' => 'required|file|max:2048|mimes:pdf',
    ];

    public function mount()
    {
        $this->presenter = Auth::user()->name;
    }

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
        return view('livewire.author.paper-add', [
            'conferences' => Conferences_Sympozia::all(),
            'scopes' => json_decode(Conferences_Sympozia::where('short_name', 'ISMEE2021')->first()->scope),
        ]);
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

        $validator = Validator::make([
            'title' => $this->title,
            'abstract' => $this->abstract,
            'keywords' => $this->keywords,
            'authors' => $this->authors,
            'conferences_name' => $this->conferences_name,
            'scope_selected' => $this->scope_selected,
            'presenter' => $this->presenter,
            'presenter_contact' => $this->presenter_contact,
            'manuscript_file' => $this->manuscript_file,
        ], $this->rules);

        if ($validator->fails()) {
            session()->flash('error', 'Please re-check the fields for the errors.');
            $validator->validate();
            return;
        }

        // Handle Manuscript Info
        $manuscript_user = Manuscript_Sympozia::create([
            'user_id' => Auth::user()->id,
            'conferences_id' => Conferences_Sympozia::where('short_name', $this->conferences_name)->first()->id,
            'title' => $this->title,
            'keywords' => $this->keywords,
            'abstract' => $this->abstract,
            'milestone_id' => ManuscriptMilestone_Sympozia::where('code', 'SUB')->first()->id,
            'status_id' => ManuscriptStatus_Sympozia::where('code', 'WRV')->first()->id,
        ]);

        // Handle Manuscript File
        $manuscript_user_filename = $this->conferences_name . '-' . Auth::user()->id . '-' . $manuscript_user->id . '-' . 'manuscript.pdf';
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
            'scope' => $this->scope_selected,
            'presenter' => $this->presenter,
            'contact' => $this->presenter_contact,
            'author_list' => json_encode($this->authors),
        ]);

        $this->resetInput();
        return redirect()->route('author.submission')->with('success', 'Manuscript Submitted Successfully');
    }

    public function resetInput()
    {
        $this->title = null;
        $this->abstract = null;
        $this->keywords = null;
        $this->authors = array();
        $this->author_fullname = null;
        $this->conferences_name = null;
        $this->presenter = null;
        $this->presenter_contact = null;
        $this->manuscript_file = null;
    }

}