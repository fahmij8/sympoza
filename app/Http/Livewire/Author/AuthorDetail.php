<?php

namespace App\Http\Livewire\Author;

use App\Models\Profile_Sympozia;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class AuthorDetail extends Component
{
    public $author_fn;
    public $author_ln;
    public $author_af;
    public $author_ml;
    public $author_ct;
    public $author_co;

    protected $rules = [
        'author_fn' => 'required',
        'author_ln' => 'required',
        'author_af' => 'required',
        'author_ml' => 'required|email',
        'author_ct' => 'required|min:1',
        'author_co' => 'required',
    ];

    protected $validationAttributes = [
        'author_fn' => 'author first name',
        'author_ln' => 'author last name',
        'author_af' => 'author affiliation',
        'author_ml' => 'author email',
        'author_ct' => 'author country',
        'author_co' => 'co-author status',
    ];

    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }

    public function render()
    {
        return view('livewire.author.author-detail');
    }

    public function addAuthor()
    {
        $this->validate();
        $this->emit('grabAuthors', [
            'author_fn' => ucwords($this->author_fn),
            'author_ln' => ucwords($this->author_ln),
            'author_af' => ucwords($this->author_af),
            'author_ml' => strtolower($this->author_ml),
            'author_ct' => $this->author_ct,
            'author_co' => ucwords($this->author_co),
        ]);

        $this->reset([
            'author_fn',
            'author_ln',
            'author_af',
            'author_ml',
            'author_ct',
            'author_co',
        ]);
    }

    public function prefillAuthor()
    {
        $this->author_fn = Profile_Sympozia::where('user_id', Auth::id())->first()->first_name;
        $this->author_ln = Profile_Sympozia::where('user_id', Auth::id())->first()->last_name;
        $this->author_ml = Auth::user()->email;
    }
}