<?php

namespace App\Http\Livewire\Author;

use App\Models\Conferences_Sympozia;
use App\Models\FileType_sympozia;
use App\Models\ManuscriptFile_Sympozia;
use App\Models\ManuscriptMilestone_Sympozia;
use App\Models\Manuscript_Sympozia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Livewire\Component;
use Livewire\WithFileUploads;

class PaperEdit extends Component
{
    use WithFileUploads;
    public $selectedPaper = null;
    public $title;
    public $abstract;
    public $keywords;
    public $authors;
    public $author_fullname;
    public $conferences_name;
    public $scope_selected;
    public $presenter;
    public $presenter_contact;
    public $manuscript_file;
    public $copyright_file;
    public $final_paper_file;

    protected $listeners = [
        'grabAuthors',
    ];

    public $rules = [
        'keywords' => 'required',
        'authors' => 'required',
        'conferences_name' => 'required',
        'scope_selected' => 'required',
        'presenter' => 'required',
        'presenter_contact' => 'required|numeric',
        'manuscript_file' => 'nullable|sometimes|file|max:2048|mimes:pdf',
        'copyright_file' => 'nullable|sometimes|file|max:2048|mimes:pdf',
        'final_paper_file' => 'nullable|sometimes|file|max:2048|mimes:pdf',
    ];

    public function render()
    {
        return view('livewire.author.paper-edit', [
            'conferences' => Conferences_Sympozia::all(),
            'scopes' => json_decode(Conferences_Sympozia::where('short_name', 'ISMEE2021')->first()->scope),
        ]);
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

    public function grabAuthors($authordata)
    {
        array_push($this->authors, $authordata);
    }

    public function removeAuthor($key)
    {
        unset($this->authors[$key]);
    }

    public function mount($SelectedId)
    {
        $this->selectedPaper = auth()->user()->manuscript->where('id', $SelectedId)->first() ?? auth()->user()->manuscript->where('id', request()->route('id'))->first();
        if ($this->selectedPaper == null) {
            abort(404);
        }

        if ($this->selectedPaper->user_id != auth()->user()->id) {
            abort(403);
        }

        if ($this->selectedPaper->status->code == 'IRV') {
            abort(403);
        }

        $this->rules['title'] = 'required|unique:sympozia_manuscript,title,' . $this->selectedPaper->id;
        $this->rules['abstract'] = 'required|unique:sympozia_manuscript,abstract,' . $this->selectedPaper->id;

        $this->title = $this->selectedPaper->title;
        $this->abstract = $this->selectedPaper->abstract;
        $this->keywords = $this->selectedPaper->keywords;
        $this->conferences_name = $this->selectedPaper->conferences->short_name;
        $this->scope_selected = $this->selectedPaper->authors->scope;
        $this->presenter = $this->selectedPaper->authors->presenter;
        $this->presenter_contact = $this->selectedPaper->authors->contact;
        $this->authors = json_decode($this->selectedPaper->authors->author_list, true);
    }

    public function saveManuscript()
    {
        // Validation
        // 1. Validate file first
        // 2. Validate the rest of the fields
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
            'copyright_file' => $this->copyright_file,
            'final_paper_file' => $this->final_paper_file,
        ], $this->rules);

        $fileValidator = $this->fileValidator();

        if ($fileValidator['isFailed']) {
            session()->flash('error', 'Please re-check the fields for the errors.');
            throw ValidationException::withMessages($fileValidator['message']);
        }

        if ($validator->fails()) {
            session()->flash('error', 'Please re-check the fields for the errors.');
            $validator->validate();
            return;
        }

        // File upload and save
        // 1. Check if field is not null
        // 2. Delete the old file on corresponding field
        // 3. Upload the new file
        // 4. Save the file to the database
        $fileType_manuscript = FileType_sympozia::where('code', 'REV')->first()->id;
        $fileType_copyright = FileType_sympozia::where('code', 'COP')->first()->id;
        $fileType_final_paper = FileType_sympozia::where('code', 'FUL')->first()->id;
        if ($this->manuscript_file != null) {
            $this->selectedPaper->file->where('file_type', $fileType_manuscript)->each(function ($file) {
                $file->delete();
            });
            $manuscript_user_filename = $this->conferences_name . '-' . $this->selectedPaper->user_id . '-' . $this->selectedPaper->id . '-' . 'manuscript.pdf';
            $public_filename = $this->manuscript_file->storeAs('submitedManuscript', $manuscript_user_filename, 'public');
            ManuscriptFile_Sympozia::create([
                'manuscript_id' => $this->selectedPaper->id,
                'file_type' => $fileType_manuscript,
                'name' => $public_filename,
            ]);
        }

        if ($this->copyright_file != null) {
            $this->selectedPaper->file->where('file_type', $fileType_copyright)->each(function ($file) {
                $file->delete();
            });
            $manuscript_user_filename = $this->conferences_name . '-' . $this->selectedPaper->user_id . '-' . $this->selectedPaper->id . '-' . 'copyright.pdf';
            $public_filename = $this->copyright_file->storeAs('submitedCopyright', $manuscript_user_filename, 'public');
            ManuscriptFile_Sympozia::create([
                'manuscript_id' => $this->selectedPaper->id,
                'file_type' => $fileType_copyright,
                'name' => $public_filename,
            ]);
        }

        if ($this->final_paper_file != null) {
            $this->selectedPaper->file->where('file_type', $fileType_final_paper)->each(function ($file) {
                $file->delete();
            });
            $manuscript_user_filename = $this->conferences_name . '-' . $this->selectedPaper->user_id . '-' . $this->selectedPaper->id . '-' . 'final.pdf';
            $public_filename = $this->final_paper_file->storeAs('submittedFinal', $manuscript_user_filename, 'public');
            ManuscriptFile_Sympozia::create([
                'manuscript_id' => $this->selectedPaper->id,
                'file_type' => $fileType_final_paper,
                'name' => $public_filename,
            ]);
        }

        $this->selectedPaper->title = $this->title;
        $this->selectedPaper->abstract = $this->abstract;
        $this->selectedPaper->keywords = $this->keywords;
        $this->selectedPaper->conferences_id = Conferences_Sympozia::where('short_name', $this->conferences_name)->first()->id;
        $this->selectedPaper->authors->scope = $this->scope_selected;
        $this->selectedPaper->authors->presenter = $this->presenter;
        $this->selectedPaper->authors->contact = $this->presenter_contact;
        $this->selectedPaper->authors->author_list = json_encode($this->authors);

        $this->selectedPaper->save();
        $this->selectedPaper->authors->save();

        return redirect()->route('author.submission')->with('success', 'Manuscript Saved Successfully');
    }

    public function fileValidator()
    {
        $isFailed = false;
        $message = array();
        $fileType_manuscript = FileType_sympozia::where('code', 'REV')->first()->id;
        $fileType_copyright = FileType_sympozia::where('code', 'COP')->first()->id;
        $fileType_final_paper = FileType_sympozia::where('code', 'FUL')->first()->id;

        if (Manuscript_Sympozia::where('id', $this->selectedPaper->id)->first()->file->where('file_type', $fileType_manuscript)->count() == 0 && $this->manuscript_file == null) {
            $isFailed = true;
            $message['manuscript_file'] = ['Please upload the manuscript file.'];
        }

        if ($this->selectedPaper->milestone_id == ManuscriptMilestone_Sympozia::where('code', 'ACC')->first()->id) {
            if (Manuscript_Sympozia::where('id', $this->selectedPaper->id)->first()->file->where('file_type', $fileType_copyright)->count() == 0 && $this->copyright_file == null) {
                $isFailed = true;
                $message['copyright_file'] = ['Please upload the copyright file.'];
            }
            if (Manuscript_Sympozia::where('id', $this->selectedPaper->id)->first()->file->where('file_type', $fileType_final_paper)->count() == 0 && $this->final_paper_file == null) {
                $isFailed = true;
                $message['final_paper_file'] = ['Please upload the final paper file.'];
            }
        }

        return [
            'isFailed' => $isFailed,
            'message' => $message,
        ];
    }
}